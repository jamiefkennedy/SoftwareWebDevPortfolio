import Recipe from "./Recipe.jsx";
import RecipeGrid from "./RecipeGrid.jsx";
import Form from "./Form.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [recipes, setRecipes] = useState([]);
  const updateRecipeGrid = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };
  return (
    <>
      <header>
        <h1>Recipe Sharing Platform 🍲</h1>
      </header>
      <section className="form">
        <Form updateRecipeGrid={updateRecipeGrid} />
      </section>
      <h2>Recipes</h2>
      <section id="recipe-grid" className="grid-container">
        {recipes.length === 0 ? <p>Your recipes will be shared here.</p> : <RecipeGrid recipes={recipes} />}
      </section>
    </>
  );
}

export default App;
