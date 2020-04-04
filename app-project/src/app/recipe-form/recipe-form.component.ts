import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  //1. so now we create the form control

  //2. recipe name control

  recipeFormControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
