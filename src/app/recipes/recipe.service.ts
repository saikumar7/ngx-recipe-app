import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import { Subject } from 'rxjs';
import 'rxjs/Rx';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe ('Tasty Schnitzel', 
      'This a test recipe', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuvZS09q8ZWE3qyddoUltcwf4YTYEIAhsTTPdAzIbAkVUPeguzQ',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 10)
      ]
      ),
    new Recipe ('Big Burger', 
      'This is a yummy burger', 
      'https://www.chatelaine.com/wp-content/uploads/2017/05/Bibimbap-homemade-burgers.jpg?x37839',
      [
         new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
      ]
    )
  ];

  constructor(private shoppingService: ShoppingService,
              private http: Http) {

  }

  
  getRecipes() {
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.getRecipes());
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredientsToList(ingredients);
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipeChanged.next(this.getRecipes());
  }

  updateRecipe(id: number, newRecipe: Recipe) {
    this.recipes[id] = newRecipe;
    this.recipeChanged.next(this.getRecipes());
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipeChanged.next(this.getRecipes());
  }
  
}