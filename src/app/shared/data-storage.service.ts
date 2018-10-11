import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service'; 
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) { }

   storeRecipes() {
     const token = this.authService.getToken();
  //   return this.httpClient.put('https://ngx-recipe-book-ca109.firebaseio.com/recipe.json', this.recipeService.getRecipes(),
  // {
  //   observe: 'body',
  //   params: new HttpParams().set('auth', token)
  // });

  const req = new HttpRequest('PUT', 'https://ngx-recipe-book-ca109.firebaseio.com/recipe.json', this.recipeService.getRecipes(),
                 {
                   reportProgress: true
                  }
                )

      return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.httpClient.get<Recipe[]>('https://ngx-recipe-book-ca109.firebaseio.com/recipe.json', {
      observe: 'body',
      responseType: 'json'
      
    })
    .map(
      (recipes) => {          
          for (let recipe of recipes) {
           if(!recipes['ingredients']) {  
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
      }
    )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      )
  }

}