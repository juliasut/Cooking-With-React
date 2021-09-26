import React from 'react';
import RecipeIngredientEdit from './RecipeIngredient';

export default function RecipeEdit() {
  return (
    <div className="recipe-edit">
      <div>&times;</div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="cookTime">Cook Time</label>
        <input type="text" name="cookTime" id="cookTime" />
        <label htmlFor="servings">Servings</label>
        <input type="number" min="1" name="servings" id="servings" />
        <label htmlFor="instrunctons">Instructions</label>
        <textarea name="instructions" id="instructions" />
      </div>
      <br />
      <label>Ingredients</label>
      <div>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <RecipeIngredientEdit />
        <RecipeIngredientEdit />
        <div>
          <button>Add Ingredient</button>
        </div>
      </div>
    </div>
  )
}
