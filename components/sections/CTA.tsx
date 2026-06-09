"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    const { name, phone, subject, message } = formData;

    // Build WhatsApp message
    const lines = [
      `*New Inquiry — Wayamba Corporation*`,
      ``,
      `*Name:* ${name || "Not provided"}`,
      `*Phone:* ${phone || "Not provided"}`,
      `*Subject:* ${subject || "General Inquiry"}`,
      ``,
      `*Message:*`,
      message || "No message provided",
    ];

    const waNumber = "94779855441"; // +94 77 985 5441
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(lines.join("\n"))}`;

    window.open(waUrl, "_blank");
    setSubmitted(true);

    // Reset after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", subject: "", message: "" });
    }, 4000);
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
                  disabled={submitted}
                  className="w-full text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.98] shadow-lg shadow-[#2d5a27]/20 disabled:opacity-70"
                  style={{ backgroundColor: submitted ? "#16a34a" : "var(--accent-primary)" }}
                 >
                    {submitted ? (
                      <>
                        <CheckCircle size={18} />
                        Opening WhatsApp...
                      </>
                    ) : (
                      <>
                        Send via WhatsApp
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
