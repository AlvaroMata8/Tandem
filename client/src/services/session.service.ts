import { Injectable,EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../environments/environment';


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

  
 BASEURL:string= environment.BASEURL;
  // BASEURL:string = "http://localhost:3000"
  options:object = {withCredentials:true};
  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  private user:User;
  private userEvent:EventEmitter<any> = new EventEmitter();

  getUser(){
    return this.user;
  }
  getUserEvent(){
    return this.userEvent;
  }
  
  private configureUser(set=false){
    return (user) => {
      if(set){
        this.user = user;
        this.userEvent.emit(user)
        console.log(`Setting user, welcome ${this.user.username}`)
      }else{
        console.log(`bye bye ${this.user.username}`)
        this.user = null
        this.userEvent.emit(null)
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