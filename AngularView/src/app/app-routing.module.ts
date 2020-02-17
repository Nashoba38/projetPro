import { LoginComponent } from './Structure/login/login.component';
import { GalerieAllComponent } from './Galeries/galerie-all/galerie-all.component';
import { ArticlesComponent } from './Articles/articles/articles.component';
import { ReptilesComponent } from './Genres/reptiles/reptiles.component';
import { DetailEspeceComponent } from './Especes/detail-espece/detail-espece.component';
import { DiscoverComponent } from './discover/discover.component';
import { HomeComponent } from './Structure/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeEspecesComponent } from './Especes/liste-especes/liste-especes.component';


const routes: Routes = [
  { path: 'liste', component: ListeEspecesComponent },
  { path: '', component: HomeComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'detailEspece/:id', component: DetailEspeceComponent },
  { path: 'EspecesByCat/2', component: ReptilesComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'galerie', component: GalerieAllComponent },
  { path: 'register', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
