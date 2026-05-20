'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const STORAGE_KEY = 'zicazimapcmc:offer-popup:dismissed-v2';

type Slide = {
  id: string;
  src: string;
  alt: string;
  href: string;
  containerClass: string;
  imageWrapperClass: string;
  sizes: string;
  ariaLabel: string;
};

const SLIDES: Slide[] = [
  {
    id: 'admissions-offer',
    src: '/image/offers/admissions-offer-2026.png',
    alt:
      'ZICA ZIMA PCMC — Admissions Open: All Degree & 1 Year Above Courses. Exclusive Offer: Free Pen Tab + Adobe License for 1 Year.',
    href: '/#admissions',
    containerClass: 'max-w-[92vw] sm:max-w-md md:max-w-lg lg:max-w-xl',
    imageWrapperClass:
      'relative w-[88vw] sm:w-[420px] md:w-[480px] lg:w-[540px] aspect-[820/1024]',
    sizes:
      '(max-width: 640px) 88vw, (max-width: 768px) 420px, (max-width: 1024px) 480px, 540px',
    ariaLabel: 'Apply now for admissions',
  },
  {
    id: 'zee-media-certificate',
    src: '/image/offers/zee-media-collaboration-certificate.png',
    alt:
      'Certificate of Collaboration between ZICA & ZIMA and Zee Media Corporation Limited — Preferred Partner for Placements, Internships, and Studio Visits at Zee Media.',
    href: '/about',
    containerClass: 'max-w-[94vw] sm:max-w-xl md:max-w-3xl lg:max-w-4xl',
    imageWrapperClass:
      'relative w-[92vw] sm:w-[560px] md:w-[720px] lg:w-[860px] aspect-[842/595]',
    sizes:
      '(max-width: 640px) 92vw, (max-width: 768px) 560px, (max-width: 1024px) 720px, 860px',
    ariaLabel: 'Learn more about our Zee Media collaboration',
  },
];

export default function AdmissionsOfferPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const activeSlide = useMemo(() => SLIDES[activeIndex], [activeIndex]);
  const isLastSlide = activeIndex >= SLIDES.length - 1;

  useEffect(() => {
    setMounted(true);

    try {
      const dismissed = sessionStorage.getItem(STORAGE_KEY);
      if (!dismissed) {
        const timer = setTimeout(() => setIsOpen(true), 600);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, activeIndex]);

  const handleClose = () => {
    if (!isLastSlide) {
      setActiveIndex((index) => index + 1);
      return;
    }
    setIsOpen(false);
    setActiveIndex(0);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // sessionStorage may be unavailable (private mode); ignore
    }
  };

  if (!mounted || !activeSlide) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="offer-popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6 sm:py-10 bg-black/70 backdrop-blur-sm cursor-auto"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="ZICA ZIMA PCMC Announcement"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className={`relative w-auto ${activeSlide.containerClass}`}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleClose}
                aria-label={isLastSlide ? 'Close popup' : 'Close and view next'}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-slate-200 hover:bg-orange-500 hover:text-white hover:ring-orange-500 active:scale-95 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <Link
                href={activeSlide.href}
                onClick={handleClose}
                aria-label={activeSlide.ariaLabel}
                className="block overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_30px_80px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/10 bg-white"
              >
                <div className={activeSlide.imageWrapperClass}>
                  <Image
                    src={activeSlide.src}
                    alt={activeSlide.alt}
                    fill
                    priority={activeIndex === 0}
                    sizes={activeSlide.sizes}
                    className="object-contain"
                  />
                </div>
              </Link>

              {SLIDES.length > 1 && (
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                  {SLIDES.map((slide, index) => (
                    <span
                      key={slide.id}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? 'w-6 bg-white'
                          : 'w-1.5 bg-white/40'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
