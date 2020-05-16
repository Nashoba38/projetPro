import { Component, OnInit } from '@angular/core';
import "../../../assets/js/script.js";
import { ArticleService } from '../../Articles/article.service';
import { EspecesService } from 'src/app/Especes/especes.service.js';
import { Especes } from '../../Especes/especes';
import { ActivatedRoute } from '@angular/router';
import { Galeries } from '../../Galeries/galeries';
import { GaleriesService } from 'src/app/Galeries/galeries.service.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
    this.getArticle();
    this.getEspeces();
    this.getPhotos();
    setTimeout(() => {
      this.getEspece();
      this.getPhoto();
      console.log(this.photos);
    }, 5000);

  }

  getArticle(): void {
    this.articleService.getArticle(5).subscribe(data => ((this.article = data)));
  }

  getEspeces(): void {
    this.especesService.getEspeces().subscribe(data => ((this.especes = data)));
  }

  getEspece(): void {
    this.isReady = false;
    let id = this.especes.length;
    this.especesService.getEspece(id+2).subscribe(espece => (this.espece = espece));
    this.isReady = true;
  }

  getPhotos() {
    this.galeriesService.getPhotos().subscribe(photo => ((this.photos = photo)));
  }

  getPhoto(): void {
    this.isReady = false;
    let id = this.photos.length;
    this.galeriesService.getPhoto(id).subscribe(image => (this.image = image));
    this.isReady = true;
  }
}
