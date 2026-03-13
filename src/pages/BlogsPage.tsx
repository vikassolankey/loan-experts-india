import React from 'react';
import { motion } from 'framer-motion';
import BlogsSection from '../components/sections/BlogsSection';
import StatsSection from '../components/sections/StatsSection';

const BlogsPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-20">
    <div className="gradient-blue py-24 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">Our Blogs</h1>
      <p className="text-slate-300">Expert advice and financial insights.</p>
    </div>
    <BlogsSection />
    <StatsSection />
  </motion.div>
);

export default BlogsPage;
