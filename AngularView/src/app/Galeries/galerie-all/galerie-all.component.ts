import { Component, OnInit } from '@angular/core';
import { EspecesService } from '../../Especes/especes.service';
import '../../../assets/js/script.js';

@Component({
  selector: 'app-galerie-all',
  templateUrl: './galerie-all.component.html',
  styleUrls: ['./galerie-all.component.scss']
})
export class GalerieAllComponent implements OnInit {

  photos = [];

  constructor(private especesService: EspecesService) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos(): void {
    this.especesService.getPhotos().subscribe(data => ((this.photos = data)));
  }

}
