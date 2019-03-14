import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/Categories/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

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


}
