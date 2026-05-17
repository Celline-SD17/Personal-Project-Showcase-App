import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./Pages/Home"
import Products from "./Pages/Products";
import Admin from "./Pages/Admin";

function App() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] =useState("");


    function addToCart(product) {
        setMessage(`${product.name} was added to your cart!`);
        setTimeout(() => {setMessage(""); 
        }, 2000);
        setCart([...cart, product]);
    }
    return (
    <>
      <Navbar cartCount={cart.length} />
      <div className="page-container">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={ 
            <Products addToCart={addToCart} message={message}/>} />
        <Route path="/admin" element={<Admin />} />

      </Routes>

      </div>
      
    </>
  );
}

export default App;