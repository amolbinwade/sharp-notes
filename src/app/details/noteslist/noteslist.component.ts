import { Component, OnInit } from '@angular/core';
import noteslist from '../../../assets/json/noteslist.json';

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.css']
})
export class NoteslistComponent implements OnInit {

  noteslist = noteslist;
  constructor() { }

  ngOnInit(): void {
  }

  getSectionPath(section){
    return 'sections' + '/' + section.sectionId;
  }

}
