'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Affiliations() {
  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      {/* Dynamic Background Design */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
        />
        
        {/* Ambient Glows - Matching the website's kinetic energy */}
        <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-orange-500/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-sky-500/10 rounded-full blur-[70px] md:blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="text-orange-600 font-black text-[10px] md:text-xs uppercase tracking-[0.4em] mb-3 md:mb-4">Official Partnerships</span>
            <h2 className="font-headline text-2xl xs:text-3xl md:text-5xl font-black text-[#141a3b] tracking-tight">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#9d4300] to-[#f1711c]">Affiliations</span>
            </h2>
            <div className="w-16 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-orange-500 to-orange-300 mt-4 md:mt-6 rounded-full" />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-8 md:gap-14"
        >
          {/* Top Row: ZEE Media - SPPU - Medhavi */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16">
            {/* Logo Card 1: ZEE Media */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative flex flex-col items-center"
            >
              <div className="relative w-48 h-20 xs:w-56 xs:h-24 md:w-80 md:h-32 bg-slate-50/50 backdrop-blur-sm border border-slate-100 rounded-2xl md:rounded-3xl p-1.5 md:p-2 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(124,58,237,0.12)] group-hover:border-violet-200/60">
              <div className="relative w-full h-full">
                <Image 
                  src="/image/affilations/ZEE_Media.png" 
                  alt="Zee Media Corporation Limited" 
                  fill 
                  className="object-contain scale-[1.25] md:scale-[1.3] transition-transform duration-500 group-hover:scale-[1.4]" 
                  sizes="(max-width: 768px) 224px, 320px"
                />
              </div>
            </div>
              <div className="mt-3 md:mt-4 flex flex-col items-center md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:transform md:translate-y-2 md:group-hover:translate-y-0">
                <span className="text-[9px] md:text-[10px] font-black text-violet-700 uppercase tracking-widest">Media Partner</span>
                <span className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase">Zee Media Corporation Limited</span>
              </div>
            </motion.div>

            {/* Logo Card 2: Savitribai Phule Pune University */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative flex flex-col items-center"
            >
              <div className="relative w-44 h-24 xs:w-48 xs:h-28 md:w-64 md:h-36 bg-slate-50/50 backdrop-blur-sm border border-slate-100 rounded-2xl md:rounded-3xl p-0 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(234,179,8,0.12)] group-hover:border-amber-200/60">
                <div className="relative w-full h-full">
                  <Image 
                    src="/image/affilations/Savitribai_Phule_Pune_University_Logo.png" 
                    alt="Savitribai Phule Pune University" 
                    fill 
                    className="object-contain scale-[0.95] md:scale-[1.05] transition-transform duration-500 group-hover:scale-[1.15]" 
                    sizes="(max-width: 768px) 192px, 256px"
                  />
                </div>
              </div>
              <div className="mt-3 md:mt-4 flex flex-col items-center md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:transform md:translate-y-2 md:group-hover:translate-y-0">
                <span className="text-[9px] md:text-[10px] font-black text-amber-600 uppercase tracking-widest">University Partner</span>
                <span className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase">Savitribai Phule Pune University</span>
              </div>
            </motion.div>

            {/* Logo Card 3: Medhavi */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative flex flex-col items-center"
            >
              <div className="relative w-48 h-20 xs:w-56 xs:h-24 md:w-80 md:h-32 bg-slate-50/50 backdrop-blur-sm border border-slate-100 rounded-2xl md:rounded-3xl p-4 md:p-6 flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(56,189,248,0.1)] group-hover:border-sky-200/50">
                <div className="relative w-full h-full">
                  <Image 
                    src="/image/affilations/Medhavi.png" 
                    alt="Medhavi Skills University" 
                    fill 
                    className="object-contain transition-transform duration-500 group-hover:scale-110" 
                    sizes="(max-width: 768px) 224px, 320px"
                  />
                </div>
              </div>
              <div className="mt-3 md:mt-4 flex flex-col items-center md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:transform md:translate-y-2 md:group-hover:translate-y-0">
                <span className="text-[9px] md:text-[10px] font-black text-sky-600 uppercase tracking-widest">University Partner</span>
                <span className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase">Academic Excellence</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: Gedu - MKCL - Skill India */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16">
            {/* Logo Card 4: Gedu (Global Education) */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative flex flex-col items-center"
            >
              <div className="relative w-48 h-20 xs:w-56 xs:h-24 md:w-80 md:h-32 bg-slate-50/50 backdrop-blur-sm border border-slate-100 rounded-2xl md:rounded-3xl p-3 md:p-4 flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(141,198,63,0.18)] group-hover:border-lime-200/60">
                <div className="relative w-full h-full">
                  <Image 
                    src="/image/affilations/Gedu_Logo_Extended_RGB.svg" 
                    alt="Gedu Global Education" 
                    fill 
                    className="object-contain transition-transform duration-500 group-hover:scale-110" 
                    sizes="(max-width: 768px) 224px, 320px"
                  />
                </div>
              </div>
              <div className="mt-3 md:mt-4 flex flex-col items-center md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:transform md:translate-y-2 md:group-hover:translate-y-0">
                <span className="text-[9px] md:text-[10px] font-black text-lime-700 uppercase tracking-widest">Education Partner</span>
                <span className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase">Global Education</span>
              </div>
            </motion.div>

            {/* Logo Card 5: MKCL */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative flex flex-col items-center"
            >
              <div className="relative w-44 h-24 xs:w-48 xs:h-28 md:w-64 md:h-36 bg-slate-50/50 backdrop-blur-sm border border-slate-100 rounded-2xl md:rounded-3xl p-2 md:p-3 flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] group-hover:border-orange-200/50">
                <div className="relative w-full h-full">
                  <Image 
                    src="/image/affilations/mkcl.svg" 
                    alt="MKCL" 
                    fill 
                    className="object-contain transition-transform duration-500 group-hover:scale-110" 
                    sizes="(max-width: 768px) 192px, 256px"
                  />
                </div>
              </div>
              <div className="mt-3 md:mt-4 flex flex-col items-center md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:transform md:translate-y-2 md:group-hover:translate-y-0">
                <span className="text-[9px] md:text-[10px] font-black text-orange-600 uppercase tracking-widest">Knowledge Partner</span>
                <span className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase">MKCL Certified</span>
              </div>
            </motion.div>

            {/* Logo Card 6: Skill India */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative flex flex-col items-center"
            >
              <div className="relative w-44 h-24 xs:w-48 xs:h-28 md:w-64 md:h-36 bg-slate-50/50 backdrop-blur-sm border border-slate-100 rounded-2xl md:rounded-3xl p-2 md:p-3 flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] group-hover:border-orange-200/50">
                <div className="relative w-full h-full">
                  <Image 
                    src="/image/affilations/skill_india.svg" 
                    alt="Skill India" 
                    fill 
                    className="object-contain brightness-90 contrast-125 transition-transform duration-500 group-hover:scale-110" 
                    sizes="(max-width: 768px) 192px, 256px"
                  />
                </div>
              </div>
              <div className="mt-3 md:mt-4 flex flex-col items-center md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:transform md:translate-y-2 md:group-hover:translate-y-0">
                <span className="text-[9px] md:text-[10px] font-black text-orange-600 uppercase tracking-widest">Government Affiliation</span>
                <span className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase">Skill Development</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
