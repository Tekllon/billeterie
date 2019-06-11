import { Component, OnInit } from '@angular/core';
import { Statut } from 'src/app/modele/statut';
import { StatutService } from '../../service/statut.service';


@Component({
  selector: 'app-statut',
  templateUrl: './statut.component.html',
  styleUrls: ['./statut.component.css']
})
export class StatutComponent implements OnInit {
    //On créé un tableau pouvant accueillir les données provenant du backEnd
    
statuts: Statut[] = [];
  constructor(public statutService: StatutService) {
  //On utilise la fonction pour aller demander à l'API
    statutService.voirStatuts().subscribe(allStatuts => {
      this.statuts = allStatuts;
    })
   }

  ngOnInit() {
  }

}
