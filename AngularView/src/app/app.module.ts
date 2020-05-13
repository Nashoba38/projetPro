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
import { GalerieAllComponent } from './Galeries/galerie-all/galerie-all.component';;
import { LoginComponent } from './Structure/login/login.component';
import { LandingPageComponent } from './Structure/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AmphibiensComponent } from './Genres/amphibiens/amphibiens.component';
import { MammiferesComponent } from './Genres/mammiferes/mammiferes.component';
import { OiseauxComponent } from './Genres/oiseaux/oiseaux.component';
import { VegetauxComponent } from './Genres/vegetaux/vegetaux.component';
import { InvertebresComponent } from './Genres/invertebres/invertebres.component';
import { ArticleEthiqueComponent } from './Articles/article-ethique/article-ethique.component';
import { BiographieComponent } from './biographie/biographie.component';



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
    GalerieAllComponent,
    LoginComponent,
    LandingPageComponent,
    AmphibiensComponent,
    MammiferesComponent,
    OiseauxComponent,
    VegetauxComponent,
    InvertebresComponent,
    ArticleEthiqueComponent,
    BiographieComponent
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
    FormsModule,
    MatIconModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
