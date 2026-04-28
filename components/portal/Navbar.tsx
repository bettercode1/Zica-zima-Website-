'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import CardNav from '@/components/ui/CardNav';
import { PhoneCallIcon } from '@/components/ui/phone-call-icon';
import { SocialIcon } from 'react-social-icons';

export default function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [hoveredBrand, setHoveredBrand] = useState<'zica' | 'zima' | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pathname = usePathname();

  const navItems = [
    {
      label: "About",
      bgColor: "#f8fafc",
      textColor: "#0f172a",
      links: [
        { label: "About Us", href: "/about", ariaLabel: "About Us" },
        { label: "Our Team", href: "#team", ariaLabel: "Our Team" },
        { label: "Our Director", href: "/director", ariaLabel: "Our Director" }
      ]
    },
    {
      label: "Courses",
      bgColor: "#eff6ff",
      textColor: "#1d4ed8",
      links: [
        { label: "ZICA Courses", href: "/courses?brand=zica", ariaLabel: "ZICA Courses" },
        { label: "ZIMA Courses", href: "/courses?brand=zima", ariaLabel: "ZIMA Courses" },
        { label: "All Modules", href: "/courses", ariaLabel: "All Modules" }
      ]
    },
    {
      label: "Explore",
      bgColor: "#fff7ed",
      textColor: "#c2410c",
      links: [
        { label: "Blogs", href: "/blogs", ariaLabel: "Read our blogs" },
        { label: "Gallary", href: "/gallery", ariaLabel: "Gallary" },
        { label: "Value Addition", href: "https://klic.mkcl.org/klic-courses", ariaLabel: "Value Addition" },
        { label: "Contact Us", href: "/#admissions", ariaLabel: "Contact Us" },
        { label: "Enquiry", href: "/#admissions", ariaLabel: "Enquiry" }
      ]
    }
  ];

  useEffect(() => {
    let ticking = false;
    const sections = ['home', 'about', 'courses', 'blogs', 'admissions'];

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 20);

          const scrollPosition = scrollY + 200;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking a link
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleNavLinkClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <>
      {/* Small Top Bar for Social Icons & Contact */}
      <div className="bg-slate-950 w-full border-b border-slate-900 relative z-50">
        <div className="max-w-[1580px] mx-auto px-4 sm:px-8 py-1.5 flex flex-col sm:flex-row justify-between items-center gap-2 relative">
          {/* Contact Info */}
          <div className="order-2 sm:order-1 flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-[11px] sm:text-xs font-medium text-slate-300">
            <span className="text-slate-400">Contact Us:</span>
            <a href="tel:+919028757041" className="hover:text-orange-600 transition-colors font-semibold">+91 90287 57041</a>
            <span className="text-slate-700">|</span>
            <a href="tel:+919028757042" className="hover:text-orange-600 transition-colors font-semibold">+91 90287 57042</a>
          </div>

          {/* Admissions Open Announcement */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full flex items-center gap-2 text-[10px] font-extrabold text-white tracking-wider animate-pulse border border-white/10">
              <span className="text-xs">📢</span>
              <span>ADMISSIONS OPEN 2026-27</span>
            </div>
          </div>

          {/* Social Icons including WhatsApp */}
          <div className="order-1 sm:order-3 flex items-center gap-3">
            {[
              { id: 'wa', url: "https://wa.me/919028757041?text=Need%20to%20Know%20More%20about%20Courses" },
              { id: 'li', url: "https://www.linkedin.com/company/zee-institue-of-creative-media-arts-pimpri-chinchwad/" },
              { id: 'ig', url: "https://www.instagram.com/zicazima_pcmc/" },
              { id: 'fb', url: "https://www.facebook.com/zicazimapcmcpune/" },
              { id: 'yt', url: "https://www.youtube.com/@ZICAZIMAInstitutePCMCPune" }
            ].map((social) => (
              <div 
                key={social.id}
                onMouseEnter={() => setHoveredSocial(social.id)}
                onMouseLeave={() => setHoveredSocial(null)}
                className="transition-transform duration-200 hover:scale-110 flex items-center justify-center"
              >
                <SocialIcon 
                  url={social.url} 
                  style={{ height: 20, width: 20 }} 
                  bgColor={hoveredSocial === social.id ? '#ea580c' : 'rgba(255, 255, 255, 0.1)'}
                  fgColor={hoveredSocial === social.id ? '#ffffff' : '#94a3b8'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav className={`hidden xl:block sticky top-0 w-full z-50 transition-all duration-500 font-headline tracking-tight ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl py-2 shadow-xl shadow-slate-900/5' 
          : 'bg-white/80 backdrop-blur-md py-4 border-b border-white/10'
      }`}>

        <div className="max-w-[1580px] mx-auto px-4 sm:px-8 flex justify-between items-center">
          {/* Logos */}
          <div className="flex-shrink-0 flex items-center gap-0 -ml-2 lg:-ml-8">
            <Link href="/" className={`block relative transition-all duration-500 ${
              isScrolled ? 'h-[40px] w-[130px] md:h-[50px] md:w-[160px]' : 'h-[50px] w-[160px] md:h-[64px] md:w-[200px]'
            }`}>
              <Image 
                src="/image/ZICA ZIMA PCMC LOGO.png" 
                alt="ZICA ZIMA PCMC" 
                fill
                className="object-contain object-left"
                priority
              />
            </Link>

            {/* Zee Learn Logo */}
            <div className={`hidden lg:flex flex-col justify-center relative transition-all duration-500 -ml-2 lg:-ml-4 ${
              isScrolled ? 'h-[40px] w-[100px]' : 'h-[50px] w-[140px]'
            }`}>
              <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-[0.2em] mb-0">Backed by</span>
              <div className="relative w-full h-full -ml-1">
                <Image 
                  src="/image/zee learn.png"
                  alt="Zee Learn Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-6">
            <Link
              href="/"
              onClick={() => setActiveSection('home')}
              className={`relative py-2 text-sm font-bold tracking-wider uppercase transition-all duration-300 group ${
                activeSection === 'home' ? 'text-orange-600' : 'text-slate-900 hover:text-blue-600'
              }`}
            >
              Home
              {activeSection === 'home' && (
                <motion.span 
                  layoutId="active-nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {activeSection !== 'home' && (
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-blue-600`} />
              )}
            </Link>

            {/* About Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button
                onClick={() => setActiveSection('about')}
                className={`flex items-center gap-1 py-2 text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeSection === 'about' ? 'text-orange-600' : 'text-slate-900 group-hover:text-blue-600'
                }`}
              >
                About
                <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`}>
                  keyboard_arrow_down
                </span>
                {activeSection === 'about' && (
                  <motion.span 
                    layoutId="active-nav-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {activeSection !== 'about' && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                )}
              </button>

              {/* About Mega Dropdown Menu */}
              <div className={`absolute top-full left-0 w-[350px] bg-white/95 backdrop-blur-xl rounded-sm shadow-[0_20px_70px_-15px_rgba(0,0,0,0.15)] border border-white/40 p-6 transition-all duration-500 origin-top-left overflow-hidden ${isAboutOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-4 invisible'}`}>
                  {/* Navigation Links - Centered and Spanned */}
                  <div className="space-y-4">
                    <div className="border-b border-slate-100 pb-3 text-center">
                      <h3 className="text-slate-900 font-black text-xs uppercase tracking-[0.2em]">Our Identity</h3>
                    </div>
                    <div className="flex flex-col gap-1">
                      {[
                        { label: "About Us", desc: "Our journey and mission in creative education.", href: "/about", icon: "info" },
                        { label: "Our Team", desc: "The creative minds behind our success.", href: "#team", icon: "groups" },
                        { label: "Our Director", desc: "Visionary leadership guiding our future.", href: "/director", icon: "person" }
                      ].map((item) => (
                        <Link key={item.label} href={item.href} className="group flex items-start gap-4 p-4 rounded-sm hover:bg-slate-50 transition-all duration-300">
                          <div className="w-12 h-12 rounded bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-600 transition-colors">
                            <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-black text-slate-950 transition-colors text-[15px] leading-tight mb-1">{item.label}</div>
                            <div className="text-[11px] text-slate-800 font-bold leading-tight uppercase tracking-widest opacity-80">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
              </div>
            </div>

            {/* Courses Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button
                onClick={() => setActiveSection('courses')}
                className={`flex items-center gap-1 py-2 text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeSection === 'courses' ? 'text-orange-600' : 'text-slate-900 group-hover:text-blue-600'
                }`}
              >
                Courses
                <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`}>
                  keyboard_arrow_down
                </span>
                {activeSection === 'courses' && (
                  <motion.span 
                    layoutId="active-nav-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {activeSection !== 'courses' && (
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-blue-600`} />
                )}
              </button>


              {/* Courses Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 w-[350px] bg-white/95 backdrop-blur-xl rounded-sm shadow-[0_20px_70px_-15px_rgba(0,0,0,0.15)] border border-white/40 p-6 transition-all duration-500 origin-top-left ${isCoursesOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-4 invisible'}`}
                onMouseLeave={() => setHoveredBrand(null)}
              >
                <div className="space-y-4 relative">
                  <div className="border-b border-slate-100 pb-3 text-center">
                    <h3 className="text-slate-900 font-black text-xs uppercase tracking-[0.2em]">Select Brand</h3>
                  </div>

                  {/* ZICA Option */}
                  <div 
                    className={`group/item relative p-4 rounded-sm transition-all duration-300 cursor-pointer border ${
                      hoveredBrand === 'zica' 
                        ? 'bg-orange-50 border-orange-100' 
                        : 'bg-transparent border-transparent hover:bg-slate-50'
                    }`}
                    onMouseEnter={() => setHoveredBrand('zica')}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded flex items-center justify-center transition-all duration-300 ${
                        hoveredBrand === 'zica' ? 'bg-orange-600 scale-110 shadow-lg shadow-orange-600/20' : 'bg-white shadow-sm'
                      }`}>
                        <div className="relative w-8 h-8">
                          <Image 
                            src="/image/zica_logo.png" 
                            alt="ZICA" 
                            fill 
                            className="object-contain" 
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className={`font-black text-sm tracking-tight transition-colors duration-300 ${hoveredBrand === 'zica' ? 'text-orange-600' : 'text-slate-900'}`}>ZICA</div>
                        <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Digital Arts</div>
                      </div>
                      <span className={`material-symbols-outlined text-sm transition-all duration-300 ${hoveredBrand === 'zica' ? 'text-orange-600 translate-x-1' : 'text-slate-400'}`}>arrow_forward_ios</span>
                    </div>

                    {/* ZICA Flyout Menu */}
                    <div className={`absolute top-0 left-full ml-2 w-[500px] bg-white/98 backdrop-blur-xl rounded-sm shadow-[0_20px_70px_-15px_rgba(0,0,0,0.15)] border border-white/40 p-8 transition-all duration-300 origin-left ${hoveredBrand === 'zica' ? 'opacity-100 scale-100 translate-x-0 visible' : 'opacity-0 scale-95 -translate-x-4 invisible'}`}>
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-black text-slate-900 tracking-tighter">Zee Institute of Creative Arts</h3>
                          <p className="text-orange-600 font-black text-[9px] uppercase tracking-[0.3em] mt-1">India's First Full-Fledged Digital Arts Institute</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                        {[
                          "B.Voc Degree in 3D VFX", "2D Animation", "Visual Effects (VFX)", "Graphic Design", 
                          "UI/UX Design", "Web Design", "Digital Marketing", "Game Art & Design",
                          "Architectural Design", "Photography", "Blender", "Houdini"
                        ].map((item, idx) => (
                          <Link 
                            key={item} 
                            href={`/courses?brand=zica&search=${item.split(' ')[0]}`} 
                            className="group flex items-center justify-between py-2 px-3 rounded-sm hover:bg-orange-50/50 transition-all duration-300"
                          >
                            <span className="text-[13px] text-slate-600 font-bold group-hover:text-slate-900">{item}</span>
                          </Link>
                        ))}
                      </div>
                      <Link href="/courses?brand=zica" className="mt-6 inline-flex items-center gap-2 text-xs font-black text-orange-600 group/link">
                        Explore All ZICA Courses
                        <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                      </Link>
                    </div>
                  </div>

                  {/* ZIMA Option */}
                  <div 
                    className={`group/item relative p-4 rounded-sm transition-all duration-300 cursor-pointer border ${
                      hoveredBrand === 'zima' 
                        ? 'bg-blue-50 border-blue-100' 
                        : 'bg-transparent border-transparent hover:bg-slate-50'
                    }`}
                    onMouseEnter={() => setHoveredBrand('zima')}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded flex items-center justify-center transition-all duration-300 ${
                        hoveredBrand === 'zima' ? 'bg-blue-700 scale-110 shadow-lg shadow-blue-700/20' : 'bg-white shadow-sm'
                      }`}>
                        <div className="relative w-8 h-8">
                          <Image 
                            src="/image/zima_logo.png" 
                            alt="ZIMA" 
                            fill 
                            className="object-contain" 
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className={`font-black text-sm tracking-tight transition-colors duration-300 ${hoveredBrand === 'zima' ? 'text-blue-700' : 'text-slate-900'}`}>ZIMA</div>
                        <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Film & Media</div>
                      </div>
                      <span className={`material-symbols-outlined text-sm transition-all duration-300 ${hoveredBrand === 'zima' ? 'text-blue-700 translate-x-1' : 'text-slate-400'}`}>arrow_forward_ios</span>
                    </div>

                    {/* ZIMA Flyout Menu */}
                    <div className={`absolute top-0 left-full ml-2 w-[500px] bg-white/98 backdrop-blur-xl rounded-sm shadow-[0_20px_70px_-15px_rgba(0,0,0,0.15)] border border-white/40 p-8 transition-all duration-300 origin-left ${hoveredBrand === 'zima' ? 'opacity-100 scale-100 translate-x-0 visible' : 'opacity-0 scale-95 -translate-x-4 invisible'}`}>
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-black text-slate-900 tracking-tighter">Zee Institute of Media Arts</h3>
                          <p className="text-blue-700 font-black text-[9px] uppercase tracking-[0.3em] mt-1">Premier Film & Television Institute</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                        {[
                          "Film Making", "Screen Writing", "Direction", "Cinematography", 
                          "Film & TV Editing", "Sound Recording", "Music Production", "Film Acting",
                          "Fashion Modelling", "Dancing", "Audio Production", "Sound Engineering"
                        ].map((item, idx) => (
                          <Link 
                            key={item} 
                            href={`/courses?brand=zima&search=${item.split(' ')[0]}`} 
                            className="group flex items-center justify-between py-2 px-3 rounded-sm hover:bg-blue-50/50 transition-all duration-300"
                          >
                            <span className="text-[13px] text-slate-600 font-bold group-hover:text-slate-900">{item}</span>
                          </Link>
                        ))}
                      </div>
                      <Link href="/courses?brand=zima" className="mt-6 inline-flex items-center gap-2 text-xs font-black text-blue-700 group/link">
                        Explore All ZIMA Courses
                        <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            <Link
              href="/blogs"
              onClick={() => setActiveSection('blogs')}
              className={`relative py-2 text-sm font-bold tracking-wider uppercase transition-all duration-300 group ${
                activeSection === 'blogs' ? 'text-orange-600' : 'text-slate-900 hover:text-blue-600'
              }`}
            >
              Blogs
              {activeSection === 'blogs' && (
                <motion.span 
                  layoutId="active-nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {activeSection !== 'blogs' && (
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-blue-600`} />
              )}
            </Link>

            <Link
              href="/gallery"
              onClick={() => setActiveSection('gallery')}
              className={`relative py-2 text-sm font-bold tracking-wider uppercase transition-all duration-300 group ${
                activeSection === 'gallery' ? 'text-orange-600' : 'text-slate-900 hover:text-blue-600'
              }`}
            >
              Gallary
              {activeSection === 'gallery' && (
                <motion.span 
                  layoutId="active-nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {activeSection !== 'gallery' && (
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-blue-600`} />
              )}
            </Link>

            <Link
              href="https://klic.mkcl.org/klic-courses"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setActiveSection('value-addition')}
              className={`relative py-2 text-sm font-bold tracking-wider uppercase transition-all duration-300 group ${
                activeSection === 'value-addition' ? 'text-orange-600' : 'text-slate-900 hover:text-blue-600'
              }`}
            >
              Value Addition
              {activeSection === 'value-addition' && (
                <motion.span 
                  layoutId="active-nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {activeSection !== 'value-addition' && (
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-blue-600`} />
              )}
            </Link>

            <Link
              href="/#admissions"
              onClick={() => setActiveSection('admissions')}
              className={`relative py-2 text-sm font-bold tracking-wider uppercase transition-all duration-300 group ${
                activeSection === 'admissions' ? 'text-orange-600' : 'text-slate-900 hover:text-blue-600'
              }`}
            >
              Contact Us
              {activeSection === 'admissions' && (
                <motion.span 
                  layoutId="active-nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {activeSection !== 'admissions' && (
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-blue-600`} />
              )}
            </Link>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            {/* Social Icons moved to the top bar */}
            <Link href="/#admissions">
              <button className="hidden sm:flex items-center gap-2 kinetic-gradient text-on-primary px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-orange-500/30 transition-all active:scale-95 duration-200 group">
                Enquiry Now
                <PhoneCallIcon size={18} className="text-white ml-1" />
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile CardNav - Only visible on small screens */}
      <div className="xl:hidden sticky top-0 w-full z-50">
        <CardNav
          logo="/image/ZICA ZIMA PCMC LOGO.png"
          logoAlt="ZICA ZIMA PCMC"
          items={navItems}
          baseColor={isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.85)"}
          menuColor="#000"
          buttonBgColor="#f97316"
          buttonTextColor="#fff"
          ease="power3.out"
          className={isScrolled ? 'backdrop-blur-xl shadow-lg' : 'backdrop-blur-md'}
        />
      </div>
    </>
  );
}

