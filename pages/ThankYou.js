import React from 'react';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="container thankyou">
      <h2>Thank You for Your Purchase!</h2>
      <Link to="/">Return to Home</Link>
    </div>
  );
}
