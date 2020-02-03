import { CategoriesService } from '../Genres/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  reptiles = [];
  amphibiens = [];
  oiseaux = [];
  mammiferes = [];
  flores = [];
  invertebres = [];

  constructor(
    private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getReptiles();
    this.getAmphibiens();
    this.getOiseaux();
    this.getMammiferes();
    this.getFlores();
    this.getInvertebres();
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
}
