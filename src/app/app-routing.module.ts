import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { LoginComponent } from './Auth/login/login.component';
import { CategoryComponent } from './Categories/category/category.component';
import { TagsComponent } from './Tags/tags/tags.component';
import { ViewPostComponent } from './Post/view-post/view-post.component';
import { NewPostComponent } from './Post/new-post/new-post.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'addPost', component: NewPostComponent },
  { path: 'post/:id', component: ViewPostComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
