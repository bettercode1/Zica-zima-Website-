'use client';

import { motion, Variants } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";

const features = [
  {
    icon: 'school',
    title: 'Industry Curriculum',
    description:
      'Our modules are co-developed with leading studios like Pixar and Double Negative to ensure you learn what the market demands.',
    bg: 'bg-white/40',
  },
  {
    icon: 'work_history',
    title: 'Placement Guidance',
    description:
      'Dedicated career cell with mock interviews, portfolio building workshops, and direct campus recruitment from top MNCs.',
    bg: 'bg-white/40',
  },
  {
    icon: 'psychology',
    title: 'Mentorship',
    description:
      'Learn directly from National Award-winning animators and VFX supervisors through regular masterclasses.',
    bg: 'bg-white/40',
  },
  {
    icon: 'devices',
    title: 'Studio Labs',
    description:
      'Access to professional-grade hardware, including Wacom Cintiqs, VR headsets, and high-end render farms 24/7.',
    bg: 'bg-white/40',
  },
];

export default function WhyUs() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-8 lg:px-24 bg-white text-slate-900 overflow-hidden relative">
      {/* Dynamic Mesh Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff7b1c]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#38bdf8]/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center lg:items-start">
          {/* Left Sticky Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 lg:sticky top-32 text-center lg:text-left"
          >
            <span className="text-orange-500 font-black text-xs uppercase tracking-[0.3em] block mb-4">Why Choose Us</span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-tight text-slate-900">
              Designed for the <br className="hidden lg:block"/>
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#ff7b1c] to-[#f1711c]">Next Gen</span> <br className="hidden lg:block"/>
              of Creators.
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium text-sm sm:text-base">
              We don&apos;t just teach software; we build careers through a
              curriculum that mirrors the fast-paced animation industry.
            </p>
            <div className="space-y-4 inline-block text-left w-full max-w-sm sm:max-w-none">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm">
                <span
                  className="material-symbols-outlined text-orange-500 text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="font-bold text-slate-800 text-sm sm:text-base">Authorized Unreal Engine Training</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm">
                <span
                  className="material-symbols-outlined text-orange-500 text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="font-bold text-slate-800 text-sm sm:text-base">100% Placement Assistance</span>
              </div>
            </div>
          </motion.div>

          {/* Right Bento Feature Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full"
          >
            {features.map((f, idx) => {
              // Bento sizing overrides
              const cardSpan = idx === 3 ? "md:col-span-2" : "md:col-span-1";
              const glowColor = idx === 0 ? "orange" : idx === 1 ? "purple" : idx === 2 ? "blue" : "green";
              const iconColors = {
                0: "text-orange-500 bg-orange-500/10 border-orange-500/20",
                1: "text-purple-500 bg-purple-500/10 border-purple-500/20",
                2: "text-sky-500 bg-sky-500/10 border-sky-500/20",
                3: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
              }[idx as 0|1|2|3];

              return (
                <motion.div key={f.title} variants={itemVariants} className={`${cardSpan}`}>
                  <div className="group relative h-full bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-3xl overflow-hidden transition-all duration-500 p-8 flex flex-col justify-between shadow-sm hover:shadow-xl">
                    {/* Ambient Hover Glow inside card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="space-y-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl border ${iconColors} shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        <span className="material-symbols-outlined text-3xl">
                          {f.icon}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 font-headline">{f.title}</h3>
                      <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-base">{f.description}</p>
                    </div>

                    {/* Visual decoration for bottom corner */}
                    <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-slate-100/30 rounded-full blur-xl group-hover:bg-slate-200/50 transition-all duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

