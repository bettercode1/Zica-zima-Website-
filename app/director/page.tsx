'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Navbar from "@/components/portal/Navbar";

const Footer = dynamic(() => import("@/components/portal/Footer"), { ssr: false });

export default function DirectorPage() {
  return (
    <main className="min-h-screen bg-surface-bright selection:bg-primary/20 cursor-none relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-200/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <Navbar />

      <div className="pt-24 md:pt-32 pb-20 px-4 sm:px-8 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-24"
          >
            <span className="text-orange-600 font-black text-xs uppercase tracking-[0.4em] block mb-4">Visionary Leadership</span>
            <h1 className="font-headline text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
              DIRECTOR <br className="hidden md:block" /> 
              <span className="text-orange-500">ZICAZIMA PCMC</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left Column: Image & Contact */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 space-y-10 sticky top-32"
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                <Image 
                  src="/image/amol_sir-1.jpg" 
                  alt="Aamol Paritkar - Director ZICA ZIMA PCMC" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 space-y-6">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 font-headline leading-tight">AAMOL PARITKAR</h2>
                  <p className="text-orange-600 font-bold uppercase tracking-widest text-xs mt-1">Founder & Director - Bettercode Technologies</p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <a href="https://www.bettercode.co.in" target="_blank" className="flex items-center gap-4 text-slate-600 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <span className="material-symbols-outlined text-xl">language</span>
                    </div>
                    <span className="font-bold text-sm tracking-wide">www.bettercode.co.in</span>
                  </a>
                  <a href="https://www.zicazimapcmc.com" target="_blank" className="flex items-center gap-4 text-slate-600 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <span className="material-symbols-outlined text-xl">school</span>
                    </div>
                    <span className="font-bold text-sm tracking-wide">www.zicazimapcmc.com</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-7 space-y-12"
            >
              {/* Introduction */}
              <div className="space-y-6 text-slate-700 text-lg md:text-xl leading-relaxed">
                <p className="font-bold text-slate-900 text-2xl md:text-3xl border-l-4 border-orange-500 pl-6 py-2">
                  "As the Founder and Director of Bettercode, I bring over two decades of expertise to spearheading consulting in AI, GenAI, Quality Engineering, and Data Engineering."
                </p>
                <p>
                  We deliver cutting-edge application development and strategic offshoring solutions, fostering innovation and operational excellence. Our partnerships with Zee Learn for creative and media arts initiatives further amplify our impact.
                </p>
                <p>
                  Previously, I contributed to large-scale delivery leadership at JP Morgan Chase, Barclays, TD, Loblaws and TCS reinforcing my drive to empower teams with actionable insights and transformative technologies. Guided by a mission to solve complex challenges, I leverage AI and GenAI to design solutions that enable growth, create value, and address evolving business needs.
                </p>
              </div>

              {/* Core Philosophy Section */}
              <div className="p-10 rounded-[3rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="relative z-10 space-y-8">
                  <div className="space-y-2">
                    <span className="text-orange-400 font-black text-[10px] uppercase tracking-[0.4em]">The Vision</span>
                    <h3 className="text-3xl md:text-4xl font-black font-headline leading-tight italic">
                      "Not every student is meant to follow the same path..."
                    </h3>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Some are born to create, design, imagine, and tell stories—and that is not an alternative career; it is a future-ready one.
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    At ZICAZIMAPCMC, we believe creative talent deserves the same respect and opportunity as any traditional profession. This vision aligns strongly with the Skill India mission, which focuses on skills, employability, and entrepreneurship—and not just marks.
                  </p>
                </div>
              </div>

              {/* Industry Context */}
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] flex-grow bg-slate-100" />
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">The Creative Economy</span>
                  <div className="h-[2px] flex-grow bg-slate-100" />
                </div>
                <p>
                  India's Media, Animation, VFX, Gaming, Design, and Digital Arts sectors are growing rapidly, creating millions of jobs and global opportunities. With government support through the <span className="text-orange-600 font-bold">Orange Economy</span>, creative careers are now nationally recognised and prioritised.
                </p>
                <p>
                  At ZICAZIMAPCMC, students receive not only core creative training but also complementary AI skills, Personality Development, and Soft-skills training, making them confident and industry-ready. With 20+ years of global industry experience, our leadership brings real-world learning into every classroom.
                </p>
              </div>

              {/* Call to Action/Closing */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-10 rounded-[3rem] bg-gradient-to-br from-orange-400 to-rose-500 text-white shadow-xl shadow-orange-500/20"
              >
                <p className="text-2xl md:text-3xl font-black font-headline leading-tight">
                  "Because when passion meets skill and opportunity, students don't just find jobs; <br className="hidden md:block" />
                  <span className="text-slate-900 underline decoration-white decoration-4 underline-offset-8">THEY BUILD FUTURES.</span>"
                </p>
              </motion.div>

              {/* Formal Signature */}
              <div className="pt-12 text-center lg:text-left">
                <span className="text-orange-600 font-black text-xs uppercase tracking-[0.4em] block mb-4">Vision of</span>
                <h4 className="text-4xl font-black text-slate-900 font-headline">AAMOL PARITKAR</h4>
                <div className="mt-2 space-y-1">
                  <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Founder & Director - Bettercode Technologies Pvt Ltd</p>
                  <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Business Partner - ZICA ZIMA PCMC</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
