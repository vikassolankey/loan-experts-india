import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TypingEffect from '../common/TypingEffect';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://img.freepik.com/premium-photo/business-people-having-discussion-conference-room-office_107420-8611.jpg",
    "https://tse4.mm.bing.net/th/id/OIP.yOYW2xGa296vvcqbPlEnPwHaFU?w=572&h=411&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://wallpaperaccess.com/full/4106455.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/006/860/587/small_2x/financial-loan-concept-businessmen-stand-on-money-coin-loan-money-loan-officer-free-photo.JPG",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-slate-900">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: idx === currentSlide ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${img}")` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1 rounded-full bg-finance-gold/20 border border-finance-gold/30 text-finance-gold font-semibold mb-6"
          >
            Trusted by 5000+ Clients
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 min-h-[150px] md:min-h-[200px]">
            <TypingEffect text="India's Trusted Loan Consultancy Partner" />
          </h1>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed">
            Get fast approvals for Personal, Home, Business, and Mortgage loans with expert financial guidance tailored to your needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-finance-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-finance-gold/20 flex items-center gap-2">
              Apply Now <ChevronRight size={20} />
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
