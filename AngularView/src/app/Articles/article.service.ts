import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    const articles = this.http.get<Article[]>('http://localhost:8000/api/Articles');
    return articles;
  }


  getArticle(id: number): Observable<Article[]> {
    const articleById = this.http.get<Article[]>('http://localhost:8000/api/Articles/'+id);
    return articleById;
  }
}
