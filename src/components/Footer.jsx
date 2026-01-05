import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiFacebook, FiMapPin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Column 1: Brand & About */}
        <div style={styles.column}>
          <h3 style={styles.heading}>CREATIVE IMPLEX</h3>
          <p style={styles.text}>
            Redefining luxury since 2024. <br/>
            Premium manufacturing directly from our factory to your wardrobe.
          </p>
          <div style={styles.socials}>
            <FiInstagram size={20} />
            <FiTwitter size={20} />
            <FiFacebook size={20} />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div style={styles.column}>
          <h4 style={styles.subHeading}>Shop</h4>
          <Link to="/shop" style={styles.link}>All Products</Link>
          <Link to="/shop?cat=men" style={styles.link}>Men</Link>
          <Link to="/shop?cat=women" style={styles.link}>Women</Link>
          <Link to="/shop?cat=accessories" style={styles.link}>Accessories</Link>
        </div>

        {/* Column 3: Company */}
        <div style={styles.column}>
          <h4 style={styles.subHeading}>Company</h4>
          <span style={styles.link}>About Us</span>
          <span style={styles.link}>Careers</span>
          <span style={styles.link}>Privacy Policy</span>
          <span style={styles.link}>Terms & Conditions</span>
        </div>

        {/* Column 4: Contact */}
        <div style={styles.column}>
          <h4 style={styles.subHeading}>Contact</h4>
          <div style={styles.contactItem}>
            <FiMapPin style={{ marginRight: '10px' }} />
            <span>123 Fashion Estate, Gurugram, India</span>
          </div>
          <div style={styles.contactItem}>
            <FiMail style={{ marginRight: '10px' }} />
            <span>support@creativeimplex.com</span>
          </div>
        </div>

      </div>
      
      <div style={styles.copyright}>
        &copy; {new Date().getFullYear()} Creative Implex. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#050505',
    borderTop: '1px solid #222',
    color: '#fff',
    padding: '4rem 20px 2rem 20px',
    marginTop: 'auto', // Pushes footer to bottom if content is short
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '3rem',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  heading: {
    letterSpacing: '2px',
    marginBottom: '10px',
  },
  subHeading: {
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    color: '#888',
    marginBottom: '10px',
  },
  text: {
    color: '#ccc',
    fontSize: '0.9rem',
    lineHeight: '1.6',
  },
  link: {
    color: '#ccc',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.3s',
    cursor: 'pointer',
  },
  socials: {
    display: 'flex',
    gap: '15px',
    marginTop: '10px',
    cursor: 'pointer',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.9rem',
    color: '#ccc',
  },
  copyright: {
    textAlign: 'center',
    borderTop: '1px solid #222',
    marginTop: '3rem',
    paddingTop: '2rem',
    fontSize: '0.8rem',
    color: '#666',
  }
};

export default Footer;