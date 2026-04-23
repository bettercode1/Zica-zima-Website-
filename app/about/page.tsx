'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Navbar from "@/components/portal/Navbar";

const Footer = dynamic(() => import("@/components/portal/Footer"), { ssr: false });

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface-bright selection:bg-primary/20 cursor-none relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <Navbar />

      <div className="pt-24 md:pt-32 pb-20 px-4 sm:px-8 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-24 space-y-6"
          >
            <span className="text-orange-600 font-black text-xs uppercase tracking-[0.4em] block mb-4">Creative Excellence</span>
            <h1 className="font-headline text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
              ABOUT <br className="hidden md:block" /> 
              <span className="text-orange-500">ZICA ZIMA PCMC</span>
            </h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center"
            >
              <div className="w-32 md:w-48 relative">
                <Image 
                  src="/image/zee learn.png" 
                  alt="Zee Learn" 
                  width={200} 
                  height={80} 
                  className="w-full h-auto object-contain transition-all duration-500"
                />
              </div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left Column: ZICA & ZIMA Intro */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-10"
            >
              {/* ZICA Card */}
              <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 shadow-xl border border-white/50 space-y-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-orange-500/10 transition-colors" />
                <div className="relative z-10">
                  <div className="w-32 mb-8">
                    <Image src="/image/zica_logo.png" alt="ZICA" width={150} height={60} className="w-full h-auto" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 font-headline leading-tight mb-4">The Pioneer in Animation</h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Zee Institute of Creative Art (ZICA) is a part of Zee Learn, backed by the Zee & Essel Group. The past two decades have seen the institute nurture some of the brightest talents in the world of animation.
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed mt-4">
                    ZICA PCMC, with its state-of-the-art infrastructure, provides practical training in 2D Animation, 3D Animation, Visual Effects, and Gaming. The training covers all stages of visualization, pre-production, production, and post-production.
                  </p>
                </div>
              </div>

              {/* ZIMA Card */}
              <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 shadow-xl border border-white/50 space-y-6 relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full -ml-16 -mb-16 blur-2xl group-hover:bg-blue-500/10 transition-colors" />
                <div className="relative z-10">
                  <div className="w-32 mb-8">
                    <Image src="/image/zima_logo.png" alt="ZIMA" width={150} height={60} className="w-full h-auto" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 font-headline leading-tight mb-4">Bridging the Gap</h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    At Zee Institute of Media Arts (ZIMA PCMC), we bridge the gap between academic learning and industry demands. Our courses cover Film-making, Direction, Screen-writing, Cinematography, Sound Engineering, Sound recording, Music Production, Acting, & Dancing.
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed mt-4">
                    These courses are designed to equip students with practical, hands-on experience in a simulated environment, followed by real world exposure.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Mission & Associations */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-12 lg:sticky lg:top-32"
            >
              {/* Mission Statement */}
              <div className="p-10 md:p-14 rounded-[3.5rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-orange-500/20 transition-colors" />
                <div className="relative z-10 space-y-8">
                  <div className="space-y-2">
                    <span className="text-orange-400 font-black text-[10px] uppercase tracking-[0.4em]">Our Assurance</span>
                    <h3 className="text-3xl md:text-4xl font-black font-headline leading-tight">
                      Creative Exposure & Industry Expertise
                    </h3>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Students are assured of creative exposure with a healthy mix of theory and practical sessions. These are delivered through the right amalgamation of art and technology.
                  </p>
                  <div className="border-l-4 border-orange-500 pl-6 py-2 bg-white/5 rounded-r-2xl">
                    <p className="text-white font-bold text-lg">
                      Under the supervision of in-house experienced faculty members and industry experts from India and abroad.
                    </p>
                  </div>
                </div>
              </div>

              {/* Associations Section */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[2px] flex-grow bg-slate-100" />
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Industry Associations</span>
                  <div className="h-[2px] flex-grow bg-slate-100" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'MEDC', icon: 'verified_user' },
                    { name: 'MKCL', icon: 'school' },
                    { name: 'Medhavi Skills', icon: 'military_tech' },
                    { name: 'Skills INDIA', icon: 'public' }
                  ].map((item) => (
                    <div key={item.name} className="p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all group">
                      <span className="material-symbols-outlined text-orange-500 mb-3 block group-hover:scale-110 transition-transform">{item.icon}</span>
                      <p className="font-black text-slate-900 tracking-tight">{item.name}</p>
                    </div>
                  ))}
                </div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-8 rounded-[2.5rem] bg-gradient-to-br from-orange-400 to-rose-500 text-white shadow-xl shadow-orange-500/20 text-center"
                >
                  <p className="text-xl font-black font-headline leading-tight">
                    Nurturing the brightest talents for over two decades.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
