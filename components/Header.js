import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
export default function Header() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="header">
      <Link to="/"><h1>React E‑Commerce</h1></Link>
      <Link to="/cart" className="cart-link">
        🛒 Cart ({totalItems})
      </Link>
    </header>
  );
}
