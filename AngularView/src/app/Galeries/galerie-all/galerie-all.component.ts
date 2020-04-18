import { Component, OnInit } from '@angular/core';
import '../../../assets/js/script.js';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GaleriesService } from '../galeries.service';
import { FormsModule } from '@angular/forms';
import { Especes } from 'src/app/Especes/especes.js';
import { Categories } from 'src/app/Genres/categories';
import { EspecesService } from 'src/app/Especes/especes.service.js';
import { CategoriesService } from 'src/app/Genres/categories.service';
import { DetailEspeceComponent } from 'src/app/Especes/detail-espece/detail-espece.component.js';
import {Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-galerie-all',
  templateUrl: './galerie-all.component.html',
  styleUrls: ['./galerie-all.component.scss']
})
export class GalerieAllComponent implements OnInit {

  categories = [];
  especes = [];
  photos = [];
  isModalOpen = false;
  modal = undefined;
  currentIndex: number;
  last = false;
  amphiChecked = false;
  floreChecked = false;
  inverteChecked = false;
  mammiChecked = false;
  oiseauChecked = false;
  paysaChecked = false;
  reptiChecked = false;

  franceChecked = false;
  marocChecked = false;
  costaChecked = false;
  madaChecked = false;
  
  searchText;

  constructor(
    private galeriesService: GaleriesService,
    private categoriesService: CategoriesService,
    private especesService: EspecesService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getPhotos();
    this.getEspeces();
    
  }

  getPhotos() {
    this.galeriesService.getPhotos().subscribe(photo => ((this.photos = photo)));
  }
  getEspeces(): void {
    this.especesService.getEspeces().subscribe(data => ((this.especes = data)));
  }

  openModal(i) {
    this.modal = this.photos[i];
    this.currentIndex = i;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  precedent() {
    const btnPrevious = document.getElementsByClassName('previous');
    this.currentIndex--;
    this.modal = this.photos[this.currentIndex]
  }

  suivant() {
    const btnNext = document.getElementsByClassName('next');
    this.currentIndex++;
    this.modal = this.photos[this.currentIndex];
  }
}


