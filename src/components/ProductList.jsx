import ProductCard from
"./ProductCard";

function ProductList({

products,

onDelete,

onEdit,

onAddToCart

}){

return(

<div>

{products.map(product=>(

<ProductCard

key={product.id}

product={product}

onDelete={onDelete}

onEdit={onEdit}

onAddToCart={
onAddToCart
}

/>

))}

</div>

)

}

export default ProductList