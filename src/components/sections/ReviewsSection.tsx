import React from 'react';
import { Star } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    { name: "Rahul Sharma", text: "Loan Experts India helped me get my home loan approved in record time. Their team is highly professional.", rating: 5 },
    { name: "Priya Gupta", text: "I was struggling with my business loan due to some CIBIL issues, but Ajit sir guided me perfectly.", rating: 5 },
    { name: "Amit Patel", text: "Transparent process and best interest rates. Highly recommended for any loan requirements.", rating: 4 },
    { name: "Suresh Kumar", text: "Excellent service! They handled my mortgage loan with great care and expertise.", rating: 5 },
    { name: "Anjali Verma", text: "The team is very supportive and knowledgeable. They made the entire process stress-free.", rating: 5 }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl font-bold text-finance-blue mb-4">What Our Clients Say</h2>
        <div className="w-20 h-1 bg-finance-gold mx-auto mb-6"></div>
        <p className="text-slate-600">Real stories from our satisfied customers.</p>
      </div>
      <div className="flex gap-8 animate-infinite-scroll-reviews">
        {[...reviews, ...reviews].map((rev, idx) => (
          <div key={idx} className="flex-shrink-0 w-[400px] bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className={i < rev.rating ? "fill-finance-gold text-finance-gold" : "text-slate-300"} />
              ))}
            </div>
            <p className="text-slate-600 italic mb-6">"{rev.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-finance-blue/10 flex items-center justify-center text-finance-blue font-bold">{rev.name[0]}</div>
              <span className="font-bold text-finance-blue">{rev.name}</span>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes infinite-scroll-reviews {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll-reviews {
          animation: infinite-scroll-reviews 40s linear infinite;
        }
        .animate-infinite-scroll-reviews:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ReviewsSection;
