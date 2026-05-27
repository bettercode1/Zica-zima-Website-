'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/portal/Navbar';
import type { BvocProgram, MedhaviProgramContent, SyllabusSemester } from '@/lib/bvocSyllabus';

const Footer = dynamic(() => import('@/components/portal/Footer'), { ssr: false });

const expandTransition = { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const };

/** Shorter award titles render larger; longer titles scale down to fit the card. */
function awardTitleFontClass(title: string, allTitles: string[]): string {
  const len = title.length;
  const minLen = Math.min(...allTitles.map((t) => t.length));
  const maxLen = Math.max(...allTitles.map((t) => t.length));
  const span = maxLen - minLen || 1;
  const shortness = 1 - (len - minLen) / span;

  if (shortness >= 0.8) return 'text-lg md:text-xl leading-snug';
  if (shortness >= 0.55) return 'text-base md:text-lg leading-snug';
  if (shortness >= 0.3) return 'text-sm md:text-base leading-snug';
  return 'text-xs md:text-sm leading-snug';
}

function GlowingTrophy() {
  return (
    <div className="relative mb-2 flex h-10 w-10 items-center justify-center shrink-0" aria-hidden>
      <span className="absolute inset-0 rounded-full bg-amber-400/45 blur-md animate-pulse" />
      <span className="absolute inset-0 rounded-full bg-yellow-300/30 blur-xl scale-150 animate-[pulse_2.5s_ease-in-out_infinite]" />
      <span
        className="material-symbols-outlined relative z-10 text-[1.75rem] text-amber-500 animate-[pulse_2s_ease-in-out_infinite] drop-shadow-[0_0_6px_rgba(251,191,36,0.9)] drop-shadow-[0_0_14px_rgba(245,158,11,0.55)]"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        trophy
      </span>
    </div>
  );
}

function AwardLogo({ src, alt }: { src: string; alt: string }) {
  const encoded = encodeURI(src);
  const isSvg = src.toLowerCase().endsWith('.svg');

  if (isSvg) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={encoded} alt={alt} className="object-contain max-h-14 sm:max-h-16 md:max-h-[4.5rem] w-auto max-w-full" />
    );
  }

  return (
    <Image
      src={encoded}
      alt={alt}
      width={160}
      height={80}
      unoptimized
      className="object-contain max-h-14 sm:max-h-16 md:max-h-[4.5rem] w-auto max-w-full h-auto"
    />
  );
}

function awardOrgFontClass(org: string, allOrgs: string[]): string {
  const len = org.length;
  const minLen = Math.min(...allOrgs.map((o) => o.length));
  const maxLen = Math.max(...allOrgs.map((o) => o.length));
  const span = maxLen - minLen || 1;
  const shortness = 1 - (len - minLen) / span;

  if (shortness >= 0.7) return 'text-sm md:text-base';
  if (shortness >= 0.35) return 'text-xs md:text-sm';
  return 'text-[11px] md:text-xs';
}

