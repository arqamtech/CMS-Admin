import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/Services/Post/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {


  constructor(
    private postServ: PostsService,
  ) {

  }

  ngOnInit() { };





  onSubmit() {



    let data = this.postServ.newPost.value;

    if (this.postServ.newPost.valid) {

      this.postServ.addTitle(data).then(res => {
      });
    } else {
      console.log("wrng Tag");

    }
  }

}

