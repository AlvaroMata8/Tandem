import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserService {

    BASEURL:string = "http://localhost:3000"
    options:object = {withCredentials:true};

constructor(private http: Http){
}

get(id){
    console.log('holi')
    return this.http.get(`${this.BASEURL}/api/user/${id}`)
    .map((res) => res.json());
  }

// editUser(user){
//     return this.http.put(`${this.BASEURL}/api/user/edit/${user._id}`,user)
// }


}