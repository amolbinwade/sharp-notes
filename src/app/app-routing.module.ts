import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './details/home-page/home-page.component';
import { TopiclistComponent } from './details/topiclist/topiclist.component';
import { BloglistComponent } from './details/bloglist/bloglist.component';


const routes: Routes = [{
  path: '',
  component: HomePageComponent
},
{
  path: 'topics',
  component: TopiclistComponent
},
{
  path: 'blog',
  component: BloglistComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
