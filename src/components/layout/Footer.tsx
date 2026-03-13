import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Pin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-white text-slate-800 pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="mb-6">
            <img src="/gallery/logo.png" alt="Loan Experts India" className="h-25 w-auto" />
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            India's most trusted financial consultancy providing expert guidance for all your loan requirements.
          </p>
          <div className="flex gap-4">
            <Facebook size={18} className="text-slate-400 hover:text-finance-gold cursor-pointer" />
            <Instagram size={18} className="text-slate-400 hover:text-finance-gold cursor-pointer" />
            <Linkedin size={18} className="text-slate-400 hover:text-finance-gold cursor-pointer" />
            <Twitter size={18} className="text-slate-400 hover:text-finance-gold cursor-pointer" />
            <Youtube size={18} className="text-slate-400 hover:text-finance-gold cursor-pointer" />
            <Pin size={18} className="text-slate-400 hover:text-finance-gold cursor-pointer" />
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6 border-b border-slate-200 pb-2">Our Services</h4>
          <ul className="space-y-3 text-slate-500 text-sm">
            <li className="hover:text-finance-gold cursor-pointer">Personal Loan</li>
            <li className="hover:text-finance-gold cursor-pointer">Home Loan</li>
            <li className="hover:text-finance-gold cursor-pointer">Business Loan</li>
            <li className="hover:text-finance-gold cursor-pointer">Mortgage Loan</li>
            <li className="hover:text-finance-gold cursor-pointer">MSME Loan</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6 border-b border-slate-200 pb-2">Quick Links</h4>
          <ul className="space-y-3 text-slate-500 text-sm">
            <li className="hover:text-finance-gold cursor-pointer">About Us</li>
            <li className="hover:text-finance-gold cursor-pointer">Our Banks</li>
            <li className="hover:text-finance-gold cursor-pointer">Meet Team</li>
            <li className="hover:text-finance-gold cursor-pointer">Blogs</li>
            <li className="hover:text-finance-gold cursor-pointer">Contact Us</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6 border-b border-slate-200 pb-2">Contact Info</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li className="flex gap-3"><MapPin size={18} className="text-finance-gold flex-shrink-0" /> Office No. Loan Experts 717 7th Floor Gaur City Mall Sector 4 Greater Noida Gautam Buddha Nagar Uttar Pradesh 201304 India</li>
            <li className="flex gap-3"><Phone size={18} className="text-finance-gold flex-shrink-0" /> +91 98765 43210</li>
            <li className="flex gap-3">
              <Mail size={18} className="text-finance-gold flex-shrink-0" /> 
              <div className="flex flex-col">
                <span>Loanexpertkndiaa@gmail.com</span>
                <span>Arjunyadav@loanexpertindia.com</span>
              </div>
            </li>
          </ul>
          <div className="mt-6">
            <div id="google_translate_element" className="min-h-[40px]"></div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
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
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="font-medium">Visitors:</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
