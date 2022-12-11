import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientList( {ingredients}) {

  const ingredientsElements = ingredients.map(ingredient => {
    return <Ingredient key={ingredient.id} {...ingredient}></Ingredient>
  })
  return (
    <div className='ingredient-grid'>
      {ingredientsElements}
    </div>
  )
}
