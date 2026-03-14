import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import Pinterest from '../common/Pinterest';

const Footer = () => (
  <footer className="bg-finance-blue text-white pt-24 pb-12 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="mb-6  p-4 rounded-xl backdrop-blur-sm inline-block">
            <img src="/gallery/logo.png" alt="Loan Experts India" className="h-16 w-auto " />
          </div>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            India's most trusted financial consultancy providing expert guidance for all your loan requirements.
          </p>
          <div className="flex gap-4">
            <Facebook size={18} className="text-slate-400 hover:text-finance-gold cursor-pointer transition-colors" />
            <Instagram size={18} className="text-slate-400 hover:text-finance-gold cursor-pointer transition-colors" />
            <Linkedin size={18} className="text-slate-400 hover:text-finance-gold cursor-pointer transition-colors" />
            <Twitter size={18} className="text-slate-400 hover:text-finance-gold cursor-pointer transition-colors" />
            <Youtube size={18} className="text-slate-400 hover:text-finance-gold cursor-pointer transition-colors" />
            <Pinterest size={18} className="text-slate-400 hover:text-finance-gold cursor-pointer transition-colors" />
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2">Our Services</h4>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li className="hover:text-finance-gold cursor-pointer transition-colors">Personal Loan</li>
            <li className="hover:text-finance-gold cursor-pointer transition-colors">Home Loan</li>
            <li className="hover:text-finance-gold cursor-pointer transition-colors">Business Loan</li>
            <li className="hover:text-finance-gold cursor-pointer transition-colors">Mortgage Loan</li>
            <li className="hover:text-finance-gold cursor-pointer transition-colors">MSME Loan</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2">Quick Links</h4>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li className="hover:text-finance-gold cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-finance-gold cursor-pointer transition-colors">Our Banks</li>
            <li className="hover:text-finance-gold cursor-pointer transition-colors">Meet Team</li>
            <li className="hover:text-finance-gold cursor-pointer transition-colors">Blogs</li>
            <li className="hover:text-finance-gold cursor-pointer transition-colors">Contact Us</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2">Contact Info</h4>
          <ul className="space-y-4 text-slate-300 text-sm">
            <li className="flex gap-3"><MapPin size={18} className="text-finance-gold flex-shrink-0" /> Office No. Loan Experts 717 7th Floor Gaur City Mall Sector 4 Greater Noida Gautam Buddha Nagar Uttar Pradesh 201304 India</li>
            <li className="flex gap-3">
              <Mail size={18} className="text-finance-gold flex-shrink-0" /> 
              <div className="flex flex-col">
                <span>loanexpertindiaa@gmail.com</span>
                <span>Arjunyadav@loanexpertindia.com</span>
                <span>Arjun.loanexperts@gmail.com</span>
              </div>
            </li>
          </ul>
          <div className="mt-6">
            <div id="google_translate_element" className="min-h-[40px] bg-white/5 rounded p-1"></div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
        <div className="flex flex-col gap-1">
          <p>© 2024 Loan Experts India. All rights reserved.</p>
          <p>
            Designed & Developed By{" "}
            <a 
              href="https://www.webworldhub.co.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-finance-gold hover:underline"
            >
              Web World Hub
            </a>
          </p>
        </div>
        <div className="flex gap-6 items-center">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="font-medium text-slate-300">Visitors:</span>
            <img src="https://hitwebcounter.com/counter/counter.php?page=loanexpertsindia&style=0006&nbdigits=5&type=page&initCount=90" title="Free Counter" alt="Free Counter" className="h-4 brightness-0 invert" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
