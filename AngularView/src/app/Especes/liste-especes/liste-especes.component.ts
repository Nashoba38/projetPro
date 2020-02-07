import { Component, OnInit } from '@angular/core';
import { EspecesService } from '../especes.service';

@Component({
  selector: 'app-liste-especes',
  templateUrl: './liste-especes.component.html',
  styleUrls: ['./liste-especes.component.scss']
})
export class ListeEspecesComponent implements OnInit {
  especes = [];

  constructor( private especesService: EspecesService) { }

  ngOnInit() {
    this.getEspeces();
  }

  getEspeces(): void {
    this.especesService.getEspeces().subscribe(data => ((this.especes = data)));
  }
}
