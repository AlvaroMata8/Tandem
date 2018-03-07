import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ContractService {

  BASEURL: string = "http://localhost:3000";
  options: object = { withCredentials: true };
  constructor(private http: Http) {}

  // getContracts() {//me traigo todos los contracts
  //   return this.http.get(`${this.BASEURL}/api/contracts`).map(res => res.json());
  // }

  // getOneContract(id) { //me traigo un solo contracto por id
  //   return this.http
  //     .get(`${this.BASEURL}/api/rent/${id}`)
  //     .map(res => res.json());
  // }

  addContract(id1,id2,id3) { //guardar un contrato
    return this.http
      .post(`${this.BASEURL}/api/contract/newcontract/${id1._id}`,{id1,id2,id3},this.options)
      .map(res => {
        return res.json();
      })
      .catch(this.handleError);
    }

  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }

  // removeRent(id){
  //   return this.http.post(`${this.BASEURL}/api/rent/delete/${id}`,this.options)
  //     .map((res) => res.json())
  // }
}