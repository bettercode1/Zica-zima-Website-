'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import CardNav from '@/components/ui/CardNav';

export default function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pathname = usePathname();

  const navItems = [
    {
      label: "About",
      bgColor: "#f8fafc",
      textColor: "#0f172a",
      links: [
        { label: "About Us", href: "#about", ariaLabel: "About Us" },
        { label: "Our Team", href: "#team", ariaLabel: "Our Team" },
        { label: "Our Director", href: "#director", ariaLabel: "Our Director" }
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
    const handleScroll = () => {
      const sections = ['home', 'about', 'courses', 'admissions'];
      const scrollPosition = window.scrollY + 200;

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
    };

    window.addEventListener('scroll', handleScroll);
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
      <nav className="hidden md:block sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-xl shadow-slate-900/5 font-headline tracking-tight">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-12 py-3 md:py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block relative h-14 w-36 md:h-20 md:w-52 md:scale-110">
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
                activeSection === 'home' ? 'text-orange-600' : 'text-slate-500 hover:text-blue-600'
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
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
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
                  activeSection === 'about' ? 'text-orange-600' : 'text-slate-500 group-hover:text-blue-600'
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
              <div className={`absolute top-full left-0 w-[600px] bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_70px_-15px_rgba(0,0,0,0.15)] border border-white/40 p-8 transition-all duration-500 origin-top-left overflow-hidden ${isAboutOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-4 invisible'}`}>
                <div className="relative z-10 grid grid-cols-2 gap-8">
                  {/* Left Column: Navigation */}
                  <div className="space-y-6">
                    <div className="border-b border-slate-100 pb-3">
                      <h3 className="text-slate-900 font-black text-sm uppercase tracking-[0.2em]">Our Identity</h3>
                    </div>
                    <div className="space-y-1">
                      {[
                        { label: "About Us", desc: "Our journey and mission in creative education.", href: "#about", icon: "info" },
                        { label: "Our Team", desc: "The creative minds behind our success.", href: "#team", icon: "groups" },
                        { label: "Our Director", desc: "Visionary leadership guiding our future.", href: "#director", icon: "person" }
                      ].map((item) => (
                        <Link key={item.label} href={item.href} className="group flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-300">
                          <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-xl">{item.icon}</span>
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 group-hover:text-primary transition-colors">{item.label}</div>
                            <div className="text-[11px] text-slate-500 font-medium leading-tight">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Why Choose Us / Quick Info */}
                  <div className="bg-slate-50/50 rounded-3xl p-6 border border-slate-100 flex flex-col justify-between">
                    <div>
                      <h4 className="text-slate-900 font-black text-sm mb-4 uppercase tracking-widest">Why Choose ZICA ZIMA?</h4>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                          <span className="text-[11px] text-slate-600 font-bold">Industry Standard Labs & Tech</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                          <span className="text-[11px] text-slate-600 font-bold">100% Placement Assistance</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                          <span className="text-[11px] text-slate-600 font-bold">Expert Faculty from the Industry</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-200/50">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                              <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400" />
                            </div>
                          ))}
                        </div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Join 10k+ Students</span>
                      </div>
                    </div>
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
                  activeSection === 'courses' ? 'text-orange-600' : 'text-slate-500 group-hover:text-blue-600'
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
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                )}
              </button>


              {/* Mega Dropdown Menu */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[95vw] max-w-[1100px] bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_70px_-15px_rgba(0,0,0,0.15)] border border-white/40 p-10 transition-all duration-500 origin-top overflow-hidden ${isCoursesOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-4 invisible'}`}>
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-100/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="relative z-10 grid grid-cols-12 gap-10">
                  {/* ZICA Column (5/12) */}
                  <div className="col-span-5 space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-xl bg-white shadow-md p-2 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                          <Image src="/image/zica_logo.png" alt="ZICA" fill className="object-contain p-1" />
                        </div>
                        <div>
                          <h3 className="text-slate-900 font-black text-lg tracking-tight">ZICA</h3>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Digital Arts & Animation</p>
                        </div>
                      </div>
                      <Link href="/courses?brand=zica" className="text-[11px] font-black text-orange-600 hover:underline uppercase tracking-widest">Explore All</Link>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                      {[
                        "B.Voc Degree in 3D VFX", "2D Animation", "Visual Effects (VFX)", "Graphic Design", 
                        "UI/UX Design", "Web Design", "Digital Marketing", "Game Art & Design",
                        "Architectural Design", "Photography", "Blender", "Houdini"
                      ].map((item) => (
                        <Link key={item} href={`/courses?brand=zica&search=${item.split(' ')[0]}`} className="group flex items-center gap-2 py-2 px-3 rounded-xl hover:bg-orange-50 transition-all duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-orange-600 transition-colors" />
                          <span className="text-[13px] text-slate-600 font-bold group-hover:text-slate-900 transition-colors">{item}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* ZIMA Column (5/12) */}
                  <div className="col-span-5 space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-xl bg-white shadow-md p-2 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                          <Image src="/image/zima_logo.png" alt="ZIMA" fill className="object-contain p-1" />
                        </div>
                        <div>
                          <h3 className="text-slate-900 font-black text-lg tracking-tight">ZIMA</h3>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Film & Media Arts</p>
                        </div>
                      </div>
                      <Link href="/courses?brand=zima" className="text-[11px] font-black text-[#3131b1] hover:underline uppercase tracking-widest">Explore All</Link>
                    </div>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                      {[
                        "Film Making", "Screen Writing", "Direction", "Cinematography", 
                        "Film & TV Editing", "Sound Recording", "Music Production", "Film Acting",
                        "Fashion Modelling", "Dancing", "Audio Production", "Sound Engineering"
                      ].map((item) => (
                        <Link key={item} href={`/courses?brand=zima&search=${item.split(' ')[0]}`} className="group flex items-center gap-2 py-2 px-3 rounded-xl hover:bg-blue-50 transition-all duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#3131b1] transition-colors" />
                          <span className="text-[13px] text-slate-600 font-bold group-hover:text-slate-900 transition-colors">{item}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Call to Action Column (2/12) */}
                  <div className="col-span-2 bg-slate-50/50 rounded-[2rem] p-6 flex flex-col items-center justify-center text-center border border-slate-100">
                    <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl animate-bounce">school</span>
                    </div>
                    <h4 className="text-slate-900 font-black text-sm mb-2 leading-tight">Ready to start your career?</h4>
                    <p className="text-[11px] text-slate-500 font-medium mb-6">Join 10,000+ successful alumni worldwide.</p>
                    <Link href="#admissions" className="w-full py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-colors shadow-lg shadow-slate-900/10">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            <Link
              href="/blogs"
              onClick={() => setActiveSection('blogs')}
              className={`relative py-2 text-sm font-bold tracking-wider uppercase transition-all duration-300 group ${
                activeSection === 'blogs' ? 'text-orange-600' : 'text-slate-500 hover:text-blue-600'
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
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              )}
            </Link>

            <Link
              href="#admissions"
              onClick={() => setActiveSection('admissions')}
              className={`relative py-2 text-sm font-bold tracking-wider uppercase transition-all duration-300 group ${
                activeSection === 'admissions' ? 'text-orange-600' : 'text-slate-500 hover:text-blue-600'
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
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
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
      <div className="md:hidden">
        <CardNav
          logo="/image/ZICA ZIMA PCMC LOGO.png"
          logoAlt="ZICA ZIMA PCMC"
          items={navItems}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#f97316"
          buttonTextColor="#fff"
          ease="power3.out"
        />
      </div>
    </>
  );
}

