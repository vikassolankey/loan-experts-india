import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Eye, Download } from 'lucide-react';

const CertificatePage = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="pt-20 min-h-screen bg-slate-50"
  >
    <div className="gradient-blue py-24 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">Our Certificates</h1>
      <p className="text-slate-300">Authorized and trusted financial consultancy.</p>
    </div>

    <div className="max-w-7xl mx-auto px-4 py-16 flex justify-center">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-shadow duration-300">
        <div className="p-10 text-center border-b border-slate-50 bg-slate-50/50">
          <div className="w-20 h-20 bg-finance-blue/10 rounded-2xl flex items-center justify-center text-finance-blue mx-auto mb-6">
            <FileText size={40} />
          </div>
          <h2 className="text-2xl font-bold text-finance-blue mb-2">UDYAM Registration Certificate</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Government of India - Ministry of Micro, Small and Medium Enterprises
          </p>
        </div>
        
        <div className="p-8 flex flex-col gap-4">
          <a 
            href="/gallery/udyam.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-finance-blue text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg group"
          >
            <Eye size={20} className="group-hover:scale-110 transition-transform" />
            View Certificate
          </a>
          <a 
            href="/gallery/udyam.pdf" 
            download 
            className="flex items-center justify-center gap-2 bg-white border-2 border-finance-gold text-finance-gold py-4 rounded-xl font-bold hover:bg-finance-gold hover:text-white transition-all group"
          >
            <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
            Download PDF
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

export default CertificatePage;
