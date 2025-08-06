import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
    const filterFn = useRecipeStore((state) => state.filterRecipes);

    const navigate = useNavigate()

    function handleChange (event) {

        navigate('/list')

        setSearchTerm(event.target.value);
        filterFn();

    }

    return (
      <div>
        <input
          type="text"
          placeholder="Search for a recipe..."
          onChange={(e) => handleChange(e)}

          className="input-field"
        />
      </div>
    );
}

export default SearchBar;
