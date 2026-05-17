import { useEffect,useState } from "react";
import "./productForm.css"

function ProductForm({ onAdd, editingProduct, onUpdate }) {
  const [formData, setFormData]= useState({     
    name:"",
    brand:"",
    category:"",
    price:"",
    image:"",
    description:"",
    stock:""
  })
  useEffect(()=>{
    if(editingProduct){
      setFormData(editingProduct)
    }
  },[editingProduct])
  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault()
    if(editingProduct){
      onUpdate(formData)
    }
    else{onAdd(formData)}
    setFormData({
      name:"",
      brand:"",
      category:"",
      price:"",
      image:"",
      description:"",
      stock:""
    })
  }
  return(
  <form onSubmit= {handleSubmit}>
    <div className="form-row">
      <label>Product Name: </label>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange}/>
    </div>
    <div className="form-row">
      <label>Brand:  </label>
      <input name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange}/>
    </div>
    <div className="form-row">
      <label>Category: </label>
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange}/>
    </div>
    <div className="form-row">
      <label>Price: </label>
      <input name="price" placeholder="Price" value={formData.price} onChange={handleChange}/>
    </div>
    <div className="form-row">
      <label>Image URL: </label>
      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>
    </div>
    
    <div className="form-row">
      <label>Description: </label>
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange}/>
    </div>
    <button>
      {editingProduct ? "Update" : "Add Product"}
    </button>
  </form>
)

}

export default ProductForm