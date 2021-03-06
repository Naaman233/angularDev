import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredientsList: Ingredient[]= [
    new Ingredient('Apples',9),
    new Ingredient('Tomatoes',5)
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(ingredient) {
    console.log('adding ingredient')
    console.log(ingredient)

    const newIngredient = new Ingredient(ingredient.name, ingredient.amount)
    this.ingredientsList.push(newIngredient)

  }
}
