import React, { useState, useEffect } from 'react';
import "../Styles/Buynow.css"
export const BuyNow = () => {
  const [cart, setCart] = useState([]);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handlePayment = () => {
    setPaymentSuccess(true);
    
    localStorage.removeItem('cart');
  };

  return (
    <div className="buy-now-page">
      {paymentSuccess ? (
        <div className="payment-success">
          <h1>Payment Successful!</h1>
          <p>Thank you for your purchase. Your order has been logged.</p>
          <button onClick={() => window.location.href = '/'}>Go to Home</button>
        </div>
      ) : (
        <div>
          <h1>Your Cart</h1>
          {cart.length === 0 ? (
            <p>Your cart is empty. Please add items to your cart first.</p>
          ) : (
            <div className="cart-items">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>₹{item.price.toFixed(2)}</td>
                      <td>{item.quantity}</td>
                      <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={handlePayment} className="buy-button">
                Complete Purchase
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
