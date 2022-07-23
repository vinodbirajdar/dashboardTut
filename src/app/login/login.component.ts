import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  loginForm!: FormGroup;
  constructor(private fb:FormBuilder,private _http:HttpClient,private route:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });
    
  }


    login(){
      this._http.post<any>('http://localhost:3000/login', this.loginForm.value)
      .subscribe(res => console.log(res));
      window.localStorage.setItem('user',this.loginForm.value);
      this._http.get<any>("http://localhost:3000/signup").subscribe(res =>{
      const user = res.find((a:any) =>{
        return a.email === this.loginForm.value.email && a.email === this.loginForm.value.password
      });
     
      if(user){
        console.log("logged in succes");
        this.loginForm.reset();
        this.route.navigate(['/admin-dashboard']);
      }else{
        console.log("cred erros");
      }
    },err =>{
      console.log("server side error");
    })
    
  }

}
