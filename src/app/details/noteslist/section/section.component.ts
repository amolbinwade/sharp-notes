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
  sectionId:String;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setJson(params['sectionId']));
  }

  ngOnInit(): void {
  }
  
  setSectionId(sectionId){
    this.sectionId = sectionId;
  }
  setJson(sectionId:string){
    this.setSectionId(sectionId);
    console.log(sectionId);
    if(sectionId == "section-100"){
      console.log("returning Java");
      this.json = this.sectionJava;
    } else if(sectionId == "section-200"){
      console.log("return spring");
      this.json = this.sectionSpring;
    }
  }

  getTopicPath(topic){
    return "sections/"+this.sectionId+"/topics"+"/"+topic.topicId;

  }

}
