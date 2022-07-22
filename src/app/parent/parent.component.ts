import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parenttochild:string= 'i am children;'
  childtoparent:any;

  constructor() { }

  ngOnInit() {
  }

  parentMethod(_data: any){
    this.childtoparent = _data;
  }
}
