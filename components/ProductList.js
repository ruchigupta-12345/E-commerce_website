import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, onAdd, viewMode }) {
  return (
    <div className={`product-list ${viewMode}`}>
      {products.map(prod => (
        <ProductCard key={prod.id} product={prod} onAdd={onAdd} viewMode={viewMode} />
      ))}
    </div>
  );
}
