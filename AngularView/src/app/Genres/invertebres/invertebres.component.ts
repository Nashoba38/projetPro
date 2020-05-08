import { Component, OnInit } from '@angular/core';
import { SousCategoriesService } from '../sous-categories.service';

@Component({
  selector: 'app-invertebres',
  templateUrl: './invertebres.component.html',
  styleUrls: ['../categories.scss']
})
export class InvertebresComponent implements OnInit {

  arachnides = [];
  coleopteres = [];
  lepidopteres = [];
  orthopteres = [];
  mantopteres = [];
  odonates = [];
  hymenopteres = [];
  nevropteres = [];
  
    constructor(
      private SousCategoriesService: SousCategoriesService
      ) { }
  
    ngOnInit() {
      this.getArachnides();
      this.getColeopteres();
      this.getLepidopteres();
      this.getOrthopteres();
      this.getMantopteres();
      this.getOdonates();
      this.getHymenopteres();
      this.getNevropteres();
    }
  
    getArachnides(): void {
      this.SousCategoriesService.getArachnides().subscribe(data => ((this.arachnides = data)));
    }
    getColeopteres(): void {
      this.SousCategoriesService.getColeopteres().subscribe(data => ((this.coleopteres = data)));
    }
    getLepidopteres(): void {
      this.SousCategoriesService.getLepidopteres().subscribe(data => ((this.lepidopteres = data)));
    }
    getOrthopteres(): void {
      this.SousCategoriesService.getOrthopteres().subscribe(data => ((this.orthopteres = data)));
    }
    getMantopteres(): void {
      this.SousCategoriesService.getMantopteres().subscribe(data => ((this.mantopteres = data)));
    }
    getOdonates(): void {
      this.SousCategoriesService.getOdonates().subscribe(data => ((this.odonates = data)));
    }
    getHymenopteres(): void {
      this.SousCategoriesService.getHymenopteres().subscribe(data => ((this.hymenopteres = data)));
    }
    getNevropteres(): void {
      this.SousCategoriesService.getNevropteres().subscribe(data => ((this.nevropteres = data)));
    }
    
  }