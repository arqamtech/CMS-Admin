import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/Services/Post/posts.service';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/Services/Categories/categories.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(
    private postServ: PostsService,
    private catSer: CategoriesService,
    public router: Router,
  ) { 
    
  }

  ngOnInit() {
  }
  cats;

  getCats = () =>
    this.catSer
      .getCategories()
      .subscribe(res => (this.cats = res));


  onSubmit() {
    let data = this.postServ.newPost.value;

    if (this.postServ.newPost.valid) {

      this.postServ.addTitle(data).then(res => {
        this.router.navigateByUrl('/post/' + res.payload.doc.id);
      });
    } else {
      console.log("wrng Tag");

    }
  }

}

