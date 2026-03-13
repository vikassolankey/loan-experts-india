import React from 'react';

const BanksSlider = () => {
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
    <section className="py-16 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <h3 className="text-2xl font-bold text-finance-blue">Our Associated Banking Partners</h3>
      </div>
      <div className="flex gap-8 animate-infinite-scroll">
        {[...banks, ...banks].map((bank, idx) => (
          <div key={idx} className="flex-shrink-0 px-8 py-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 min-w-[240px] justify-center group">
            <div className="w-12 h-12 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
              <img 
                src={`https://www.google.com/s2/favicons?domain=${bank.domain}&sz=128`} 
                alt={bank.name} 
                className="max-w-full max-h-full object-contain" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${bank.name}&background=0A2351&color=fff&bold=true`;
                }}
              />
            </div>
            <span className="font-bold text-slate-700 text-sm">{bank.name}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BanksSlider;
