import { Component, OnInit } from '@angular/core';
import "../../../assets/js/script.js";
import {ArticleService } from '../../Articles/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Découvrez la diversité de la faune autour du globe !';
  article = null;
  constructor(    private articleService: ArticleService
    ) { 
  }

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    this.articleService.getArticle(5).subscribe(data => ((this.article = data)));
  }
}
