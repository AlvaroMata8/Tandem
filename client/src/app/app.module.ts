import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from '../services/session.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewRentFormComponent } from './new-rent-form/new-rent-form.component';
import { ProfileComponent } from './profile/profile.component'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    HomeComponent,
    NewRentFormComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
