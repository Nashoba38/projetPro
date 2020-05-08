import { Component, OnInit } from '@angular/core';
import { SousCategoriesService } from '../sous-categories.service';

@Component({
  selector: 'app-oiseaux',
  templateUrl: './oiseaux.component.html',
  styleUrls: ['../categories.scss']
})
export class OiseauxComponent implements OnInit {

passereaux = [];
rapaces = [];
oiseauxMarins = [];
palmipedes = [];
echassiers = [];
galliformes = [];
piciformes = [];
autresOiseaux = [];

  constructor(
    private SousCategoriesService: SousCategoriesService
    ) { }

  ngOnInit() {
    this.getPassereaux();
    this.getRapaces();
    this.getOiseauxMarins();
    this.getPalmipedes();
    this.getEchassiers();
    this.getGalliformes();
    this.getPiciformes();
    this.getAutresOiseaux();
  }

  getPassereaux(): void {
    this.SousCategoriesService.getPassereaux().subscribe(data => ((this.passereaux = data)));
  }
  getRapaces(): void {
    this.SousCategoriesService.getRapaces().subscribe(data => ((this.rapaces = data)));
  }
  getOiseauxMarins(): void {
    this.SousCategoriesService.getOiseauxMarins().subscribe(data => ((this.oiseauxMarins = data)));
  }
  getPalmipedes(): void {
    this.SousCategoriesService.getPalmipedes().subscribe(data => ((this.palmipedes = data)));
  }
  getEchassiers(): void {
    this.SousCategoriesService.getEchassiers().subscribe(data => ((this.echassiers = data)));
  }
  getGalliformes(): void {
    this.SousCategoriesService.getGalliformes().subscribe(data => ((this.galliformes = data)));
  }
  getPiciformes(): void {
    this.SousCategoriesService.getPiciformes().subscribe(data => ((this.piciformes = data)));
  }
  getAutresOiseaux(): void {
    this.SousCategoriesService.getAutresOiseaux().subscribe(data => ((this.autresOiseaux = data)));
  }
}
