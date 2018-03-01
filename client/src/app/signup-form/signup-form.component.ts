import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  username:string;
  password:string;
  name:string;
  lastName:string;
  userImage:string;
  license:string;
  city:string;

  error:string;
  
  constructor(public session:SessionService,private router:Router) { }

  ngOnInit() {
  }

  signup(){
    this.session.signup(this.username,this.password,this.name,this.lastName,this.userImage,this.license,this.city)
    .catch(e => this.error = e)
    .subscribe(
      (user) =>{
        this.router.navigate(['/newRent'])
      }
    );
  }

  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe();
  }
}
