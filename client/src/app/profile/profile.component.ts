import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  error:string;
  user:any;
  rent:any;
  
  constructor( private route:ActivatedRoute,public session:SessionService, public uS:UserService,private router:Router,public contract:ContractService) { 
    this.user = this.session.getUser()
    this.session.getUserEvent().subscribe(user => this.user = user)
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.getUserid(params['id']);
      this.contract.getOneContract(params['id']).subscribe( a => this.rent=a)
    })
  }

  getUserid(id){  
    this.uS.get(id).subscribe((user) => { this.user = user;})
  }

  deleteUser(id){
    console.log('USER DELETED')
    this.uS.removeUser(this.user._id)
      .subscribe(r =>{
        this.router.navigate(['/'])
      })
  }

  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe(
    //   ()=>{
    //   this.router.navigate(['/'])
    // }
  );
  }

}
