import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../modele/place';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  voirPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>('http://localhost:8080/places');
  }

  addPlace(place: Place): Observable<any>{
    return this.http.post('http://localhost:8080/places', place);
  }
}
