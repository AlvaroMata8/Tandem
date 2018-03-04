import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  error:string;
  user:any;
  
  constructor( private route:ActivatedRoute,public uS:UserService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.getUserid(params['id']);
  })
}
  getUserid(id){
    this.uS.get(id).subscribe((user) => { this.user = user;})
  }

  // logout(){
  //   this.session.logout()
  //   .catch(e => this.error = e)
  //   .subscribe(
  //   //   ()=>{
  //   //   this.router.navigate(['/'])
  //   // }
  // );
  // }

}
