import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/Services/Post/posts.service';
import { CategoriesService } from 'src/app/Services/Categories/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostEditingService } from 'src/app/Services/Post/post-editing.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {


  cPost: any;
  postId;

  constructor(
    private postServ: PostsService,
    private catSer: CategoriesService,
    private route: ActivatedRoute,
    public router: Router,
    public editService: PostEditingService,
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
    });
    console.log(this.postId);

    this.getPost();
  }
  cats;

  getCats = () =>
    this.catSer
      .getCategories()
      .subscribe(res => (this.cats = res));


  preview() {
    window.open(`preview/${this.postId}`);
  }


  publish = () => this.postServ.publish(this.postId);
  unPublish = () => this.postServ.unPublish(this.postId);


  getPost = () =>
    this.postServ
      .getPost(this.postId)
      .subscribe(res => (this.cPost = res.data()));



  editTitle = () => this.editService.editTitle(this.postId, this.cPost.Title).then(() => {
    this.getPost();
  });
}
