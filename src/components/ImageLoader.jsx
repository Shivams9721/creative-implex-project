import React, { useState } from 'react';
import '../styles/skeleton.css';

const ImageLoader = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Show Skeleton if image is not loaded yet */}
      {!isLoaded && <div className="skeleton-box" />}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`${className} img-fade-in ${isLoaded ? 'img-loaded' : ''}`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy" // Native browser optimization
      />
    </div>
  );
};

export default ImageLoader;