import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Especes } from './especes';

@Injectable({
  providedIn: 'root'
})
export class EspecesService {

  constructor(private http: HttpClient) { }

  getEspeces(): Observable<Especes[]> {
    const especes = this.http.get<Especes[]>('http://localhost:8000/api/EspecesDetails');
    return especes;
  }


  getEspece(id: number): Observable<Especes[]> {
    const especeById = this.http.get<Especes[]>('http://localhost:8000/api/EspecesDetails/'+id);
    return especeById;
  }

}
