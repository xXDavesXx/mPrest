import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {LineDataIfc} from "../../interfaces/interfaces";

@Component({
  selector: 'app-new-line',
  templateUrl: './new-line.component.html',
  styleUrls: ['./new-line.component.scss']
})
export class NewLineComponent implements OnInit{

  myForm: FormGroup;
  @Output() newLineData = new EventEmitter<LineDataIfc>();


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      id: 0,
      title: '',
      albumId: 0,
    })
  }


  onSubmit(): void {
    const id = this.myForm.get('id')?.value;
    const title = this.myForm.get('title')?.value;
    const albumId = this.myForm.get('albumId')?.value;

    this.newLineData.emit({id: id, albumId: albumId, text: title})
  }

}
