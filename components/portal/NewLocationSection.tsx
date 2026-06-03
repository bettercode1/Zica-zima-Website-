'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CAMPUS_ADDRESS_FULL, CAMPUS_MAPS_URL } from '@/lib/campus';

const HIGHLIGHTS = [
  'Prime PCMC Location',
  'Direct Metro Connectivity',
  'Modern Corporate Infrastructure',
  'Easy Accessibility from Pune & Pimpri Chinchwad',
  'Professional Learning & Innovation Environment',
] as const;

type AffiliationPartner = {
  src: string;
  alt: string;
  label: string;
  sublabel: string;
  labelColor: string;
  imageScale?: string;
};

const SPPU_LOGO = '/image/affilations/Savitribai_Phule_Pune_University_Logo.png';

const AFFILIATION_PARTNERS: AffiliationPartner[] = [
  {
    src: '/image/affilations/ZEE_Media.png',
    alt: 'Zee Media Corporation Limited',
    label: 'Media Partner',
    sublabel: 'Zee Media Corporation Limited',
    labelColor: 'text-violet-700',
    imageScale: 'scale-[1.15]',
  },
  {
    src: '/image/affilations/Savitribai_Phule_Pune_University_Logo.png',
    alt: 'Savitribai Phule Pune University',
    label: 'University Partner',
    sublabel: 'Savitribai Phule Pune University',
    labelColor: 'text-amber-600',
    imageScale: 'scale-[0.95]',
  },
  {
    src: '/image/affilations/Medhavi.png',
    alt: 'Medhavi Skills University',
    label: 'University Partner',
    sublabel: 'Academic Excellence',
    labelColor: 'text-sky-600',
    imageScale: '',
  },
  {
    src: '/image/affilations/Gedu_Logo_Extended_RGB.svg',
    alt: 'Gedu Global Education',
    label: 'Education Partner',
    sublabel: 'Global Education',
    labelColor: 'text-lime-700',
    imageScale: '',
  },
  {
    src: '/image/affilations/mkcl.svg',
    alt: 'MKCL',
    label: 'Knowledge Partner',
    sublabel: 'MKCL Certified',
    labelColor: 'text-orange-600',
    imageScale: '',
  },
  {
    src: '/image/affilations/skill_india.svg',
    alt: 'Skill India',
    label: 'Government Affiliation',
    sublabel: 'Skill Development',
    labelColor: 'text-orange-600',
    imageScale: 'brightness-90 contrast-125',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const COLUMN = 'flex flex-col gap-6 sm:gap-8';

function SectionHeader({
  eyebrow,
  title,
  accent,
  subtitle,
  description,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  subtitle?: string;
  description?: string;
}) {
  return (
    <header className="space-y-3">
      <span className="text-orange-600 font-black text-[10px] sm:text-xs uppercase tracking-[0.4em] block">
        {eyebrow}
      </span>
      <h2 className="font-headline text-2xl xs:text-3xl sm:text-4xl lg:text-[2.35rem] xl:text-5xl font-black text-[#141a3b] tracking-tight leading-[1.12]">
        {title}{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#9d4300] to-[#f1711c]">
          {accent}
        </span>
      </h2>
      {subtitle ? (
        <p className="text-base sm:text-lg font-bold text-slate-700">{subtitle}</p>
      ) : null}
      <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-orange-500 via-orange-400 to-sky-500 rounded-full" />
      {description ? (
        <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed pt-1">
          {description}
        </p>
      ) : null}
    </header>
  );
}

function PuneUniversityCertCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-100 bg-white shadow-lg shadow-slate-900/5 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-xl hover:border-orange-100">
        <div className="h-1 sm:h-1.5 bg-gradient-to-r from-orange-500 via-orange-400 to-sky-500" />
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="relative p-6 sm:p-7 md:p-8 space-y-4 sm:space-y-5">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="shrink-0 w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2.5 sm:p-3 shadow-inner transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src={SPPU_LOGO}
                alt="Savitribai Phule Pune University"
                width={120}
                height={120}
                className="w-full h-full object-contain scale-[0.95]"
              />
            </div>
            <div className="min-w-0 flex-1 space-y-2">
              <span className="text-orange-600 font-black text-[10px] sm:text-xs uppercase tracking-[0.4em] block leading-snug">
                Pune University Certified Programs
              </span>
              <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-sky-500 rounded-full" />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-headline text-xl sm:text-2xl lg:text-[1.65rem] font-black text-[#141a3b] tracking-tight leading-[1.12]">
              Earn Industry Recognized Certificates from{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#9d4300] to-[#f1711c]">
                Pune University
              </span>
            </h3>
            <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
              Pursue industry focused programs and earn recognized certifications through our
              academic collaboration with Savitribai Phule Pune University.
            </p>
          </div>

          <Link
            href="/courses/degree/bvoc-animation/"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto kinetic-gradient text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg shadow-orange-500/25 transition-all duration-300 hover:shadow-orange-500/35 hover:gap-3"
          >
            Explore Degree Programs
            <span
              className="material-symbols-outlined text-lg sm:text-xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function AffiliationLogoCard({ partner }: { partner: AffiliationPartner }) {
  return (
    <div className="flex flex-col items-center text-center h-full rounded-xl sm:rounded-2xl border border-slate-100/90 bg-white/80 backdrop-blur-sm p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-orange-100/80 transition-all duration-300">
      <div className="relative w-full h-[64px] xs:h-[72px] sm:h-20 flex items-center justify-center">
        <Image
          src={partner.src}
          alt={partner.alt}
          width={280}
          height={112}
          className={`max-h-full w-auto max-w-[85%] object-contain ${partner.imageScale ?? ''}`}
        />
      </div>
      <div className="mt-3 flex flex-col items-center gap-0.5">
        <span
          className={`text-[9px] sm:text-[10px] font-black uppercase tracking-widest ${partner.labelColor}`}
        >
          {partner.label}
        </span>
        <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase leading-tight line-clamp-2">
          {partner.sublabel}
        </span>
      </div>
    </div>
  );
}

export default function NewLocationSection() {
  return (
    <section
      id="new-location"
      className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-[-15%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-orange-500/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-[-15%] right-[-10%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-sky-500/10 rounded-full blur-[70px] md:blur-[100px] animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-sky-50/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 xl:gap-20 lg:items-start">
          {/* Left: New Location */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className={`${COLUMN} order-1`}
          >
            <SectionHeader
              eyebrow="Our New Location"
              title="We Are Now in the"
              accent="Heart of PCMC"
              subtitle="Expanding Opportunities. Improving Accessibility."
            />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed -mt-2">
              We are excited to announce our relocation to C701 - C706, Gera&apos;s Imperium Gateway,
              Nashik Phata Metro Station, Pimpri, Pune. Our new office offers world class
              infrastructure, modern workspaces, excellent connectivity, and direct access to the
              Nashik Phata Metro Station, making daily travel easier and more convenient for
              students, professionals, and visitors.
            </p>

            <a
              href={CAMPUS_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-slate-700"
            >
              <span
                className="material-symbols-outlined text-orange-500 text-2xl shrink-0"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                location_on
              </span>
              <span className="text-sm sm:text-base font-semibold leading-relaxed">
                {CAMPUS_ADDRESS_FULL}
              </span>
            </a>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {HIGHLIGHTS.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="flex items-start gap-2.5 text-slate-700 text-xs sm:text-sm font-medium"
                >
                  <span className="text-orange-500 font-bold shrink-0 mt-0.5">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] max-h-[420px] sm:max-h-[480px] mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/image/location/gera-imperium-gateway.png"
                  alt="Gera's Imperium Gateway — new ZICA ZIMA campus building"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141a3b]/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">
                  Premium Campus
                </div>
              </div>
            </div>

            <Link
              href={CAMPUS_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 kinetic-gradient text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg shadow-orange-500/25 w-full sm:w-auto"
            >
              <span
                className="material-symbols-outlined text-lg sm:text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                directions
              </span>
              Visit Our New Campus
            </Link>
          </motion.div>

          {/* Right: affiliations + Pune University certification */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`${COLUMN} order-2 lg:pl-10 xl:pl-14 lg:border-l lg:border-slate-100`}
          >
            <div className="space-y-5 sm:space-y-6">
              <SectionHeader
                eyebrow="Official Partnerships"
                title="Our"
                accent="Affiliations"
                description="Trusted academic, industry, and government partners supporting our programs."
              />

              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                {AFFILIATION_PARTNERS.map((partner, index) => (
                  <motion.div
                    key={partner.alt}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.06 * index }}
                    className="h-full"
                  >
                    <AffiliationLogoCard partner={partner} />
                  </motion.div>
                ))}
              </div>
            </div>

            <PuneUniversityCertCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
