import { Component, OnInit } from '@angular/core';
import { SousCategoriesService } from '../sous-categories.service';

@Component({
  selector: 'app-amphibiens',
  templateUrl: './amphibiens.component.html',
  styleUrls: ['../categories.scss']
})
export class AmphibiensComponent implements OnInit {

  anoures = [];
  urodeles = [];

  constructor(
    private SousCategoriesService: SousCategoriesService
    ) { }

  ngOnInit() {
    this.getAnoures();
    this.getUrodeles();
  }

  getAnoures(): void {
    this.SousCategoriesService.getAnoures().subscribe(data => ((this.anoures = data)));
  }
  getUrodeles(): void {
    this.SousCategoriesService.getUrodeles().subscribe(data => ((this.urodeles = data)));
  }
}
