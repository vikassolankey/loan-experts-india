import React from 'react';

const TeamSection = () => {
  const team = [
    "Ajit Kumar Singh", "Ashish Kumar", "Harsh Mehta", "Sam Malik", "Vikas Solanki", 
    "Harshit Mishra", "Abdul Ahmad", "Anjali Sharma", "Divya Kumari", "Hiba Khan", 
    "Alina Khan", "Seema Kumari", "Anita Sharma"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="team">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl font-bold text-finance-blue mb-4">Our Expert Team</h2>
        <p className="text-slate-600">Dedicated professionals committed to your financial success.</p>
      </div>
      <div className="flex gap-8 animate-infinite-scroll-slow">
        {[...team, ...team].map((name, idx) => (
          <div key={idx} className="flex-shrink-0 w-64 p-6 glass rounded-2xl text-center">
            <div className="w-24 h-24 rounded-full bg-slate-200 mx-auto mb-4 overflow-hidden">
              <img src={`https://i.pravatar.cc/150?u=${name}`} alt={name} className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-finance-blue mb-1">{name}</h4>
            <p className="text-xs text-finance-gold font-bold uppercase tracking-wider">Financial Consultant</p>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes infinite-scroll-slow {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll-slow {
          animation: infinite-scroll-slow 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
