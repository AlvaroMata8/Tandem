import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { RentService } from '../../services/rent.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-new-rent-form',
  templateUrl: './new-rent-form.component.html',
  styleUrls: ['./new-rent-form.component.css']
})
export class NewRentFormComponent implements OnInit {
  
  latCity: number = 40.472371;
  lngCity: number = -3.682040;
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
  user:object;
  rent:object = {
    brand: '',
    model: '',
    horsePower: '',
    city: '',
    price: '',
    use: '',
    recogida: '',
    entrega: '',
    img: '',
    bikeType:''
  }
  error:string;
  constructor(public rentS:RentService,public session: SessionService, private router: Router,private http:Http) { }

  ngOnInit() {
  }

  createRent(rentObject){
    this.rentS.addRent(rentObject,this.session.getUser())
    .subscribe(
      (rent) =>{
        this.router.navigate(["/"])
        console.log("Rent Created")
      },
     (err) => this.error = err
   );
    
  }
}
