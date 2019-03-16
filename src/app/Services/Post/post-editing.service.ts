import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostEditingService {

  constructor(
    private firestore: AngularFirestore,
  ) {

  }


  editTitle(id, title) {
    return this.firestore
      .collection("Posts")
      .doc(id)
      .set({ Title: title }, { merge: true });
  }
}
