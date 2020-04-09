import { LandingPageComponent } from './Structure/landing-page/landing-page.component';
import { LoginComponent } from './Structure/login/login.component';
import { GalerieAllComponent } from './Galeries/galerie-all/galerie-all.component';
import { ArticlesComponent } from './Articles/articles/articles.component';
import { ReptilesComponent } from './Genres/reptiles/reptiles.component';
import { MammiferesComponent } from './Genres/mammiferes/mammiferes.component';
import { AmphibiensComponent } from './Genres/amphibiens/amphibiens.component';
import { OiseauxComponent } from './Genres/oiseaux/oiseaux.component';
import { DetailEspeceComponent } from './Especes/detail-espece/detail-espece.component';
import { DiscoverComponent } from './discover/discover.component';
import { HomeComponent } from './Structure/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeEspecesComponent } from './Especes/liste-especes/liste-especes.component';
import { VegetauxComponent } from './Genres/vegetaux/vegetaux.component';
import { InvertebresComponent } from './Genres/invertebres/invertebres.component';


const routes: Routes = [
  { path: 'liste', component: ListeEspecesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'detailEspece/:id', component: DetailEspeceComponent },
  { path: 'discover/EspecesByCat/1', component: MammiferesComponent },
  { path: 'discover/EspecesByCat/2', component: ReptilesComponent },
  { path: 'discover/EspecesByCat/3', component: OiseauxComponent },
  { path: 'discover/EspecesByCat/4', component: AmphibiensComponent },
  { path: 'discover/EspecesByCat/5', component: VegetauxComponent },
  { path: 'discover/EspecesByCat/6', component: InvertebresComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'galerie', component: GalerieAllComponent },
  { path: 'register', component: LoginComponent },
  { path: '', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
