'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Navbar from "@/components/portal/Navbar";
import { zicaCourses, zimaCourses, Course } from '@/lib/courses';

const Footer = dynamic(() => import("@/components/portal/Footer"), { ssr: false });

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
                        <div className="relative w-full aspect-video overflow-hidden shrink-0">
                          {course.image ? (
                            <Image 
                              src={course.image} 
                              alt={course.name} 
                              fill 
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                            />
                          ) : (
                            <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-20`} />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                          
                          {/* Category Tag */}
                          <div className="absolute top-4 left-4 z-10">
                            <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                              course.category === 'zica' ? 'bg-orange-500 text-white' : 'bg-blue-600 text-white'
                            }`}>
                              {course.category}
                            </span>
                          </div>
                        </div>

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
