import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  urlBack: string = environment.urlBack;
  articles = [];
  presentations: string[] = [
    "Dans cet article, je vais vous expliquer ce qui pour moi fait la différence entre un 'photographe naturaliste' et un 'photographe animalier' ...",
    "Je vais alors partager avec vous quelques informations concernant les reptiles ainsi que différentes techniques éthiques qui existent pour pouvoir les photographier."
  ]

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    setTimeout(() => {
      this.getArticles();
      console.log(this.articles);
    }, 3000);
  }

  getArticles(): void {
    this.articleService.getArticles().subscribe(data => ((this.articles = data)));
  }
}
