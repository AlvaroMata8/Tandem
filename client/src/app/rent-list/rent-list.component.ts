import { Component, OnInit } from '@angular/core';
import { RentService } from '../../services/rent.service';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  rentList:Array<any>

  constructor(public rentS:RentService) {
    this.rentS.getRent().subscribe( list => this.rentList = list)
   }

  ngOnInit() {
    
  }

}
