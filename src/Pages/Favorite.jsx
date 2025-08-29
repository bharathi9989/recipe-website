// src/components/FavoriteButton.jsx
import React from "react";

function FavoriteButton({ recipe, onAddFavorite }) {
  return (
    <button
      className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      onClick={(e) => {
        e.stopPropagation(); // card click stop pannum, modal open aagadhu
        onAddFavorite(recipe);
      }}
    >
      ❤️ Add to Favorites
    </button>
  );
}

export default FavoriteButton;
