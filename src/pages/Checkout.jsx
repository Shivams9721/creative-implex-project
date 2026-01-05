import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi'; // Import Icons
import '../styles/checkout.css';

const Checkout = () => {
  // Get all cart functions
  const { cartItems, getCartTotal, updateQuantity, removeFromCart } = useCart();
  
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', address: '', city: '', zip: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.address) {
      alert("Please fill in all shipping details.");
      return;
    }
    alert(`Processing Payment for $${getCartTotal().toFixed(2)}... \n(This is a demo)`);
  };

  if (cartItems.length === 0) {
    return (
      <PageTransition>
        <div className="empty-cart">
          <h2>Your bag is empty</h2>
          <p>Start your journey into luxury.</p>
          <br />
          <Link to="/shop">RETURN TO SHOP</Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="checkout-container">
        
        {/* LEFT COLUMN: Shipping & Payment Form */}
        <div className="checkout-section">
          <h2>Shipping Information</h2>
          <form id="checkout-form" onSubmit={handlePlaceOrder}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input 
                  type="text" name="firstName" className="form-input" 
                  value={formData.firstName} onChange={handleChange} required 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input 
                  type="text" name="lastName" className="form-input" 
                  value={formData.lastName} onChange={handleChange} required 
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input 
                type="email" name="email" className="form-input" 
                value={formData.email} onChange={handleChange} required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Address</label>
              <input 
                type="text" name="address" className="form-input" 
                value={formData.address} onChange={handleChange} required 
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">City</label>
                <input 
                  type="text" name="city" className="form-input" 
                  value={formData.city} onChange={handleChange} required 
                />
              </div>
              <div className="form-group">
                <label className="form-label">ZIP Code</label>
                <input 
                  type="text" name="zip" className="form-input" 
                  value={formData.zip} onChange={handleChange} required 
                />
              </div>
            </div>

            <h2>Payment Method</h2>
            <div className="payment-methods">
              <div className="payment-card selected">Credit Card</div>
              <div className="payment-card">Razorpay / UPI</div>
              <div className="payment-card">PayPal</div>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-items">
            {cartItems.map((item) => (
              <div key={item.id} className="summary-item">
                <div style={{ flex: 1 }}>
                  <div className="summary-item-info">
                    <h4>{item.name}</h4>
                    <p style={{ fontSize: '0.8rem', color: '#888' }}>
                      {item.selectedSize} | {item.selectedColor}
                    </p>
                  </div>
                  
                  {/* Styling Container for Controls */}
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', justifyContent: 'space-between' }}>
                    
                    {/* Quantity Pill */}
                    <div className="cart-controls">
                      <button 
                        className="qty-btn" 
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <FiMinus size={14} />
                      </button>
                      
                      <span className="qty-number">{item.quantity}</span>
                      
                      <button 
                        className="qty-btn" 
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label="Increase quantity"
                      >
                        <FiPlus size={14} />
                      </button>
                    </div>

                    {/* Animated Remove Button */}
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                    >
                      <FiTrash2 size={16} /> {/* Animated Icon */}
                      <span style={{ marginLeft: '6px' }}>Remove</span>
                    </button>

                  </div>
                </div>

                <div style={{ textAlign: 'right', marginLeft: '20px' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '1.1rem', whiteSpace: 'nowrap' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="summary-total">
            <span>Total</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>

          <button type="submit" form="checkout-form" className="checkout-btn">
            PAY NOW
          </button>
        </div>

      </div>
    </PageTransition>
  );
};

export default Checkout;