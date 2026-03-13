import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Facebook, Instagram, Linkedin, Twitter, Youtube, Pin } from 'lucide-react';

const TopHeader = () => (
  <div className="bg-finance-blue text-white py-2 px-4 border-b border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm">
      <div className="flex items-center gap-4">
        <a href="mailto:Loanexpertkndiaa@gmail.com" className="flex items-center gap-2 hover:text-finance-gold transition-colors">
          <Mail size={14} /> Loanexpertkndiaa@gmail.com
        </a>
        <span className="text-white/20 hidden sm:inline">|</span>
        <a href="mailto:Arjunyadav@loanexpertindia.com" className="flex items-center gap-2 hover:text-finance-gold transition-colors">
          <Mail size={14} /> Arjunyadav@loanexpertindia.com
        </a>
      </div>
      <div className="flex items-center gap-4">
        <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-finance-gold"><Facebook size={16} /></motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-finance-gold"><Instagram size={16} /></motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-finance-gold"><Linkedin size={16} /></motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-finance-gold"><Twitter size={16} /></motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-finance-gold"><Youtube size={16} /></motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-finance-gold"><Pin size={16} /></motion.a>
      </div>
    </div>
  </div>
);

export default TopHeader;
