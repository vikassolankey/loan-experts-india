import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SecureTransactions = () => (
  <section className="py-24 bg-[#fdfdf7] overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="flex-1">
          <div className="flex gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] border-8 border-white group">
                <img 
                  src="https://hycm.academy/wp-content/uploads/2024/06/The-Importance-of-Security-Measures-on-Forex-Trading-Websites.webp" 
                  alt="Security Expert" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-finance-blue/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg leading-tight">Top-notch security measures.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative mt-12 md:mt-24"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] border-8 border-white group">
                <img 
                  src="https://media.istockphoto.com/id/1339459640/photo/security-concept-of-bank-personal-and-biometric-data-innovation-technology-against-cyber-crime.jpg?s=612x612&w=0&k=20&c=Pu7bgj1S7e-ll3KJaNPCav4IyDLW6p0OaKumO3Eb_yM=" 
                  alt="Secure Transactions" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-finance-blue/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg leading-tight">Protecting personal and financial info.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-finance-blue font-bold uppercase tracking-widest text-sm mb-4">
              <div className="p-2 bg-finance-gold/20 rounded-lg text-finance-gold">
                <ShieldCheck size={20} />
              </div>
              Secure Transactions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              We secure your personal & financial information.
            </h2>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed">
              Amet nulla facilisi morbi tempus iaculis. Sed id semper risus in hendrerit gravida. Massa tempor nec feugiat nisl pretium fusce id. Metus aliquam eleifend mi in nulla.
            </p>
            
            <Link to="/contact" className="inline-flex bg-finance-blue text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-finance-blue/20 items-center gap-2 group">
              More Security <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default SecureTransactions;
