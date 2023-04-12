import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Recipe from "./Recipe";
const RecipeLists = ({ recipes }) => {
  const exampleRecipes = [
    {
      name: "Pizza",
      ingredients: "abcd",
      method: "abcd",
    },
    {
      name: "Pizza",
      ingredients: "abcd",
      method: "abcd",
    },
  ];
  return (
    <div className="recipes-container">
      {recipes.map((recipe) => {
        return (
          <>
            <Recipe recipe={recipe} />
          </>
        );
      })}
    </div>
  );
};
export default RecipeLists;
