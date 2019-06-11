import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statut } from '../modele/statut';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StatutService {

  constructor(private http: HttpClient) { }


  voirStatuts(): Observable<Statut[]> {
    return this.http.get<Statut[]>('http://localhost:8080/statuts');
  }
}
