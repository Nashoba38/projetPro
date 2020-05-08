import { Component, OnInit } from '@angular/core';
import { SousCategoriesService } from '../sous-categories.service';

@Component({
  selector: 'app-mammiferes',
  templateUrl: './mammiferes.component.html',
  styleUrls: ['../categories.scss']
})
export class MammiferesComponent implements OnInit {

  carnivores = [];
  mammiferesMarins = [];
  lagomorphes = [];
  insectivores = [];
  primates = [];
  rongeurs = [];
  ongules = [];
  
    constructor(
      private SousCategoriesService: SousCategoriesService
      ) { }
  
    ngOnInit() {
      this.getCarnivores();
      this.getMammiferesMarins();
      this.getLagomorphes();
      this.getInsectivores();
      this.getPrimates();
      this.getRongeurs();
      this.getOngules();
    }
  
    getCarnivores(): void {
      this.SousCategoriesService.getCarnivores().subscribe(data => ((this.carnivores = data)));
    }
    getMammiferesMarins(): void {
      this.SousCategoriesService.getMammiferesMarins().subscribe(data => ((this.mammiferesMarins = data)));
    }
    getLagomorphes(): void {
      this.SousCategoriesService.getLagomorphes().subscribe(data => ((this.lagomorphes = data)));
    }
    getInsectivores(): void {
      this.SousCategoriesService.getInsectivores().subscribe(data => ((this.insectivores = data)));
    }
    getPrimates(): void {
      this.SousCategoriesService.getPrimates().subscribe(data => ((this.primates = data)));
    }
    getRongeurs(): void {
      this.SousCategoriesService.getRongeurs().subscribe(data => ((this.rongeurs = data)));
    }
    getOngules(): void {
      this.SousCategoriesService.getOngules().subscribe(data => ((this.ongules = data)));
    }
    
  }
  