function CollapsiblePanel({ open, children }: { open: boolean; children: ReactNode }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={expandTransition}
          className="overflow-hidden"
        >
          <motion.div
            initial={{ y: -8 }}
            animate={{ y: 0 }}
            exit={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SectionBanner({
  children,
  open,
  onToggle,
  collapsible = false,
}: {
  children: ReactNode;
  open?: boolean;
  onToggle?: () => void;
  collapsible?: boolean;
}) {
  const inner = (
    <>
      <h2 className="font-headline text-base md:text-lg font-black uppercase tracking-wide">{children}</h2>
      {collapsible && (
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="material-symbols-outlined text-white text-xl ml-3 shrink-0"
        >
          expand_more
        </motion.span>
      )}
    </>
  );

  const bannerClass =
    'inline-flex items-center px-4 py-2 md:px-5 md:py-2.5 bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] text-white shadow-md w-full sm:w-auto';

  return (
    <div className="relative mb-4">
      {collapsible ? (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className={`${bannerClass} rounded-sm hover:from-[#1a3352] hover:to-[#1d4ed8] transition-colors cursor-pointer text-left`}
        >
          {inner}
        </button>
      ) : (
        <div className={bannerClass}>{inner}</div>
      )}
      <div
        className="absolute top-0 left-full h-full w-4 bg-[#2563eb] hidden sm:block pointer-events-none"
        style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
        aria-hidden
      />
    </div>
  );
}

function SyllabusTable({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;

  return (
    <div className="mb-1.5 last:mb-0">
      <div className="bg-[#2563eb] text-white text-[9px] md:text-[10px] font-black uppercase tracking-wide px-2 py-1 text-center border border-[#1d4ed8]">
        {title}
      </div>
      <table className="w-full text-[10px] md:text-[11px] border-collapse">
        <thead>
          <tr className="bg-sky-100">
            <th className="w-9 border border-slate-300 px-1 py-0.5 font-black text-slate-700">Sr.no</th>
            <th className="border border-slate-300 px-1.5 py-0.5 font-black text-slate-700 text-left">
              Subject
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((name, index) => (
            <tr key={name} className={index % 2 === 0 ? 'bg-sky-50/80' : 'bg-white'}>
              <td className="border border-slate-200 px-1 py-0.5 text-center font-bold text-slate-600">
                {index + 1}
              </td>
              <td className="border border-slate-200 px-1.5 py-0.5 font-medium text-slate-800 leading-tight">
                {name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SemesterColumn({ semester }: { semester: SyllabusSemester }) {
  const { sections } = semester;

  return (
    <div className="min-w-0 flex-1 border border-slate-200 bg-white">
      <div className="bg-[#ea580c] text-white text-center py-1.5 px-2">
        <h4 className="font-headline text-sm md:text-base font-black uppercase tracking-wide">
          Semester {semester.roman}
        </h4>
        {semester.subtitle && (
          <p className="text-[9px] md:text-[10px] font-semibold text-white/90 mt-0.5 leading-tight px-1">
            {semester.subtitle}
          </p>
        )}
      </div>
      <div className="p-1.5 md:p-2 bg-slate-50/50">
        <SyllabusTable title="Theory" items={sections.theory} />
        <SyllabusTable title="Lab / Practical" items={sections.lab} />
        <SyllabusTable title="On-Job-Training (OJT) (Any One)" items={sections.ojt} />
      </div>
    </div>
  );
}

function YearSyllabusContent({ year }: { year: BvocProgram['years'][number] }) {
  return (
    <div className="flex border border-slate-300 overflow-hidden bg-white shadow-sm border-t-0">
      <div className="shrink-0 w-12 md:w-14 bg-[#1e3a5f] flex items-center justify-center">
        <span
          className="text-white font-black text-xs md:text-sm uppercase tracking-wider whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          {year.label}
        </span>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 min-w-0">
        {year.semesters.map((semester) => (
          <SemesterColumn key={semester.number} semester={semester} />
        ))}
      </div>
    </div>
  );
}

function YearSyllabusAccordion({
  year,
  open,
  onToggle,
}: {
  year: BvocProgram['years'][number];
  open: boolean;
  onToggle: () => void;
}) {
  const semesterLabels = year.semesters.map((s) => `Sem ${s.roman}`).join(' · ');

  return (
    <div className="border border-slate-300 overflow-hidden rounded-lg shadow-sm bg-white">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 md:py-3.5 bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] text-white hover:from-[#1a3352] hover:to-[#1d4ed8] transition-colors text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/15 border border-white/25 flex items-center justify-center font-black text-sm md:text-base">
            {year.number}
          </span>
          <div className="min-w-0">
            <span className="font-headline text-sm md:text-base font-black uppercase tracking-wide block">
              {year.label}
            </span>
            <span className="text-[10px] md:text-xs text-white/70 font-semibold truncate block">
              {semesterLabels}
            </span>
          </div>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="material-symbols-outlined text-2xl shrink-0"
        >
          expand_more
        </motion.span>
      </button>
      <CollapsiblePanel open={open}>
        <YearSyllabusContent year={year} />
      </CollapsiblePanel>
    </div>
  );
}

function MedhaviProgramSections({ content }: { content: MedhaviProgramContent }) {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <SectionBanner>Programme Overview</SectionBanner>
        <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm space-y-4">
          {content.programmeOverview.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-[13px] md:text-sm text-slate-700 font-medium leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 grid sm:grid-cols-2 gap-3"
      >
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Degree</p>
          <p className="font-headline text-2xl font-black text-slate-900">{content.degree}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Eligibility</p>
          <p className="font-headline text-2xl font-black text-slate-900">{content.eligibility}</p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <SectionBanner>Academic Framework</SectionBanner>
        <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
          <p className="text-[13px] md:text-sm text-slate-700 font-medium leading-relaxed">{content.academicFramework}</p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <SectionBanner>Programme Features</SectionBanner>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {content.programmeFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm hover:border-emerald-200 transition-colors flex flex-col items-center"
            >
              <div className="relative h-14 w-full mb-2 flex items-center justify-center">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={96}
                  height={56}
                  className="object-contain max-h-14 w-auto"
                />
              </div>
              <p className="text-[11px] md:text-xs font-black text-slate-900 leading-snug">{feature.title}</p>
              {feature.lines?.map((line) => (
                <p key={line} className="text-[10px] font-semibold text-slate-500 mt-0.5">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <SectionBanner>Selection Process</SectionBanner>
        <ul className="rounded-xl border border-sky-200/80 bg-sky-50/50 p-4 md:p-5 space-y-2">
          {content.selectionProcess.map((step) => (
            <li key={step} className="flex gap-2 text-[12px] md:text-[13px] font-semibold text-slate-800 leading-snug">
              <span className="text-sky-600 font-black shrink-0">•</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <SectionBanner>The Medhavi Edge</SectionBanner>
        <ul className="grid sm:grid-cols-2 gap-2 md:gap-3">
          {content.medhaviEdge.map((point) => (
            <li
              key={point}
              className="flex gap-2 items-start rounded-lg border border-slate-200 bg-white p-3 shadow-sm"
            >
              <span className="shrink-0 w-6 h-6 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center text-xs font-black">
                +
              </span>
              <span className="text-[11px] md:text-[12px] font-semibold text-slate-800 leading-snug">{point}</span>
            </li>
          ))}
        </ul>
      </motion.section>
    </>
  );
}

function SyllabusSection({ program }: { program: BvocProgram }) {
  const [syllabusOpen, setSyllabusOpen] = useState(false);
  const [openYears, setOpenYears] = useState<Record<number, boolean>>({});

  const toggleYear = (yearNumber: number) => {
    setOpenYears((prev) => ({ ...prev, [yearNumber]: !prev[yearNumber] }));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <SectionBanner collapsible open={syllabusOpen} onToggle={() => setSyllabusOpen((v) => !v)}>
        Syllabus
      </SectionBanner>

      <CollapsiblePanel open={syllabusOpen}>
        <div className="pt-1">
          <div className="flex border border-slate-300 overflow-hidden rounded-t-lg text-sm font-bold shadow-sm">
            <div className="flex-1 bg-[#1e3a5f] text-white px-3 py-2 text-xs md:text-sm">
              Program Name: {program.programName}
            </div>
            <div className="bg-[#1e3a5f] text-white px-3 py-2 border-l border-white/20 text-xs md:text-sm whitespace-nowrap">
              Intake - {program.intake}
            </div>
          </div>

          <div className="space-y-2 mt-2">
            {program.years.map((year) => (
              <YearSyllabusAccordion
                key={year.number}
                year={year}
                open={!!openYears[year.number]}
                onToggle={() => toggleYear(year.number)}
              />
            ))}
          </div>

          <p className="text-center text-[10px] text-slate-500 font-medium mt-3">
            Tap each year to view semester-wise subjects
          </p>
        </div>
      </CollapsiblePanel>
    </motion.section>
  );
}

export default function BvocProgramPage({ program }: { program: BvocProgram }) {
  const isMedhavi = program.contentVariant === 'medhavi' && !!program.medhavi;
  const heroProgramLabel =
    program.id === 'bvoc-animation-graphic-design'
      ? 'ANIMATION & GRAPHIC DESIGN'
      : program.id === 'bvoc-animation-visual-effects'
        ? 'ANIMATION & VISUAL EFFECTS'
        : 'GRAPHICS & MULTIMEDIA';
  const heroUniversityName =
    program.id === 'bvoc-animation-visual-effects'
      ? 'MEDHAVI SKILLS UNIVERSITY'
      : 'SAVITRIBAI PHULE PUNE UNIVERSITY';
  const heroUniversityLogo =
    program.id === 'bvoc-animation-visual-effects'
      ? '/image/affilations/Medhavi.png'
      : '/image/affilations/Savitribai_Phule_Pune_University_Logo.png';

  return (
    <main className="min-h-screen bg-[#f1f5f9] selection:bg-emerald-200/60 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-200/25 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-200/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <Navbar />

      <div className="relative z-10 pt-24 md:pt-28 pb-10 px-3 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
            <Link
              href="/courses?brand=degree"
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] transition-colors group"
            >
              <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">
                arrow_back
              </span>
              Degree Courses
            </Link>
          </motion.div>

          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden mb-6 shadow-lg rounded-[22px] border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1d] via-[#081633] to-[#05060b]" />
            <div className="relative px-3 py-5 sm:px-5 sm:py-6 md:px-8 md:py-7">
              <div className="text-[#facc15] font-black uppercase tracking-[0.04em]">
                <div className="text-[30px] sm:text-[44px] md:text-[52px] leading-[0.95]">
                  UGC APPROVED 3 YEARS
                </div>
                <div className="mt-1 text-[30px] sm:text-[44px] md:text-[52px] leading-[0.95]">
                  B.VOC DEGREE (ENGG) FROM
                </div>
              </div>

              <div className="mt-4 mx-auto w-fit max-w-[98%] sm:max-w-[42rem] md:max-w-[50rem] lg:max-w-[54rem] bg-white rounded-2xl sm:rounded-[2rem] border border-slate-200/90 shadow-[0_14px_48px_-10px_rgba(15,23,42,0.2)] px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-5 lg:px-9 lg:py-6 overflow-hidden">
                <div className="flex flex-row items-center justify-center gap-5 sm:gap-6 md:gap-8">
                  <div className="shrink-0 w-[104px] sm:w-[128px] md:w-[148px] lg:w-[168px]">
                    <Image
                      src={heroUniversityLogo}
                      alt={heroUniversityName}
                      width={220}
                      height={140}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-black font-black uppercase tracking-wide text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] xl:text-[52px] leading-[1.02]">
                      {heroUniversityName}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-left sm:text-center md:text-left">
                <div className="text-white font-black uppercase tracking-wide text-[24px] xs:text-[30px] sm:text-[40px] md:text-[52px] lg:text-[64px] leading-[0.92] drop-shadow-[0_3px_0_rgba(0,0,0,0.35)]">
                  {heroProgramLabel}
                </div>
              </div>
            </div>
          </motion.header>

          {isMedhavi && program.medhavi ? (
            <MedhaviProgramSections content={program.medhavi} />
          ) : (
            <>
              <motion.section
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <SectionBanner>Why B.Voc Program</SectionBanner>
                <div className="rounded-xl border-2 border-sky-200/80 bg-gradient-to-br from-sky-50/90 via-white to-blue-50/50 p-4 md:p-5 shadow-sm">
                  <ul className="grid sm:grid-cols-2 gap-2 md:gap-3">
                    {program.whyBVoc.map((point) => (
                      <li key={point} className="flex gap-2 items-start">
                        <span className="shrink-0 w-6 h-6 rounded-md bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center text-xs font-black">
                          +
                        </span>
                        <span className="text-[12px] font-semibold text-slate-800 leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <SectionBanner>Eligibility</SectionBanner>
                <div className="grid md:grid-cols-3 gap-3 mb-3">
                  {program.eligibility.map((item) => (
                    <article
                      key={item.year}
                      className="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-sky-600 to-blue-700 px-3 py-2">
                        <h3 className="text-white font-black text-xs uppercase tracking-wider">{item.year}</h3>
                      </div>
                      <div className="p-3 space-y-2">
                        {item.requirements.length > 0 ? (
                          <ul className="space-y-1">
                            {item.requirements.map((req) => (
                              <li key={req} className="flex gap-1.5 text-[12px] text-slate-700 font-medium leading-snug">
                                <span className="text-sky-600 font-black shrink-0">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-[12px] text-slate-500 font-medium italic">Lateral entry criteria apply</p>
                        )}
                        <p className="text-[10px] font-bold text-sky-800 bg-sky-50 border border-sky-100 rounded-lg px-2 py-1.5 leading-snug">
                          {item.nsqf}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
                <p className="text-center text-[10px] font-semibold text-slate-500 mb-3">{program.eligibilityNote}</p>
              </motion.section>
            </>
          )}

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <div className="bg-gradient-to-r from-[#1e3a5f] to-blue-800 px-3 py-2 text-center">
                <p className="text-white font-black text-[10px] uppercase tracking-[0.15em]">Entry &amp; Exit Options</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 bg-white">
                {program.exitOptions.map((option) => (
                  <div key={option.duration} className="p-3 text-center">
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">
                      {option.duration}
                    </p>
                    <p className="font-headline text-base font-black text-slate-900 mb-0.5">{option.award}</p>
                    <span className="inline-block text-[9px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                      {option.nsqf}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <SyllabusSection program={program} />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 p-6 md:p-8 text-center text-white shadow-lg"
          >
            <div className="relative w-12 h-12 mx-auto mb-4 rounded-xl bg-white/15 flex items-center justify-center">
              <Image
                src={isMedhavi ? '/image/affilations/Medhavi.png' : '/image/affilations/Savitribai_Phule_Pune_University_Logo.png'}
                alt={isMedhavi ? 'Medhavi Skills University' : 'SPPU'}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h3 className="font-headline text-xl md:text-2xl font-black mb-2">Ready to begin your B.Voc journey?</h3>
            <p className="text-emerald-100/90 font-medium max-w-lg mx-auto mb-5 text-sm">
              {isMedhavi
                ? 'Join ZICA ZIMA PCMC in partnership with Medhavi Skills University — studio learning with industry training from day one.'
                : 'Join ZICA ZIMA PCMC — where classroom learning meets real studio experience from day one.'}
            </p>
            <Link
              href="/#admissions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-emerald-800 font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-transform"
            >
              Apply Now
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
