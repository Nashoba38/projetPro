import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { environment } from 'src/environments/environment';
import { Article } from '../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  urlBack: string = environment.urlBack;
  articles: Article[] = [];
  isReady: boolean;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.isReady = false;
    setTimeout(() => {
      this.getArticles();
      this.isReady = true;
    }, 1500);
  }

  getArticles(): void {
    this.articleService.getArticles().subscribe(data => ((this.articles = data)));
  }
}
