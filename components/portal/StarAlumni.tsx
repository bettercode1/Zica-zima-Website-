'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export type AlumniEntry = {
  name: string;
  title: string;
  image: string;
  link: string;
  secondaryLink?: string;
  details: string;
};

export const alumniData: AlumniEntry[] = [
  {
    name: "Shravni Sahay",
    title: "Actress",
    image: "/image/Star Alumni/Shravani Sahay.png",
    link: "https://www.imdb.com/name/nm8853149/",
    details: "Award-winning actress with notable roles across film & television."
  },
  {
    name: "Rohit Makwana",
    title: "Film Editor",
    image: "/image/Star Alumni/Rohit Makwana.jpeg",
    link: "https://www.imdb.com/name/nm7046574/",
    details: "Known for Saiyaara, Aashiqui and The Villain."
  },
  {
    name: "Tanuuj Shrivastava",
    title: "Chief AD",
    image: "/image/Star Alumni/Tanuuj Shrivastava.jpeg",
    link: "https://www.imdb.com/name/nm10430781/",
    details: "Known for Bhool Bhulaiyaa 2, Pagalpanti and Bhool Bhulaiyaa 3."
  },
  {
    name: "Sujay Pawar",
    title: "DOP · AD Film",
    image: "/image/Star Alumni/Sujay Pawar.png",
    link: "https://vimeo.com/dopsujaypawar",
    secondaryLink: "https://www.youtube.com/playlist?list=PLZpWegUIqz5CUNFvGxuDyrrW4XOw8fMhR",
    details: "Cinematographer & Director of Photography with an acclaimed portfolio."
  },
  {
    name: "Shahnawaz Mosani",
    title: "AD Film Editor",
    image: "/image/Star Alumni/shahnawaz-mosani.jpeg",
    link: "https://www.imdb.com/name/nm5305933/",
    secondaryLink: "https://vimeo.com/user16506706",
    details: "Acclaimed ad film editor known for high-impact commercial work."
  },
  {
    name: "Khanjan Kishore Nath",
    title: "Director · Writer · Producer",
    image: "/image/Star Alumni/Khanjan Kishor Nath.png",
    link: "https://www.imdb.com/name/nm8534005/",
    details: "National Award winner — Rajat Kamal at 68th National Film Awards 2021 for Best Short Fiction \"Kachichinithu\"."
  },
  {
    name: "Omkar Kharat",
    title: "Director · Cinematographer · Editor",
    image: "/image/Star Alumni/Omkar Kharat.jpg",
    link: "https://www.imdb.com/name/nm14485749/",
    details: "Known for The Life Journey of a Forest Jewel, Naad and Gandhada Gudi."
  },
  {
    name: "Jayesh Malkapure",
    title: "VFX Supervisor",
    image: "/image/Star Alumni/Jayesh Malkapure.jpeg",
    link: "https://www.imdb.com/name/nm9753105/",
    details: "Founder & VFX Supervisor at WOT Studios."
  },
  {
    name: "Rohan Kantak",
    title: "Editor · Cinematographer",
    image: "/image/Star Alumni/Rohan Kantak.jpeg",
    link: "https://www.imdb.com/name/nm7605337/",
    details: "Founder & Creative Head of QRAZI Studio."
  },
];

// ── Shown on landing page (first 4) ──────────────────────────────────────────
const landingAlumni = alumniData.slice(0, 4);

const FloatingStar = ({ style }: { style: React.CSSProperties }) => (
  <motion.div
    style={style}
    animate={{ y: [0, -18, 0], opacity: [0.15, 0.45, 0.15], scale: [1, 1.3, 1] }}
    transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut' }}
    className="absolute text-orange-400 select-none pointer-events-none"
  >
    ★
  </motion.div>
);

const stars = [
  { top: '8%',  left: '3%',  fontSize: '1.2rem' },
  { top: '15%', left: '92%', fontSize: '0.8rem' },
  { top: '70%', left: '6%',  fontSize: '1.6rem' },
  { top: '80%', left: '88%', fontSize: '1.0rem' },
  { top: '40%', left: '1%',  fontSize: '0.7rem' },
  { top: '55%', left: '96%', fontSize: '1.4rem' },
  { top: '25%', left: '48%', fontSize: '0.6rem' },
  { top: '90%', left: '50%', fontSize: '0.9rem' },
];

