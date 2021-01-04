import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-sortie-helico',
  templateUrl: './article-sortie-helico.component.html',
  styleUrls: ['./article-sortie-helico.component.scss']
})
export class ArticleSortieHelicoComponent implements OnInit {
  article = null;
  urlBack: string = environment.urlBack;
  
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticle();
    
  }
  
  getArticle(): void { 
    this.articleService.getArticle(3).subscribe(data => (this.article = data));

  }

}
