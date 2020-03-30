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

}
