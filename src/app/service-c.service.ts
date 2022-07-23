import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceCService {

  constructor(private _http:HttpClient) { }

  getUser(){
    return[{
      'firstname':'John',
      'lastname':'Kel',
      'empId':12,
      'Skills':'Java',
      'Experience in years':'8'

    },
    {
      'firstname':'Sachin',
      'lastname':'T',
      'empId':13,
      'Skills':'C++',
      'Experience in years':'10'

    },
    {
      'firstname':'Adam',
      'lastname':'D',
      'empId':14,
      'Skills':'Angular',
      'Experience in years':'12'

    }]
    
  }

}



