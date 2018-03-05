import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user:any;
  error:string;

  username:string;
  name:string;
  lastName:string;
  userImage:string;
  license:string;
  city:string;
  constructor(public userS:UserService,public session:SessionService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getUser(params['id']);
    });
  }

  getUser(id) {
    this.userS.get(id)
      .subscribe((user) => {
        this.user = user;
        console.log(this.user)
      });
  }

  submitForm(id, form){
    console.log(form.value)
    console.log(id)
     console.log(this.user._id)
    this.userS.editUser(this.user._id, form.value)
    .catch(e => this.error = e)
    .subscribe(status => { if(status === 200) this.router.navigate([`/profile/${this.user._id}`]) } )
  }

}
