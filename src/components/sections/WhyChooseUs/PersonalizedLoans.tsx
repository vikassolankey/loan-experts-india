import React from 'react';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';

const PersonalizedLoans = () => {
  const cards = [
    { title: "Personalized loans", desc: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { title: "Dedicated support", desc: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { title: "Small or large loans", desc: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { title: "Flexibility", desc: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." }
  ];

  return (
    <section className="py-24 bg-[#fdfdf7]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800" 
                alt="Personalized Loans" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          <div className="flex-1">
            <div className="mb-10">
              <div className="flex items-center gap-3 text-finance-blue font-bold uppercase tracking-widest text-sm mb-4">
                <div className="p-2 bg-finance-gold/20 rounded-lg text-finance-gold">
                  <Wallet size={20} />
                </div>
                Personalized Loans
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                We offer personalized loans to cater to your specific needs.
              </h2>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cards.map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 bg-white rounded-xl shadow-sm border-l-4 border-finance-blue hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-bold text-xl text-slate-900 mb-3">{card.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedLoans;
