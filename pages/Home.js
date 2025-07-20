import React, { useState, useContext } from 'react';
import productsData from '../data/products';
import { CartContext } from '../context/CartContext';
import ProductList from '../components/ProductList';

export default function Home() {
  const [viewMode, setViewMode] = useState('grid');
  const [query, setQuery] = useState('');
  const { addToCart } = useContext(CartContext);

  const filtered = productsData.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <div className="controls">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div>
          <button onClick={() => setViewMode('grid')}>Grid</button>
          <button onClick={() => setViewMode('list')}>List</button>
        </div>
      </div>
      <ProductList products={filtered} onAdd={addToCart} viewMode={viewMode} />
    </div>
  );
}
