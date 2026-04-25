'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from "@/components/portal/Navbar";
import { Course } from '@/lib/courses';
import LazyImage from '@/components/ui/LazyImage';

const Footer = dynamic(() => import("@/components/portal/Footer"), { ssr: false });

export default function CourseDetailsClient({ course }: { course: Course }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#050505] text-white selection:bg-primary/20 cursor-none relative">
      <Navbar />

      {/* Announcement Ticker (Sticky) */}
      {course.breakingNews && (
        <div className="sticky top-0 z-[60] bg-orange-600 overflow-hidden py-3 border-b border-orange-500 shadow-lg">
          <motion.div 
            animate={{ x: ["100%", "-100%"] }}
            transition={{ 
              repeat: Infinity, 
              duration: 70, 
              ease: "linear" 
            }}
            className="whitespace-nowrap flex items-center gap-8"
          >
            <span className="text-white font-black uppercase tracking-wider text-sm">
              {course.breakingNews}
            </span>
            <span className="text-white font-black uppercase tracking-wider text-sm">
              {course.breakingNews}
            </span>
            <span className="text-white font-black uppercase tracking-wider text-sm">
              {course.breakingNews}
            </span>
            <span className="text-white font-black uppercase tracking-wider text-sm">
              {course.breakingNews}
            </span>
          </motion.div>
        </div>
      )}

      {/* Immersive Background Section */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {course.backgroundImage ? (
          <motion.div style={{ opacity: bgOpacity, scale: bgScale }} className="relative w-full h-full">
            <LazyImage 
              src={course.backgroundImage} 
              alt="Background" 
              fill 
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-black/40 z-[5]" />
          </motion.div>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-10 blur-[120px]`} />
        )}
      </div>

      <div className="relative z-10 pt-6 pb-20 px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[1800px] mx-auto">
          {/* Back Link */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-4"
          >
            <Link 
              href="/courses" 
              className="inline-flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.3em] group"
            >
              <span className="material-symbols-outlined text-sm group-hover:-translate-x-2 transition-transform">arrow_back</span>
              Back to Courses
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">
            
            {/* LEFT COLUMN: HERO INFO */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 xl:col-span-5 space-y-12 lg:sticky lg:top-12"
            >
              <div className="space-y-6">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-black tracking-[0.4em] uppercase text-white/70"
                >
                  Professional Certification
                </motion.span>
                
                <h1 className="font-headline font-black tracking-tighter leading-[0.9] flex flex-col gap-0">
                  {(() => {
                    const fullTitle = (course.curriculum?.title || course.name).toUpperCase();
                    const splitIndex = fullTitle.indexOf(" IN ");
                    
                    if (splitIndex !== -1) {
                      const prefix = fullTitle.substring(0, splitIndex);
                      const courseName = fullTitle.substring(splitIndex + 4);
                      
                      return (
                        <>
                          <span className="text-white text-base md:text-lg lg:text-xl opacity-80 tracking-[0.3em] mb-2 block font-sans font-bold">
                            {prefix} <span className="opacity-40">IN</span>
                          </span>
                          <span className="text-[#f1711c] text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-8xl break-words leading-tight">
                            {courseName}
                          </span>
                        </>
                      );
                    }
                    
                    return (
                      <span className="text-[#f1711c] text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-8xl break-words leading-tight">
                        {fullTitle}
                      </span>
                    );
                  })()}
                </h1>
                
                <div className="flex items-baseline gap-4 mt-6">
                  <span className="text-sm md:text-base lg:text-lg font-bold text-white opacity-80 font-sans uppercase tracking-[0.3em]">
                    {course.curriculum?.duration || course.duration}
                  </span>
                </div>
              </div>

              <p className="text-slate-200 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
                {course.description}
              </p>

              {/* Admission Box */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.color} opacity-20 rounded-full blur-3xl -mr-16 -mt-16`} />
                <div className="relative z-10 space-y-6">
                  <h3 className="text-xl md:text-2xl font-black font-headline">Ready to <span className="text-[#f1711c]">Start?</span></h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="#admissions" className="px-6 md:px-8 py-3.5 md:py-4 bg-white text-black rounded-xl md:rounded-2xl font-black uppercase tracking-widest hover:text-[#f1711c] transition-all text-xs md:text-sm text-center flex-1">
                      Enquire Now
                    </Link>
                    <Link href="#brochure" className="px-6 md:px-8 py-3.5 md:py-4 bg-white/10 text-white rounded-xl md:rounded-2xl font-black uppercase tracking-widest border border-white/10 hover:bg-white/20 transition-all text-xs md:text-sm text-center flex-1">
                      Brochure
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: CURRICULUM GRID */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-12">
              {course.curriculum && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
                  {course.curriculum.modules.map((module, idx) => (
                    <motion.div
                      key={module.name}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="p-6 md:p-8 lg:p-6 xl:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#f1711c]/50 transition-all group flex flex-col h-full"
                    >
                      <div className="mb-6 flex justify-between items-start">
                        <span className="text-[10px] font-black tracking-[0.3em] text-white/70 uppercase">{module.duration}</span>
                        <span className="text-white/20 font-black text-4xl font-headline group-hover:text-[#f1711c]/30 transition-colors">0{idx + 1}</span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-black font-headline leading-tight mb-8 group-hover:text-[#f1711c] transition-colors">
                        {module.name}
                      </h3>

                      <div className="space-y-6 flex-grow">
                        <ul className="space-y-3">
                          {module.topics.map(topic => (
                            <li key={topic} className="flex items-start gap-3 text-slate-200 text-sm font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#f1711c] mt-1.5 flex-shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>

                        {module.software && (
                          <div className="pt-6 border-t border-white/10">
                            <span className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase block mb-4">Mastering Tools</span>
                            <div className="flex flex-wrap gap-2">
                              {module.software.map(sw => (
                                <span key={sw} className="px-3 py-1 bg-white/10 rounded-lg text-[10px] font-bold text-white border border-white/10">
                                  {sw}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Student Profile Section */}
              {course.studentProfile && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-8 md:p-16 lg:p-20 rounded-[3rem] md:rounded-[4rem] bg-gradient-to-br from-[#f1711c]/10 to-transparent backdrop-blur-2xl border border-white/10 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-96 h-96 bg-[#f1711c]/10 blur-[100px] -mr-48 -mt-48" />
                  <div className="relative z-10 space-y-8">
                    <span className="text-xs font-black tracking-[0.4em] text-[#f1711c] uppercase">Outcome</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-headline leading-tight tracking-tighter">
                      Emerging <br /> <span className="text-[#f1711c] underline decoration-[#f1711c]/30 underline-offset-8">Student Profile</span>
                    </h2>
                    <p className="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl font-medium">
                      {course.studentProfile}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
