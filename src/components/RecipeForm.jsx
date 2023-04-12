import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
export default function RecipeForm({ onSubmit }) {
  const [recipeName, setRecipeName] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState("");
  const [recipeMethod, setRecipeMethod] = useState("");
  const onSubmitRecipe = () => {
    //call the callback function passed through props
    onSubmit({
      name: recipeName,
      ingredients: recipeIngredients,
      method: recipeMethod,
    });
  };
  return (
    <div className="recipe-editor">
      <p>{recipeName}</p>
      <TextField
        label="Recipe Name"
        value={recipeName}
        className="form-input"
        onChange={(e) => {
          setRecipeName(e.target.value);
        }}
      />
      <TextField
        label="Ingredients"
        value={recipeIngredients}
        className="form-input"
        onChange={(e) => {
          setRecipeIngredients(e.target.value);
        }}
      />
      <TextField
        label="recipeMethod"
        value={recipeMethod}
        className="form-input"
        onChange={(e) => {
          setRecipeMethod(e.target.value);
        }}
      />
      <Button variant="contained" onClick={onSubmitRecipe}>
        Submit Recipe
      </Button>
    </div>
  );
}
