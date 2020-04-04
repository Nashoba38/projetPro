import { CategoriesService } from '../categories.service';
import { SousCategoriesService } from '../sous-categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reptiles',
  templateUrl: './reptiles.component.html',
  styleUrls: ['./reptiles.component.scss']
})
export class ReptilesComponent implements OnInit {

  reptiles = [];
  ophidiens = [];

  constructor(
    private CategoriesService: CategoriesService,
    private SousCategoriesService: SousCategoriesService
    ) { }

  ngOnInit() {
    this.getReptiles();
    this.getOphidiens();
  }

  getReptiles(): void {
    this.CategoriesService.getReptiles().subscribe(data => ((this.reptiles = data)));
  }
  getOphidiens(): void {
    this.SousCategoriesService.getOphidiens().subscribe(data => ((this.ophidiens = data)));
  }
}
