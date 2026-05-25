import Link from 'next/link';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <footer className="bg-slate-950 w-full rounded-t-[2.5rem] md:rounded-t-[4rem] mt-16 md:mt-24 font-body border-t border-white/5">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <Link href="/" className="block relative h-12 w-40 xs:h-14 xs:w-48 md:h-16 md:w-56 transition-transform hover:scale-105">
              <Image 
                src="/image/ZICA ZIMA PCMC LOGO.png" 
                alt="ZICA ZIMA PCMC Logo" 
                fill
                sizes="(max-width: 768px) 192px, 224px"
                className="object-contain"
              />
            </Link>
            <p className="text-slate-400 max-w-xs font-medium leading-relaxed text-xs xs:text-sm md:text-base opacity-70">
              Defying static boundaries through world-class animation, VFX, and design
              education in Pimpri-Chinchwad.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
              {[
                { id: 'wa', url: "https://wa.me/919028757041?text=Need%20to%20Know%20More%20about%20Courses" },
                { id: 'li', url: "https://www.linkedin.com/company/zee-institue-of-creative-media-arts-pimpri-chinchwad/" },
                { id: 'ig', url: "https://www.instagram.com/zicazima_pcmc/" },
                { id: 'fb', url: "https://www.facebook.com/zicazimapcmcpune/" },
                { id: 'yt', url: "https://www.youtube.com/@ZICAZIMAInstitutePCMCPune" }
              ].map((social) => (
                <div key={social.id} className="transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <SocialIcon 
                    url={social.url} 
                    style={{ height: 32, width: 32 }} 
                    bgColor="rgba(255, 255, 255, 0.08)"
                    fgColor="#94a3b8"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-6 md:mb-8 border-l-2 border-orange-500 pl-3">Navigation</h4>
            <ul className="space-y-4 text-xs xs:text-sm font-bold uppercase tracking-widest">
              <li><Link href="/" className="text-slate-400 hover:text-orange-500 transition-colors">Base Camp</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-orange-500 transition-colors">The Origin</Link></li>
              <li><Link href="/courses" className="text-slate-400 hover:text-orange-500 transition-colors">Level Up</Link></li>
              <li><Link href="/blogs" className="text-slate-400 hover:text-orange-500 transition-colors">What's Live</Link></li>
              <li><Link href="/gallery" className="text-slate-400 hover:text-orange-500 transition-colors">The Drop</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Career */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-6 md:mb-8 border-l-2 border-orange-500 pl-3">Resources</h4>
            <ul className="space-y-4 text-xs xs:text-sm font-bold uppercase tracking-widest">
              <li><Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Terms of Service</Link></li>
              <li><Link href="/alumni" className="text-slate-400 hover:text-orange-500 transition-colors">The Legends</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Careers</Link></li>
              <li><Link href="/#admissions" className="text-slate-400 hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-6 md:mb-8 border-l-2 border-orange-500 pl-3">Connect With Us</h4>
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Admissions Helpline</p>
                <div className="flex flex-col space-y-2">
                  <a href="tel:+919028757041" className="text-slate-200 hover:text-orange-500 transition-colors font-black text-sm xs:text-base md:text-lg flex items-center gap-3 justify-center md:justify-start group">
                    <svg className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    +91 90287 57041
                  </a>
                  <a href="tel:+919028757042" className="text-slate-200 hover:text-orange-500 transition-colors font-black text-sm xs:text-base md:text-lg flex items-center gap-3 justify-center md:justify-start group">
                    <svg className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    +91 90287 57042
                  </a>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Visit Studio</p>
                <a
                  href="https://maps.app.goo.gl/xbdHwj1onKYMvKUaA"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open ZICA ZIMA PCMC location in Google Maps"
                  className="inline-flex items-start gap-1.5 text-slate-400 hover:text-orange-300 text-xs xs:text-sm font-medium leading-relaxed max-w-[220px] transition-colors group/map"
                >
                  <span>
                    ZICA ZIMA PCMC, Pune, Maharashtra, India.
                    <span className="material-symbols-outlined text-[14px] align-middle ml-1 -mt-0.5 opacity-0 group-hover/map:opacity-100 transition-opacity">open_in_new</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 md:mt-20 pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] xs:text-xs md:text-sm font-medium text-center md:text-left">
            © 2026 ZICA ZIMA PCMC Animation Institute. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-[10px] xs:text-xs font-bold uppercase tracking-widest">
            <span>Empowering creators worldwide</span>
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
}
