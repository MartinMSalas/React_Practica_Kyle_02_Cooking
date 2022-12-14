import React from "react";
import Ingredient from './Ingredient';

import RecipeIngredientEdit from "./RecipeIngredientEdit";

export default function RecipeEdit() {
  return (
    <div className="recipe-edit">
      <div>

        <button>&times;</button>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"></input>
        <label htmlFor="cookTime">Name</label>
        <input type="text" name="cookTime" id="cookTime"></input>
        <label htmlFor="servings">Name</label>
        <input type="number" min="1" name="servings" id="servings"></input>
        <label htmlFor="instructions">Instructions</label>
        <textarea name="instructions" id="instructions"></textarea>
      </div>
      <br/>
      <label>Ingredients</label>
      <div>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <RecipeIngredientEdit></RecipeIngredientEdit>
        <RecipeIngredientEdit></RecipeIngredientEdit>
        {/* Ingredients Components */}
        <div>
          <button>Add Ingredient</button>
        </div>
      </div>
    </div>
  )
}