import React from "react";

const ProductList = ({ products, deleteProduct }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {product.name}
          {product.price}
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
