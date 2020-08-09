import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Waffle',
      imageUrl: '../../assets/waffle.jpg',
      ingredients: ['Eggs', 'Flour', 'Milk']
    },
    {
      id: '2',
      title: 'Pancake',
      imageUrl: '../../assets/pancake.jpg',
      ingredients: ['Eggs', 'Flour', 'Milk']
    },
    {
      id: '3',
      title: 'Salad',
      imageUrl: '../../assets/salad.jpg',
      ingredients: ['Brocholi', 'Onion', 'Canola Oil']
    }
  ]
  constructor() { }

  getAllRecipe(){
    return [...this.recipes]
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId; 
    })}
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    })
  }
}
