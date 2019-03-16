import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/Services/Post/posts.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {

  postId;

  constructor(
    private route: ActivatedRoute,
    private postServ: PostsService,
    private firestore: AngularFirestore,
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
    });
    console.log(this.postId);
    this.getPost();
  }

  cPost;

  getPost = () =>
    this.postServ
      .getPost(this.postId)
      .subscribe(res => (this.cPost = res.data()));




}
