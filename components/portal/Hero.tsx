'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden bg-surface-container-low px-8 lg:px-24 py-20">
      {/* Background Animated Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px] animate-pulse delay-1000" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-col gap-1 ml-1">
              <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-[0.2em]">Backed by</span>
              <div className="relative w-40 h-12">
                <Image
                  src="/image/zee learn.png"
                  alt="Zee Learn Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-bold text-sm tracking-wide">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1", fontSize: '16px' }}
              >
                campaign
              </span>
              ADMISSIONS OPEN 2026-27
            </div>
          </div>

          <h1 className="font-headline text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tighter">
            Where Every{' '}
            <span className="text-primary italic">Frame</span> Tells a Story.
          </h1>

          <p className="text-lg text-slate-800 leading-relaxed max-w-xl font-medium">
            Master the art of visual storytelling at India's premier animation
            institute. From 2D classics to 3D blockbusters, we give your
            creativity the kinetic energy it needs to defy boundaries.
          </p>


          <div className="flex flex-wrap gap-4">
            <button className="kinetic-gradient text-on-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-primary/40 transition-all active:scale-95 duration-200">
              Know More About Courses
            </button>
          </div>

        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-3xl transition-all duration-500" />
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-2xl">
            <video
              src="/Videos/Video_for_HERO-Page.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>


        </div>
      </div>

      {/* Floating Particles/Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
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

      {/* Animated Dot Grid */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] grid grid-cols-5 gap-3 pointer-events-none opacity-30"
      >
        {[...Array(25)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-orange-500 rounded-full" />
        ))}
      </motion.div>
    </section>
  );
}
