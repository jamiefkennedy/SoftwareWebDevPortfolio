function Recipe({ recipe }) {
  function splitTextareaByLine(textarea) {
    // Split the value into an array of lines, using the newline character (\n) as the separator.
    const lines = textarea.split("\n");

    // Return the array of lines.
    return lines;
  }
  function convertLinesToListItems(lines) {
    const items = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      items.push(<li key={i}>{line}</li>);
    }
    return items;
  }
  const allIngredients = splitTextareaByLine(recipe.ingredients);
  const allInstructions = splitTextareaByLine(recipe.instructions);

  return (
    <>
      <div className="recipe">
        <h3>{recipe.name}</h3>
        <img src={recipe.image} alt={recipe.name} />
        <h4>Ingredients</h4>
        <ul>{convertLinesToListItems(allIngredients)}</ul>
        <h4>Instructions</h4>
        <ol>{convertLinesToListItems(allInstructions)}</ol>
      </div>
    </>
  );
}

export default Recipe;
