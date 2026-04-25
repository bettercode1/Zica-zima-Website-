'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FilmReels, HorizontalFilmReel } from '@/components/ui/FilmReels';
import { getActiveOffers, Offer } from '@/lib/offers';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  const [particles, setParticles] = useState<{x:number, y:number, top:number, left:number, duration:number, delay:number}[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    setParticles([...Array(6)].map((_, i) => ({
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 10 + i * 2,
      delay: i * 0.5
    })));

    async function loadOffers() {
      const data = await getActiveOffers();
      if (data.length > 0) {
        setOffers(data);
      } else {
        // Fallback placeholder if Firebase is empty
        setOffers([{ id: 'default', text: 'Offers are Coming Soon! Stay in Touch.', active: true, createdAt: new Date() }]);
      }
    }
    loadOffers();
  }, []);

  useEffect(() => {
    if (offers.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentOfferIndex((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [offers]);

  return (
    <section className="relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden bg-black px-4 sm:px-8 lg:px-24 pt-[100px] md:pt-0">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/Videos/Video_for_HERO-Page.mp4"
          poster="/image/Courses/zica-1.png" 
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Black Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-20" />
      </div>
      <FilmReels />
      
      <div className="container mx-auto relative z-30 flex flex-col items-center md:items-start justify-center py-10 md:py-0">
        <div className="max-w-4xl w-full px-4 sm:px-0 text-center md:text-left">
          {/* Main Content Area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8 min-w-0"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="space-y-4 flex flex-col items-center md:items-start"
            >
              <div className="flex flex-col items-center md:items-start gap-1">
                <span className="text-[10px] font-extrabold text-white/60 uppercase tracking-[0.2em]">Backed by</span>
                <div className="relative w-32 md:w-40 h-10 md:h-12">
                  <Image
                    src="/image/zee learn.png"
                    alt="Zee Learn Logo"
                    fill
                    className="object-contain object-center md:object-left"
                  />
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full font-bold text-xs md:text-sm tracking-wide backdrop-blur-md border border-white/10">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1", fontSize: '16px' }}
                >
                  campaign
                </span>
                ADMISSIONS OPEN 2026-27
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-headline text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1.1] md:leading-[1.04] tracking-[-0.02em] text-white md:max-w-[12ch] text-balance"
            >
              Where Every{' '}
              <span className="relative inline-block px-2 italic">
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#ff7b1c] to-[#f1711c]">Frame</span>
              </span> Tells a Story.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-base md:text-lg text-white/80 leading-relaxed max-w-xl font-medium"
            >
              Master the art of visual storytelling at India&apos;s premier animation
              institute. From 2D classics to 3D blockbusters, we give your
              creativity the kinetic energy it needs to defy boundaries.
            </motion.p>


            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center md:items-start gap-8 w-full"
            >
              <button className="kinetic-gradient text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-orange-500/40 transition-all active:scale-95 duration-200">
                Know More About Courses
              </button>

              {/* Mobile Horizontal Reel */}
              <div className="w-full md:hidden">
                <HorizontalFilmReel />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Floating Particles/Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {mounted && particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1], 
              scale: [1, 1.5, 1],
              x: [0, p.x, 0],
              y: [0, p.y, 0]
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: p.delay 
            }}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{ 
              top: `${p.top}%`, 
              left: `${p.left}%` 
            }}
          />
        ))}
      </div>

      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[15%] text-white/5 select-none pointer-events-none z-10 hidden sm:block"
      >
        <span className="material-symbols-outlined text-8xl">draw</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[15%] left-[8%] text-orange-500/5 select-none pointer-events-none z-10 hidden sm:block"
      >
        <span className="material-symbols-outlined text-8xl">movie</span>
      </motion.div>

      {/* Offers Bottom Ticker */}
      <div className="absolute bottom-0 left-0 w-full z-40 bg-orange-600/90 backdrop-blur-md py-1.5 md:py-2 overflow-hidden border-t border-orange-400/30">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center gap-6 md:gap-10 w-max"
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 md:gap-10">
              <span className="text-white font-black text-[10px] md:text-sm uppercase tracking-[0.2em] flex items-center gap-2 md:gap-3">
                <span className="material-symbols-outlined text-[12px] md:text-sm animate-pulse">stars</span>
                {offers[currentOfferIndex]?.text || 'Offers are Coming Soon! Stay in Touch.'}
              </span>
              <span className="text-white/30 font-black text-sm uppercase tracking-[0.2em]">•••</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
