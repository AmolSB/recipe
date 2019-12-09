import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://p1.pxfuel.com/preview/949/796/952/food-recipe-delicious-breakfast-lunch-dinner.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
