import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nannies from "./pages/Nannies/Nannies";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/тannies" element={<Nannies />} />
        <Route
          path="/favorites"
          element={
            // <PrivateRoute>
            <Favorites />
            // </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
