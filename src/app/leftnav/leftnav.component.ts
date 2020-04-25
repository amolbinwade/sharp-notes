import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';



@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements OnInit {

  name:String = "";
  constructor() { }

  ngOnInit(): void {
  }

  getName(event: any){
    this.name = event.target.value;
  }

  hasNameSet(){
    return this.name.length > 0;
  }

}
