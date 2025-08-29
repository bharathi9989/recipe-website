import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RecipeModal from "../components/RecipeModel";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [search, setSearch] = useState("");
  const [Filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => setRecipes(res.data.meals))
      .catch((err) => console.error(err));
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.strMeal
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = !Filter || recipe.strCategory === Filter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <select
          value={Filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Categories</option>
          <option value="Beef">Beef</option>
          <option value="Chicken">Chicken</option>
          <option value="Dessert">Dessert</option>
          <option value="Seafood">Seafood</option>
        </select>
      </div>

      <h1 className="text-3xl font-bold mb-4">Recipes</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredRecipes?.map((recipe) => (
          <div
            key={recipe.idMeal}
            onClick={() => setSelectedRecipe(recipe)}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
          >
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{recipe.strMeal}</h3>
              <p className="text-sm text-gray-600">{recipe.strCategory}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}

export default Home;
