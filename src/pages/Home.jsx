import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import '../styles/home.css';

const Home = () => {
  useEffect(() => {
    document.title = "Creative Implex | Luxury Fashion";
  }, []);

  return (
    // REMOVED <PageTransition> wrapper
    <div className="home-page">
      <Hero />
      <CategoryGrid />
    </div>
  );
};

export default Home;