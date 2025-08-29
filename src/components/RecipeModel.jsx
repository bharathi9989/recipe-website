import React from "react";

const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null; // If no recipe, don't show modal

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-6 relative transform transition-all duration-500 scale-100">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
        >
          ✖
        </button>

        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />

        <h2 className="text-2xl font-bold mb-2"> {recipe.strMeal}</h2>
        <p className="text-gray-600 mb-2">{recipe.strCategory}</p>
        <h3 className="ingredient">
          {" "}
          <strong>Ingredients </strong>
        </h3>
        <ol>
          <li>1.{recipe.strIngredient1}</li>
          <li>2.{recipe.strIngredient2}</li>
          <li>3.{recipe.strIngredient3}</li>
          <li>4.{recipe.strIngredient4}</li>
        </ol>
        <p className="text-gray-700 mb-4">{recipe.strInstructions}</p>
        <p className="text-gray-600">
          Category: {recipe.strCategory} | Area: {recipe.strArea}
          <p>Source : {recipe.strSource}</p>
          <p>🎦{recipe.strYoutube}</p>
        </p>
      </div>
    </div>
  );
};

export default RecipeModal;
