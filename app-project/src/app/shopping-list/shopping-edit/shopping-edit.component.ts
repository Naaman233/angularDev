import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() add = new EventEmitter();

  editForm = new FormGroup({
    name: new FormControl(''),
    amount: new FormControl('')
  })



  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    console.log('function called')
    this.add.emit(this.editForm.value);
  }
}
