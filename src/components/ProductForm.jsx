import { useEffect,useState } from "react";

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
    <input name="name" placeholder="Name" value={formData.name} onChange={handleChange}/>
    <input name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange}/>
    <input name="category" placeholder="Category" value={formData.category} onChange={handleChange}/>
    <input name="price" placeholder="Price" value={formData.price} onChange={handleChange}/>
    <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>
    <textarea name="description" placeholder="Description" value={formData.description}onChange={handleChange}/>
    <button>
      {editingProduct ? "Update" : "Add Product"}
    </button>
  </form>
)

}

export default ProductForm