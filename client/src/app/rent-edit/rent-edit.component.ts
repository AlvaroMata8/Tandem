import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RentService } from '../../services/rent.service';

@Component({
  selector: 'app-rent-edit',
  templateUrl: './rent-edit.component.html',
  styleUrls: ['./rent-edit.component.css']
})
export class RentEditComponent implements OnInit {
  brand:string;
  model:string;
  horsePower:number;
  city:string;
  price:number;
  use:string;
  recogida:Date;
  entrega:Date;
  img:string;

  rent:any;
  error:string;

  constructor(
    public router:Router,
    private route:ActivatedRoute,
    private rentS:RentService
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params =>{
      this.getRentId(params['id'])
    })
  }

  getRentId(id){
    this.rentS.getOneRent(id)
    .subscribe((rent) => {
      this.rent = rent;
      console.log(this.rent)
    });
  }

  submitForm(id,form){
    console.log(form.value)
    console.log(this.rent._id)
    this.rentS.editRent(this.rent._id, form.value)
    .catch(e => this.error = e)
    .subscribe(status => { if(status === 200) this.router.navigate([`/rent/${this.rent._id}`]) } )
  }

  deleteRent(id){
    console.log('RENT DELETED')
    this.rentS.removeRent(this.rent._id)
      .subscribe(r =>{
        this.router.navigate(['/rentList'])
      })
  }
}
