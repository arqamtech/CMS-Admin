import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/Categories/categories.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent implements OnInit {

  constructor(
    private catSer: CategoriesService,
  ) {

  }

  ngOnInit() {
    this.getCats();
  }


  cats;

  getCats = () =>
    this.catSer
      .getCategories()
      .subscribe(res => (this.cats = res));


  deleteCat(data) {
    this.catSer.deleteCategories(data);
  }
}
