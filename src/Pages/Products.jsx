import { useEffect, useState } from "react";

import ProductList from "../components/ProductList";

import SearchBar from "../components/SearchBar";

function Products({ addToCart, message}) {
  const [products,setProducts] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");
//Fetching Products
    useEffect(()=>{
        fetch("https://personal-project-showcase-app-1.onrender.com/products")
        .then(response => {
         if(!response.ok){
            throw new Error("Unable to fetch products!");
         }
        return response.json();
     })
        .then(data=> {setProducts(data);
        })
         .catch((error) => {
        console.log(error);
        });
    },[])
//Filtering Products for search functionality
  const filteredProducts = products.filter((product)=>
    product.name.toLowerCase() .includes(
       searchTerm.toLowerCase()
     )

  )

  return(

    <div>
      <h1>Shop</h1>
      {message && (<p>{message}</p>)}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductList products={filteredProducts} onAddToCart={addToCart} />
    </div>

  )

}

export default Products;