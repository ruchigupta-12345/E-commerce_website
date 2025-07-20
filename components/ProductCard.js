import React from 'react';
export default function ProductCard({ product, onAdd, viewMode }) {
  return (
    <div className={`product-card ${viewMode}`}>
      <img src={product.img} alt={product.name} />
      <div className="info">
        <h2>{product.name}</h2>
        <p>{product.desc}</p>
        <p className="price">₹{product.price.toFixed(2)}</p>
        <button onClick={() => onAdd(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
