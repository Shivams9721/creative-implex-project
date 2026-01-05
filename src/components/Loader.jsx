import React from 'react';

const Loader = () => {
  return (
    <div style={styles.container}>
      <div className="spinner"></div>
      <style>{`
        .spinner {
          width: 50px;
          height: 50px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-left-color: #fff; /* The glowing part */
          border-radius: 50%;
          animation: spin 1s cubic-bezier(0.55, 0.055, 0.675, 0.19) infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    height: '60vh', // Takes up space so footer doesn't jump up
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Matches background
  },
};

export default Loader;