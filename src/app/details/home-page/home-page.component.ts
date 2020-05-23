import { Component, OnInit, Input } from '@angular/core';
import homeJson from '../../../assets/json/home-page.json';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  homeData = homeJson;

  constructor() { }

  ngOnInit(): void {
  }

  getSectionPath(section){
    return "sections/"+section.sectionId;
  }

  getTopicPath(topic){
    return "sections/"+topic.sectionId+"/topics/"+topic.topicId;
  }

}
