import { Component, OnInit } from '@angular/core';
import '../../../assets/js/script.js';
import { GaleriesService } from '../galeries.service';
import { EspecesService } from 'src/app/Especes/especes.service.js';
import { Galeries } from '../galeries.js';
import { environment } from 'src/environments/environment.js';


@Component({
  selector: 'app-galerie-all',
  templateUrl: './galerie-all.component.html',
  styleUrls: ['./galerie-all.component.scss']
})
export class GalerieAllComponent implements OnInit {
  urlBack: string = environment.urlBack;

  category: number[] = [];
  pays: number[] = [];
  espece: string[] = [];
  especes = [];
  photos: Galeries[] = [];
  isModalOpen = false;
  modal = undefined;
  currentIndex: number;
  last = false;

  filteredPhotos: Galeries[] = [];

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
  isReady: boolean;

  searchText;

  constructor(
    private galeriesService: GaleriesService,
    private especesService: EspecesService) { }

  ngOnInit() {
    this.isReady = false;
    setTimeout(() => {
      this.getPhotos();
      this.getEspeces();
      this.isReady = true;
    }, 3000);
  }

  getPhotos() {
    this.galeriesService.getPhotos().subscribe(photo => ((this.photos = photo)));
  }
  getEspeces(): void {
    this.especesService.getEspeces().subscribe(data => ((this.especes = data)));
  }

  openModal(i) {
    if (this.filteredPhotos.length > 0) {
      this.modal = this.filteredPhotos[i];
      this.currentIndex = i;
      this.isModalOpen = true;
    } else if (this.filteredPhotos.length == 0) {
      this.modal = this.photos[i];
      this.currentIndex = i;
      this.isModalOpen = true;
    }
  }

  closeModal() {
    this.isModalOpen = false;
  }

  precedent() {
    const btnPrevious = document.getElementsByClassName('previous');
    if (this.filteredPhotos.length > 0) {
      this.currentIndex--;
      this.modal = this.filteredPhotos[this.currentIndex];
    } else if (this.filteredPhotos.length == 0) {
      this.currentIndex--;
      this.modal = this.photos[this.currentIndex];
    }
  }

  suivant() {
    const btnNext = document.getElementsByClassName('next');
    if (this.filteredPhotos.length > 0) {
      this.currentIndex++;
      this.modal = this.filteredPhotos[this.currentIndex];
    } else if (this.filteredPhotos.length == 0) {
      this.currentIndex++;
      this.modal = this.photos[this.currentIndex];
    }
  }

  getCheckedValue(category?: number, pays?: number) {
    this.erreurMessage = "";
    if (category != undefined) {
      if (this.category.includes(category)) {
        let index = this.category.indexOf(category);
        this.category.splice(index, 1);
      } else {
        this.category.push(category)
      }
    }
    if (pays != undefined) {
      if (this.pays.includes(pays)) {
        let i = this.pays.indexOf(pays);
        this.pays.splice(i, 1);
      } else {
        this.pays.push(pays)
      }
    }

    this.filteredPhotos = [];

    for (let index = 0; index < this.photos.length; index++) {
      if (this.displayChecked(this.photos[index])) {
        this.filteredPhotos.push(this.photos[index])
      }
    }

    if (this.filteredPhotos.length === 0 && this.category.length !== 0 && this.pays.length !== 0) {
      this.erreurMessage = "Il n'y a pas encore de photos qui correspondent à ces critères."
    }
  }


  displayChecked(photo: Galeries) {
    for (let i = 0; i < photo.pays.length; i++) {
      if (this.pays.includes(photo.pays[i]) && this.category.length === 0) {
        return true;
      } else if (this.pays.includes(photo.pays[i]) && this.category.includes(photo.category)) {
        return true;
      }
    }
    if (this.pays.length === 0 && this.category.length === 0) {
      return true;
    } else if (this.category.includes(photo.category) && this.pays.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  onSearch(event) {
    this.erreurMessage = "";
    const searchValue = event.target.value;
    this.filteredPhotos = [];

    for (let i = 0; i < this.photos.length; i++) {
      const elem = this.photos[i];
      if (this.displayChecked(this.photos[i]) && elem.nom.toLowerCase().includes(searchValue.toLowerCase())) {
        this.filteredPhotos.push(elem);
      } else if (this.displayChecked(this.photos[i]) && elem.nomLatin.toLowerCase().includes(searchValue.toLowerCase())) {
        this.filteredPhotos.push(elem);
      }

    }
    if (this.filteredPhotos.length === 0) {
      this.erreurMessage = "Il n'y a pas encore de photos qui correspondent à ces critères."
    }
  }
}
