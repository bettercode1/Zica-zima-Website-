'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "@/components/portal/Navbar";
import Footer from "@/components/portal/Footer";
import { zicaCourses, zimaCourses, Course } from '@/lib/courses';

function CoursesContent() {
  const searchParams = useSearchParams();
  const brandParam = searchParams.get('brand');
  const [activeTab, setActiveTab] = useState<'zica' | 'zima'>('zica');

  useEffect(() => {
    if (brandParam === 'zima') {
      setActiveTab('zima');
    } else {
      setActiveTab('zica');
    }
  }, [brandParam]);

  const courses = activeTab === 'zica' ? zicaCourses : zimaCourses;
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter(course => 
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-primary/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white">
        {/* Artistic Fluid Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/abstract_bg.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-60 scale-110 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Centered Back to Home */}
          <div className="flex justify-center mb-4">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-xs font-bold uppercase tracking-[0.2em] group">
              <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
              Back to Home
            </Link>
          </div>

          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em] block mb-6`}
          >
            Our Curriculum
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tight leading-[1.1]"
          >
            Explore <span className="text-primary italic font-serif">Your Future</span> Career
          </motion.h1>
          
          {/* Controls Container (Tabs + Search) */}
          <div className="flex flex-col items-center gap-8">
            {/* Tab Switcher - Pill Style */}
            <div className="flex bg-slate-100/50 backdrop-blur-xl p-1.5 rounded-full border border-slate-200/50 shadow-inner">
              <button
                onClick={() => { setActiveTab('zica'); setSearchQuery(''); }}
                className={`px-12 py-3.5 rounded-full font-black text-xs transition-all duration-500 relative tracking-[0.2em] ${
                  activeTab === 'zica' ? 'text-white' : 'text-slate-500 hover:text-orange-600'
                }`}
              >
                {activeTab === 'zica' && (
                  <motion.div 
                    layoutId="activeTabBg" 
                    className="absolute inset-0 bg-orange-600 rounded-full shadow-xl shadow-orange-600/30"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10">ZICA</span>
              </button>
              <button
                onClick={() => { setActiveTab('zima'); setSearchQuery(''); }}
                className={`px-12 py-3.5 rounded-full font-black text-xs transition-all duration-500 relative tracking-[0.2em] ${
                  activeTab === 'zima' ? 'text-white' : 'text-slate-500 hover:text-[#3131b1]'
                }`}
              >
                {activeTab === 'zima' && (
                  <motion.div 
                    layoutId="activeTabBg" 
                    className="absolute inset-0 bg-[#3131b1] rounded-full shadow-xl shadow-[#3131b1]/30"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10">ZIMA</span>
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative w-full max-w-xl group">
              <div className="absolute inset-0 bg-white/40 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity rounded-full -z-10" />
              <div className="relative flex items-center">
                <span className="absolute left-6 material-symbols-outlined text-slate-400">search</span>
                <input 
                  type="text" 
                  placeholder={`Search ${activeTab.toUpperCase()} courses...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-4.5 bg-white/70 backdrop-blur-xl border border-slate-200/50 rounded-2xl shadow-xl shadow-slate-200/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all font-bold text-slate-800 placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-6 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course, index) => (
                  <CourseCard key={course.id} course={course} index={index} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <span className="material-symbols-outlined text-6xl text-slate-200 mb-4 block">sentiment_dissatisfied</span>
                  <h3 className="text-xl font-bold text-slate-400">No courses found matching "{searchQuery}"</h3>
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="mt-4 text-primary font-bold hover:underline"
                  >
                    Clear search and see all courses
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function CourseCard({ course, index }: { course: Course, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.02 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-primary/10 transition-all flex flex-col relative overflow-hidden"
    >
      {/* Brand Accent Top Edge */}
      <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${course.color}`} />
      
      {/* Icon/Decoration with Glow */}
      <div className="relative mb-8">
        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${course.color} blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full`} />
        
        {/* Icon Box */}
        <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <span className="material-symbols-outlined text-3xl">
            {course.icon}
          </span>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-extrabold text-slate-900 font-headline leading-tight group-hover:text-primary transition-colors duration-300">
          {course.name}
        </h3>
        <div className="flex items-center gap-2 mt-3">
          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${course.color}`} />
          <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">{course.duration}</span>
        </div>
      </div>

      <p className="text-slate-600 font-medium leading-relaxed text-sm mb-6 flex-grow">
        {course.description}
      </p>

      {/* Decorative Wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full opacity-[0.03] pointer-events-none translate-y-1/2 group-hover:translate-y-1/3 transition-transform duration-700">
         <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M0 10C50 0 50 20 100 10C150 0 150 20 200 10V20H0V10Z" />
         </svg>
      </div>
    </motion.div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-white"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div></div>}>
      <CoursesContent />
    </Suspense>
  );
}
