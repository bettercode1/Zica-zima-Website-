'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden bg-surface-container-low px-4 sm:px-8 lg:px-24 pt-32 pb-16 md:py-24">
      {/* Background Animated Blobs */}
      <div className="absolute top-[-5%] right-[-5%] md:top-[-10%] md:right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] md:bottom-[-20%] md:left-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-orange-500/10 rounded-full blur-[100px] md:blur-[150px] animate-pulse delay-1000" />
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 md:space-y-8 text-center lg:text-left order-1">
          <div className="space-y-4">
            <div className="flex flex-col items-center lg:items-start gap-1 ml-1">
              <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-[0.2em]">Backed by</span>
              <div className="relative w-32 md:w-40 h-10 md:h-12">
                <Image
                  src="/image/zee learn.png"
                  alt="Zee Learn Logo"
                  fill
                  className="object-contain object-center lg:object-left"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-bold text-xs md:text-sm tracking-wide">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1", fontSize: '16px' }}
              >
                campaign
              </span>
              ADMISSIONS OPEN 2026-27
            </div>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tighter">
            Where Every{' '}
            <span className="text-primary italic">Frame</span> Tells a Story.
          </h1>

          <p className="text-base md:text-lg text-slate-800 leading-relaxed max-w-xl font-medium mx-auto lg:mx-0">
            Master the art of visual storytelling at India's premier animation
            institute. From 2D classics to 3D blockbusters, we give your
            creativity the kinetic energy it needs to defy boundaries.
          </p>


          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="kinetic-gradient text-on-primary px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-primary/40 transition-all active:scale-95 duration-200">
              Know More About Courses
            </button>
          </div>

        </div>

        {/* Right Image/Video */}
        <div className="relative order-2 w-full max-w-2xl mx-auto lg:max-w-none">
          <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-3xl transition-all duration-500" />
          <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-[4/3] shadow-2xl border-4 border-white/10">
            <video
              src="/Videos/Video_for_HERO-Page.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover scale-[1.3] lg:scale-100"
            />
          </div>
        </div>
      </div>

      {/* Floating Particles/Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {mounted && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1], 
              scale: [1, 1.5, 1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0]
            }}
            transition={{ 
              duration: 10 + i * 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.5 
            }}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%` 
            }}
          />
        ))}
      </div>

      {/* Abstract Background Shape & Decorative Icons */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 -z-10" />
      
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[15%] text-primary/10 select-none pointer-events-none"
      >
        <span className="material-symbols-outlined text-8xl">draw</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[15%] left-[8%] text-orange-500/10 select-none pointer-events-none"
      >
        <span className="material-symbols-outlined text-8xl">movie</span>
      </motion.div>

      <motion.div 
        animate={{ x: [0, 20, 0], y: [0, -20, 0], rotate: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] left-[2%] text-primary/10 select-none pointer-events-none"
      >
        <span className="material-symbols-outlined text-7xl">sports_esports</span>
      </motion.div>

      <motion.div 
        animate={{ x: [0, -25, 0], y: [0, 25, 0], rotate: [0, 25, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[40%] right-[5%] text-orange-500/10 select-none pointer-events-none"
      >
        <span className="material-symbols-outlined text-7xl">palette</span>
      </motion.div>
    </section>
  );
}
