import { Component, OnInit, Input } from '@angular/core';

import slidesJson101 from '../../assets/json/topic-oops.json';
import slidesJson102 from '../../assets/json/topic-serialization.json';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() topicId:String;

  selectedSlide = slidesJson101;

  constructor() {
    console.log("in details" + this.topicId);
   }

  ngOnInit(): void {
  }

  getSelectedSlide(){
    if(this.topicId == "101"){
      return slidesJson101;
    } else {
      return slidesJson102;
    }
  }

}
