import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Men',
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=2187&auto=format&fit=crop',
    link: '/shop?cat=men'
  },
  {
    id: 2,
    name: 'Women',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
    link: '/shop?cat=women'
  },
  {
    id: 3,
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523293188086-b25c63953384?q=80&w=2030&auto=format&fit=crop',
    link: '/shop?cat=accessories'
  }
];

const CategoryGrid = () => {
  return (
    <section className="category-section">
      <h2 className="category-header">Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <Link to={cat.link}>
              <img src={cat.image} alt={cat.name} />
              <div className="category-info">
                <span className="category-name">{cat.name}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;