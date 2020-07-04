import { Component, OnInit } from '@angular/core';
import "../../../assets/js/script.js";
import { ArticleService } from '../../Articles/article.service';
import { EspecesService } from 'src/app/Especes/especes.service.js';
import { Especes } from '../../Especes/especes';
import { ActivatedRoute } from '@angular/router';
import { Galeries } from '../../Galeries/galeries';
import { GaleriesService } from 'src/app/Galeries/galeries.service.js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  urlBack: string = environment.urlBack;
  title = 'Découvrez la diversité de la faune autour du globe !';
  article = null;
  especes: Especes[] = [];
  photos: Galeries[] = [];
  espece = null;
  image = null;
  lastId = null;
  isReady = false;

  constructor(
    private articleService: ArticleService,
    private especesService: EspecesService,
    private galeriesService: GaleriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getEspeces();
    this.getPhotos();

    setTimeout(() => {

      this.getArticle();
      this.getEspece();
      this.getPhoto();
    }, 5000);


  }

  getArticle() {
    this.articleService.getArticle(5).subscribe(data => ((this.article = data)));
    this.isReady = true;
  }

  getEspeces() {
    this.especesService.getEspeces().subscribe(data => ((this.especes = data)));
  }

  getEspece() {
    let numero = this.especes.length +2;
    this.especesService.getEspece(numero).subscribe(espece => (this.espece = espece));
    this.isReady = true;
  }

  getPhotos() {
    this.galeriesService.getPhotos().subscribe(photo => ((this.photos = photo)));
  }

  getPhoto() {
    let numero = this.photos.length +1;
    console.log(numero);
    this.galeriesService.getPhoto(numero).subscribe(image => (this.image = image));
    this.isReady = true;
    
  }
}
