import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => (
  <section className="py-24 bg-white" id="about">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1">
          <img 
            src="https://tse1.explicit.bing.net/th/id/OIP.ZXbfH-7E6ni5nyewON-2PAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" 
            alt="Office" 
            className="rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1">
          <span className="text-finance-gold font-bold tracking-widest uppercase text-sm mb-4 block">About Our Company</span>
          <h2 className="text-4xl font-bold text-finance-blue mb-6">Expert Financial Guidance for Every Step</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Loan Experts India provides professional financial consultancy services helping individuals and businesses secure loans from India's top banks and NBFCs. Our experienced advisors guide clients through every step of the loan process ensuring quick approvals and best interest rates.
          </p>
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3 text-slate-700 font-medium">
              <div className="w-6 h-6 rounded-full bg-finance-blue text-white flex items-center justify-center text-[10px]"><CheckCircle2 size={12} /></div>
              Personalized Loan Strategies
            </div>
            <div className="flex items-center gap-3 text-slate-700 font-medium">
              <div className="w-6 h-6 rounded-full bg-finance-blue text-white flex items-center justify-center text-[10px]"><CheckCircle2 size={12} /></div>
              Transparent and Ethical Process
            </div>
            <div className="flex items-center gap-3 text-slate-700 font-medium">
              <div className="w-6 h-6 rounded-full bg-finance-blue text-white flex items-center justify-center text-[10px]"><CheckCircle2 size={12} /></div>
              End-to-End Documentation Support
            </div>
          </div>
          <Link to="/contact" className="inline-block bg-finance-blue text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all">
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
