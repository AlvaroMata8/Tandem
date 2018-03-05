import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { RentService } from '../../services/rent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-rent-form',
  templateUrl: './new-rent-form.component.html',
  styleUrls: ['./new-rent-form.component.css']
})
export class NewRentFormComponent implements OnInit {
  
  brand:string;
  model:string;
  horsePower:number;
  city:string;
  price:number;
  use:string;
  recogida:Date;
  entrega:Date;
  img:string;
  error:string;

  constructor(public rentS:RentService, private router: Router) { }

  ngOnInit() {
  }

  createRent(){
    this.rentS.addRent(this.brand,this.model,this.horsePower,this.city,this.price,this.use,this.recogida,this.entrega,this.img)
    .catch(e => this.error = e)
    .subscribe(status =>{ if(status === 200) this.router.navigate(['/rentList'])
    });
  }
}
