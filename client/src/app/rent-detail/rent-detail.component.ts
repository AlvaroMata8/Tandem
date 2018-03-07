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
  user;
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
      console.log(this.user._id)
      })

   }



  ngOnInit() {
  
    this.route.params.subscribe( params => {
      this.getRentId(params['id']);
        this.getUser(params['id']);
    })
}

  getUser(id) {
  this.userS.get(id).subscribe((user) => {
      this.user = user;
      
    });
}

  addContract(id1,id2,id3){
    console.log(this.user)
    console.log("(.)(.)")
    console.log(this.rent._id)
    console.log(this.rent.owner)
    console.log(id3)
    this.contract.addContract(id1,id2,id3)
    .catch(e => this.error = e)
    .subscribe( status =>{ 
      if(status === 200) this.router.navigate(['/'])
     
  })
}


  getRentId(id){
    this.rentS.getOneRent(id).subscribe((rent => this.rent = rent));

  }
}
