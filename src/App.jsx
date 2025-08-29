import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import RecipeDetails from "./RecipeDetails";
import RecipeList from "./Pages/recipeList";
import Favorites from "./Pages/Favorite";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/recipe/:id" element={<RecipeList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
