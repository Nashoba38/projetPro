import { EspecesService } from 'src/app/Especes/especes.service.js';
import { CategoriesService } from 'src/app/Genres/categories.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Especes } from '../Especes/especes';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})


export class DiscoverComponent implements OnInit {
  urlBack: string = environment.urlBack;
  category: number[] = [];
  especes: Especes[] = [];
  filteredSpecies: Especes[] = [];

  amphiChecked = false;
  floreChecked = false;
  inverteChecked = false;
  mammiChecked = false;
  oiseauChecked = false;
  paysaChecked = false;
  reptiChecked = false;
  allCatChecked = false;

  franceChecked = false;
  marocChecked = false;
  costaChecked = false;
  madaChecked = false;
  allPaysChecked = false;
  erreurMessage: string;

  constructor(
    private especesService: EspecesService) { }

  ngOnInit() {
    this.getEspeces();
  }

  getEspeces(): void {
    this.especesService.getEspeces().subscribe(data => ((this.especes = data)));
  }


  getCheckedValue(category?: number) {
    this.erreurMessage = "";
    if (category != undefined) {
      if (this.category.includes(category)) {
        let index = this.category.indexOf(category);
        this.category.splice(index, 1);
      } else {
        this.category.push(category)
      }
    }

    this.filteredSpecies = [];

    for (let index = 0; index < this.especes.length; index++) {
      if (this.displayChecked(this.especes[index])) {
        this.filteredSpecies.push(this.especes[index])
      }
    }

    if (this.filteredSpecies.length === 0 && this.category.length !== 0) {
      this.erreurMessage = "Il n'y a pas encore de fiche qui correspond à cette espèce."
    }

    console.log(this.filteredSpecies);
  }

  displayChecked(espece: Especes) {
    if (this.category.length === 0) {
      return true;
    } else if (this.category.includes(espece.category)) {
      return true;
    } else {
      return false;
    }
  }

  onSearch(event) {
    this.erreurMessage = "";
    const searchValue = event.target.value;
    this.filteredSpecies = [];

    for (let i = 0; i < this.especes.length; i++) {
      const elem = this.especes[i];
      if (this.displayChecked(this.especes[i]) && elem.NomFrancais.toLowerCase().includes(searchValue.toLowerCase())) {
        this.filteredSpecies.push(elem);
      } else if (this.displayChecked(this.especes[i]) && elem.NomFrancais.toLowerCase().includes(searchValue.toLowerCase())) {
        this.filteredSpecies.push(elem);
      }

      console.log(this.filteredSpecies);
    }
    if (this.filteredSpecies.length === 0) {
      this.erreurMessage = "Il n'y a pas encore de fiches qui correspondent à ces critères."
    }
  }
}

