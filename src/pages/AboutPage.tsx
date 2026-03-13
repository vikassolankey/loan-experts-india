import React from 'react';
import { motion } from 'framer-motion';
import AboutUs from '../components/sections/AboutUs';
import OwnerSection from '../components/sections/OwnerSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';

const AboutPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-20">
    <div className="gradient-blue py-24 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">About Us</h1>
      <p className="text-slate-300">Learn more about our mission and values.</p>
    </div>
    <AboutUs />
 
    <WhyChooseUs />
       <OwnerSection />
  </motion.div>
);

export default AboutPage;
