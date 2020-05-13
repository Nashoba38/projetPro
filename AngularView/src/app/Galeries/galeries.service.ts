import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Galeries } from '../Galeries/galeries';

@Injectable({
  providedIn: 'root'
})
export class GaleriesService {

  constructor(private http: HttpClient) { }


  getPhotos(): Observable<Galeries[]> {
    const photos = this.http.get<Galeries[]>('http://localhost:8000/api/galerieAll');
    return photos;
  }

  getPhoto(id: number): Observable<Galeries[]> {
    const photoById = this.http.get<Galeries[]>('http://localhost:8000/api/photo/'+id);
    return photoById;
  }

}
