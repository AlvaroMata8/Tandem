// //Angular2-Materialize
import { MaterializeModule } from 'angular2-materialize';

import { BrowserModule } from "@angular/platform-browser";
import { NgModule,ApplicationRef } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AgmCoreModule } from '@agm/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Componentes
import { AppComponent } from "./app.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { HomeComponent } from "./home/home.component";
import { NewRentFormComponent } from "./new-rent-form/new-rent-form.component";
import { ProfileComponent } from "./profile/profile.component";
import { RentDetailComponent } from "./rent-detail/rent-detail.component";
import { RentListComponent } from "./rent-list/rent-list.component";
import { RentEditComponent } from "./rent-edit/rent-edit.component";
import { UserEditComponent } from "./user-edit/user-edit.component";


//Rutas
import { routes } from "./routes";
import { RouterModule } from "@angular/router";

//Servicios
import { UserService } from "../services/user.service";
import { SessionService } from "../services/session.service";
import { RentService } from "../services/rent.service";
import { ContractService } from "../services/contract.service";
import { CommonModule } from '@angular/common';

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
    RentEditComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    CommonModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyCwaebcPrjga0Ve9s_rZikQXY-Eh5vfeLo'}),
    HttpModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, RentService, UserService,ContractService],
  bootstrap: [AppComponent]
})
export class AppModule {}
