import { Routes } from "@angular/router";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { HomeComponent } from "./home/home.component";
import { NewRentFormComponent } from "./new-rent-form/new-rent-form.component";
import { ProfileComponent } from "./profile/profile.component";
import { RentDetailComponent } from "./rent-detail/rent-detail.component";
import { RentListComponent } from "./rent-list/rent-list.component";
import { RentEditComponent } from "./rent-edit/rent-edit.component";
import { UserEditComponent } from "./user-edit/user-edit.component"
 
export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "profile/:id", component: ProfileComponent },
  { path: "login", component: LoginFormComponent },
  { path: "signup", component: SignupFormComponent },
  { path: "newRent", component: NewRentFormComponent },
  { path: "rent/edit/:id", component: RentEditComponent},
  { path: "user/edit/:id", component: UserEditComponent },
  { path: "rent/:id", component: RentDetailComponent },
  { path: "rentList", component: RentListComponent }
];
