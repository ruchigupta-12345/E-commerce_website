import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const startPayment = async (e) => {
    e.preventDefault();
    await new Promise(res => setTimeout(res, 1500)); // simulate payment
    navigate('/thank-you');
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      <form onSubmit={startPayment} className="checkout-form">
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <button type="submit">Pay ₹{cart.reduce((s,i) => s + i.price * i.qty, 0).toFixed(2)}</button>
      </form>
    </div>
  );
}
