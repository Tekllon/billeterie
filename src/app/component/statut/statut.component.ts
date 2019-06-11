import { Component, OnInit } from '@angular/core';
import { Statut } from 'src/app/modele/statut';
import { StatutService } from '../../service/statut.service';


@Component({
  selector: 'app-statut',
  templateUrl: './statut.component.html',
  styleUrls: ['./statut.component.css']
})
export class StatutComponent implements OnInit {
statuts: Statut[] = [];
  constructor(public statutService: StatutService) {

    statutService.voirStatuts().subscribe(allStatuts => {
      this.statuts = allStatuts;
    })
   }

  ngOnInit() {
  }

}
