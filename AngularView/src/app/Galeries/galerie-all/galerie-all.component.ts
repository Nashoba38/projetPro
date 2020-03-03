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

  specie = null;
  especes = [];

  constructor(private especesService: EspecesService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getEspece();
    this.getEspeces();

  }

  getEspece(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.especesService.getEspece(id).subscribe(specie => (this.specie = specie));
  }

  getEspeces(): void {
    this.especesService.getEspeces().subscribe(espece => ((this.especes = espece)));
  }
}


