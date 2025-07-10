export default function List(props) {  

    const displayIngredients = props.ingredients.map(ingredients => <li key={ingredients}>{ingredients}</li>);

    return (
        <>
            <h2>Ingredients on hand:</h2>
            <ul>
                {displayIngredients}
            </ul>
            {props.ingredients.length > 3 && <div className="get-recipe-container">
                <div className="get-recipe-text">
                    <span>Ready for a recipe?</span>
                    <p>Generate a recipe from your list of ingredients</p>
                </div>
                <button onClick={props.getRecipe}>Get Recipe</button>
            </div>}
        </>
    );
}