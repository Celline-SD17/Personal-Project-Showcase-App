import { useEffect,useState } from "react";
import "./Admin.css"; 

import ProductForm from "../components/ProductForm";

import ProductList from "../components/ProductList";

function Admin(){
    const [products,setProducts]= useState([]);
    const [editingProduct, setEditingProduct]= useState(null);
    const [showProducts, setShowProducts] = useState(false);
    //Fetching products from dbn.json.
        useEffect(()=>{
            fetch("http://localhost:3001/products")
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

    //Adding a new product using POST request
    function addProduct(newProduct){
        fetch("http://localhost:3001/products",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
            })
        .then(response=> response.json())
        .then(data=>{setProducts([ ...products, data ])
        })
    }
    //Deleting a product using Delete Request
    function deleteProduct(id){
        fetch(`http://localhost:3001/products/${id}`,{
            method:"DELETE"
        })
        .then(()=>{
           setProducts(products.filter(product=>product.id!==id)
            )
        })
    }

    //Editing a product
    function handleEdit(product){
        setEditingProduct(product)
    }


    function updateProduct(updatedProduct){
        fetch(`http://localhost:3001/products/${updatedProduct.id}`,{
            method:"PATCH",
            headers:{ "Content-Type": "application/json" },
            body: JSON.stringify(updatedProduct)
         })
        .then(response=> response.json())
        .then(data=> {
        setProducts(products.map(product => product.id=== data.id ? data : product)
        )   
        setEditingProduct(null)
        })
    }
    return(
        <div>
            <h1>Admin Portal</h1>
            <ProductForm onAdd={addProduct} editingProduct={editingProduct} onUpdate={updateProduct}/>
            <button className="manage-btn"onClick={()=> setShowProducts(!showProducts)}>{showProducts? "HideProducts" : "Manage Products"}</button>
            {showProducts && (
            <ProductList products={products} onDelete={deleteProduct} onEdit={handleEdit}/>
            )}
        </div>      
    )
}
export default Admin;