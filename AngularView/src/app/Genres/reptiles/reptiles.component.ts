import { SousCategoriesService } from '../sous-categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reptiles',
  templateUrl: './reptiles.component.html',
  styleUrls: ['../categories.scss']
})
export class ReptilesComponent implements OnInit {

  ophidiens = [];
  sauriens = [];

  constructor(
    private SousCategoriesService: SousCategoriesService
    ) { }

  ngOnInit() {
    this.getOphidiens();
    this.getSauriens();
  }

  getOphidiens(): void {
    this.SousCategoriesService.getOphidiens().subscribe(data => ((this.ophidiens = data)));
  }
  getSauriens(): void {
    this.SousCategoriesService.getSauriens().subscribe(data => ((this.sauriens = data)));
  }
}
