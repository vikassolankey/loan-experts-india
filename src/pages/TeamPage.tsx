import React from 'react';
import { motion } from 'framer-motion';
import TeamSection from '../components/sections/TeamSection';
import OwnerSection from '../components/sections/OwnerSection';

const TeamPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-20">
    <div className="gradient-blue py-24 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">Our Team</h1>
      <p className="text-slate-300">Meet the experts behind your success.</p>
    </div>
    <TeamSection />
    <OwnerSection />
  </motion.div>
);

export default TeamPage;
