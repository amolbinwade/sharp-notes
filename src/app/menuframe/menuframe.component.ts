import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import MenuJson from '../../assets/json/new-manu.json';

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

    constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
  }
  getMenuItems(){
    return MenuJson.menuItemList;
  }
  
  menuItemClicked(menuItem){

  }
}
