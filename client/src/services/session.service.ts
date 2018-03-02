import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

interface User {
  username:string,
  password:string
  name:string,
  lastName:string,
  userImage:string,
  license:string,
  city:string
}

@Injectable()
export class SessionService {

  BASEURL:string = "http://localhost:3000"
  options:object = {withCredentials:true};
  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  private user:User;

  getUser(){
    return this.user;
  }
  private configureUser(set=false){
    return (user) => {
      if(set){
        this.user = user;
        console.log(`Setting user, welcome ${this.user.username}`)
      }else{
        console.log(`bye bye ${this.user.username}`)
        this.user = null
      }
      return user;
    }
  }

  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }
  
  signup(username:string, password:string,name:string,lastName:string,userImage:string,license:string,city:string):Observable<any>{
    return this.http.post(`${this.BASEURL}/auth/signup`, {username,password,name,lastName,userImage,license,city}, this.options)
      .map(res => res.json())
      .map(this.configureUser(true))
      .catch(this.handleError);
  }

  addRent(brand:string,model:string,horsePower:number,city:string,price:number,use:string,recogida:Date,entrega:Date,img:string):Observable<any>{
    return this.http.post(`${this.BASEURL}/api/rent/newRent`,{brand,model,horsePower,city,price,use,recogida,entrega,img}, this.options)
  }

  login(username:string, password:string):Observable<any>{
    return this.http.post(`${this.BASEURL}/auth/login`, {username,password},this.options)
      .map(res => res.json())
      .map(this.configureUser(true))
      .catch(this.handleError);
  }

  logout():Observable<any>{
    return this.http.get(`${this.BASEURL}/auth/logout`,this.options)
      .map(res => res.json())
      .map(this.configureUser(false))
      .catch(this.handleError);
  }

  isLoggedIn():Observable<any> {
    return this.http.get(`${this.BASEURL}/auth/loggedin`,this.options)
      .map(res => res.json())
      .map(this.configureUser(true))
      .catch(this.handleError);
  }
}