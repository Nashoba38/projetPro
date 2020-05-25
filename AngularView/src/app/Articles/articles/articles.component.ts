import { Component, OnInit } from '@angular/core';
import {ArticleService } from '../article.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  urlBack: string = environment.urlBack;
  articles = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles().subscribe(data => ((this.articles = data)));
  }
}
