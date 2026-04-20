'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote:
      "I'm thrilled to begin my UI/UX design course at Zee Institute of Creative & Media Arts, Pimpri Chinchwad! The faculty is super amazing and is doing a great job in enhancing our skills and knowledge in the field of creative arts and media arts. Excited to learn, grow, and create impactful designs!",
    name: "Mrudula Lanke",
    designation: "Student",
    src: "https://ui-avatars.com/api/?name=Mrudula+Lanke&background=3131b1&color=fff&size=512",
  },
  {
    quote:
      "I'm Starting my design course 3d's max In Zee Institute of Creative Arts & Zee Institute of Media Arts in Pimpri Chinchwad. The faculty is good, Politely, friendly supporting & their mentor & guidance is amazing. Their wisdom shapes our mindset their encouragement fuels our strength, & their belief becomes the foundation of our confidence. We rise higher not just because of dreams but shows us how to turn those dreams into reality.",
    name: "Vikrant Tambe",
    designation: "Student",
    src: "https://ui-avatars.com/api/?name=Vikrant+Tambe&background=3131b1&color=fff&size=512",
  },
  {
    quote:
      "Knowledgeable & Supportive Faculty Many students praise experienced teachers who provide personal attention and practical skills. 🏆",
    name: "Aavez Maniyar",
    designation: "Student",
    src: "https://ui-avatars.com/api/?name=Aavez+Maniyar&background=3131b1&color=fff&size=512",
  },
  {
    quote:
      "Cozy environment friendly teachers such a nice environment 😁",
    name: "Yash Gumate",
    designation: "Student",
    src: "https://ui-avatars.com/api/?name=Yash+Gumate&background=3131b1&color=fff&size=512",
  },
];

const StarIcon = () => (
  <svg className="w-5 h-5 text-orange-500 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const transition = {
    type: "spring",
    duration: 0.8,
    bounce: 0.2
  };

  return (
    <section className="relative py-24 bg-surface-container-low overflow-hidden">
      {/* Background Animated Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] animate-pulse delay-1000" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -40, 0],
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 8 + i, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.7 
            }}
            className="absolute w-1.5 h-1.5 bg-primary/20 rounded-full"
            style={{ 
              top: `${Math.random() * 80 + 10}%`, 
              left: `${Math.random() * 80 + 10}%` 
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-orange-600 font-extrabold text-[10px] uppercase tracking-[0.2em] block mb-3">Student Voice</span>
          <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Student <span className="text-primary italic">Testimonials</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mt-6 rounded-full" />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-12 max-w-4xl mx-auto">
          <div className="relative min-h-[300px] md:min-h-[250px] w-full flex flex-col items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={transition}
                className="space-y-10"
              >
                <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed font-headline italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-orange-500 rounded-full blur-sm opacity-30" />
                    <img
                      src={testimonials[currentIndex].src}
                      alt={testimonials[currentIndex].name}
                      className="relative w-20 h-20 rounded-full border-2 border-white shadow-lg object-cover"
                    />
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <p className="text-xl font-bold text-slate-900">{testimonials[currentIndex].name}</p>
                    <p className="text-slate-500 font-semibold text-sm uppercase tracking-wider">
                      {testimonials[currentIndex].designation}
                    </p>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <StarIcon />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === i 
                    ? "w-8 h-2.5 bg-primary shadow-lg shadow-primary/30" 
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Symbols & Icons */}
      <motion.div 
        animate={{ rotate: [0, 10, 0], y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[5%] text-primary/5 select-none pointer-events-none hidden lg:block"
      >
        <span className="material-symbols-outlined text-9xl">format_quote</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[15%] right-[8%] text-orange-500/10 select-none pointer-events-none"
      >
        <span className="material-symbols-outlined text-7xl">auto_awesome</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[20%] right-[10%] text-primary/10 select-none pointer-events-none"
      >
        <span className="material-symbols-outlined text-8xl">workspace_premium</span>
      </motion.div>

      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        className="absolute bottom-[15%] left-[10%] text-orange-500/10 select-none pointer-events-none"
      >
        <span className="material-symbols-outlined text-6xl">chat</span>
      </motion.div>
    </section>
  );
}
