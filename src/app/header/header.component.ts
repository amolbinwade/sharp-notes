import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerMenu : String[] = ["SharpNotes","Blog", "About"]

  constructor() { }

  ngOnInit(): void {
  }

}
