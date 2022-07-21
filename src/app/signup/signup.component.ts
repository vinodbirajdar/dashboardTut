import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm !:FormGroup;
  constructor( private formbuilder:FormBuilder,private _http:HttpClient,private router:Router) { }
  private baseUrl = "http://localhost:3000/signup";
  ngOnInit() {
    this.signupForm = this.formbuilder.group({
      firstname:[''],
      lastname:[''],
      username:[''],
      emailaddress:[''],
      newpassword:[''],
      reenterpassword:[''],
      country:[''],
      streetaddress:[''],
      city:[''],
      region:[''],
      postalcode:['']
    })
  }

  //create signup user
  signUp(){
    console.log("this.signupForm ",this.signupForm.value );
    this._http.post<any>(this.baseUrl,this.signupForm.value).subscribe(res =>{
      console.log("alerting inseting");
      this.signupForm.reset();
      this.router.navigate(['/login']);
    }, err=>{
      console.log("erroeint");
    })
  }

}
