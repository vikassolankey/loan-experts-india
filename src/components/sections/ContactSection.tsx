import React, { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Use environment variables for EmailJS credentials
    const SERVICE_ID = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitStatus('success');
        form.current?.reset();
      }, (error) => {
        console.error('Failed to send email:', error.text);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      });
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-finance-blue mb-6">Get In Touch</h2>
            <p className="text-slate-600 mb-10">Fill out the form below and our experts will get back to you within 24 hours.</p>
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="user_name"
                  required
                  placeholder="Full Name" 
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-finance-blue" 
                />
                <input 
                  type="tel" 
                  name="user_phone"
                  required
                  placeholder="Phone Number" 
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-finance-blue" 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="email" 
                  name="user_email"
                  required
                  placeholder="Email Address" 
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-finance-blue" 
                />
                <select 
                  name="loan_type"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-finance-blue text-slate-500"
                >
                  <option value="">Select Loan Type</option>
                  <option value="Personal Loan">Personal Loan</option>
                  <option value="Home Loan">Home Loan</option>
                  <option value="Business Loan">Business Loan</option>
                  <option value="Mortgage Loan">Mortgage Loan</option>
                </select>
              </div>
              <textarea 
                name="message"
                required
                placeholder="Your Message" 
                rows={4} 
                className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-finance-blue"
              ></textarea>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-2 ${
                  isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'gradient-blue text-white hover:scale-[1.02] shadow-finance-blue/20'
                }`}
              >
                {isSubmitting ? 'Sending...' : (
                  <>Send Message <Send size={20} /></>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-600 font-semibold bg-green-50 p-4 rounded-xl">
                  <CheckCircle2 size={20} />
                  Message sent successfully! We'll contact you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-600 font-semibold bg-red-50 p-4 rounded-xl">
                  <AlertCircle size={20} />
                  Failed to send message. Please try again or call us directly.
                </div>
              )}
            </form>
          </div>
          
          <div className="flex-1">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 h-full">
              <h3 className="text-2xl font-bold text-finance-blue mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-finance-blue flex-shrink-0"><MapPin /></div>
                  <div>
                    <h4 className="font-bold text-finance-blue mb-1">Office Address</h4>
                    <p className="text-slate-600 text-sm">Office No. Loan Experts 717 7th Floor Gaur City Mall Sector 4 Greater Noida Gautam Buddha Nagar Uttar Pradesh 201304 India</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-finance-blue flex-shrink-0"><Phone /></div>
                  <div>
                    <h4 className="font-bold text-finance-blue mb-1">Call Us</h4>
                    <p className="text-slate-600 text-sm">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-finance-blue flex-shrink-0"><Mail /></div>
                  <div>
                    <h4 className="font-bold text-finance-blue mb-1">Email Us</h4>
                    <p className="text-slate-600 text-sm">loanexpertindiaa@gmail.com</p>
                    <p className="text-slate-600 text-sm">Arjunyadav@loanexpertindia.com</p>
                    <p className="text-slate-600 text-sm">Arjun.loanexperts@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 rounded-2xl overflow-hidden h-64 shadow-inner grayscale opacity-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562064116556!2d77.4243883!3d28.6129124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee22c6000001%3A0x29438096f947e43d!2sGaur%20City%20Mall!5e0!3m2!1sen!2sin!4v1710312345678!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Gaur City Mall Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
