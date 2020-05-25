import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from './categories';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getReptiles(): Observable<Categories[]> {
    const reptiles = this.http.get<Categories[]>(environment.urlBack+'/api/EspecesByCat/2');
    return reptiles;
  }
  getOiseaux(): Observable<Categories[]> {
    const oiseaux = this.http.get<Categories[]>(environment.urlBack+'/api/EspecesByCat/3');
    return oiseaux;
  }
  getMammiferes(): Observable<Categories[]> {
    const mammiferes = this.http.get<Categories[]>(environment.urlBack+'/api/EspecesByCat/1');
    return mammiferes;
  }
  getFlores(): Observable<Categories[]> {
    const flores = this.http.get<Categories[]>(environment.urlBack+'/api/EspecesByCat/5');
    return flores;
  }
  getAmphibiens(): Observable<Categories[]> {
    const amphibiens = this.http.get<Categories[]>(environment.urlBack+'/api/EspecesByCat/4');
    return amphibiens;
  }
  getInvertebres(): Observable<Categories[]> {
    const invertebres = this.http.get<Categories[]>(environment.urlBack+'/api/EspecesByCat/6');
    return invertebres;
  }

  // Version latin
  getReptilesLatin(): Observable<Categories[]> {
    const reptilesLatin = this.http.get<Categories[]>(environment.urlBack+'/api/EspecesByLatinCat/2');
    return reptilesLatin;
  }
  getOiseauxLatin(): Observable<Categories[]> {
    const oiseauxLatin = this.http.get<Categories[]>(environment.urlBack+'/api/EspecesByLatinCat/3');
    return oiseauxLatin;
  }
  getMammiferesLatin(): Observable<Categories[]> {
    const mammiferesLatin = this.http.get<Categories[]>(environment.urlBack+'/api/EspecesByLatinCat/1');
    return mammiferesLatin;
  }
  getFloresLatin(): Observable<Categories[]> {
    const floresLatin = this.http.get<Categories[]>(environment.urlBack+'/api/EspecesByLatinCat/5');
    return floresLatin;
  }
  getAmphibiensLatin(): Observable<Categories[]> {
    const amphibiensLatin = this.http.get<Categories[]>(environment.urlBack+'/api/EspecesByLatinCat/4');
    return amphibiensLatin;
  }
  getInvertebresLatin(): Observable<Categories[]> {
    const invertebresLatin = this.http.get<Categories[]>(environment.urlBack+'/api/EspecesByLatinCat/6');
    return invertebresLatin;
  }
}
