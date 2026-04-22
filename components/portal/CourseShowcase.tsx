'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import { zicaCourses, zimaCourses } from '@/lib/courses';

const zicaShowcase = zicaCourses.slice(0, 3).map((c, i) => ({
  title: c.name,
  description: c.description,
  icon: ["animation", "palette", "devices"][i],
  color: ["from-blue-400 to-indigo-600", "from-green-400 to-emerald-600", "from-orange-400 to-rose-500"][i]
}));

const zimaShowcase = zimaCourses.slice(0, 3).map((c, i) => ({
  title: c.name,
  description: c.description,
  icon: ["movie", "theater_comedy", "video_camera_front"][i],
  color: ["from-purple-400 to-violet-600", "from-pink-400 to-rose-600", "from-amber-400 to-orange-600"][i]
}));

export default function CourseShowcase() {
  const [activeTab, setActiveTab] = useState<'zica' | 'zima'>('zica');

  const courses = activeTab === 'zica' ? zicaShowcase : zimaShowcase;

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <span className="text-orange-600 font-extrabold text-[10px] uppercase tracking-[0.2em] block mb-3">Courses</span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight px-4">
            We provide career <br className="hidden sm:block" />
            <span className="text-primary italic">oriented creative courses.</span>
          </h2>
          
          {/* Tab Switcher */}
          <div className="flex bg-slate-100 p-1 rounded-full mt-8 md:mt-10 w-fit border border-slate-200">
            <button
              onClick={() => setActiveTab('zica')}
              className={`px-4 sm:px-8 py-2 md:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 relative ${
                activeTab === 'zica' ? 'text-white' : 'text-slate-500 hover:text-orange-600'
              }`}
            >
              {activeTab === 'zica' && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute inset-0 bg-orange-600 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 uppercase tracking-widest">ZICA</span>
            </button>
            <button
              onClick={() => setActiveTab('zima')}
              className={`px-4 sm:px-8 py-2 md:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 relative ${
                activeTab === 'zima' ? 'text-white' : 'text-slate-500 hover:text-[#3131b1]'
              }`}
            >
              {activeTab === 'zima' && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute inset-0 bg-[#3131b1] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 uppercase tracking-widest">ZIMA</span>
            </button>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="wait">
            {courses.map((course, index) => (
              <motion.div
                key={`${activeTab}-${course.title}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all flex flex-col items-start relative overflow-hidden"
              >
                {/* Colored Top Edge */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${course.color}`} />
                
                {/* Icon Box */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined text-3xl">{course.icon}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 font-headline leading-tight">
                  {course.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
                  {course.description}
                </p>



                {/* Decorative Wave at bottom */}
                <div className="absolute bottom-0 left-0 w-full opacity-5 pointer-events-none translate-y-1/2">
                   <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill="currentColor" d="M0 10C50 0 50 20 100 10C150 0 150 20 200 10V20H0V10Z" />
                   </svg>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer Link */}
        <div className="flex flex-col items-center">
          <Link 
            href={`/courses?brand=${activeTab}`}
            className={`group flex items-center gap-3 text-slate-900 font-extrabold text-lg transition-colors ${
              activeTab === 'zica' ? 'hover:text-orange-600' : 'hover:text-[#3131b1]'
            }`}
          >
            <span>Explore more {activeTab.toUpperCase()} courses</span>
            <div className={`w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center transition-all ${
              activeTab === 'zica' 
                ? 'group-hover:border-orange-600 group-hover:bg-orange-600' 
                : 'group-hover:border-[#3131b1] group-hover:bg-[#3131b1]'
            } group-hover:text-white`}>
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
