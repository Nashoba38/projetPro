import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Galeries } from '../Galeries/galeries';

@Injectable({
  providedIn: 'root'
})
export class GaleriesService {

  constructor(private http: HttpClient) { }

  // Voir comment virer cette fonction
  getPhotos(): Observable<Galeries[]> {
    const photos = this.http.get<Galeries[]>('http://localhost:8000/api/galerieAll');
    return photos;
  }

}
