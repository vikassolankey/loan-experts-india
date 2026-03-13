import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';

const ContactPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-20">
    <div className="gradient-blue py-24 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
      <p className="text-slate-300">We are here to help you.</p>
    </div>
    <ContactSection />
  </motion.div>
);

export default ContactPage;
