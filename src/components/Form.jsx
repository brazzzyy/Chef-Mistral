import { useState } from "react";
import Recipe from "./Recipe";
import List from "./List";
import { getRecipeFromMistral } from "../ai";

export default function Form () {

    const [ingredients, setIngredients] = useState([]);
    const [recipeShown, setRecipeShown] = useState("");

    function submitIngredients(formData) {
        const enteredIngredient = formData.get("ingredient");
        
        if (enteredIngredient) {
            setIngredients(prevIngred => [...prevIngred, enteredIngredient]);
        }
    }

    async function getRecipeAI() {
        const generatedRecipe = await getRecipeFromMistral(ingredients);
        setRecipeShown(generatedRecipe);
    }

    return (
        <div className="form-container">
            <form action={submitIngredients} className="add-ingredient-form">
                <input type="text" name="ingredient" id="ingredient-text" placeholder="e.g. oregano" aria-label="Add ingredient"/>
                <button className="add-button">+ Add Ingredient</button>
            </form>
            <div className="ingredient-info-body">
                {ingredients.length > 0 && <List ingredients={ingredients} getRecipe={getRecipeAI}/>}
                {recipeShown && <Recipe recipe={recipeShown}/>}
            </div>
        </div>
    );
}