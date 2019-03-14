import { Component, OnInit } from '@angular/core';
import { TagsService } from 'src/app/Services/Tags/tags.service';

@Component({
  selector: 'app-view-tags',
  templateUrl: './view-tags.component.html',
  styleUrls: ['./view-tags.component.scss']
})
export class ViewTagsComponent implements OnInit {

  constructor(
    private tagSer: TagsService,
  ) {

  }

  ngOnInit() {
    this.getCats();
  }


  cats;

  getCats = () =>
    this.tagSer
      .getTags()
      .subscribe(res => (this.cats = res));


  deleteCat(data) {
    this.tagSer.deleteTags(data);
  }
}

