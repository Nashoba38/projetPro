import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-fleurs-hiver',
  templateUrl: './article-fleurs-hiver.component.html',
  styleUrls: ['./article-fleurs-hiver.component.scss']
})
export class ArticleFleursHiverComponent implements OnInit {
  article = null;
  urlBack: string = environment.urlBack;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticle()
  }

  getArticle(): void {
    this.articleService.getArticle(6).subscribe(data => (this.article = data));

  }
}
