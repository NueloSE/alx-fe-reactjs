import useRecipeStore from "../store/Store";

function RecipeList() {
    const recipes = useRecipeStore(state => state.recipes)

    return (
        <div>
            <h2>List of Recipes</h2>
            {
                recipes.map((recipe) => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default  RecipeList
