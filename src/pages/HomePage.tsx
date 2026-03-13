import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import BanksSlider from '../components/sections/BanksSlider';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import AboutUs from '../components/sections/AboutUs';
import OwnerSection from '../components/sections/OwnerSection';
import StatsSection from '../components/sections/StatsSection';
import TeamSection from '../components/sections/TeamSection';
import BlogsSection from '../components/sections/BlogsSection';
import ReviewsSection from '../components/sections/ReviewsSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <Hero />
    <Services />
     <WhyChooseUs />
    <BanksSlider />
   
    <AboutUs />
    <OwnerSection />
    <StatsSection />
    <TeamSection />
    <BlogsSection />
    <ReviewsSection />
    <ContactSection />
  </motion.div>
);

export default HomePage;
