import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

const FloatingButtons = () => (
  <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
    <motion.button 
      whileHover={{ scale: 1.1 }}
      className="w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center animate-pulse"
    >
      <Phone size={24} />
    </motion.button>
    <motion.button 
      whileHover={{ scale: 1.1 }}
      className="w-14 h-14 bg-blue-500 text-white rounded-full shadow-2xl flex items-center justify-center"
    >
      <Mail size={24} />
    </motion.button>
  </div>
);

export default FloatingButtons;
