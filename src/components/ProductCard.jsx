import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiPlus } from 'react-icons/fi';
import ImageLoader from './ImageLoader'; // Import the new component
import '../styles/productCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ ...product, selectedSize: product.sizes[0], selectedColor: product.colors[0] });
  };

  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
      <div className="product-card">
        <div className="product-image-wrapper">
          {product.isNew && <span className="badge-new">New Arrival</span>}
          
          {/* Use Smart Image Loader */}
          <ImageLoader 
            src={product.image} 
            alt={product.name} 
            className="product-image"
          />
          
          <button 
            className="quick-add-btn" 
            onClick={handleQuickAdd}
            title="Quick Add"
            aria-label={`Quick add ${product.name} to cart`}
          >
            <FiPlus size={20} />
          </button>
        </div>
        
        <div className="product-info">
          <div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-category">{product.category} / {product.subCategory}</p>
          </div>
          <span className="product-price">${product.price.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;