import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    // Updated Class Name
    <section className="hero-container">
      {/* Updated Class Name */}
      <h1 className="hero-title-fixed">Creative Implex</h1>
      <p className="hero-subtitle">Redefining Digital Luxury Fashion</p>
      <Link to="/shop">
        <button className="cta-button">Explore Collection</button>
      </Link>
    </section>
  );
};

export default Hero;