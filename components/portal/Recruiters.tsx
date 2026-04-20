'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const recruiters = [
  '/image/Our Recruter/slogo1.png',
  '/image/Our Recruter/slogo2.png',
  '/image/Our Recruter/slogo3.jpg',
  '/image/Our Recruter/slogo4.png',
  '/image/Our Recruter/slogo5.png',
  '/image/Our Recruter/slogo6.jpg',
  '/image/Our Recruter/slogo7.png',
  '/image/Our Recruter/slogo8.jpg',
  '/image/Our Recruter/slogo9.jpg',
  '/image/Our Recruter/slogo10.png',
  '/image/Our Recruter/slogo11.jpg',
  '/image/Our Recruter/slogo12.jpg',
  '/image/Our Recruter/slogo13.png',
  '/image/Our Recruter/slogo14.png',
  '/image/Our Recruter/slogo15.jpg',
  '/image/Our Recruter/slogo16.jpg',
  '/image/Our Recruter/slogo17.png',
  '/image/Our Recruter/slogo18.png',
  '/image/Our Recruter/slogo19.png',
];

export default function Recruiters() {
  // Duplicate recruiters array to create seamless loop
  const doubledRecruiters = [...recruiters, ...recruiters];

  return (
    <section className="py-32 bg-slate-50 overflow-hidden border-y border-slate-100 relative">
      {/* Animated Dot Grids */}
      <motion.div 
        animate={{ y: [0, 15, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 grid grid-cols-5 gap-3 pointer-events-none opacity-20"
      >
        {[...Array(25)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-orange-500 rounded-full" />
        ))}
      </motion.div>

      <motion.div 
        animate={{ y: [0, -15, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-20 left-10 grid grid-cols-5 gap-3 pointer-events-none opacity-20"
      >
        {[...Array(25)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-orange-500 rounded-full" />
        ))}
      </motion.div>

      <div className="container mx-auto px-8 mb-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          <span className="text-orange-600 font-bold text-sm uppercase tracking-widest block mb-2">Our Network</span>
          <h2 className="font-headline text-4xl font-extrabold text-slate-900">
            Our Top <span className="text-primary">Recruiters</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mt-4 rounded-full" />
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="flex whitespace-nowrap animate-marquee py-4"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {doubledRecruiters.map((logo, index) => (
            <div 
              key={index} 
              className="mx-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <div className="relative h-16 w-32 md:w-40">
                <Image
                  src={logo}
                  alt={`Recruiter Logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Breaking News Style Ticker (Optional bottom bar) */}
      <div className="mt-12 bg-slate-900 py-3 relative overflow-hidden">
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap flex items-center gap-8"
        >
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              100% Placement Assistance • Top Studio Partners • Industry Expert Mentors • 2000+ Students Placed • Global Opportunities
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
