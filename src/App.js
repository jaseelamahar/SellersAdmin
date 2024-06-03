
import React ,{useState}from "react"
import ProductList from "./ProductList"

const  App=() =>{

 const [products,setProducts]=useState(()=>{
    const storedproducts=JSON.parse(localStorage.getItem('products'))||[]
    return storedproducts

  });
  
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [totalValue, setTotalValue] = useState();



  const handleAddProduct=(e)=>{
    e.preventDefault()
    if(productId && sellingPrice && productName){
      const newProduct={
        id:productId,
        price:sellingPrice,
        name:productName
      }
      setProducts([...products,newProduct]);
      setProductId("")
      setProductName("")
      setSellingPrice("")
      calculateTotalValue([...products, newProduct])
    }
  }
  const calculateTotalValue = (updatedProducts) => {
    if (!updatedProducts || updatedProducts.length === 0) {
      setTotalValue(0);
      return;
    }
    let total = 0;
    updatedProducts.forEach((product) => {
      total += parseFloat(product.price);
    });
    setTotalValue(total);
  };
  
  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    calculateTotalValue()
  };

  return (
    <div>
       <form onSubmit={handleAddProduct}>
      
    <label> Product ID</label>
    <input value={productId} type="number" onChange={(e)=>setProductId(e.target.value)} ></input>
    <label>SellingPrice</label>
    <input value={sellingPrice} type="number" onChange={(e)=>setSellingPrice(e.target.value)}></input>
    <label>Product Name</label>
    <input  value={productName} type="text" onChange={(e)=>setProductName(e.target.value)}></input>
    <button onClick={handleAddProduct}>Add Product</button>

    </form>
     <h2> Products</h2>
    
    <ProductList sellingPrice={sellingPrice} products={products} deleteProduct={deleteProduct}/>
    <h3> TotalValue worth of Products:Rs{totalValue} </h3>
  
    </div>
    
  );
}
   

export default App;
