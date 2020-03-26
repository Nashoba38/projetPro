import { CategoriesService } from '../categories.service';
import { EspecesService } from '../../Especes/especes.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
    private _location: Location,
    private _lightbox: Lightbox) { }

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

  backClicked(): void {
    this._location.back();
  }

  open(index: number):void {
    this._lightbox.open(this.reptiles, index);
  }

  close() :void {
    this._lightbox.close();
  }

}
