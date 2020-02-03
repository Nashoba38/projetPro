import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EspecesService } from '../especes.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detail-espece',
  templateUrl: './detail-espece.component.html',
  styleUrls: ['./detail-espece.component.scss']
})
export class DetailEspeceComponent implements OnInit {
 espece = null;

  constructor(
          private especesService: EspecesService,
          private route: ActivatedRoute,
          private location: Location
        ) { }

  ngOnInit() {
    this.getEspece();
  }

  getEspece(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.especesService.getEspece(id).subscribe(espece => (this.espece = espece));
  }

}
