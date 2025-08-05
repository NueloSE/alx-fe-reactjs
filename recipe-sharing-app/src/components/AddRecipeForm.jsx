import useRecipeStore from "../store/Store";
import { useState } from "react";


function AddRecipeForm () {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const recipes = useRecipeStore(state => state.recipes)
    const [recipeTitle, setTitle] = useState('');
    const [recipeDescription, setRecipeDescription] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        addRecipe({id: Date.now(), title: recipeTitle, description: recipeDescription})
        setRecipeDescription('');
        setTitle('')
        console.log(recipes)
    }
    
    
    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="title">Recipe Title</label>
            <input id="title" type="text" value={recipeTitle} placeholder="Enter Recipe Title"  onChange={(e) => {setTitle(e.target.value)}}/>

            <label htmlFor="description">Recipe Description</label>
            <textarea id="description" name="description" value={recipeDescription} onChange={(e) => {setRecipeDescription(e.target.value)}}></textarea>

            <button onClick={handleSubmit}>Add Recipe</button>

        </form>
    )
}

export default AddRecipeForm;
