import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { DetailsComponent } from './details/details.component';
import { SlideComponent } from './details/slide/slide.component';
import {MatCardModule} from '@angular/material/card';
import { HomePageComponent } from './details/home-page/home-page.component';
import { MenuframeComponent } from './menuframe/menuframe.component';
import { BloglistComponent } from './details/bloglist/bloglist.component';
import { NoteslistComponent } from './details/noteslist/noteslist.component';
import { AboutComponent } from './details/about/about.component';
import { SectionComponent } from './details/noteslist/section/section.component';
import { TopicComponent } from './details/noteslist/section/topic/topic.component';
import { NotesMenuComponent } from './menuframe/notes-menu/notes-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DetailsComponent,
    SlideComponent,
    HomePageComponent,
    MenuframeComponent,    
    BloglistComponent,
    NoteslistComponent,
    AboutComponent,
    SectionComponent,
    TopicComponent,
    NotesMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
