import { Component, OnInit } from '@angular/core';
import { RentService } from '../../services/rent.service';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent implements OnInit {
  title: string = '';
  
  latCity: number = 40.398828;
  lngCity: number = -3.6889;

  latMad1:number = 40.472371;
  lngMad1:number =-3.682040;

  latMad2:number = 40.341772;
  lngMad2:number =-3.714453;

  latMad3:number = 40.445486;
  lngMad3:number =-3.806707;

  latMad4:number = 40.421365;
  lngMad4:number =-3.620868;

  latGal1:number = 43.334399;
  lngGal1:number =-8.232939;

  latGal2:number = 43.516619;
  lngGal2:number =-8.152839;

  latGal3:number = 43.187381;
  lngGal3:number =-8.764811;

  latGal4:number = 42.912237;
  lngGal4:number =-8.022098;

  rentList:Array<any>

  constructor(public rentS:RentService) {
    this.rentS.getRent().subscribe( list => this.rentList = list)
      
   }

  ngOnInit() {
    
  }

}
