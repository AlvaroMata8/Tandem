import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { RentService } from '../../services/rent.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-new-rent-form',
  templateUrl: './new-rent-form.component.html',
  styleUrls: ['./new-rent-form.component.css']
})
export class NewRentFormComponent implements OnInit {
  filesToUpload: Array<File> = [];
  brand:string;
  model:string;
  horsePower:number;
  city:string;
  price:number;
  use:string;
  recogida:Date;
  entrega:Date;
  img:string;
  error:string;
  
  constructor(public rentS:RentService,public session: SessionService, private router: Router,private http:Http) { }

  ngOnInit() {
  }

  createRent(){
    this.rentS.addRent(this.brand,this.model,this.horsePower,this.city,this.price,this.use,this.recogida,this.entrega,this.img)
    .catch(e => this.error = e)
    .subscribe(status =>{ if(status === 200) this.router.navigate(['/rentList'])
    });
  }
  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    formData.append("uploads[]", files[0], files[0]['name']);
    
    this.http.post('http://localhost:3001/upload', formData)
      .map(files => files.json())
      .subscribe(files => console.log('files', files))
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.img = fileInput.target.files[0]['name'];
  }
}
