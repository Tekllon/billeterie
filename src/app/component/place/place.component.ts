import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/modele/place';
import { PlaceService } from 'src/app/service/place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})

export class PlaceComponent implements OnInit {
places: Place[] =[];
  constructor(public placeService: PlaceService) {
    placeService.voirPlaces().subscribe(AllPlaces =>{
      this.places = AllPlaces;
    })
   }

  ngOnInit() {
  }

}
