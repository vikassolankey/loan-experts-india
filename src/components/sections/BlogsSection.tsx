import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogsSection = () => {
  const blogs = [
    {
      title: "How to Improve Your CIBIL Score Fast",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600",
      desc: "Learn effective strategies to boost your credit score and get better loan deals."
    },
    {
      title: "Home Loan vs Mortgage Loan: Key Differences",
      date: "March 05, 2024",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=600",
      desc: "Understand the fundamental differences between these two popular loan types."
    },
    {
      title: "Top Government Schemes for MSMEs in 2024",
      date: "February 28, 2024",
      image: "https://www.iifl.com/files/2024-12/5.%20Government%20Loan%20Schemes%20for%20MSMEs_1500pxX800px_0.webp",
      desc: "A comprehensive guide to financial assistance available for small businesses."
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="blogs">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-finance-blue mb-4">Latest Financial Insights</h2>
          <div className="w-20 h-1 bg-finance-gold mx-auto mb-6"></div>
          <p className="text-slate-600">Stay updated with the latest trends and tips in the financial world.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group"
            >
              <div className="h-48 overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <span className="text-finance-gold text-xs font-bold uppercase tracking-wider mb-2 block">{blog.date}</span>
                <h3 className="text-xl font-bold text-finance-blue mb-3 group-hover:text-finance-gold transition-colors">{blog.title}</h3>
                <p className="text-slate-600 text-sm mb-6">{blog.desc}</p>
                <Link to="/blogs" className="text-finance-blue font-bold flex items-center gap-2">
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
