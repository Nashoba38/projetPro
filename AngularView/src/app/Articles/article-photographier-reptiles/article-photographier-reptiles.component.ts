import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-photographier-reptiles',
  templateUrl: './article-photographier-reptiles.component.html',
  styleUrls: ['./article-photographier-reptiles.component.scss']
})
export class ArticlePhotographierReptilesComponent implements OnInit {
  article = null;
  urlBack: string = environment.urlBack;
  
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticle();
    
  }
  
  getArticle(): void { 
    this.articleService.getArticle(2).subscribe(data => (this.article = data));

  }
}
