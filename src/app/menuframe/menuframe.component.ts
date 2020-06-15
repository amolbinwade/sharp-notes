import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import MenuJson from '../../assets/json/new-manu.json';
import { Location } from "@angular/common";
import { Router } from "@angular/router";

export enum MenuMode{
  HOME, NOTES, BLOG, ABOUT
}

@Component({
  selector: 'app-menuframe',
  templateUrl: './menuframe.component.html',
  styleUrls: ['./menuframe.component.css']
})
export class MenuframeComponent {  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );    

    mode:MenuMode = MenuMode.HOME;
    MenuMode = MenuMode;
    route:string;

  constructor(private breakpointObserver: BreakpointObserver, location: Location, router: Router) {
    router.events.subscribe(val => {
      if (location.path() != ""){
        this.route = location.path();
      } else {
        this.route = "Home";
      }
      this.setMode();
    });
  }  

  ngOnInit(): void {
  }

  setMode(){
    if(this.route.indexOf("/sections") > -1){
      this.mode = MenuMode.NOTES;
    } else if(this.route.indexOf("Home") > -1){
      this.mode = MenuMode.HOME;
    } else if(this.route.indexOf("/blog") > -1){
      this.mode = MenuMode.BLOG;
    } else if(this.route.indexOf("/about") > -1){
      this.mode = MenuMode.ABOUT;
    }
  }

  getMenuItems(){
    return MenuJson.menuItemList;
  }
  
  menuItemClicked(menuItem){
    if(menuItem.menuItemId=="menu-item-001"){
      this.mode = MenuMode.NOTES;
    } else if(menuItem.menuItemId == "menu-item-002") {
      this.mode   = MenuMode.BLOG;
    } else if(menuItem.menuItemId == "menu-item-003") {
      this.mode   = MenuMode.ABOUT;
    }  
    console.log(this.mode);
  }

  getSections(){
    return MenuJson.menuItemList[0].sectionList;
  }

  getBlogPosts(){
    return MenuJson.menuItemList[1].blogPostList;
  }

  isExpanded(itemList){
    if(itemList.expanded == "true"){
      return true;
    }
    return false;
    
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

 
}
