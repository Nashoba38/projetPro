import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SousCategories } from './sousCategories';

@Injectable({
  providedIn: 'root'
})
export class SousCategoriesService {

  constructor(private http: HttpClient) { }

  getOphidiens(): Observable<SousCategories[]> {
    const ophidiens = this.http.get<SousCategories[]>('http://localhost:8000/api/EspecesBySousCat/1');
    return ophidiens;
  }
  getSauriens(): Observable<SousCategories[]> {
    const sauriens = this.http.get<SousCategories[]>('http://localhost:8000/api/EspecesBySousCat/2');
    return sauriens;
  }
}
