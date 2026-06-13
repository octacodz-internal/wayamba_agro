"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        toast.success('Message sent successfully!');
        // Reset after 4 seconds
        setTimeout(() => {
          setStatus('idle');
          setFormData({ name: "", phone: "", subject: "", message: "" });
        }, 4000);
      } else {
        console.error('Failed to send message');
        setStatus('error');
        toast.error('Failed to send message. Please try again.');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      toast.error('An error occurred. Please try again.');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#F8F9F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Banner Section */}
        <div 
          className="rounded-[2rem] p-10 md:p-16 mb-16 text-center text-white relative overflow-hidden shadow-xl"
          style={{ backgroundColor: "var(--accent-primary)" }}
        >
           <div className="absolute inset-0 opacity-20 bg-[url('/Cultivated land(6).jpg')] bg-cover bg-center mix-blend-overlay" />
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="font-[family-name:var(--font-playfair)] font-bold text-4xl md:text-5xl mb-6">
                Ready to activate your land&apos;s potential?
             </h2>
             <p className="font-[family-name:var(--font-dm-sans)] text-[#F8F9F8] text-lg md:text-xl mb-8">
               Contact Wayamba Corporation (PVT) LTD today.<br/>
               Your partner in professional agri-business.
             </p>
           </div>
        </div>

        {/* Contact Form & Info */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 ring-1 ring-gray-100">
           
           {/* Left - Contact Info */}
           <div className="p-12 lg:p-16 bg-gray-50 border-r border-gray-100">
              <h3 className="font-[family-name:var(--font-dm-sans)] text-[#2d5a27] font-bold uppercase tracking-widest text-sm mb-2">Contact Details</h3>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-gray-900 mb-10">We&apos;re here to help</h2>

              <div className="space-y-8">
                 <a href="https://maps.google.com/?q=No.171/1,Kurunegala+Road,Nikaweratiya" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#2d5a27] flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                       <MapPin size={24} />
                    </div>
                    <div>
                       <h4 className="font-[family-name:var(--font-dm-sans)] font-bold text-gray-900">Visit Headquarters</h4>
                       <p className="text-gray-500 mt-1 group-hover:text-[#2d5a27] transition-colors">No.171/1, Kurunegala Road, Nikaweratiya</p>
                    </div>
                 </a>
                 
                 <a href="tel:+94779855441" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#2d5a27] flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                       <Phone size={24} />
                    </div>
                    <div>
                       <h4 className="font-[family-name:var(--font-dm-sans)] font-bold text-gray-900">Direct Line</h4>
                       <p className="text-gray-500 mt-1 group-hover:text-[#2d5a27] transition-colors">+94 77 985 5441</p>
                    </div>
                 </a>
                 
                 <a href="mailto:info@wayambacorp.lk" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#2d5a27] flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                       <Mail size={24} />
                    </div>
                    <div>
                       <h4 className="font-[family-name:var(--font-dm-sans)] font-bold text-gray-900">Email Address</h4>
                       <p className="text-gray-500 mt-1 group-hover:text-[#2d5a27] transition-colors">info@wayambacorp.lk</p>
                    </div>
                 </a>
              </div>
           </div>

           {/* Right - Form */}
           <div className="p-12 lg:p-16">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-gray-900 mb-8">Send us an Inquiry</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                       <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#2d5a27] focus:border-[#2d5a27] outline-none transition-all" />
                    </div>
                    <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                       <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+94 77 XXX XXXX" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#2d5a27] focus:border-[#2d5a27] outline-none transition-all" />
                    </div>
                 </div>
                 
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="I have land available for leasing" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#2d5a27] focus:border-[#2d5a27] outline-none transition-all" />
                 </div>

                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                    <textarea rows={4} name="message" value={formData.message} onChange={handleChange} placeholder="Please provide details about your property or inquiry..." className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#2d5a27] focus:border-[#2d5a27] outline-none transition-all resize-none"></textarea>
                 </div>

                 <button 
                  type="button" 
                  onClick={handleSubmit}
                  disabled={status !== 'idle'}
                  className={`w-full text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.98] shadow-lg disabled:opacity-70 ${
                    status === 'success' ? 'bg-green-600 shadow-green-600/20' : 
                    status === 'error' ? 'bg-red-600 shadow-red-600/20' : 
                    'shadow-[#2d5a27]/20'
                  }`}
                  style={{ backgroundColor: status === 'success' ? '#16a34a' : status === 'error' ? '#dc2626' : 'var(--accent-primary)' }}
                 >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle size={18} />
                        Message Sent Successfully!
                      </>
                    ) : status === 'error' ? (
                      <>
                        Failed to send. Please try again.
                      </>
                    ) : (
                      <>
                        Send Message
                      </>
                    )}
                 </button>
              </form>
           </div>

        </div>
      </div>
    </section>
  );
}
