import { Component, OnInit } from '@angular/core';
import { SousCategoriesService } from '../sous-categories.service';

@Component({
  selector: 'app-oiseaux',
  templateUrl: './oiseaux.component.html',
  styleUrls: ['./oiseaux.component.scss']
})
export class OiseauxComponent implements OnInit {

passereaux = [];
rapaces = [];
oiseauxMarins = [];
palmipedes = [];
grandEchassiers = [];
petitEchassiers = [];
galliformes = [];
autresOiseaux = [];

  constructor(
    private SousCategoriesService: SousCategoriesService
    ) { }

  ngOnInit() {
    this.getPassereaux();
    this.getRapaces();
    this.getOiseauxMarins();
    this.getPalmipedes();
    this.getGrandEchassiers();
    this.getPetitEchassiers();
    this.getGalliformes();
    this.getAutresOiseaux();
  }

  getPassereaux(): void {
    this.SousCategoriesService.getPassereaux().subscribe(data => ((this.passereaux = data)));
  }
  getRapaces(): void {
    this.SousCategoriesService.getRapaces().subscribe(data => ((this.rapaces = data)));
  }
  getOiseauxMarins(): void {
    this.SousCategoriesService.getPassereaux().subscribe(data => ((this.oiseauxMarins = data)));
  }
  getPalmipedes(): void {
    this.SousCategoriesService.getPalmipedes().subscribe(data => ((this.palmipedes = data)));
  }
  getGrandEchassiers(): void {
    this.SousCategoriesService.getGrandEchassiers().subscribe(data => ((this.grandEchassiers = data)));
  }
  getPetitEchassiers(): void {
    this.SousCategoriesService.getPetitEchassiers().subscribe(data => ((this.petitEchassiers = data)));
  }
  getGalliformes(): void {
    this.SousCategoriesService.getGalliformes().subscribe(data => ((this.galliformes = data)));
  }
  getAutresOiseaux(): void {
    this.SousCategoriesService.getAutresOiseaux().subscribe(data => ((this.autresOiseaux = data)));
  }
}
