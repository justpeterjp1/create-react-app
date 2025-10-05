import React from 'react'
import AiRecipe from './AiRecipe'
// import { getRecipeFromMistral } from "./AI"
import { getRecipeFromGroq } from './groq'
const Main = () => {
    const [ingredients, setNewIngredient] = React.useState([])

    // const ingredientItems = ingredients.map( (item) => <li key={item}>{item}</li>)
    const addNewIngredient = (formData) => { 
       const newIngredient = formData.get("ingredient")
       if (newIngredient !== "" && !ingredients.includes(newIngredient.toLowerCase())) {
             setNewIngredient(prevIngredients => [...prevIngredients, newIngredient])
       }
        
    }
// Getting actual recipe
    const [recipe, setRecipe] = React.useState(false)
   async function getRecipe() {
    const generatedRecipe = await getRecipeFromGroq(ingredients)
        setRecipe(generatedRecipe)
    }
  return (
    <main>
        <form 
        className='input-form' 
        action={addNewIngredient}>
            <input 
            className='input-field'
            type="text"
            name="ingredient"
            placeholder='e.g Cucumber'
            aria-label='Add ingredients' />
            <button
            className='btn'>Add ingredient</button>
        </form>
     { ingredients.length > 0 && <section className='section'>
        <h2>Ingredients on hand:</h2>
            <ul className='list'>
        {ingredients.map((item, index) => (
            <li className='list-item' key={index}>{item}</li>
        ))}
        </ul>
        {ingredients.length > 3 && <div className="get-recipe-container">
            <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button 
            onClick={getRecipe}
            >Get a recipe</button>
        </div>}
        </section>}

            {recipe && <AiRecipe 
                recipe={recipe}
            />}
    </main>
  )
}


export default Main