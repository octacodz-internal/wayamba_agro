import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#0F1A0A] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white p-2 rounded-xl">
                   <Image src="/logo.png" alt="Wayamba Logo" width={40} height={40} className="w-10 h-10 object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-[family-name:var(--font-playfair)] font-bold text-xl leading-tight text-white">Wayamba</span>
                  <span className="font-[family-name:var(--font-dm-sans)] text-[9px] tracking-[0.2em] uppercase text-emerald-400">Corporation (PVT) LTD</span>
                </div>
              </div>
              <p className="font-[family-name:var(--font-dm-sans)] text-gray-400 text-sm leading-relaxed max-w-sm">
                Professionalizing agriculture across Sri Lanka&apos;s Wayamba Province through strategic land management and modern farming practices. Transforming idle land into high-yield enterprise.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-[family-name:var(--font-dm-sans)] font-bold uppercase tracking-wider text-sm mb-6 text-emerald-400">Navigation</h4>
              <ul className="space-y-3 font-[family-name:var(--font-dm-sans)] text-gray-400 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-emerald-400 transition-colors">Plantations</a></li>
                <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="font-[family-name:var(--font-dm-sans)] font-bold uppercase tracking-wider text-sm mb-6 text-emerald-400">Contact</h4>
              <ul className="space-y-3 font-[family-name:var(--font-dm-sans)] text-gray-400 text-sm">
                 <li className="flex gap-3">
                   <span className="text-emerald-400 mt-0.5">📍</span>
                   No.171/1, Kurunegala Road, Nikaweratiya
                 </li>
                 <li className="flex gap-3">
                   <span className="text-emerald-400 mt-0.5">📞</span>
                   +94 77 985 5441
                 </li>
                 <li className="flex gap-3">
                   <span className="text-emerald-400 mt-0.5">✉️</span>
                   info@wayambacorp.lk
                 </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[#64748b]">
               © {currentYear} Wayamba Corporation (PVT) LTD. All rights reserved.
             </p>
             <div className="flex gap-4 font-[family-name:var(--font-dm-sans)] text-xs text-[#64748b]">
               <a href="#" className="hover:text-white transition-colors">Privacy</a>
               <a href="#" className="hover:text-white transition-colors">Terms</a>
             </div>
          </div>

        </div>
      </footer>

      {/* Developer Branding */}
      <div className="bg-[#020617] py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center gap-2 text-[11px] font-[family-name:var(--font-dm-sans)] tracking-wide">
          <div className="flex items-center gap-1 text-[#475569]">
            <span>Developed by</span>
            <a 
              href="https://octacodz.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#94a3b8] transition-colors flex items-center gap-1"
            >
              OctaCodez
              <svg 
                width="10" 
                height="10" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
          <span className="text-[#334155] mx-1">|</span>
          <a 
            href="mailto:hello@octacodz.com" 
            className="text-[#475569] hover:text-[#94a3b8] transition-colors"
          >
            hello@octacodz.com
          </a>
        </div>
      </div>
    </>
  );
}
