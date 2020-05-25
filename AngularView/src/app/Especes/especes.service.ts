import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Especes } from './especes';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspecesService {

  constructor(private http: HttpClient) { }

  getEspeces(): Observable<Especes[]> {
    const especes = this.http.get<Especes[]>(environment.urlBack+'/api/EspecesDetails');
    return especes;
  }


  getEspece(id: number): Observable<Especes[]> {
    const especeById = this.http.get<Especes[]>(environment.urlBack+'/api/EspecesDetails/'+id);
    return especeById;
  }

}