// ── Reusable card ─────────────────────────────────────────────────────────────
export function AlumniCard({ alumni, index, dark = true }: { alumni: AlumniEntry; index: number; dark?: boolean }) {
  if (dark) {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: (index % 4) * 0.12, duration: 0.5 }}
        whileHover={{ y: -6, scale: 1.02 }}
        className="relative flex flex-col items-center text-center group rounded-2xl p-5 sm:p-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(241,113,28,0.08) 0%, rgba(109,40,217,0.05) 100%)' }} />
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ border: '1px solid rgba(241,113,28,0.3)' }} />

        {/* Photo */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-4 sm:mb-5 flex-shrink-0">
          <div className="absolute -inset-1 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(135deg, #f1711c, #facc15, #6d28d9)' }} />
          <div className="relative w-full h-full overflow-hidden rounded-full"
            style={{ background: '#1a0a2e' }}>
            <Image
              src={alumni.image}
              alt={alumni.name}
              fill
              sizes="(max-width: 640px) 96px, 112px"
              className="object-cover object-top"
            />
          </div>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white mb-0.5 leading-tight">{alumni.name}</h3>
        <p className="text-orange-400 font-semibold text-[10px] sm:text-xs mb-3 uppercase tracking-widest leading-snug">{alumni.title}</p>
        <p className="text-slate-400 text-xs sm:text-sm mb-4 flex-grow leading-relaxed">{alumni.details}</p>

        <div className="flex flex-wrap gap-2 justify-center mt-auto">
          {alumni.link && (
            <Link
              href={alumni.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-orange-400 hover:text-orange-300 transition-colors border border-orange-500/30 hover:border-orange-400 px-3 py-1.5 rounded-full"
            >
              IMDB
              <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>open_in_new</span>
            </Link>
          )}
          {alumni.secondaryLink && (
            <Link
              href={alumni.secondaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-300 hover:text-white transition-colors border border-white/20 hover:border-white/40 px-3 py-1.5 rounded-full"
            >
              Portfolio
              <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>open_in_new</span>
            </Link>
          )}
        </div>
      </motion.div>
    );
  }

  // Light variant for alumni page
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group border border-slate-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-4 sm:mb-5 flex-shrink-0">
        <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300"
          style={{ background: 'linear-gradient(135deg, #f1711c, #facc15)' }} />
        <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-orange-100 group-hover:border-orange-400 transition-colors duration-300">
          <Image
            src={alumni.image}
            alt={alumni.name}
            fill
            sizes="(max-width: 640px) 96px, 112px"
            className="object-cover object-top"
          />
        </div>
      </div>

      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-0.5 leading-tight z-10">{alumni.name}</h3>
      <p className="text-orange-600 font-semibold text-[10px] sm:text-xs mb-3 uppercase tracking-widest leading-snug z-10">{alumni.title}</p>
      <p className="text-slate-600 text-xs sm:text-sm mb-4 flex-grow leading-relaxed z-10">{alumni.details}</p>

      <div className="flex flex-wrap gap-2 justify-center mt-auto z-10">
        {alumni.link && (
          <Link
            href={alumni.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-orange-500 hover:bg-orange-600 transition-colors px-3 py-1.5 rounded-full shadow-sm"
          >
            IMDB
            <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>open_in_new</span>
          </Link>
        )}
        {alumni.secondaryLink && (
          <Link
            href={alumni.secondaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-400 transition-colors px-3 py-1.5 rounded-full"
          >
            Portfolio
            <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>open_in_new</span>
          </Link>
        )}
      </div>
    </motion.div>
  );
}

// ── Landing Page Section ──────────────────────────────────────────────────────
export default function StarAlumni() {
  return (
    <section
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d0d1a 0%, #1a0a2e 35%, #0f1a2e 65%, #0d0d1a 100%)' }}
      aria-label="The Legends section"
    >
      {/* Diagonal grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg, transparent, transparent 40px,
            rgba(255,255,255,0.8) 40px, rgba(255,255,255,0.8) 41px
          )`
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-[-10%] left-[-8%] w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full opacity-20 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f1711c, transparent 70%)' }} />
      <div className="absolute bottom-[-12%] right-[-6%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full opacity-15 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6d28d9, transparent 70%)' }} />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full opacity-10 blur-[80px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }} />

      {/* Pulsing rings */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] rounded-full border border-orange-500/30 pointer-events-none"
      />

      {/* Film-strip sides (hidden on very small screens) */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-10 hidden sm:flex flex-col gap-3 items-center py-4 opacity-10 pointer-events-none overflow-hidden">
        {[...Array(18)].map((_, i) => <div key={i} className="w-5 sm:w-6 h-3 sm:h-4 border border-white/60 rounded-sm flex-shrink-0" />)}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-10 hidden sm:flex flex-col gap-3 items-center py-4 opacity-10 pointer-events-none overflow-hidden">
        {[...Array(18)].map((_, i) => <div key={i} className="w-5 sm:w-6 h-3 sm:h-4 border border-white/60 rounded-sm flex-shrink-0" />)}
      </div>

      {/* Floating stars */}
      {stars.map((s, i) => (
        <FloatingStar key={i} style={{ top: s.top, left: s.left, fontSize: s.fontSize }} />
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 font-extrabold text-[10px] uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4"
          >
            <span>★</span> Our Pride <span>★</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            The{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 italic pr-2">
              Legends
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mt-4 text-sm sm:text-base max-w-md px-4"
          >
            Talented artists who shaped Bollywood and beyond — all trained right here.
          </motion.p>

          <div className="w-20 h-1 mt-6 rounded-full"
            style={{ background: 'linear-gradient(to right, #f1711c, #facc15)' }} />
        </div>

        {/* Cards — 4 on landing */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {landingAlumni.map((alumni, index) => (
            <AlumniCard key={alumni.name} alumni={alumni} index={index} dark />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-14 flex justify-center"
        >
          <Link
            href="/alumni"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-full text-white text-sm sm:text-base hover:scale-105 transition-transform shadow-xl"
            style={{ background: 'linear-gradient(135deg, #f1711c, #facc15 60%, #f97316)' }}
          >
            View All The Legends
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
