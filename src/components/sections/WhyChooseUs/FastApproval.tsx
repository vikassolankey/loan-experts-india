import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FastApproval = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-finance-blue font-bold uppercase tracking-widest text-sm mb-4">
              <div className="p-2 bg-finance-gold/20 rounded-lg text-finance-gold">
                <Clock size={20} />
              </div>
              Fast Approval
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              We provide fast approval of loans, so you can get the money you need quickly.
            </h2>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed">
              Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Tristique et egestas quis ipsum suspendisse ultrices. Phasellus vestibulum lorem sed risus ultricies. Euismod lacinia at quis risus. Tincidunt vitae semper quis lectus nulla at volutpat diam. Vitae tortor condimentum lacinia quis.
            </p>
            
            <div className="flex flex-wrap items-center gap-8">
              <Link to="/contact" className="bg-finance-blue text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-finance-blue/20 flex items-center gap-2 group">
                Read More <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-finance-gold rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium">Call Us Now</p>
                  <p className="text-xl font-bold text-slate-900">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="flex-1 relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl ml-auto max-w-[85%] border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&q=80&w=800" 
                alt="Agriculture Loan" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Overlapping Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 -left-10 w-2/3 rounded-3xl overflow-hidden shadow-2xl border-8 border-white hidden md:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&q=80&w=600" 
                alt="Happy Family" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default FastApproval;
