import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/Categories/categories.service';



@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor(    
    private catSer: CategoriesService,
    ) { 

    }

  ngOnInit() {
  }
  onSubmit() {
    let data = this.catSer.newCategory.value;
    this.catSer.addCategory(data).then(res => {
      
    });
  }
}
