import { useEffect, useState } from "react";

import ProductList from
"../components/ProductList";

import SearchBar from
"../components/SearchBar";

function Products({ addToCart }) {

  const [products,setProducts] =
  useState([]);

  const [searchTerm,setSearchTerm] =
  useState("");

  useEffect(()=>{

    fetch(
      "http://localhost:3001/products"
    )
    .then(r=>r.json())
    .then(data=>
      setProducts(data)
    )

  },[])

  const filteredProducts =
  products.filter((product)=>

     product.name
     .toLowerCase()
     .includes(
       searchTerm.toLowerCase()
     )

  )

  return(

    <div>

      <h1>Shop</h1>

      <SearchBar
       searchTerm={searchTerm}
       setSearchTerm={setSearchTerm}
      />

      <ProductList
       products={filteredProducts}
       onAddToCart={addToCart}
      />

    </div>

  )

}

export default Products;