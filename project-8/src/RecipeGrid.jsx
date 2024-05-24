import Recipe from "./Recipe.jsx";

function RecipeGrid({ recipes }) {
  const cards = [];
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    cards.push(<Recipe key={i} recipe={recipe} />);
  }

  return cards;
}

export default RecipeGrid;
