import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import MenuJson from '../../assets/json/menu.json';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  topicId:String="101";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  getMenuItems(){
    return MenuJson.menulist;
  }

  selectMenuSubItem(menuSubItem){
    this.topicId=menuSubItem.id;
    console.log(this.topicId);
  }

  getTopicId(){
    return this.topicId;
  }

}
