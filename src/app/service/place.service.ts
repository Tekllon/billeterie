import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../modele/place';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  //Fonction qui va servir a récuperer toutes les places disponibles en BDD
  voirPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>('http://localhost:8080/places');
  }

  //Fonction qui va servir a ajouter une place à la base de données
  addPlace(place: Place): Observable<any>{
    return this.http.post('http://localhost:8080/places', place);
  }
}
