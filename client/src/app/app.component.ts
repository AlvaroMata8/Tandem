import { Component } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SessionService]
})
export class AppComponent {
  error:string;
  user:any;
  constructor(public session: SessionService,private router:Router) {
    this.user = this.session.getUser()
    this.session.getUserEvent().subscribe(user => this.user = user)
  }


  logout() {
    this.session.logout()
      .catch(e => (this.error = e))
      .subscribe();
  }
}
