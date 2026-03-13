import React from 'react';
import { motion } from 'framer-motion';
import { BadgePercent, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompetitiveRates = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-finance-blue font-bold uppercase tracking-widest text-sm mb-4">
              <div className="p-2 bg-finance-gold/20 rounded-lg text-finance-gold">
                <BadgePercent size={20} />
              </div>
              Competitive Rates
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Our interest rates are competitive & affordable.
            </h2>
            <div className="space-y-6 text-slate-500 text-lg leading-relaxed mb-12">
              <p>
                Senectus et netus et malesuada fames ac turpis egestas. Vivamus arcu felis bibendum ut tristique et. Urna porttitor rhoncus dolor purus. Faucibus interdum posuere lorem ipsum. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque.
              </p>
              <p>
                Etiam dignissim diam quis enim lobortis scelerisque fermentum. Ipsum consequat nisl vel pretium lectus quam id leo in. Ut ornare lectus sit amet est placerat in egestas erat.
              </p>
            </div>
            
            <Link to="/contact" className="inline-flex bg-finance-blue text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-finance-blue/20 items-center gap-2 group">
              Our Features <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
        
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600" 
                alt="Business Loan Document" 
                className="w-full h-full object-cover min-h-[250px]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-finance-gold p-8 rounded-2xl shadow-xl text-white flex flex-col justify-center"
            >
              <BadgePercent size={40} className="mb-6 opacity-80" />
              <h4 className="text-2xl font-bold mb-4">Competitive loan rates.</h4>
              <p className="text-white/90 leading-relaxed">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-finance-gold p-8 rounded-2xl shadow-xl text-white flex flex-col justify-center order-last md:order-none"
            >
              <BadgePercent size={40} className="mb-6 opacity-80" />
              <h4 className="text-2xl font-bold mb-4">Our rates beat competitors.</h4>
              <p className="text-white/90 leading-relaxed">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://holistic-e.com/wp-content/uploads/2025/09/Competitive-SME-Lending-Rates-Business-Loan-Interest-Rate-2048x1366.jpeg" 
                alt="Money Hand" 
                className="w-full h-full object-cover min-h-[250px]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CompetitiveRates;
