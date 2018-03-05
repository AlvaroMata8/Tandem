import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Componentes
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HomeComponent } from './home/home.component';
import { NewRentFormComponent } from './new-rent-form/new-rent-form.component';
import { ProfileComponent } from './profile/profile.component';
import { RentDetailComponent } from './rent-detail/rent-detail.component';
import { RentListComponent } from './rent-list/rent-list.component'; 

//Rutas
import { routes } from './routes';
import { RouterModule } from '@angular/router';

//Servicios
import { UserService } from '../services/user.service';
import { SessionService } from '../services/session.service';
import { RentService } from '../services/rent.service';
import { RentEditComponent } from './rent-edit/rent-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    HomeComponent,
    NewRentFormComponent,
    ProfileComponent,
    RentDetailComponent,
    RentListComponent,
    RentEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService,RentService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
