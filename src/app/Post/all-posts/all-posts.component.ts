import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/Services/Post/posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {

  constructor(
    private postService: PostsService,
  ) {

  }

  ngOnInit() {
    this.getPosts();
  }
  posts;

  getPosts = () => this.postService.getPosts().subscribe(res => (this.posts = res));

  delPost = (id) => this.postService.deletePost(id);
  editPost = (id) => window.open(`edit-post/${id}`)

  preview = (id) => window.open(`preview/${id}`)
}
