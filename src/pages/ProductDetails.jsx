import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import PageTransition from '../components/PageTransition';
import ImageLoader from '../components/ImageLoader'; // Import
import '../styles/productDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [error, setError] = useState('');

  // ... imports

  // Find existing useEffect for scroll and REPLACE it with this:
  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      document.title = `${product.name} | Creative Implex`;
    }
  }, [id, product]);

  // ... rest of component

  if (!product) {
    return <div style={{ color: '#fff', textAlign: 'center', marginTop: '4rem' }}>Product not found.</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError('Please select a size.');
      return;
    }
    if (!selectedColor && product.colors.length > 0) {
      setError('Please select a color.');
      return;
    }

    addToCart({
      ...product,
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      selectedSize,
      selectedColor
    });

    setError('');
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <PageTransition>
      <div className="pdp-container">
        {/* Left: Image with Loader */}
        <div className="pdp-image-section">
          {/* We wrap ImageLoader in a div with explicit dimensions if needed, 
              but standard CSS usually handles it. Here we use the class pdp-main-image */}
          <div style={{ width: '100%', minHeight: '500px', backgroundColor: '#111' }}>
             <ImageLoader 
               src={product.image} 
               alt={product.name} 
               className="pdp-main-image" 
             />
          </div>
        </div>

        {/* Right: Info */}
        <div className="pdp-info">
          <span className="pdp-category">{product.category} / {product.subCategory}</span>
          <h1 className="pdp-title">{product.name}</h1>
          <span className="pdp-price">${product.price.toFixed(2)}</span>
          <p className="pdp-description">{product.description}</p>

          <div className="selector-group">
            <span className="selector-label">Size: {selectedSize}</span>
            <div className="size-options">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => { setSelectedSize(size); setError(''); }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="selector-group">
            <span className="selector-label">Color: {selectedColor}</span>
            <div className="size-options">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`size-btn ${selectedColor === color ? 'selected' : ''}`}
                  onClick={() => { setSelectedColor(color); setError(''); }}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {error && <p style={{ color: '#ff4444', marginTop: '10px' }}>{error}</p>}

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Bag
          </button>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProductDetails;