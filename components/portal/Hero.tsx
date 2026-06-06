'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { getPromotionalOffers, PromotionalOffer } from '@/lib/offers';

const FilmReels = dynamic(() => import('@/components/ui/FilmReels').then(mod => mod.FilmReels), { ssr: false });
const HorizontalFilmReel = dynamic(() => import('@/components/ui/FilmReels').then(mod => mod.HorizontalFilmReel), { ssr: false });

const HERO_VIDEO_SRC = '/Videos/Video_for_HERO-Page.mp4';
const HERO_POSTER_SRC = '/image/Courses/zica-1.png';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [offers, setOffers] = useState<PromotionalOffer[]>([]);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

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

    const videoTimer = window.setTimeout(() => setShouldLoadVideo(true), 1200);

    const loadOffers = () => {
      void getPromotionalOffers().then((data) => {
        if (data && data.length > 0) {
          setOffers(data);
        } else {
          setOffers([{ id: 'default', text: 'Offers are Coming Soon! Stay in Touch.', active: true, priority: 0, createdAt: new Date() }]);
        }
      });
    };

    const idleCallback = window.requestIdleCallback;
    if (typeof idleCallback === 'function') {
      idleCallback(loadOffers, { timeout: 3000 });
    } else {
      setTimeout(loadOffers, 2000);
    }

    return () => window.clearTimeout(videoTimer);
  }, []);

  useEffect(() => {
    if (offers.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentOfferIndex((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [offers]);

  return (
    <section className="relative min-h-[85vh] md:h-[90vh] flex flex-col overflow-hidden bg-black sm:px-8 lg:px-24">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_POSTER_SRC}
          alt="ZICA ZIMA animation and VFX institute in Pimpri Chinchwad Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        {shouldLoadVideo && (
          <video
            src={HERO_VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
        )}
        {/* Black Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-20" />
      </div>
      <FilmReels />

      {/* Offers Top Ticker — in document flow on mobile so headline sits below it */}
      <div className="relative md:absolute md:top-0 md:left-0 w-full z-40 shrink-0 bg-orange-600/90 backdrop-blur-md py-2 md:py-2 overflow-hidden border-b border-orange-400/30">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center gap-6 md:gap-10 w-max"
        >
          {/* We repeat the group of offers to create a seamless loop */}
          {[...Array(4)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex items-center gap-6 md:gap-10">
              {offers.length > 0 ? (
                offers.map((offer, i) => (
                  <div key={`${groupIndex}-${i}`} className="flex items-center gap-6 md:gap-10">
                    <span className="text-white font-black text-[10px] md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] flex items-center gap-2 md:gap-3 px-3 md:px-0">
                      <span className="material-symbols-outlined text-[12px] md:text-sm animate-pulse shrink-0">stars</span>
                      {offer.text}
                    </span>
                    <span className="text-white/30 font-black text-sm uppercase tracking-[0.2em]">•••</span>
                  </div>
                ))
              ) : (
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="text-white font-black text-[10px] md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] flex items-center gap-2 md:gap-3 px-3 md:px-0">
                    <span className="material-symbols-outlined text-[12px] md:text-sm animate-pulse shrink-0">stars</span>
                    Loading Offers...
                  </span>
                  <span className="text-white/30 font-black text-sm uppercase tracking-[0.2em]">•••</span>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="container mx-auto relative z-30 flex flex-col items-center md:items-start justify-center flex-1 w-full px-4 sm:px-0 pt-8 pb-10 md:pt-14 md:pb-0">
        <div className="max-w-4xl w-full text-center md:text-left">
          {/* Main Content Area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8 min-w-0"
          >


            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-headline text-[clamp(2rem,6.5vw,5rem)] font-black leading-[1.22] md:leading-[1.18] tracking-tight text-white text-center md:text-left overflow-visible"
            >
              <span className="block pb-0.5">Best</span>
              <span className="block py-1 md:py-1.5 leading-[1.3]">
                <span className="inline-block italic text-[#ff7b1c] drop-shadow-[0_0_24px_rgba(255,123,28,0.25)]">
                  Animation and VFX
                </span>
              </span>
              <span className="block pt-0.5 max-w-[16ch] md:max-w-2xl mx-auto md:mx-0">
                Institute in Pimpri Chinchwad Pune.
              </span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col items-center md:items-start gap-8 w-full"
            >
              <Link href="/courses">
                <button className="kinetic-gradient text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-orange-500/40 transition-all active:scale-95 duration-200">
                  Start Your Creative Journey
                </button>
              </Link>

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
    </section>
  );
}
