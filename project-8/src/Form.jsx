import { useState } from "react";

function Form({ updateRecipeGrid }) {
    const [formData, setFormData] = useState({
        name: "",
        ingredients: "",
        instructions: "",
        image: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        ingredients: "",
        instructions: "",
        image: ""
    });
    const handleName = (event) => {
        const { value } = event.target;
        if (value.length < 2) {
            setErrors({ ...errors, name: "Recipe name is required." });
        } else {
            setErrors({ ...errors, name: "" });
        }
    
        setFormData({ ...formData, name: value });
    };
    
    const handleIngredients = (event) => {
        const { value } = event.target;
        if (value.length < 2) {
            setErrors({ ...errors, ingredients: "Ingredients are required." });
        } else {
            setErrors({ ...errors, ingredients: "" });
        }

        setFormData({ ...formData, ingredients: value });
    };
    
    const handleInstructions = (event) => {
        const { value } = event.target;
        if (value.length < 2) {
            setErrors({ ...errors, instructions: "Instructions are required." });
        } else {
            setErrors({ ...errors, instructions: "" });
        }

        setFormData({ ...formData, instructions: value });
    };
    const handleImage = (event) => {
        const { value } = event.target;
        if (!value) {
            setErrors({ ...errors, image: "A URL for the image of the dish is required." });
        } else {
            setErrors({ ...errors, image: "" });
        }

        setFormData({ ...formData, image: value });
    };
    const submitHandler = (event) => {
        event.preventDefault();
    
        const { name, ingredients, instructions, image } = formData;
        if (
            name &&
            !errors.name &&
            ingredients &&
            !errors.ingredients &&
            instructions &&
            !errors.instructions &&
            image &&
            !errors.image
        ) {
            updateRecipeGrid(formData);
            setFormData({
                name: "",
                ingredients: "",
                instructions: "",
                image: ""
            });
            setErrors({
                name: "",
                ingredients: "",
                instructions: "",
                image: ""
            });
        } else {
          setErrors({
            ...errors,
            form: "Something is wrong with your submission.",
          });
        }
      };

    return (
        <>
            <form id="recipe-form" onSubmit={submitHandler}>
                <label htmlFor="recipe-name">Recipe's Name:</label>
                <input type="text" name="recipe-name" id="recipe-name" onChange={handleName} value={formData.name} required />
                <label htmlFor="ingredients">Ingredients:</label>
                <span id="ingredients-directions">After you enter each ingredient, press Enter.</span>
                <textarea name="ingredients" id="ingredients" cols="30" rows="10" aria-describedby="ingredients-directions" onChange={handleIngredients} value={formData.ingredients} required></textarea>
                <label htmlFor="instructions">Instructions:</label>
                <span id="instructions-directions">After you enter each instruction step, press Enter.</span>
                <textarea name="instructions" id="instructions" cols="30" rows="10" aria-describedby="instructions-directions" onChange={handleInstructions} value={formData.instructions} required></textarea>
                <label htmlFor="image">URL for Image of the Dish:</label>
                <input type="url" name="image" id="image" onChange={handleImage} value={formData.image} required />
                <section className="errors">
                    <ul>
                        {Object.values(errors).map((error, i) => (
                        <li key={i}>{error}</li>
                        ))}
                    </ul>
                </section>
                <button id="submit" type="submit">Create Recipe</button>
            </form>
        </>
    );
}
export default Form;
