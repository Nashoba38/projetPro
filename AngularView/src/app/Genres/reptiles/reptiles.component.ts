import { CategoriesService } from '../categories.service';
import { EspecesService } from '../../Especes/especes.service';
import { Component, OnInit } from '@angular/core';

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
    private categoriesService: CategoriesService
    ) { }

  ngOnInit() {
    this.getEspeces();
    this.getReptiles();

  console.log(this.reptiles);
  }

  getEspeces(): void {
    this.especesService.getEspeces().subscribe(data => ((this.photos = data)));
  }

  getReptiles(): void {
    this.categoriesService.getReptiles().subscribe(data => ((this.reptiles = data)));
  }

<<<<<<< HEAD
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.photos, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
=======
  backClicked(): void {
    this._location.back();
  }

  open(index: number):void {
    this._lightbox.open(this.reptiles, index);
  }

  close() :void {
    this._lightbox.close();
  }

>>>>>>> b3d94d1d6b940c8dd9bef1ca6e8d775b4bce83bb
}
