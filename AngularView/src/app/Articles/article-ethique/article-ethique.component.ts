import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-ethique',
  templateUrl: './article-ethique.component.html',
  styleUrls: ['./article-ethique.component.scss']
})
export class ArticleEthiqueComponent implements OnInit {
  article = null;

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void { 
    this.articleService.getArticle(5).subscribe(data => (this.article = data));
  }
}
