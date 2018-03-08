import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";
import { resetFakeAsyncZone } from "@angular/core/testing";
import { environment } from "../environments/environment";

@Injectable()
export class RentService {
  BASEURL: string = environment.BASEURL;
  // BASEURL: string = "http://localhost:3000";
  options: object = { withCredentials: true };
  constructor(private http: Http) {}

  getRent() {
    return this.http
      .get(`${this.BASEURL}/api/rent`, this.options)
      .map(res => res.json());
  }

  getOneRent(id) {
    console.log(id);
    return this.http
      .get(`${this.BASEURL}/api/rent/${id}`)
      .map(res => res.json());
  }

  addRent(rent, user) {
    const object = {
      rent: rent,
      user: user
    };
    return this.http
      .post(`${this.BASEURL}/api/rent/newRent`, object, this.options)
      .map(res => {
        console.log(res);
        res.json();
      })
      .catch(this.handleError);
  }

  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }

  editRent(id, form): Observable<any> {
    return this.http
      .put(`${this.BASEURL}/api/rent/edit/${id}`, form, this.options)
      .map(res => res.status)
      .catch(this.handleError);
  }
  removeRent(id) {
    return this.http
      .post(`${this.BASEURL}/api/rent/delete/${id}`, this.options)
      .map(res => res.json());
  }
}
