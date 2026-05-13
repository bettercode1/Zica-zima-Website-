'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    quote:
      "I'm thrilled to begin my UI/UX design course at Zee Institute of Creative & Media Arts, Pimpri Chinchwad! The faculty is super amazing and is doing a great job in enhancing our skills and knowledge in the field of creative arts and media arts. Excited to learn, grow, and create impactful designs!",
    name: "Mrudula Lanke",
    designation: "Student",
    src: "/image/Testimonials/ML.jpeg",
  },
  {
    quote:
      "I'm Starting my design course 3d's max In Zee Institute of Creative Arts & Zee Institute of Media Arts in Pimpri Chinchwad. The faculty is good, Politely, friendly supporting & their mentor & guidance is amazing. Their wisdom shapes our mindset their encouragement fuels our strength, & their belief becomes the foundation of our confidence. We rise higher not just because of dreams but shows us how to turn those dreams into reality.",
    name: "Vikrant Tambe",
    designation: "Student",
    src: "/image/Testimonials/VT.png",
  },
  {
    quote:
      "Knowledgeable & Supportive Faculty Many students praise experienced teachers who provide personal attention and practical skills. 🏆",
    name: "Aavez Maniyar",
    designation: "Student",
    src: "/image/Testimonials/A.png",
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
  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-slate-50 overflow-hidden">
      {/* Background Animated Blobs */}
      <div className="absolute top-[-5%] right-[-5%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-orange-500/5 rounded-full blur-[80px] sm:blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-primary/5 rounded-full blur-[100px] sm:blur-[120px] animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <span className="text-orange-600 font-extrabold text-[9px] sm:text-[10px] uppercase tracking-[0.25em] block mb-3">Student Voice</span>
          <h2 className="font-headline text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141a3b] tracking-tight leading-tight">
            Our Student <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#9d4300] to-[#f1711c] italic pr-2">Testimonials</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mt-6 rounded-full" />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
          <div className="relative min-h-[380px] xs:min-h-[320px] sm:min-h-[280px] w-full flex flex-col items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-6 sm:space-y-8"
              >
                <div className="relative px-2">
                  <span className="material-symbols-outlined text-4xl sm:text-6xl text-orange-200 absolute -top-4 -left-2 sm:-top-8 sm:-left-6 select-none opacity-50">format_quote</span>
                  <blockquote className="text-base sm:text-xl md:text-2xl font-medium text-slate-700 leading-relaxed font-body italic px-2 sm:px-4">
                    {testimonials[currentIndex].quote}
                  </blockquote>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-orange-500 rounded-full blur-sm opacity-20" />
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-full border-2 border-white shadow-xl">
                      <Image
                        src={testimonials[currentIndex].src}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <p className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">{testimonials[currentIndex].name}</p>
                    <p className="text-slate-500 font-bold text-[10px] sm:text-xs uppercase tracking-widest mt-1">
                      {testimonials[currentIndex].designation}
                    </p>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2 sm:gap-3 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === i 
                    ? "w-8 h-2 sm:w-10 sm:h-2.5 bg-orange-500 shadow-lg shadow-orange-500/30" 
                    : "w-2 h-2 sm:w-2.5 sm:h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
