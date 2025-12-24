import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Nannies from "./pages/Nannies/Nannies.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import MainLayout from "./layout/MainLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nannies" element={<Nannies />} />
          <Route
            path="/favorites"
            element={
              // <PrivateRoute>
              <Favorites />
              // </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
