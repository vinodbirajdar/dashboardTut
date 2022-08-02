import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { ServiceCService } from '../service-c.service';
import { Subscription, timer } from 'rxjs';
import { map, share } from "rxjs/operators";
import { OnDestroy } from '@angular/core';
import { DummyDataService } from '../dummy-data.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent implements OnInit, OnDestroy,AfterViewInit {


  private baseUrl = "http://localhost:3000/users";
  Users:any;
  user:any;
  todayDate:any;
  
  // @ViewChild("high")
  // refertemplate!: ElementRef;

    
   @ViewChildren("high")
   refertemplate!: QueryList<any>;

  constructor(private _http:HttpClient,private service:ServiceCService,private dummy:DummyDataService) {}
  ngAfterViewInit() {
    //throw new Error('Method not implemented.');
    console.log("refertemplate",this.refertemplate);
    this.refertemplate.last.nativeElement.style.color="red";
  }
 
  date: Date = new Date();
  time = new Date();
  rxTime = new Date();
  intervalId: any;
  subscription: Subscription = new Subscription;
  userList:any;


  ngOnInit() {
    this.user =this._http.get<any>(this.baseUrl).subscribe((res) =>{
        this.Users = res;
     },err =>{
      console.log(err);
    });
    // this.user = this.service.getUser();
    // console.log("this.user",this.user);
    // this.user =  this.dummy.getUsers().subscribe((data)=>{
    //   console.log("subscirbe",data);
    //   this.userList = data;
    // });
  //  console.log("user data",this.user)
     // Using Basic Interval
     this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
 
  // showTime(){
  //     var date = new Date();
  //     var hours = date.getHours();
  //     var minutes = date.getMinutes();
  //     var seconds = date.getSeconds();
      
  //     var session = "AM";
  //     if(hours == 0){
  //         hours =12;
  //     }
  //     if(hours > 12){
  //         hours = hours-12;
  //         session = "PM";
  //     }
  //     //to add 0 if the hours is lessser than 10
  //    var hours = (hours < 10) ? '0' + hours : hours;
  //     var minutes = (minutes < 10) ? '0' + minutes : minutes;
  //     var seconds = (seconds < 10) ? '0' + seconds : seconds;
      
  //     var time = hours+":"+minutes+":"+seconds+":"+session;
  //         setTimeout(this.showTime,1000);
  //       return time;
      
     
  // }
}
