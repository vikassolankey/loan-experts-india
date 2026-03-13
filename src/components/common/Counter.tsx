import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value, hasStarted]);

  return (
    <motion.span 
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true }}
    >
      {count}
    </motion.span>
  );
};

export default Counter;
