import { Component, OnInit, Input } from '@angular/core';

import slidesJson1 from '../../../assets/json/topic-oops.json';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  @Input() selectedSlide;
  slidesJson = slidesJson1;
  ;
  index = 0;
  constructor() { }

  ngOnInit(): void {
  }  

  next(){
    this.index = this.index+1;
    console.log(this.selectedSlide.slides[0].slideId)
  }

  previous(){
    if(this.index > 0){
      this.index = this.index-1;
    }
  }

}
