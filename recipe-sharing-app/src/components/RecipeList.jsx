import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

function RecipeList() {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  return (
    <div className="main-content">
      <h2>List of Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="flex-2 recipe">
          <div>
            <h3>{recipe.title}</h3>
            <p>{recipe.description.slice(0, 30) + "..."}</p>
          </div>

          <Link to="/details" state={recipe.id}>
            <button>Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
