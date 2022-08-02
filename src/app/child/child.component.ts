import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { DummyDataService } from '../dummy-data.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() loginuser: any;
  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();

  constructor(private dummydata:DummyDataService) { }

  ngOnInit() {
    console.log("loginuser",this.loginuser);
   
  }
  sendData(){
    this.notify.emit('Sending from child to parent')
  }

}
