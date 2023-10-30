import { useState } from "react";
import styles from "./App.module.css";
import { recipes } from "./data/recipes";
import { List } from "./components/List/List";
import { Cookbook } from "./components/Cookbook/Cookbook";
import { Recipe } from "./components/Recipe/Recipe";
import { RecipeContext } from "./context/RecipeContext";

function App() {
    const [selectedRecipeId, setSelectedRecipeId] = useState(1);

    const selectedRecipe = recipes.find(
        (recipe) => recipe.id === selectedRecipeId
    );

    return (
        <>
            <div className={styles.container}>
                <List
                    recipes={recipes}
                    onSelectRecipe={(id) => setSelectedRecipeId(id)}
                />
                <RecipeContext.Provider value={selectedRecipe}>
                    <Cookbook heading="Książka kucharska" />
                </RecipeContext.Provider>
            </div>

            <div className={styles.promoted}>
                <h2>Przepis tygodnia:</h2>
                <RecipeContext.Provider value={recipes[3]}>
                    <Recipe />
                </RecipeContext.Provider>
            </div>
        </>
    );
}

export default App;
