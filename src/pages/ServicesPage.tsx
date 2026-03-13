import React from 'react';
import { motion } from 'framer-motion';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';

const ServicesPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-20">
    <div className="gradient-blue py-24 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">Our Services</h1>
      <p className="text-slate-300">Comprehensive loan solutions for every need.</p>
    </div>
    <Services />
    
  </motion.div>
);

export default ServicesPage;
