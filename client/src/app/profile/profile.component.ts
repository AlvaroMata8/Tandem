import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  error:string;
  
  constructor( public session:SessionService,private router:Router) { }

  ngOnInit() {
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
