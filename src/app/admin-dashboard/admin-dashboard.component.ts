import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceCService } from '../service-c.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  private baseUrl = "http://localhost:3000/users";
  Users:any;
  user:any;

  constructor(private _http:HttpClient,private service:ServiceCService) { }

  ngOnInit() {
    this.user =this._http.get<any>(this.baseUrl).subscribe((res) =>{
        this.Users = res;
     },err =>{
      console.log(err);
    });
    // this.user = this.service.getUser();
    // console.log("this.user",this.user);
  }
}
