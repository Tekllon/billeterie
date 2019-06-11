import { Component, OnInit } from '@angular/core';
import { Tribune } from 'src/app/modele/tribune';
import { TribuneService } from 'src/app/service/tribune.service';


@Component({
  selector: 'app-tribune',
  templateUrl: './tribune.component.html',
  styleUrls: ['./tribune.component.css']
})


export class TribuneComponent implements OnInit {
tribunes: Tribune[] = [];
  constructor(public tribuneService: TribuneService) { 

    tribuneService.voirTribunes().subscribe(all_tribunes => {
      this.tribunes = all_tribunes;
    });
  }

  ngOnInit() {
  }

}
