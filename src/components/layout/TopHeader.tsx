import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Phone,
} from "lucide-react";
import Pinterest from "../common/Pinterest";

const TopHeader = () => (
  <div className="bg-finance-blue text-white py-2 px-4 border-b border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] sm:text-xs">
      <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-2">
        <a
          href="mailto:Arjunyadav@loanexpertindia.com"
          className="flex items-center gap-1.5 hover:text-finance-gold transition-colors whitespace-nowrap"
        >
          <Mail size={12} /> Arjunyadav@loanexpertindia.com
        </a>

        <span className="text-white/20 hidden lg:inline">|</span>
        <a
          href="mailto:Arjun.loanexperts@gmail.com"
          className="flex items-center gap-1.5 hover:text-finance-gold transition-colors whitespace-nowrap"
        >
          <Mail size={12} /> Arjun.loanexperts@gmail.com
        </a>

        <span className="text-white/20 hidden md:inline">|</span>
        <a
          href="tel:+919876543210"
          className="flex items-center gap-1.5 hover:text-finance-gold transition-colors whitespace-nowrap"
        >
          <Phone size={12} /> +91 98765 43210
        </a>
      </div>
      <div className="flex items-center gap-4">
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="#"
          className="hover:text-finance-gold"
        >
          <Facebook size={16} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="#"
          className="hover:text-finance-gold"
        >
          <Instagram size={16} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="#"
          className="hover:text-finance-gold"
        >
          <Linkedin size={16} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="#"
          className="hover:text-finance-gold"
        >
          <Twitter size={16} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="#"
          className="hover:text-finance-gold"
        >
          <Youtube size={16} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="#"
          className="hover:text-finance-gold"
        >
          <Pinterest size={16} />
        </motion.a>
      </div>
    </div>
  </div>
);

export default TopHeader;
