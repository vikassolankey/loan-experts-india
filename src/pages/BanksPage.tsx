import React from 'react';
import { motion } from 'framer-motion';
import BanksSlider from '../components/sections/BanksSlider';

const BanksPage = () => {
  const banks = [
    { name: "SBI Bank", domain: "sbi.co.in" },
    { name: "HDFC Bank", domain: "hdfcbank.com" },
    { name: "ICICI Bank", domain: "icicibank.com" },
    { name: "Axis Bank", domain: "axisbank.com" },
    { name: "Kotak Bank", domain: "kotak.com" },
    { name: "IndusInd Bank", domain: "indusind.com" },
    { name: "Yes Bank", domain: "yesbank.in" },
    { name: "IDFC First Bank", domain: "idfcfirstbank.com" },
    { name: "Tata Capital", domain: "tatacapital.com" },
    { name: "Mahindra Finance", domain: "mahindrafinance.com" },
    { name: "Piramal Finance", domain: "piramalfinance.com" },
    { name: "Aditya Birla Capital", domain: "adityabirlacapital.com" }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-20">
      <div className="gradient-blue py-24 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Associated Banks</h1>
        <p className="text-slate-300">We work with India's top financial institutions.</p>
      </div>
      <BanksSlider />
      <div className="py-24 max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {banks.map(bank => (
          <div key={bank.name} className="p-8 bg-white rounded-2xl shadow-md border border-slate-100 flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform group">
            <div className="w-16 h-16 flex items-center justify-center">
              <img 
                src={`https://www.google.com/s2/favicons?domain=${bank.domain}&sz=128`} 
                alt={bank.name} 
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${bank.name}&background=0A2351&color=fff&bold=true`;
                }}
              />
            </div>
            <span className="font-bold text-finance-blue text-center text-sm">{bank.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BanksPage;
