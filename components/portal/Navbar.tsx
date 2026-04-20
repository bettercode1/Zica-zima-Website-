'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';


export default function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

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
  const handleNavLinkClick = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-xl shadow-slate-900/5 font-headline tracking-tight">
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
            href="#home"
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

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 w-56 bg-white rounded-xl shadow-2xl border border-slate-100 p-3 transition-all duration-300 origin-top-left ${isAboutOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
              <div className="space-y-1">
                <Link href="#about" className="block p-3 rounded-lg hover:bg-blue-50 group/item transition-colors">
                  <div className="font-bold text-slate-900 group-hover/item:text-blue-600">About Us</div>
                </Link>
                <Link href="#team" className="block p-3 rounded-lg hover:bg-blue-50 group/item transition-colors">
                  <div className="font-bold text-slate-900 group-hover/item:text-blue-600">Our Team</div>
                </Link>
                <Link href="#director" className="block p-3 rounded-lg hover:bg-blue-50 group/item transition-colors">
                  <div className="font-bold text-slate-900 group-hover/item:text-blue-600">Our Director</div>
                </Link>
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
            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 transition-all duration-300 origin-top ${isCoursesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
              <div className="grid grid-cols-3 gap-8">
                {/* ZICA Column */}
                <div className="space-y-4">
                  <h3 className="text-blue-600 font-extrabold text-sm uppercase tracking-widest border-b pb-2">ZICA</h3>
                  <ul className="space-y-2 text-[13px] text-slate-600 font-medium">
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">B.Voc Degree in 3D Animation & VFX</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">2D Animation</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Visual Effects (VFX)</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Graphic Design</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">UI/UX</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Web Design</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Digital Marketing</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Game Art & Design</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Architectural Design & Animation</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Visual Promotion & AD Design</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Photography</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Blender</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Houdini</li>
                  </ul>
                </div>

                {/* ZIMA Column */}
                <div className="space-y-4">
                  <h3 className="text-blue-600 font-extrabold text-sm uppercase tracking-widest border-b pb-2">ZIMA</h3>
                  <ul className="space-y-2 text-[13px] text-slate-600 font-medium">
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Film Making</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Screen Writing</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Direction</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Cinematography</li>
                    <li className="hover:text-orange-600 cursor-pointer transition-colors">Vertical Cinematography</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Film & TV Editing</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Film & TV Production</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Sound Recording</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Sound Engineering</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Audio Production</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Music Production</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Film Acting</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Fashion Modelling Personal Grooming</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Dancing</li>
                  </ul>
                </div>

                {/* Modular Column */}
                <div className="space-y-4">
                  <h3 className="text-blue-600 font-extrabold text-sm uppercase tracking-widest border-b pb-2">Modular Courses</h3>
                  <ul className="space-y-2 text-[13px] text-slate-600 font-bold uppercase tracking-wide">
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">ILLUSTRATOR</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">PHOTOSHOP</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">AFTER EFFECTS</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">PREMIER PRO</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">COREL DRAW</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">ZBRUSH</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">NOTION</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">FIGMA</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">MAYA</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">UNREAL ENGINE</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">BLENDER</li>
                  </ul>
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
          <button className="hidden sm:block kinetic-gradient text-on-primary px-7 py-3 rounded-full font-bold shadow-lg hover:shadow-orange-500/30 transition-all active:scale-95 duration-200">
            Enquiry Now
          </button>
          <button 
            className="md:hidden text-slate-900 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed inset-0 top-[68px] md:top-[88px] z-40 bg-white md:hidden overflow-y-auto"
      >
        <div className="flex flex-col p-6 space-y-6">
          <Link
            href="#home"
            onClick={() => handleNavLinkClick('home')}
            className={`text-xl font-bold uppercase tracking-wide ${activeSection === 'home' ? 'text-orange-600' : 'text-slate-900'}`}
          >
            Home
          </Link>
          
          <div className="space-y-4">
            <button 
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className={`flex items-center justify-between w-full text-xl font-bold uppercase tracking-wide ${activeSection === 'about' ? 'text-orange-600' : 'text-slate-900'}`}
            >
              About
              <span className={`material-symbols-outlined transition-transform ${isAboutOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>
            {isAboutOpen && (
              <div className="pl-4 space-y-3 border-l-2 border-slate-100">
                <Link href="#about" onClick={() => handleNavLinkClick('about')} className="block text-slate-600 font-bold">About Us</Link>
                <Link href="#team" onClick={() => handleNavLinkClick('about')} className="block text-slate-600 font-bold">Our Team</Link>
                <Link href="#director" onClick={() => handleNavLinkClick('about')} className="block text-slate-600 font-bold">Our Director</Link>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <button 
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              className={`flex items-center justify-between w-full text-xl font-bold uppercase tracking-wide ${activeSection === 'courses' ? 'text-orange-600' : 'text-slate-900'}`}
            >
              Courses
              <span className={`material-symbols-outlined transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>
            {isCoursesOpen && (
              <div className="pl-4 space-y-6 border-l-2 border-slate-100 py-2">
                <div className="space-y-2">
                  <h3 className="text-sm font-extrabold text-blue-600 uppercase tracking-widest">ZICA</h3>
                  <div className="grid grid-cols-1 gap-2 text-slate-600 font-medium text-sm">
                    <div className="hover:text-blue-600 cursor-pointer">3D Animation & VFX</div>
                    <div className="hover:text-blue-600 cursor-pointer">Graphic Design</div>
                    <div className="hover:text-blue-600 cursor-pointer">UI/UX</div>
                    <div className="hover:text-blue-600 cursor-pointer">Web Design</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-extrabold text-blue-600 uppercase tracking-widest">ZIMA</h3>
                  <div className="grid grid-cols-1 gap-2 text-slate-600 font-medium text-sm">
                    <div className="hover:text-blue-600 cursor-pointer">Film Making</div>
                    <div className="hover:text-blue-600 cursor-pointer">Direction</div>
                    <div className="hover:text-blue-600 cursor-pointer">Acting</div>
                  </div>
                </div>
                <Link 
                  href="#courses" 
                  onClick={() => handleNavLinkClick('courses')}
                  className="block text-primary font-bold text-sm"
                >
                  View All Courses →
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/blogs"
            onClick={() => handleNavLinkClick('blogs')}
            className={`text-xl font-bold uppercase tracking-wide ${activeSection === 'blogs' ? 'text-orange-600' : 'text-slate-900'}`}
          >
            Blogs
          </Link>

          <Link
            href="#admissions"
            onClick={() => handleNavLinkClick('admissions')}
            className={`text-xl font-bold uppercase tracking-wide ${activeSection === 'admissions' ? 'text-orange-600' : 'text-slate-900'}`}
          >
            Contact Us
          </Link>

          <button className="kinetic-gradient text-on-primary w-full py-4 rounded-xl font-bold shadow-lg mt-4">
            Enquiry Now
          </button>
        </div>
      </motion.div>
    </nav>
  );
}

