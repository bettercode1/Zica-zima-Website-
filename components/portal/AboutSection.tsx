'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-24 px-8 lg:px-24 bg-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side with Blob Shape */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Organic Shape Container */}
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
              <div 
                className="absolute inset-0 bg-orange-100 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-blob"
              />
              <div className="relative w-[90%] h-[90%] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] overflow-hidden shadow-2xl z-10 border-8 border-white">
                <Image
                  src="/image/amol_sir-1.jpg"
                  alt="Creative Director"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative elements from sample */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 grid grid-cols-5 gap-2 opacity-30">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-orange-500 rounded-full" />
                ))}
              </div>
              <div className="absolute top-10 -right-10 w-16 h-16 border-4 border-primary/20 rounded-lg rotate-12" />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <span className="text-orange-600 font-bold text-sm uppercase tracking-widest block mb-2">About us</span>
              <h3 className="font-headline text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Transforming Imagination <br />
                <span className="text-orange-500">Into Reality</span>
              </h3>
            </div>

            <div className="space-y-6 text-[17px] text-slate-700 leading-relaxed font-medium">
              <p>
                Step into a world where imagination is not just encouraged—it is transformed into reality. At ZICA ZIMA PCMC, we blend the power of Animation, Visual Effects, Gaming, and Media Arts with modern technology and industry-driven learning.
              </p>
              <p>
                More than an institute, we are a launchpad for creators, designers, and storytellers ready to shape the future. From 2D & 3D animation to filmmaking and sound design, every journey here is built to unlock your creative potential.
              </p>
              <p>
                Backed by Zee Learn and enriched with real-world exposure, our programs bridge the gap between passion and profession—through hands-on training, expert mentorship, and immersive learning.
              </p>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-400 to-rose-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-orange-500/20 flex items-center gap-2 group transition-all"
            >
              Read More
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </motion.button>
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
