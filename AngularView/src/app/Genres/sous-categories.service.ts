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
  getUrodeles(): Observable<SousCategories[]> {
    const urodeles = this.http.get<SousCategories[]>('http://localhost:8000/api/EspecesBySousCat/3');
    return urodeles;
  }
  getAnoures(): Observable<SousCategories[]> {
    const anoures = this.http.get<SousCategories[]>('http://localhost:8000/api/EspecesBySousCat/4');
    return anoures;
  }

  getPassereaux(): Observable<SousCategories[]> {
    const passereaux = this.http.get<SousCategories[]>('http://localhost:8000/api/EspecesBySousCat/5');
    return passereaux;
  }
  getRapaces(): Observable<SousCategories[]> {
    const rapaces = this.http.get<SousCategories[]>('http://localhost:8000/api/EspecesBySousCat/6');
    return rapaces;
  }
  getOiseauxMarins(): Observable<SousCategories[]> {
    const oiseauxMarins = this.http.get<SousCategories[]>('http://localhost:8000/api/EspecesBySousCat/7');
    return oiseauxMarins;
  }
  getPalmipedes(): Observable<SousCategories[]> {
    const palmipedes = this.http.get<SousCategories[]>('http://localhost:8000/api/EspecesBySousCat/8');
    return palmipedes;
  }
  getGrandEchassiers(): Observable<SousCategories[]> {
    const grandEchassiers = this.http.get<SousCategories[]>('http://localhost:8000/api/EspecesBySousCat/9');
    return grandEchassiers;
  }
  getPetitEchassiers(): Observable<SousCategories[]> {
    const petitEchassiers = this.http.get<SousCategories[]>('http://localhost:8000/api/EspecesBySousCat/10');
    return petitEchassiers;
  }
  getGalliformes(): Observable<SousCategories[]> {
    const galliformes = this.http.get<SousCategories[]>('http://localhost:8000/api/EspecesBySousCat/11');
    return galliformes;
  }
  getAutresOiseaux(): Observable<SousCategories[]> {
    const autresOiseaux = this.http.get<SousCategories[]>('http://localhost:8000/api/EspecesBySousCat/12');
    return autresOiseaux;
  }
}
