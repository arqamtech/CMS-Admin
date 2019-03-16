import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private firestore: AngularFirestore,
    public router: Router,
  ) {
  }

  newPost = new FormGroup({
    Title: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
    ]),
    Status: new FormControl("Draft")
  })

  postAtt = new FormGroup({
    Category: new FormControl(""),
  })

  addTitle(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("Posts")
        .add(data)
        .then(res => {

          this.router.navigate(['edit-post', res.id]);

        }, err => reject(err));
    });
  }

  getPost(id) {
    return this.firestore.collection("Posts").doc(id).get();
  }

  getPosts() {
    return this.firestore.collection("Posts").snapshotChanges();
  }
  publish(id) {
    return this.firestore
      .collection("Posts")
      .doc(id)
      .set({ Status: "Published" }, { merge: true });
  }
  unPublish(id) {
    return this.firestore
      .collection("Posts")
      .doc(id)
      .set({ Status: "Draft" }, { merge: true });
  }
  deletePost(id) {
    return this.firestore
      .collection("Posts")
      .doc(id)
      .delete();
  }
}
