function ProductCard({ product, onDelete, onEdit, onAddToCart}){
    return(
        <div>
            <img src={product.image} alt={product.name} width="250"/>
            <h3>{product.name}</h3>
            <p>{product.brand}</p>
            <p> KSH {product.price}</p>
            {onAddToCart &&(
                <button onClick={()=>onAddToCart(product)}>
                    Add To Cart
                </button>
            )}
            {onEdit &&(
                <button onClick={()=>onEdit(product)}>
                    Edit
                </button>
            )}
            {onDelete &&(
                <button onClick={()=>onDelete(product.id)}>
                    Delete
                </button>
            )}
        </div>
    )

}

export default ProductCard