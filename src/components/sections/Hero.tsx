import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
// HeroScene component removed due to missing module
// import HeroScene from '../3d/HeroScene';
import TypingEffect from '../common/TypingEffect';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=1920",
"https://www.propertyfinder.ae/blog/wp-content/uploads/2022/09/shutterstock_1721325934-1.jpg", 
"https://asaanghar.com/wp-content/uploads/2024/07/Home-Loan-Schemes.jpg",
"https://tse3.mm.bing.net/th/id/OIP.XOFJb5EH0i4dnldJ2ldB-wAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
"https://media.istockphoto.com/id/1319926193/photo/hands-giving-house-model-to-other-hands-with-money-concept-of-real-estate-and-deal.jpg?s=612x612&w=0&k=20&c=vc7ajjESV91jChU-_BKszjd8gE4GP4UUfd9w8OaWr6s=",
    "https://static.vecteezy.com/system/resources/thumbnails/006/860/587/small_2x/financial-loan-concept-businessmen-stand-on-money-coin-loan-money-loan-officer-free-photo.JPG",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 -z-20">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: idx === currentSlide ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${img})` }}
          />
        ))}
      </div>

      {/* HeroScene component removed due to missing module */}

      <div className="max-w-7xl mx-auto px-4 w-full">
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
