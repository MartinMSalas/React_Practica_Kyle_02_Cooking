import React, { useState } from "react";
import RecipeList from "./RecipeList";
import  "../css/app.css";
/*
para crear id diferentes npm i uuid
despues importamos uuidv4
import { v4 as uuidv4 } from 'uuid' 
*/
import { v4 as uuidv4 } from 'uuid' 

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  function handleRecipeAdd(){
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instructions",
      ingredients: [ {
        id: uuidv4(), name: "Name", amount: "1 Tbs"
      }]
    }
    // leemos todas las recetas de recipes, creamos una nueva y la agregamos y llamamos a setRecipes
    setRecipes((preRecipe)=>[...recipes, newRecipe]);
  }
  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  }
  return (
    <>
      <RecipeList recipes={recipes} handleRecipeAdd={handleRecipeAdd} handleRecipeDelete={handleRecipeDelete}></RecipeList>
    </>
  );
}
const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on Chicken\n2. Put Chicken in oven\n3. Eat the chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 kilos",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions:
      "1. Put paprika on Pork\n2. Put Pork in oven\n3. Eat the Pork",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "3 pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 tbs",
      },
    ],
  },
];

export default App;
