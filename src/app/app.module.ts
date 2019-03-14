import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "src/environments/environment";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NewPostComponent } from './Post/new-post/new-post.component';
import { CategoryComponent } from './Categories/category/category.component';
import { ViewPostComponent } from './Post/view-post/view-post.component';
import { TagsComponent } from './Tags/tags/tags.component';
import { CategoriesService } from './Services/Categories/categories.service';
import { TagsService } from './Services/Tags/tags.service';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { LoginComponent } from './Auth/login/login.component';
import { AllPostsComponent } from './Post/all-posts/all-posts.component';
import { AddCategoryComponent } from './Categories/add-category/add-category.component';
import { ViewCategoryComponent } from './Categories/view-category/view-category.component';



@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    CategoryComponent,
    ViewPostComponent,
    TagsComponent,
    DashboardComponent,
    LoginComponent,
    AllPostsComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    CategoriesService,
    TagsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
