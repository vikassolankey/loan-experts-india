import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import PersonalizedLoans from './WhyChooseUs/PersonalizedLoans';
import FastApproval from './WhyChooseUs/FastApproval';
import SecureTransactions from './WhyChooseUs/SecureTransactions';
import CompetitiveRates from './WhyChooseUs/CompetitiveRates';

const WhyChooseUs = () => {
  const features = [
    { title: "Experts in Difficult Cases", desc: "We specialize in getting loans approved even for complex financial profiles." },
    { title: "CIBIL Issue Support", desc: "Expert guidance to manage and improve your credit score for better loan terms." },
    { title: "Poor Banking Solutions", desc: "Customized solutions for clients with limited banking history." },
    { title: "Up to 200% LTV Financing", desc: "Maximum leverage on your property value for higher loan amounts." },
    { title: "Fast Loan Approvals", desc: "Streamlined process ensuring you get your funds when you need them." },
    { title: "Trusted Banking Partners", desc: "Direct tie-ups with India's leading banks and NBFCs." }
  ];

  return (
    <>
      <section className="py-24 bg-finance-blue text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Loan Experts India?</h2>
              <p className="text-slate-300 text-lg mb-10">We go beyond just processing applications. We provide strategic financial advice to ensure you get the best possible terms.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((f, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-finance-gold/20 flex items-center justify-center text-finance-gold">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{f.title}</h4>
                      <p className="text-sm text-slate-400">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-finance-gold/20 blur-3xl rounded-full"></div>
              <img 
                src="https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/working-on-plans-in-board-room-scaled.jpg" 
                alt="Consultancy" 
                className="relative rounded-3xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <PersonalizedLoans />
      <FastApproval />
      <SecureTransactions />
      <CompetitiveRates />
    </>
  );
};

export default WhyChooseUs;
