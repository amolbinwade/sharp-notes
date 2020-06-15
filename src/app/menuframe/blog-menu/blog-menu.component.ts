import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-menu',
  templateUrl: './blog-menu.component.html',
  styleUrls: ['./blog-menu.component.css']
})
export class BlogMenuComponent implements OnInit {

  @Input() blogPost;

  constructor() { }

  ngOnInit(): void {
  }

}
