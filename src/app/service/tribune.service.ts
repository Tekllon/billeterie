import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tribune } from '../modele/tribune';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TribuneService {

  constructor(private http: HttpClient) { }

  //Fonction qui va servir a récuperer toutes les tribunes disponibles en BDD

  voirTribunes(): Observable<Tribune[]> {
    return this.http.get<Tribune[]>('http://localhost:8080/tribunes');
  }
}
