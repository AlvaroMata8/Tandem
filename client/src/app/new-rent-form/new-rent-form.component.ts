import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

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
  constructor(public session:SessionService) { }

  ngOnInit() {
  }

  createRent(){
    this.session.addRent(this.brand,this.model,this.horsePower,this.city,this.price,this.use,this.recogida,this.entrega,this.img)
    .catch(e => this.error = e)
    .subscribe();
    // console.log(this.brand,this.model)
  }
}
