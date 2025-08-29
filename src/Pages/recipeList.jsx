import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function RecipeList() {
  const { id } = useParams();
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => setRecipes(res.data.meals[0]))
      .catch((err) => console.error(err));
  }, [id]);
  if (!recipes) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Back Button */}
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">
        ← Back to Recipes
      </Link>

      {/* Recipe Title */}
      <h1 className="text-3xl font-bold mb-4">{recipes.strMeal}</h1>

      {/* Recipe Image */}
      <img
        src={recipes.strMealThumb}
        alt={recipes.strMeal}
        className="rounded-xl w-full mb-6"
      />

      {/* Category & Area */}
      <p className="text-lg mb-2">
        <strong>Category:</strong> {recipes.strCategory}
      </p>
      <p className="text-lg mb-4">
        <strong>Area:</strong> {recipes.strArea}
      </p>

      {/* Instructions */}
      <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
      <p className="leading-relaxed mb-6">{recipes.strInstructions}</p>

      {/* YouTube Video if available */}
      {recipes.strYoutube && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Video Tutorial</h2>
          <a
            href={recipes.strYoutube}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            Watch on YouTube
          </a>
        </div>
      )}
    </div>
  );
}

export default RecipeList;
