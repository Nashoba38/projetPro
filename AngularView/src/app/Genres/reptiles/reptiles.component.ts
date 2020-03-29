import { CategoriesService } from '../categories.service';
import { EspecesService } from '../../Especes/especes.service';
import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-reptiles',
  templateUrl: './reptiles.component.html',
  styleUrls: ['./reptiles.component.scss']
})
export class ReptilesComponent implements OnInit {

  photos = [];
  reptiles = [];

  constructor(
    private especesService: EspecesService,
    private categoriesService: CategoriesService,
    private _lightbox: Lightbox) { 
      for (let i = 1; i <= this.reptiles.length; i++) {
        const src ='http://127.0.0.1:8000/uploads/images/espece/'+this.reptiles;
        const caption = 'Image ' + i + ' caption here';
        const album = {
          src: src,
          caption: caption
        };
        this.photos.push(album);
      }
    }

  ngOnInit() {
    this.getEspeces();
    this.getReptiles();
  }

  getEspeces(): void {
    this.especesService.getEspeces().subscribe(data => ((this.photos = data)));
  }

  getReptiles(): void {
    this.categoriesService.getReptiles().subscribe(data => ((this.reptiles = data)));
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.photos, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
