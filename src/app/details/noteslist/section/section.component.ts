import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import sectionJava from '../../../../assets/json/section-java.json';
import sectionSpring from '../../../../assets/json/section-spring.json';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  sectionJava = sectionJava;
  sectionSpring = sectionSpring;
  json = this.sectionJava;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setJson(params['sectionId']));
  }

  ngOnInit(): void {
  }
  
  setJson(sectionId:string){
    console.log(sectionId);
    if(sectionId == "section-100"){
      console.log("returning Java");
      this.json = this.sectionJava;
    } else if(sectionId == "section-200"){
      console.log("return spring");
      this.json = this.sectionSpring;
    }
  }

}
