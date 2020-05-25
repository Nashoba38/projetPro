import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SousCategories } from './sousCategories';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SousCategoriesService {

  constructor(private http: HttpClient) { }

  // Sous catégories relatives aux reptiles
  getOphidiens(): Observable<SousCategories[]> {
    const ophidiens = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/1');
    return ophidiens;
  }
  getSauriens(): Observable<SousCategories[]> {
    const sauriens = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/2');
    return sauriens;
  }

  // Sous catégories relatives aux Amphibiens
  getUrodeles(): Observable<SousCategories[]> {
    const urodeles = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/3');
    return urodeles;
  }
  getAnoures(): Observable<SousCategories[]> {
    const anoures = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/4');
    return anoures;
  }

  // Sous catégories relatives aux oiseaux
  getPassereaux(): Observable<SousCategories[]> {
    const passereaux = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/5');
    return passereaux;
  }
  getRapaces(): Observable<SousCategories[]> {
    const rapaces = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/6');
    return rapaces;
  }
  getOiseauxMarins(): Observable<SousCategories[]> {
    const oiseauxMarins = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/7');
    return oiseauxMarins;
  }
  getPalmipedes(): Observable<SousCategories[]> {
    const palmipedes = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/8');
    return palmipedes;
  }
  getEchassiers(): Observable<SousCategories[]> {
    const Echassiers = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/9');
    return Echassiers;
  }

  getGalliformes(): Observable<SousCategories[]> {
    const galliformes = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/11');
    return galliformes;
  }
  getPiciformes(): Observable<SousCategories[]> {
    const piciformes = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/12');
    return piciformes;
  }
  getAutresOiseaux(): Observable<SousCategories[]> {
    const autresOiseaux = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/13');
    return autresOiseaux;
  }

  // Sous catégories relatives aux mammifères
  getCarnivores(): Observable<SousCategories[]> {
    const carnivores = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/14');
    return carnivores;
  }
  getMammiferesMarins(): Observable<SousCategories[]> {
    const mammiferesMarins = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/15');
    return mammiferesMarins;
  }
  getLagomorphes(): Observable<SousCategories[]> {
    const lagomorphes = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/16');
    return lagomorphes;
  }
  getInsectivores(): Observable<SousCategories[]> {
    const insectivores = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/17');
    return insectivores;
  }
  getPrimates(): Observable<SousCategories[]> {
    const primates = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/18');
    return primates;
  }
  getRongeurs(): Observable<SousCategories[]> {
    const rongeurs = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/19');
    return rongeurs;
  }
  getOngules(): Observable<SousCategories[]> {
    const ongules = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/20');
    return ongules;
  }

  // Sous catégories relatives aux mammifères
  getArbres(): Observable<SousCategories[]> {
    const arbres = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/21');
    return arbres;
  }
  getOrchidees(): Observable<SousCategories[]> {
    const orchidees = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/22');
    return orchidees;
  }
  getFleurs(): Observable<SousCategories[]> {
    const fleurs = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/23');
    return fleurs;
  }
  getAutresVegetaux(): Observable<SousCategories[]> {
    const autresVegetaux = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/24');
    return autresVegetaux;
  }

  // Sous catégories relatives aux invertébrés
  getArachnides(): Observable<SousCategories[]> {
    const arachnides = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/25');
    return arachnides;
  }
  getColeopteres(): Observable<SousCategories[]> {
    const coleopteres = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/26');
    return coleopteres;
  }
  getLepidopteres(): Observable<SousCategories[]> {
    const lepidopteres = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/27');
    return lepidopteres;
  }
  getOrthopteres(): Observable<SousCategories[]> {
    const orthopteres = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/28');
    return orthopteres;
  }
  getMantopteres(): Observable<SousCategories[]> {
    const mantopteres = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/29');
    return mantopteres;
  }
  getOdonates(): Observable<SousCategories[]> {
    const odonates = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/30');
    return odonates;
  }
  getHymenopteres(): Observable<SousCategories[]> {
    const hymenopteres = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/31');
    return hymenopteres;
  }
  getNevropteres(): Observable<SousCategories[]> {
    const nevropteres = this.http.get<SousCategories[]>(environment.urlBack+'/api/EspecesBySousCat/32');
    return nevropteres;
  }
}
