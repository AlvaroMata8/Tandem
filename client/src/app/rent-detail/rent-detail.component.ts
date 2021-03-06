import { Component, OnInit } from '@angular/core';
import { RentService } from '../../services/rent.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SessionService } from '../../services/session.service';
import { ContractService } from '../../services/contract.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rent-detail',
  templateUrl: './rent-detail.component.html',
  styleUrls: ['./rent-detail.component.css']
})

export class RentDetailComponent implements OnInit {
  rent:any;
 
  user:any;
  error:string;

  constructor(
    public rentS:RentService,
    public userS:UserService,
    private route:ActivatedRoute,
    public router:Router,
    public session:SessionService,
    public contract: ContractService) 
    {
      this.user = this.session.getUser()
      this.session.getUserEvent().subscribe(user => {this.user = user
      })

   }

  ngOnInit() {
      this.route.params.subscribe( params => {
      this.getRentId(params['id']);
        this.rentS.getOneRent(params['id']).subscribe()
        this.getUser(params['id']);
        console.log(this.rent)
    })
}

  getUser(id) {
  this.userS.get(this.user._id).subscribe((user) => {
      this.user = user;
    });
}

  addContract(id1,id2,id3){
    this.contract.addContract(id1,id2,id3)
    .subscribe(
      (ctr) =>{
        this.router.navigate(["/profile",this.user._id])
        console.log("Contract created")
      },
     (err) => this.error = err
   );
  
  }
  errorCb(err) {
    this.error = err;
    this.user = null;
  }

  successCb(user) {
    this.user = user;
    this.error = null;
  }



  getRentId(id){
    this.rentS.getOneRent(id).subscribe((rent) => {
      this.rent = rent});
  }

  remove(id){
    this.rentS.removeRent(this.rent._id).subscribe(r =>{
      console.log('RENT REMOVED')
      this.router.navigate(['/'])})
}
}
