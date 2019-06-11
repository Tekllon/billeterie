import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { HeaderComponent } from './component/header/header.component';
import { TribuneComponent } from './component/tribune/tribune.component';
import { StatutComponent } from './component/statut/statut.component';
import { PlaceComponent } from './component/place/place.component';
import { CompteRenduComponent } from './component/compte-rendu/compte-rendu.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    TribuneComponent,
    StatutComponent,
    PlaceComponent,
    CompteRenduComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
