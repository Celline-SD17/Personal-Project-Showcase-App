import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./Pages/Home"
import Products from "./Pages/Products";
import Admin from "./Pages/Admin";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <>
      <Navbar cartCount={cart.length} />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={
            <Products
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

      </Routes>
    </>
  );
}

export default App;