import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  const phoneNumber = "+919876543210";
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in your loan services. Could you please provide more information?");

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a 
        href={`https://wa.me/${phoneNumber.replace('+', '')}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center animate-bounce hover:bg-[#128C7E] transition-colors"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
      </motion.a>

      {/* Call Button */}
      <motion.a 
        href={`tel:${phoneNumber}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-finance-blue text-white rounded-full shadow-2xl flex items-center justify-center animate-pulse hover:bg-opacity-90 transition-all"
        title="Call Us Now"
      >
        <Phone size={24} fill="currentColor" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
