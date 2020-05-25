import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Galeries } from '../Galeries/galeries';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GaleriesService {

  constructor(private http: HttpClient) { }


  getPhotos(): Observable<Galeries[]> {
    const photos = this.http.get<Galeries[]>(environment.urlBack+'/api/galerieAll');
    return photos;
  }

  getPhoto(id: number): Observable<Galeries[]> {
    const photoById = this.http.get<Galeries[]>(environment.urlBack+'/api/photo/'+id);
    return photoById;
  }

}
