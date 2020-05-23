import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './details/home-page/home-page.component';
import { BloglistComponent } from './details/bloglist/bloglist.component';
import { NoteslistComponent } from './details/noteslist/noteslist.component';
import { AboutComponent } from './details/about/about.component';
import { SectionComponent } from './details/noteslist/section/section.component';
import { TopicComponent } from './details/noteslist/section/topic/topic.component';


const routes: Routes = [{
  path: '',
  component: HomePageComponent
},
{
  path: 'sections/:sectionId',
  component: SectionComponent,  
},
{
  path: 'sections/:sectionId/topics/:topicId',
  component: TopicComponent
},
{
  path: 'blog',
  component: BloglistComponent
},
{
  path: 'sections',
  component: NoteslistComponent
},
{
  path: 'about',
  component: AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
