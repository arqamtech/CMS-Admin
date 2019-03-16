import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public heading1: FormGroup;
  public heading2: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.heading1 = this._fb.group({
      psot: this._fb.array([
      ])
    });
    this.heading2 = this._fb.group({
      psot: this._fb.array([
      ])
    });
  }

  genHeading1() {
    return this._fb.group({
      heading1: [''],
    });
  }

  genHeading2() {
    return this._fb.group({
      heading2: [''],
    });
  }

  addHeading1() {
    const control = <FormArray>this.heading1.controls['psot'];
    control.push(this.genHeading1());
  }
  addHeading2() {
    const control = <FormArray>this.heading2.controls['psot'];
    control.push(this.genHeading2());
  }

  delHeading1(i: number) {
    const control = <FormArray>this.heading1.controls['psot'];
    control.removeAt(i);
  }


}
