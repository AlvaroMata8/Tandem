import { Component, OnInit } from '@angular/core';
import { RentService } from '../../services/rent.service';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent implements OnInit {
  title: string = '';
  lat: number = 40.47237;
  lng: number = -3.682040;
  rentList:Array<any>

  constructor(public rentS:RentService) {
    this.rentS.getRent().subscribe( list => this.rentList = list)
   }

  ngOnInit() {
    
  }

}
