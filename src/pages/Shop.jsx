import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'; // 1. Import this hook
import PageTransition from '../components/PageTransition';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import useDebounce from '../hooks/useDebounce';
import '../styles/search.css';

const Shop = () => {
  // 1. Get the category from the URL (e.g., ?cat=men)
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('cat');

  // 2. SEO Title Update
  useEffect(() => {
    const title = categoryFromUrl 
      ? `${categoryFromUrl.charAt(0).toUpperCase() + categoryFromUrl.slice(1)} Collection | Creative Implex`
      : "All Collections | Creative Implex";
    document.title = title;
  }, [categoryFromUrl]);

  // 3. Search State
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // 4. MASTER FILTER LOGIC
  const filteredProducts = useMemo(() => {
    // Start with ALL products
    let data = products;

    // Step A: Filter by URL Category (if one exists)
    if (categoryFromUrl) {
      data = data.filter(
        (product) => product.category.toLowerCase() === categoryFromUrl.toLowerCase()
      );
    }

    // Step B: Filter by Search Term (if user typed something)
    if (debouncedSearchTerm) {
      const lowerTerm = debouncedSearchTerm.toLowerCase();
      data = data.filter((product) => {
        return (
          product.name.toLowerCase().includes(lowerTerm) ||
          product.subCategory.toLowerCase().includes(lowerTerm) ||
          product.colors.some(c => c.toLowerCase().includes(lowerTerm))
        );
      });
    }

    return data;
  }, [categoryFromUrl, debouncedSearchTerm]);

  return (
    <PageTransition>
      <div style={{ padding: '2rem 5%', minHeight: '100vh' }}>
        
        {/* Dynamic Header */}
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '2rem', 
          textAlign: 'center', 
          letterSpacing: '2px',
          textTransform: 'uppercase' 
        }}>
          {categoryFromUrl ? `${categoryFromUrl} Collection` : 'All Collections'}
        </h1>

        {/* Search Bar UI */}
        <div className="search-container">
          <input 
            type="text" 
            placeholder={`Search in ${categoryFromUrl || 'store'}...`}
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm !== debouncedSearchTerm && (
            <span className="search-status">Typing...</span>
          )}
        </div>

        {/* Results Grid */}
        {filteredProducts.length > 0 ? (
          <div className="shop-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>No matches found</h3>
            <p>Try clearing your search or checking another category.</p>
            {/* Button to clear search/category if empty */}
            {(searchTerm || categoryFromUrl) && (
               <button 
                 onClick={() => {
                   setSearchTerm('');
                   window.location.href = '/shop'; // Reset to all
                 }}
                 style={{ 
                   marginTop: '1rem', 
                   padding: '10px 20px', 
                   background: '#fff', 
                   color: '#000',
                   border: 'none',
                   cursor: 'pointer'
                 }}
               >
                 View All Products
               </button>
            )}
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Shop;