import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private firestore: AngularFirestore,
  ) {
  }

  newPost = new FormGroup({
    Title: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
    ]),
  })

  postAtt = new FormGroup({
    Category: new FormControl(""),
  })

  addTitle(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("Posts")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }


}
