import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function RecipeDetails() {
  const { id } = useParams(); //get Id from URL
  const [recipe, setRecipe] = useState(null); //state to store recipe details
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => setRecipe(res.data.meals[0])) //save API response in state
      .catch((err) => console.error(err)); //log error if API fails
  }, [id]); //run only once on load

  if (!recipe) return <p>Loading...</p>;
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-80 object-cover rounded-md"
      />
      <p className="mt-4 text-lg">{recipe.strInstructions}</p>
      <p className="mt-2 font-semibold">Category: {recipe.strCategory}</p>
      <p className="mt-2 font-semibold">Area: {recipe.strArea}</p>
    </div>
  );
}

export default RecipeDetails;
