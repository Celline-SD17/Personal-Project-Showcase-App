import "./productCard.css";
function ProductCard({ product, onDelete, onEdit, onAddToCart}){
    return(
        <div className="product-card">
            <img src={product.image} alt={product.name} width="230"height="300"/>
            <h3>{product.name}</h3>
            <p>{product.brand}</p>
            <p> KSH {product.price}</p>
            {onAddToCart &&(
                <button className="add-to-cart" type="button" onClick={()=>onAddToCart(product)}>
                    Add To Cart
                </button>
            )}
            {onEdit &&(
                <button className="edit-btn" type="button" onClick={()=>onEdit(product)}>
                    Edit
                </button>
            )}
            {onDelete &&(
                <button className="delete-btn" type="button" onClick={()=>onDelete(product.id)}>
                    Delete
                </button>
            )}
        </div>
    )

}

export default ProductCard