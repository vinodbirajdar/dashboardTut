import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  private baseUrl = "http://localhost:3000/users";
  Users:any;
  user:any;

  constructor(private _http:HttpClient) { }

  ngOnInit() {
    this.user =this._http.get<any>(this.baseUrl).subscribe((res) =>{
        this.Users = res;
     },err =>{
      console.log(err);
    });
  }
}
