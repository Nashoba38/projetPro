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
import { ArticleEthiqueComponent } from './Articles/article-ethique/article-ethique.component';
import { BiographieComponent } from './biographie/biographie.component';
import { ArticlePhotographierReptilesComponent } from './Articles/article-photographier-reptiles/article-photographier-reptiles.component';
import { ArticleSortieHelicoComponent } from './Articles/article-sortie-helico/article-sortie-helico.component';
import { ArticleFleursHiverComponent } from './Articles/article-fleurs-hiver/article-fleurs-hiver.component';


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
  { path: 'articles/1', component: ArticleEthiqueComponent },
  { path: 'articles/2', component: ArticlePhotographierReptilesComponent },
  { path: 'articles/3', component: ArticleSortieHelicoComponent },
  { path: 'articles/7', component: ArticleFleursHiverComponent },
  { path: 'galerie', component: GalerieAllComponent },
  { path: 'register', component: LoginComponent },
  { path: 'biographie', component: BiographieComponent },
  { path: '',component: HomeComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
