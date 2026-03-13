import React from 'react';

const OwnerSection = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-4xl mx-auto px-4">
      <div className="glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
          <img 
            src="gallery/owner.jpeg" 
            alt="Mr. Arjun Yadav" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <span className="bg-finance-blue/10 text-finance-blue px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">Founder & CEO</span>
          <h2 className="text-3xl font-bold text-finance-blue mb-2">Mr. Arjun Yadav</h2>
          <p className="text-finance-gold font-bold mb-6">Founder & Loan Consultant</p>
          <p className="text-slate-600 italic leading-relaxed">
            "Our mission is to simplify the complex world of finance for every Indian. We believe that everyone deserves access to fair credit and expert guidance to achieve their dreams."
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default OwnerSection;
