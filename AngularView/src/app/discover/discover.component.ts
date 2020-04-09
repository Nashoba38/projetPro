import { CategoriesService } from '../Genres/categories.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})

@NgModule({
  imports: [MatTabsModule]
})

export class DiscoverComponent implements OnInit {

  reptiles = [];
  amphibiens = [];
  oiseaux = [];
  mammiferes = [];
  flores = [];
  invertebres = [];

  reptilesLatin = [];
  amphibiensLatin = [];
  oiseauxLatin = [];
  mammiferesLatin = [];
  floresLatin = [];
  invertebresLatin = [];

  constructor(
    private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getReptiles();
    this.getAmphibiens();
    this.getOiseaux();
    this.getMammiferes();
    this.getFlores();
    this.getInvertebres();

    this.getReptilesLatin();
    this.getAmphibiensLatin();
    this.getOiseauxLatin();
    this.getMammiferesLatin();
    this.getFloresLatin();
    this.getInvertebresLatin();
  }

  getReptiles(): void {
    this.categoriesService.getReptiles().subscribe(data => ((this.reptiles = data)));
  }
  getAmphibiens(): void {
    this.categoriesService.getAmphibiens().subscribe(data => ((this.amphibiens = data)));
  }
  getOiseaux(): void {
    this.categoriesService.getOiseaux().subscribe(data => ((this.oiseaux = data)));
  }
  getMammiferes(): void {
    this.categoriesService.getMammiferes().subscribe(data => ((this.mammiferes = data)));
  }
  getFlores(): void {
    this.categoriesService.getFlores().subscribe(data => ((this.flores = data)));
  }
  getInvertebres(): void {
    this.categoriesService.getInvertebres().subscribe(data => ((this.invertebres = data)));
  }

  // Version noms latins
  getReptilesLatin(): void {
    this.categoriesService.getReptilesLatin().subscribe(data => ((this.reptilesLatin = data)));
  }
  getAmphibiensLatin(): void {
    this.categoriesService.getAmphibiensLatin().subscribe(data => ((this.amphibiensLatin = data)));
  }
  getOiseauxLatin(): void {
    this.categoriesService.getOiseauxLatin().subscribe(data => ((this.oiseauxLatin = data)));
  }
  getMammiferesLatin(): void {
    this.categoriesService.getMammiferesLatin().subscribe(data => ((this.mammiferesLatin = data)));
  }
  getFloresLatin(): void {
    this.categoriesService.getFloresLatin().subscribe(data => ((this.floresLatin = data)));
  }
  getInvertebresLatin(): void {
    this.categoriesService.getInvertebresLatin().subscribe(data => ((this.invertebresLatin = data)));
  }
}
