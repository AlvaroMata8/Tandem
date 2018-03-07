import { Component, OnInit } from "@angular/core";
import { SessionService } from "../../services/session.service";
import { Router } from "@angular/router";
import { Action } from "rxjs/scheduler/Action";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  error: string;
  user:any;
  constructor(public session: SessionService,public uS:UserService, private router:Router,private route:ActivatedRoute) {
    
    this.user = this.session.getUser()
    this.session.getUserEvent().subscribe(user =>{
       this.user = user
       console.log(user)
      })
  }

  ngOnInit() {
  }

  getUserid(id){  
    this.uS.get(id).subscribe((user) => { this.user = user;})
  }
  logout() {
    this.session.logout()
      .catch(e => (this.error = e))
      .subscribe();
  }

}
