import { Component, OnInit } from '@angular/core';
import { EspecesService } from '../../Especes/especes.service';
import '../../../assets/js/script.js';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-galerie-all',
  templateUrl: './galerie-all.component.html',
  styleUrls: ['./galerie-all.component.scss']
})
export class GalerieAllComponent implements OnInit {

  especes = [];
  isModalOpen = false;
  modal = undefined;
  currentIndex: number;
  last = false;


  constructor(private especesService: EspecesService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getEspeces();

  }

  async getEspeces() {
    this.especesService.getEspeces().subscribe(espece => ((this.especes = espece)));
  }

  openModal(i) {
    this.modal = this.especes[i];
    this.currentIndex = i;
    this.isModalOpen = true;

  }

  closeModal() {
    this.isModalOpen = false;
  }

  precedent() {
    const btnPrevious = document.getElementsByClassName('previous');
    this.currentIndex--;
    this.modal = this.especes[this.currentIndex]
  }

  suivant() {
    const btnNext = document.getElementsByClassName('next');
    this.currentIndex++;
    this.modal = this.especes[this.currentIndex];
    

    // console.log(this.modal);
    // console.log(this.especes.length);
  }


  // imageModale() {
  //   this.especes.forEach(element => {
  //     this.especes.find()
  //   });
  //     //commandes
  // }
}


