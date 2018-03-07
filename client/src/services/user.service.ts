import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";

@Injectable()
export class UserService {
  BASEURL: string = "http://localhost:3000";
  options: object = { withCredentials: true };

  constructor(private http: Http) {}

  get(id) {
    return this.http
      .get(`${this.BASEURL}/api/user/${id}`)
      .map(res => res.json());
  }

  editUser(id, form) {
    return this.http
      .put(`${this.BASEURL}/api/user/edit/${id}`, form, this.options)
      .map(res => res.status)
      .catch(this.handleError);
  }

  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }
  removeUser(id){
    return this.http.post(`${this.BASEURL}/api/user/delete/${id}`,this.options)
      .map((res) => res.json());
  }
}
