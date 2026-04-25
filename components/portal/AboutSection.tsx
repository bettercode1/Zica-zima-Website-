'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-12 md:py-24 px-4 sm:px-8 lg:px-24 bg-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 md:w-96 md:h-96 bg-orange-500/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
          {/* Image Side with Blob Shape */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative order-2 lg:order-1"
          >
            {/* Organic Shape Container */}
            <div className="relative w-full max-w-[280px] sm:max-w-md mx-auto aspect-square flex items-center justify-center">
              <div 
                className="absolute inset-0 bg-orange-100 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-blob"
              />
              <div className="relative w-[90%] h-[90%] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] overflow-hidden shadow-2xl z-10 border-4 md:border-8 border-white">
                <Image
                  src="/image/amol_sir-1.jpg"
                  alt="Creative Director"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-16 h-16 md:w-24 md:h-24 grid grid-cols-5 gap-1 md:gap-2 opacity-30">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-orange-500 rounded-full" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-6 text-center lg:text-left order-1 lg:order-2"
          >
            <div className="space-y-2 md:space-y-4">
              <span className="text-orange-600 font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] block mb-2">About us</span>
              <h3 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Transforming Imagination <br className="hidden sm:block" />
                <span className="text-orange-500">Into Reality</span>
              </h3>
            </div>

            <div className="space-y-4 md:space-y-6 text-[15px] sm:text-[17px] text-slate-600 leading-relaxed font-medium">
              <p>
                Step into a world where imagination is not just encouraged—it is transformed into reality. At ZICA ZIMA PCMC, we blend the power of Animation, Visual Effects, Gaming, and Media Arts with modern technology and industry-driven learning.
              </p>
              <p className="hidden sm:block">
                More than an institute, we are a launchpad for creators, designers, and storytellers ready to shape the future. From 2D & 3D animation to filmmaking and sound design, every journey here is built to unlock your creative potential.
              </p>
              <p>
                Backed by Zee Learn and enriched with real-world exposure, our programs bridge the gap between passion and profession—through hands-on training, expert mentorship, and immersive learning.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start pt-2">
              <Link href="/about">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-900 text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-black text-sm md:text-base shadow-xl shadow-slate-900/10 flex items-center gap-2 group transition-all uppercase tracking-widest"
                >
                  Read More
                  <span className="material-symbols-outlined text-sm md:text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          33% { border-radius: 70% 30% 50% 50% / 30% 60% 40% 70%; }
          66% { border-radius: 40% 60% 30% 70% / 60% 30% 70% 40%; }
        }
        .animate-blob {
          animation: blob 8s infinite alternate;
        }
      `}</style>
    </section>
  );
}
