'use client';

import React, { useState, useEffect, Suspense, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Navbar from "@/components/portal/Navbar";
import { zicaCourses, zimaCourses, Course } from '@/lib/courses';
import LazyImage from '@/components/ui/LazyImage';

const Footer = dynamic(() => import("@/components/portal/Footer"), { ssr: false });

const CourseCardVisual = ({ course, priority = false }: { course: Course, priority?: boolean }) => {
  const [imageError, setImageError] = useState(false);

  // Generate a deterministic unique visual based on the course ID
  const getVisualSeed = (id: string) => {
    const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return {
      hue1: (hash * 137) % 360,
      hue2: (hash * 251) % 360,
      rotate: (hash * 45) % 360,
      scale: 0.8 + ((hash % 10) / 20)
    };
  };

  const seed = useMemo(() => getVisualSeed(course.id), [course.id]);

  return (
    <div className="relative w-full aspect-video shrink-0 p-px">
      <div className="relative w-full h-full overflow-hidden rounded-t-[2.4rem]">
        {/* BASE LAYER: Generative Design (Always visible or acting as fallback) */}
        <div 
          className="absolute inset-0 transition-colors duration-500 overflow-hidden"
          style={{ 
            background: `linear-gradient(135deg, hsl(${seed.hue1}, 70%, 45%), hsl(${seed.hue2}, 80%, 35%))` 
          }}
        >
          {/* Grain/Noise Texture */}
          <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
          />

          {/* Dynamic Mesh Gradients */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-30%] left-[-30%] w-[100%] h-[100%] bg-white/20 rounded-[40%] blur-[80px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, -120, 0],
              x: [0, -30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-30%] right-[-30%] w-[100%] h-[100%] bg-black/30 rounded-[40%] blur-[80px]" 
          />
          
          {/* Generative Pattern */}
          <div className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-overlay" 
               style={{ 
                 backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                 backgroundSize: '24px 24px',
                 transform: `rotate(${seed.rotate}deg)`
               }} 
          />
          
          {/* Central Artistic Element */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              {/* Outer Glow */}
              <div 
                className="absolute inset-0 blur-3xl opacity-50"
                style={{ backgroundColor: `hsl(${seed.hue1}, 100%, 70%)` }}
              />
              
              {/* Icon Container */}
              <div className="w-20 h-20 rounded-[1.5rem] bg-white/10 backdrop-blur-3xl border border-white/20 flex items-center justify-center shadow-2xl relative z-10">
                <span className="material-symbols-outlined text-4xl text-white/90 drop-shadow-2xl">
                  {course.icon || 'star'}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Metadata ID Overlay */}
          <div className="absolute bottom-4 right-6 text-white/5 font-black text-[60px] leading-none select-none tracking-tighter">
            {course.id.split('-')[1]}
          </div>
        </div>

        {/* TOP LAYER: Photographic Asset (Renders if available and working) */}
        {course.image && !imageError && (
          <LazyImage 
            src={course.image} 
            alt={course.name} 
            fill 
            className="object-cover object-center group-hover:scale-110 transition-all duration-1000 z-10"
            onError={() => setImageError(true)}
            loading={priority ? "eager" : "lazy"}
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        )}
        
        {/* VIGNETTE & OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 z-20" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 z-30" />
        
        {/* CATEGORY BADGE */}
        <div className="absolute top-6 left-6 z-40">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl backdrop-blur-xl border border-white/30 ${
              course.category === 'zica' ? 'bg-orange-500/90 text-white' : 'bg-blue-600/90 text-white'
            }`}
          >
            {course.category}
          </motion.span>
        </div>
      </div>
    </div>
  );
};

function CoursesContent() {
  const searchParams = useSearchParams();
  const brandFilter = searchParams.get('brand');
  
  const [activeBrand, setActiveBrand] = useState<'all' | 'zica' | 'zima'>(
    brandFilter === 'zica' ? 'zica' : brandFilter === 'zima' ? 'zima' : 'all'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  useEffect(() => {
    if (brandFilter === 'zica') setActiveBrand('zica');
    else if (brandFilter === 'zima') setActiveBrand('zima');
    else setActiveBrand('all');
    setCurrentPage(1); // Reset page on brand change
  }, [brandFilter]);

  // Reset page when search or brand changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeBrand]);

  const filteredCourses = [...zicaCourses, ...zimaCourses].filter(course => {
    const matchesBrand = activeBrand === 'all' || course.category === activeBrand;
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="pt-24 md:pt-32 pb-20 px-4 sm:px-8 lg:px-12 relative z-10">
      <div className="max-w-[1800px] mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-6"
        >
          <span className="text-orange-600 font-black text-xs uppercase tracking-[0.4em] block mb-4">Explore Our Programs</span>
          <h1 className="font-headline text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
            {activeBrand === 'zica' ? 'ZICA ' : activeBrand === 'zima' ? 'ZIMA ' : 'CREATIVE '}
            <span className="text-orange-500">COURSES</span>
          </h1>
          
          {/* Controls: Brand Switcher & Search */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 max-w-4xl mx-auto">
            {/* Brand Switcher */}
            <div className="inline-flex bg-slate-100 p-1.5 rounded-full border border-slate-200 w-fit shrink-0">
              {['all', 'zica', 'zima'].map((brand) => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand as any)}
                  className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeBrand === brand 
                    ? 'bg-white text-slate-900 shadow-md' 
                    : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full max-w-md">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">search</span>
              <input 
                type="text"
                placeholder="Search courses by name or field..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-full py-3.5 pl-12 pr-6 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm"
              />
            </div>
          </div>
        </motion.div>

        {/* Courses Grid */}
        {paginatedCourses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {paginatedCourses.map((course, idx) => (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="h-full"
                  >
                    <Link href={`/courses/${course.id}`} className="block h-full">
                      <div className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 transition-all flex flex-col h-full relative overflow-hidden">
                        {/* Course Image Header */}
                        <CourseCardVisual course={course} priority={idx < 4} />

                        {/* Course Info */}
                        <div className="p-8 flex flex-col flex-grow">
                          <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.2em] block mb-3">
                            {course.duration}
                          </span>
                          <h3 className="text-xl font-extrabold text-slate-900 mb-4 font-headline leading-tight group-hover:text-orange-500 transition-colors">
                            {course.name}
                          </h3>
                          <p className="text-slate-600 text-sm font-medium leading-relaxed mb-8 flex-grow line-clamp-3">
                            {course.description}
                          </p>

                          <div className="mt-auto">
                            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-br ${course.color} text-white font-bold text-[10px] uppercase tracking-widest shadow-lg transition-all duration-300 active:scale-95`}>
                              View Curriculum
                              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-16">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-orange-600 disabled:opacity-30 disabled:pointer-events-none transition-all"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-12 h-12 rounded-full text-xs font-black transition-all ${
                        currentPage === page 
                        ? 'bg-orange-600 text-white shadow-lg' 
                        : 'text-slate-400 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-orange-600 disabled:opacity-30 disabled:pointer-events-none transition-all"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
            <span className="material-symbols-outlined text-5xl text-slate-300 mb-4">search_off</span>
            <p className="text-slate-500 font-bold">No courses found matching "{searchQuery}"</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveBrand('all');}}
              className="mt-4 text-orange-600 font-black text-xs uppercase tracking-widest hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] selection:bg-primary/20 cursor-none relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-100/30 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <Navbar />
      
      <Suspense fallback={<div className="h-screen flex items-center justify-center font-headline font-black text-3xl">LOADING...</div>}>
        <CoursesContent />
      </Suspense>

      <Footer />
    </main>
  );
}
