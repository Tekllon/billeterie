import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent} from './component/accueil/accueil.component';
import { PlaceComponent} from './component/place/place.component';
import { StatutComponent} from './component/statut/statut.component';
import { TribuneComponent} from './component/tribune/tribune.component';
import { CompteRenduComponent} from './component/compte-rendu/compte-rendu.component';


const routes: Routes = [
  {path: '', component : AccueilComponent},
  {path: 'tribune', component : TribuneComponent},
  {path: 'statut', component : StatutComponent},
  {path: 'places', component : PlaceComponent},
  {path: 'compteRendu', component : CompteRenduComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
