import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    const articles = this.http.get<Article[]>(environment.urlBack+'/api/Articles');
    console.log(articles);
    return articles;
    
  }


  getArticle(id: number): Observable<Article[]> {
    const articleById = this.http.get<Article[]>(environment.urlBack+'/api/Articles/'+id);
    return articleById;
  }
}
