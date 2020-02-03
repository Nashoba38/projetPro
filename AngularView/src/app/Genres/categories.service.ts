import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getReptiles(): Observable<Categories[]> {
    const reptiles = this.http.get<Categories[]>('http://localhost:8000/api/EspecesByCat/2');
    return reptiles;
  }
  getOiseaux(): Observable<Categories[]> {
    const oiseaux = this.http.get<Categories[]>('http://localhost:8000/api/EspecesByCat/3');
    return oiseaux;
  }
  getMammiferes(): Observable<Categories[]> {
    const mammiferes = this.http.get<Categories[]>('http://localhost:8000/api/EspecesByCat/1');
    return mammiferes;
  }
  getFlores(): Observable<Categories[]> {
    const flores = this.http.get<Categories[]>('http://localhost:8000/api/EspecesByCat/5');
    return flores;
  }
  getAmphibiens(): Observable<Categories[]> {
    const amphibiens = this.http.get<Categories[]>('http://localhost:8000/api/EspecesByCat/4');
    return amphibiens;
  }
  getInvertebres(): Observable<Categories[]> {
    const invertebres = this.http.get<Categories[]>('http://localhost:8000/api/EspecesByCat/6');
    return invertebres;
  }
}
