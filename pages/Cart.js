import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cart.length === 0
        ? <p>Cart is empty. <Link to="/">Shop now</Link></p>
        : (
          <table className="cart-table">
            <thead>
              <tr><th>Product</th><th>Qty</th><th>Price</th><th>Remove</th></tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type="number" min="1"
                      value={item.qty}
                      onChange={e => updateQty(item.id, +e.target.value)}
                    />
                  </td>
                  <td>₹{(item.price * item.qty).toFixed(2)}</td>
                  <td><button onClick={() => removeFromCart(item.id)}>🗑️</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      <h3>Total: ₹{total.toFixed(2)}</h3>
      {cart.length > 0 && <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>}
    </div>
  );
}
