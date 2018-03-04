import { Component, OnInit } from '@angular/core';
import { RentService } from '../../services/rent.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rent-detail',
  templateUrl: './rent-detail.component.html',
  styleUrls: ['./rent-detail.component.css']
})
export class RentDetailComponent implements OnInit {
  rent:any;

  constructor(public rentS:RentService,private route:ActivatedRoute) {
    
   }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.getRentId(params['id']);
  })
}

  getRentId(id){
    this.rentS.getOneRent(id).subscribe((rent => this.rent = rent));

  }
}
