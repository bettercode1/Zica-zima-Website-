'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Navbar from "@/components/portal/Navbar";
import { alumniData, AlumniCard } from "@/components/portal/StarAlumni";

const Footer = dynamic(() => import("@/components/portal/Footer"), { ssr: false });

export default function AlumniPage() {
  return (
    <main
      className="min-h-screen selection:bg-orange-500/20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d0d1a 0%, #1a0a2e 40%, #0f1a2e 70%, #0d0d1a 100%)' }}
    >
      {/* ── Background Layers ── */}
      <div
        className="fixed inset-0 opacity-[0.035] pointer-events-none z-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg, transparent, transparent 40px,
            rgba(255,255,255,0.8) 40px, rgba(255,255,255,0.8) 41px
          )`
        }}
      />
      <div className="fixed top-[-15%] left-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, #f1711c, transparent 70%)' }} />
      <div className="fixed bottom-[-15%] right-[-8%] w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] rounded-full opacity-15 blur-[120px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, #6d28d9, transparent 70%)' }} />

      <Navbar />

      <div className="relative z-10 pt-24 sm:pt-28 md:pt-32 pb-20 px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">

          {/* ── Page Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4"
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 font-extrabold text-[10px] uppercase tracking-[0.25em] px-4 py-1.5 rounded-full">
              <span>★</span> Our Pride <span>★</span>
            </div>

            <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none">
              STAR{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 pr-2">
                ALUMNI
              </span>
            </h1>

            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
              Meet our successful graduates who have made their mark across Bollywood, OTT platforms, and the global film industry. We are proud of every story they continue to write.
            </p>

            <div className="flex justify-center pt-2">
              <div className="w-24 h-1 rounded-full"
                style={{ background: 'linear-gradient(to right, #f1711c, #facc15)' }} />
            </div>
          </motion.div>

          {/* ── Alumni Grid ── */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {alumniData.map((alumni, index) => (
              <AlumniCard key={alumni.name} alumni={alumni} index={index} dark />
            ))}
          </div>

          {/* ── Coming Soon Banner ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-20 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 sm:px-8 py-5 rounded-2xl"
              style={{
                background: 'rgba(241,113,28,0.08)',
                border: '1px solid rgba(241,113,28,0.2)'
              }}>
              <span className="material-symbols-outlined text-orange-400 text-3xl">auto_awesome</span>
              <div className="text-center sm:text-left">
                <p className="font-bold text-white text-sm sm:text-base">More success stories coming soon.</p>
                <p className="text-slate-400 text-xs sm:text-sm mt-0.5">Our alumni network is growing rapidly across India and the globe.</p>
              </div>
            </div>
          </motion.div>

          {/* ── Back to Home ── */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-semibold transition-colors"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Back to Home
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
