import { Component, OnInit } from '@angular/core';
import { TagsService } from 'src/app/Services/Tags/tags.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.scss']
})
export class AddTagComponent implements OnInit {

  constructor(
    private tagSer: TagsService,
  ) {

  }

  ngOnInit() {
  }
  onSubmit() {
    let data = this.tagSer.newTag.value;
    if (this.tagSer.newTag.valid) {

      this.tagSer.addTag(data).then(res => {

      });
    }else{
      console.log("wrng Tag");
      
    }
  }

}
