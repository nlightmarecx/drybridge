// src/pages/ProductDisplay.js

import React from "react";
import { useParams } from "react-router-dom";
import rawProducts from "../data/productsdata";

function ProductDetailPage() {
  const { productId } = useParams();
  const product = rawProducts.find(p => p.productId === productId);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p><strong>Author:</strong> {product.author}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Subcategory:</strong> {product.subcategory}</p>
      <p><strong>Product Size:</strong> {product.productSize}</p>
      <p><strong>Product ID:</strong> {product.productId}</p>
      <p><strong>Notes:</strong> {product.notes}</p>
    </div>
  );
}

export default ProductDetailPage;
