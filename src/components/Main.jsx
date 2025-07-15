import { useState, useEffect, useRef } from "react";
import Recipe from "./Recipe";
import List from "./List";
import { getRecipeFromMistral } from "../ai";

export default function Main () {

    const [ingredients, setIngredients] = useState([]);
    const [recipeShown, setRecipeShown] = useState("");
    const [loadMsg, setLoadMsg] = useState(false);
    const recipeScroll = useRef(null);

    useEffect(() => {
        if (recipeShown !== "" && recipeScroll !== null) {
            recipeScroll.current.scrollIntoView({behavior: "smooth"});
        }
    }, [recipeShown]);

    function submitIngredients(formData) {
        const enteredIngredient = formData.get("ingredient");
        
        if (enteredIngredient) {
            setIngredients(prevIngred => [...prevIngred, enteredIngredient]);
        }
    }

    async function getRecipeAI() {
        const generatedRecipe = await getRecipeFromMistral(ingredients); // calls an API function to fetch answers from MistralAI
        setRecipeShown(generatedRecipe); // updates recipeShown state with the AI generated response(recipe)
        setLoadMsg(prevLoad => !prevLoad); // sets condition to false, removing loading messsage after API call is successful
    }

    return (
        <div className="form-container">
            <form action={submitIngredients} className="add-ingredient-form" autoComplete="off">
                <input type="text" name="ingredient" id="ingredient-text" placeholder="e.g. chicken" aria-label="Add ingredient"/>
                <button className="add-button">+ Add Ingredient</button>
            </form>
            <div className="ingredient-info-body">
                {ingredients.length > 0 && <List ingredients={ingredients} getRecipe={getRecipeAI} loadMsg={loadMsg} setLoadMsg={setLoadMsg} ref={recipeScroll}/>}
                {recipeShown && <Recipe recipe={recipeShown} loadMessage={loadMsg}/>}
            </div>
        </div>
    );
}