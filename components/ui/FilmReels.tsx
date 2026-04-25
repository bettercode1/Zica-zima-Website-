import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  { src: '/image/Reel/WhatsApp Image 2026-04-25 at 12.34.14 PM.jpeg' },
  { src: '/image/Reel/WhatsApp Image 2026-04-25 at 12.34.17 PM.jpeg' },
  { src: '/image/Reel/WhatsApp Image 2026-04-25 at 12.34.18 PM.jpeg', position: 'center 20%' }, // Shifted "lower" to show more top content
  { src: '/image/Reel/WhatsApp Image 2026-04-25 at 12.34.20 PM.jpeg' },
  { src: '/image/Reel/WhatsApp Image 2026-04-25 at 12.35.02 PM.jpeg' },
  { src: '/image/Reel/WhatsApp Image 2026-04-25 at 12.35.04 PM.jpeg' },
  { src: '/image/Reel/WhatsApp Image 2026-04-25 at 12.36.03 PM.jpeg' },
  { src: '/image/Reel/WhatsApp Image 2026-04-25 at 12.36.22 PM.jpeg' },
  { src: '/image/Reel/WhatsApp Image 2026-04-25 at 12.36.30 PM.jpeg' },
];

const FilmFrame = ({ src, index, position = 'center' }: { src: string, index: number, position?: string }) => (
  <div className="relative w-full flex flex-col items-center py-6 bg-[#0a0a0a] border-x-[12px] border-[#1a1a1a] shadow-[inset_0_0_50px_rgba(0,0,0,0.9)]">
    {/* Side Markings (Old Film Numbers) */}
    <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[8px] font-mono text-white/10 uppercase tracking-widest whitespace-nowrap select-none">
      ZICA-SAFETY-FILM-{24 + index}
    </div>
    <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[8px] font-mono text-white/10 uppercase tracking-widest whitespace-nowrap select-none">
      FRAME-00{index}
    </div>

    {/* Perforations Left */}
    <div className="absolute left-2 top-0 bottom-0 w-4 flex flex-col justify-around py-1">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="w-full aspect-[1.2/1] bg-black rounded-sm shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_1px_1px_rgba(255,255,255,0.1)]" />
      ))}
    </div>
    
    {/* Perforations Right */}
    <div className="absolute right-2 top-0 bottom-0 w-4 flex flex-col justify-around py-1">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="w-full aspect-[1.2/1] bg-black rounded-sm shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_1px_1px_rgba(255,255,255,0.1)]" />
      ))}
    </div>

    {/* The Image (The "Frame") */}
    <div className="relative w-20 md:w-48 aspect-[4/3] bg-black rounded-[2px] overflow-hidden group border-[3px] border-[#222] shadow-[0_0_20px_rgba(0,0,0,0.8)]">
      {/* Film Texture Overlay on Image */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      <Image 
        src={src} 
        alt="Reel image" 
        fill 
        style={{ objectPosition: position }}
        className="object-cover sepia-[0.3] brightness-90 group-hover:sepia-0 group-hover:brightness-100 transition-all duration-700" 
      />
      
      {/* Inner Frame Shadow */}
      <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.6)] z-20" />
    </div>
  </div>
);

const FilmStrip = ({ direction = 'up' }: { direction?: 'up' | 'down' }) => {
  return (
    <div className="relative w-28 md:w-64 h-full shadow-[0_0_100px_rgba(0,0,0,0.5)] [perspective:1000px] [transform-style:preserve-3d]">
      {/* Overall Film Grain Overlay */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Side Vignette to give cylindrical look */}
      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent z-40 opacity-60"></div>
      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent z-40 opacity-60"></div>

      <motion.div
        style={{ rotateY: -15, skewY: 2, transformStyle: "preserve-3d" }}
        animate={{
          y: direction === 'up' ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col"
      >
        {[...images, ...images, ...images].map((img, i) => (
          <FilmFrame key={i} index={i} src={img.src} position={img.position} />
        ))}
      </motion.div>
    </div>
  );
};

export const FilmReels = () => {
  return (
    <div className="absolute inset-0 z-20 md:z-40 pointer-events-none hidden md:flex justify-end px-4 md:px-16 overflow-hidden opacity-30 md:opacity-90">
      <div className="block">
        <FilmStrip direction="down" />
      </div>
    </div>
  );
};

export const HorizontalFilmReel = () => {
  return (
    <div className="relative w-full overflow-hidden py-8 md:hidden">
      <motion.div
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-4 px-4"
      >
        {[...images, ...images, ...images].map((img, i) => (
          <div key={i} className="flex-shrink-0 relative py-4 bg-[#0a0a0a] border-y-[8px] border-[#1a1a1a] shadow-[inset_0_0_20px_rgba(0,0,0,0.9)]">
            {/* Top Perforations */}
            <div className="absolute top-1 left-0 right-0 h-2 flex justify-around px-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-full aspect-[1.2/1] bg-black rounded-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]" />
              ))}
            </div>
            {/* Bottom Perforations */}
            <div className="absolute bottom-1 left-0 right-0 h-2 flex justify-around px-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-full aspect-[1.2/1] bg-black rounded-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]" />
              ))}
            </div>
            {/* Image */}
            <div className="relative w-32 aspect-[4/3] bg-black rounded-[1px] overflow-hidden border-[2px] border-[#222] mx-4">
              <Image 
                src={img.src} 
                alt="Reel image" 
                fill 
                style={{ objectPosition: img.position || 'center' }}
                className="object-cover sepia-[0.3] brightness-90" 
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
