import ProductCard from "./ProductCard";
import "./productList.css";

function ProductList({products, onDelete, onEdit, onAddToCart}){
    return(
    <div className="product-list">
        {products.map(product=>(<ProductCard
        key={product.id}
        product={product}
        onDelete={onDelete}
        onEdit={onEdit}
        onAddToCart={onAddToCart}
        />
     ))}
    </div>

)

}

export default ProductList