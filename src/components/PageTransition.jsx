import React from 'react';
import { motion } from 'framer-motion';

// Luxury "Fade Up" animation settings
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20, // Start slightly lower
  },
  animate: {
    opacity: 1,
    y: 0, // Slide up to natural position
  },
  exit: {
    opacity: 0,
    y: -20, // Slide up and fade out on exit
  }
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Custom "cubic-bezier" for premium feel
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;