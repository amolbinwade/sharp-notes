import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notes-menu',
  templateUrl: './notes-menu.component.html',
  styleUrls: ['./notes-menu.component.css']
})
export class NotesMenuComponent implements OnInit {

  @Input() section;

  constructor() { }

  ngOnInit(): void {
  }

  toggleExpand(itemList){
    if(itemList.expanded==""){
      itemList.expanded="true";
    } else if(itemList.expanded=="true"){
      itemList.expanded="false";
    } else{
      itemList.expanded="true";
    }
    
  }

  getTopicPath(topic, section){
    return "sections/"+section.sectionId+"/topics/"+topic.topicId;
  }

  isExpanded(itemList){
    if(itemList.expanded == "true"){
      return true;
    }
    return false;
    
  }
}
