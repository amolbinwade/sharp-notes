import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import oopsTopic from '../../../../../assets/json/topic-oops.json';
import serialTopic from '../../../../../assets/json/topic-serialization.json';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  index = 0;
  selectedTopic = oopsTopic;
  topicId:string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setTopicId(params['topicId']));
  }
  ngOnInit(): void {
  }

  setTopicId(topicId:string){
    this.topicId=topicId;
    this.setSelectedTopic();
  }

  next(){
    this.index = this.index+1;
    console.log(this.selectedTopic.topicSlides[0].slideTitle)
  }

  previous(){
    if(this.index > 0){
      this.index = this.index-1;
    }
  }

  getImagePath(card){    
    if(card.cardImagePath){
      console.log("assets/" + card.cardImagePath);
      return "assets/" + card.cardImagePath;
    }   
    return "";
  }

  setSelectedTopic(){
    if(this.topicId==oopsTopic.id){
      this.selectedTopic = oopsTopic;
    } else if(this.topicId== serialTopic.id){
      this.selectedTopic = serialTopic;
    }
  }

}
