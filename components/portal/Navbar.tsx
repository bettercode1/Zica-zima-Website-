'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import CardNav from '@/components/ui/CardNav';

export default function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [hoveredBrand, setHoveredBrand] = useState<'zica' | 'zima' | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
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
        { label: "Contact Us", href: "#admissions", ariaLabel: "Contact Us" },
        { label: "Enquiry", href: "#admissions", ariaLabel: "Enquiry" }
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
      {/* Desktop Navbar */}
      <nav className={`hidden md:block sticky top-0 w-full z-50 transition-all duration-500 font-headline tracking-tight ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl py-2 shadow-xl shadow-slate-900/5' 
          : 'bg-white/70 backdrop-blur-md py-4 border-b border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className={`block relative transition-all duration-500 ${
              isScrolled ? 'h-12 w-32 md:h-16 md:w-44' : 'h-14 w-36 md:h-20 md:w-52 md:scale-110'
            }`}>
              <Image 
                src="/image/ZICA ZIMA PCMC LOGO.png" 
                alt="ZICA ZIMA PCMC" 
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
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
              <div className={`absolute top-full left-0 w-[350px] bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_70px_-15px_rgba(0,0,0,0.15)] border border-white/40 p-6 transition-all duration-500 origin-top-left overflow-hidden ${isAboutOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-4 invisible'}`}>
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
                        <Link key={item.label} href={item.href} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300">
                          <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-600 transition-colors">
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


              {/* Mega Dropdown Menu */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 w-[95vw] max-w-[1000px] bg-white/98 backdrop-blur-xl rounded-[3rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.2)] border border-white/50 p-2 transition-all duration-500 origin-top overflow-hidden ${isCoursesOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-4 invisible'}`}
                onMouseLeave={() => setHoveredBrand(null)}
              >
                <div className="relative z-10 flex h-[500px]">
                  {/* Left Panel: Brand Selection */}
                  <div className="w-[300px] bg-slate-50/80 p-8 flex flex-col gap-4 border-r border-slate-100/50">
                    <div className="mb-4">
                      <h3 className="text-slate-900 font-black text-xs uppercase tracking-[0.2em] mb-1">Select Brand</h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-tight">Choose your specialized path</p>
                    </div>

                    {/* ZICA Option */}
                    <div 
                      className={`group relative p-6 rounded-3xl transition-all duration-500 cursor-pointer border ${
                        hoveredBrand === 'zica' 
                          ? 'bg-white shadow-xl shadow-orange-500/10 border-orange-100' 
                          : 'bg-transparent border-transparent hover:bg-white/50'
                      }`}
                      onMouseEnter={() => setHoveredBrand('zica')}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                          hoveredBrand === 'zica' ? 'bg-orange-600 scale-110 shadow-lg shadow-orange-600/20' : 'bg-white shadow-md group-hover:scale-105'
                        }`}>
                          <div className="relative w-8 h-8">
                            <Image 
                              src="/image/zica_logo.png" 
                              alt="ZICA" 
                              fill 
                              className="object-contain transition-all duration-500" 
                            />
                          </div>
                        </div>
                        <div>
                          <div className={`font-black text-sm tracking-tight transition-colors duration-300 ${hoveredBrand === 'zica' ? 'text-orange-600' : 'text-slate-900'}`}>ZICA</div>
                          <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Digital Arts</div>
                        </div>
                      </div>
                      <div className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-500 ${hoveredBrand === 'zica' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                        <span className="material-symbols-outlined text-orange-600 text-lg">arrow_forward_ios</span>
                      </div>
                    </div>

                    {/* ZIMA Option */}
                    <div 
                      className={`group relative p-6 rounded-3xl transition-all duration-500 cursor-pointer border ${
                        hoveredBrand === 'zima' 
                          ? 'bg-white shadow-xl shadow-blue-500/10 border-blue-100' 
                          : 'bg-transparent border-transparent hover:bg-white/50'
                      }`}
                      onMouseEnter={() => setHoveredBrand('zima')}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                          hoveredBrand === 'zima' ? 'bg-blue-700 scale-110 shadow-lg shadow-blue-700/20' : 'bg-white shadow-md group-hover:scale-105'
                        }`}>
                          <div className="relative w-8 h-8">
                            <Image 
                              src="/image/zima_logo.png" 
                              alt="ZIMA" 
                              fill 
                              className="object-contain transition-all duration-500" 
                            />
                          </div>
                        </div>
                        <div>
                          <div className={`font-black text-sm tracking-tight transition-colors duration-300 ${hoveredBrand === 'zima' ? 'text-blue-700' : 'text-slate-900'}`}>ZIMA</div>
                          <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Film & Media</div>
                        </div>
                      </div>
                      <div className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-500 ${hoveredBrand === 'zima' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                        <span className="material-symbols-outlined text-blue-700 text-lg">arrow_forward_ios</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Panel: Dynamic Content */}
                  <div className="flex-1 relative overflow-hidden bg-white">
                    {/* Empty State */}
                    {!hoveredBrand && (
                      <div className="h-full flex flex-col items-center justify-center text-center p-10 animate-fade-in">
                        <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center mb-6">
                          <span className="material-symbols-outlined text-4xl text-slate-200 animate-pulse">mouse</span>
                        </div>
                        <h4 className="text-slate-900 font-black text-xl mb-2">Explore Our Creative Ecosystem</h4>
                        <p className="text-slate-500 text-sm max-w-[400px] font-medium">Hover over ZICA or ZIMA to discover industry-leading courses tailored for your career goals.</p>
                      </div>
                    )}

                    {/* ZICA Courses */}
                    <div className={`absolute inset-0 p-10 transition-all duration-500 ${hoveredBrand === 'zica' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'}`}>
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h3 className="text-3xl font-black text-slate-900 tracking-tighter">Zee Institute of Creative Arts</h3>
                          <p className="text-orange-600 font-black text-[10px] uppercase tracking-[0.3em]">India's First Full-Fledged Digital Arts Institute</p>
                        </div>
                        <Link href="/courses?brand=zica" className="flex items-center gap-2 text-xs font-black text-orange-600 group">
                          Explore ZICA
                          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                        {[
                          "B.Voc Degree in 3D VFX", "2D Animation", "Visual Effects (VFX)", "Graphic Design", 
                          "UI/UX Design", "Web Design", "Digital Marketing", "Game Art & Design",
                          "Architectural Design", "Photography", "Blender", "Houdini"
                        ].map((item, idx) => (
                          <Link 
                            key={item} 
                            href={`/courses?brand=zica&search=${item.split(' ')[0]}`} 
                            className="group flex items-center justify-between py-3 px-5 rounded-2xl hover:bg-orange-50/50 transition-all duration-300 border border-transparent hover:border-orange-100"
                            style={{ animationDelay: `${idx * 50}ms` }}
                          >
                            <span className="text-[14px] text-slate-600 font-bold group-hover:text-slate-900 transition-colors">{item}</span>
                            <span className="material-symbols-outlined text-orange-400 text-sm opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">chevron_right</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* ZIMA Courses */}
                    <div className={`absolute inset-0 p-10 transition-all duration-500 ${hoveredBrand === 'zima' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'}`}>
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h3 className="text-3xl font-black text-slate-900 tracking-tighter">Zee Institute of Media Arts</h3>
                          <p className="text-blue-700 font-black text-[10px] uppercase tracking-[0.3em]">Premier Film & Television Institute</p>
                        </div>
                        <Link href="/courses?brand=zima" className="flex items-center gap-2 text-xs font-black text-blue-700 group">
                          Explore ZIMA
                          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                        {[
                          "Film Making", "Screen Writing", "Direction", "Cinematography", 
                          "Film & TV Editing", "Sound Recording", "Music Production", "Film Acting",
                          "Fashion Modelling", "Dancing", "Audio Production", "Sound Engineering"
                        ].map((item, idx) => (
                          <Link 
                            key={item} 
                            href={`/courses?brand=zima&search=${item.split(' ')[0]}`} 
                            className="group flex items-center justify-between py-3 px-5 rounded-2xl hover:bg-blue-50/50 transition-all duration-300 border border-transparent hover:border-blue-100"
                            style={{ animationDelay: `${idx * 50}ms` }}
                          >
                            <span className="text-[14px] text-slate-600 font-bold group-hover:text-slate-900 transition-colors">{item}</span>
                            <span className="material-symbols-outlined text-blue-400 text-sm opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">chevron_right</span>
                          </Link>
                        ))}
                      </div>
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
              href="#admissions"
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
            <Link href="#admissions">
              <button className="hidden sm:block kinetic-gradient text-on-primary px-7 py-3 rounded-full font-bold shadow-lg hover:shadow-orange-500/30 transition-all active:scale-95 duration-200">
                Enquiry Now
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile CardNav - Only visible on small screens */}
      <div className={`md:hidden sticky top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-2' : 'py-3'
      }`}>
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

