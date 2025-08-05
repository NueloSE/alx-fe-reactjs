import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: function (newRecipe) {
    set((state) => {
      let newRecipes = [...state.recipes, newRecipe];

      return { recipes: newRecipes };
    });
  },
  setRecipes: (recipes) => set({ recipes: recipes }),
}));

export default useRecipeStore;
