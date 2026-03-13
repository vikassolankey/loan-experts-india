import React from 'react';
import { motion } from 'framer-motion';
import Counter from '../common/Counter';

const StatsSection = () => {
  const stats = [
    { label: "Loans Approved", value: 5000, suffix: "+" },
    { label: "Banking Partners", value: 50, suffix: "+" },
    { label: "Years Experience", value: 10, suffix: "+" },
    { label: "Client Satisfaction", value: 95, suffix: "%" }
  ];

  return (
    <section className="py-20 gradient-blue text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-finance-gold mb-2 flex items-center justify-center">
                <Counter value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <div className="text-slate-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
