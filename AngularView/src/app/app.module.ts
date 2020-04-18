import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeEspecesComponent } from './Especes/liste-especes/liste-especes.component';
import { MenuComponent } from './Structure/menu/menu.component';
import { HomeComponent } from './Structure/home/home.component';
import { DiscoverComponent } from './discover/discover.component';
import { DetailEspeceComponent } from './Especes/detail-espece/detail-espece.component';
import { ReptilesComponent } from './Genres/reptiles/reptiles.component';
import { ArticlesComponent } from './Articles/articles/articles.component';
import { GalerieReptilesComponent } from './Galeries/galerie-reptiles/galerie-reptiles.component';
import { GalerieOiseauxComponent } from './Galeries/galerie-oiseaux/galerie-oiseaux.component';
import { GalerieMammiferesComponent } from './Galeries/galerie-mammiferes/galerie-mammiferes.component';
import { GalerieInvertebresComponent } from './Galeries/galerie-invertebres/galerie-invertebres.component';
import { GalerieFloreComponent } from './Galeries/galerie-flore/galerie-flore.component';
import { GaleriePaysagesComponent } from './Galeries/galerie-paysages/galerie-paysages.component';
import { GalerieAmphibiensComponent } from './Galeries/galerie-amphibiens/galerie-amphibiens.component';
import { GalerieAllComponent } from './Galeries/galerie-all/galerie-all.component';;
import { LoginComponent } from './Structure/login/login.component';
import { LandingPageComponent } from './Structure/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AmphibiensComponent } from './Genres/amphibiens/amphibiens.component';
import { MammiferesComponent } from './Genres/mammiferes/mammiferes.component';
import { OiseauxComponent } from './Genres/oiseaux/oiseaux.component';
import { VegetauxComponent } from './Genres/vegetaux/vegetaux.component';
import { InvertebresComponent } from './Genres/invertebres/invertebres.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeEspecesComponent,
    MenuComponent,
    HomeComponent,
    DiscoverComponent,
    DetailEspeceComponent,
    ReptilesComponent,
    ArticlesComponent,
    GalerieReptilesComponent,
    GalerieOiseauxComponent,
    GalerieMammiferesComponent,
    GalerieInvertebresComponent,
    GalerieFloreComponent,
    GaleriePaysagesComponent,
    GalerieAmphibiensComponent,
    GalerieAllComponent,
    LoginComponent,
    LandingPageComponent,
    AmphibiensComponent,
    MammiferesComponent,
    OiseauxComponent,
    VegetauxComponent,
    InvertebresComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
