import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class RentService {

  BASEURL:string = "http://localhost:3000"
  options:object = {withCredentials:true};
  constructor(private http: Http) {

  }

  getRent(){
    return this.http.get(`${this.BASEURL}/api/rent`)
    .map((res) => res.json());
  }

  getOneRent(id){
    return this.http.get(`${this.BASEURL}/api/rent/${id}`)
    .map((res) => res.json());
  }
  
  addRent(brand:string,model:string,horsePower:number,city:string,price:number,use:string,recogida:Date,entrega:Date,img:string):Observable<any>{
    return this.http.post(`${this.BASEURL}/api/rent/newRent`,{brand,model,horsePower,city,price,use,recogida,entrega,img}, this.options)
  }

//   editRent(id){
//     return this.http.put(`${this.BASEURL}/api/rent/edit/${id}`,{brand,model,horsePower,city,price,use,recogida,entrega,img}, this.options})
      
//   }
}