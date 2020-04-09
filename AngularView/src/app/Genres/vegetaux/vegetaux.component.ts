import { Component, OnInit } from '@angular/core';
import { SousCategoriesService } from '../sous-categories.service';

@Component({
  selector: 'app-vegetaux',
  templateUrl: './vegetaux.component.html',
  styleUrls: ['./vegetaux.component.scss']
})
export class VegetauxComponent implements OnInit {
  arbres = [];
  orchidees = [];
  fleurs = [];
  autresVegetaux = [];
  
    constructor(
      private SousCategoriesService: SousCategoriesService
      ) { }
  
    ngOnInit() {
      this.getArbres();
      this.getOrchidees();
      this.getFleurs();
      this.getAutresVegetaux();
    }
  
    getArbres(): void {
      this.SousCategoriesService.getArbres().subscribe(data => ((this.arbres = data)));
    }
    getOrchidees(): void {
      this.SousCategoriesService.getOrchidees().subscribe(data => ((this.orchidees = data)));
    }
    getFleurs(): void {
      this.SousCategoriesService.getFleurs().subscribe(data => ((this.fleurs = data)));
    }
    getAutresVegetaux(): void {
      this.SousCategoriesService.getAutresVegetaux().subscribe(data => ((this.autresVegetaux = data)));
    }    
  }
  