import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiShoppingBag } from 'react-icons/fi';

const Navbar = () => {
  const { getCartCount } = useCart();

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        
        {/* STATIC LOGO (Clean & Professional) */}
        <Link to="/" style={styles.logo}>
          CREATIVE IMPLEX
        </Link>

        {/* Right Side Actions */}
        <div style={styles.actions}>
          <Link to="/shop" style={styles.link}>SHOP</Link>
          
          <Link to="/checkout" style={styles.cartContainer} aria-label="View Cart">
            <FiShoppingBag size={24} color="#fff" />
            {getCartCount() > 0 && (
              <span style={styles.badge}>{getCartCount()}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    padding: '20px 0',
    borderBottom: '1px solid #222',
    backgroundColor: '#000',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    letterSpacing: '2px',
    fontSize: '1.2rem',
    textTransform: 'uppercase',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
  },
  link: {
    color: '#ccc',
    textDecoration: 'none',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'color 0.3s',
  },
  cartContainer: {
    position: 'relative',
    cursor: 'pointer',
    color: '#fff',
    textDecoration: 'none',
  },
  badge: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: '#fff',
    color: '#000',
    fontSize: '10px',
    fontWeight: 'bold',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Navbar;