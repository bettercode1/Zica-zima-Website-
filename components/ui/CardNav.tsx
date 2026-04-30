'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { IconArrowUpRight } from '@tabler/icons-react';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import { PhoneCallIcon } from '@/components/ui/phone-call-icon';
import './CardNav.css';

interface NavLink {
  label: string;
  ariaLabel?: string;
  href?: string;
}

interface NavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: NavLink[];
}

interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: NavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor
}: CardNavProps) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 400;

    const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
    if (contentEl) {
      const wasVisible = contentEl.style.visibility;
      const wasPointerEvents = contentEl.style.pointerEvents;
      const wasPosition = contentEl.style.position;
      const wasHeight = contentEl.style.height;

      contentEl.style.visibility = 'visible';
      contentEl.style.pointerEvents = 'auto';
      contentEl.style.position = 'static';
      contentEl.style.height = 'auto';

      // Trigger reflow
      void contentEl.offsetHeight;

      const topBar = 60;
      const padding = 0;
      const contentHeight = contentEl.scrollHeight;

      contentEl.style.visibility = wasVisible;
      contentEl.style.pointerEvents = wasPointerEvents;
      contentEl.style.position = wasPosition;
      contentEl.style.height = wasHeight;

      return topBar + contentHeight + padding;
    }
    return 400;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div className={`card-nav-container ${className}`}>
      <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`} style={{ backgroundColor: baseColor }}>
        <div className="card-nav-top">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#000' }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <div className="logo-container flex items-center gap-2">
            <Link href="/" onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }} className="relative w-24 h-8 sm:w-32 sm:h-10 flex-shrink-0 cursor-pointer">
              <Image 
                src={logo} 
                alt={logoAlt} 
                fill 
                className="object-contain" 
              />
            </Link>
            <div className="flex flex-col justify-center relative w-16 h-6 sm:w-24 sm:h-8 flex-shrink-0">
              <span className="text-[6px] sm:text-[8px] font-extrabold text-slate-400 uppercase tracking-[0.2em] mb-0 leading-none">Backed by</span>
              <div className="relative w-full h-full -mt-0.5">
                <Image 
                  src="/image/zee learn.png"
                  alt="Zee Learn Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </div>
          </div>

          <Link href="/#admissions" className="order-2 sm:order-none">
            <button
              className="flex items-center gap-2 kinetic-gradient text-on-primary px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-bold shadow-lg hover:shadow-orange-500/30 transition-all active:scale-95 duration-200 group text-xs sm:text-sm"
            >
              Enquiry Now
              <PhoneCallIcon size={16} className="text-white ml-1" />
            </button>
          </Link>
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links?.map((lnk, i) => (
                  <a key={`${lnk.label}-${i}`} className="nav-card-link" href={lnk.href} aria-label={lnk.ariaLabel}>
                    <IconArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
          
          {/* Social Icons & Contact Info for Mobile only */}
          <div 
            className="nav-card flex flex-col gap-2 p-4" 
            style={{ backgroundColor: '#0f172a', color: '#f8fafc' }}
            ref={setCardRef(3)}
          >
            <div className="nav-card-label" style={{ color: '#f8fafc', marginBottom: '8px' }}>Contact & Socials</div>
            <div className="flex flex-col gap-1 text-sm">
              <span className="text-slate-400 font-medium">Call Us:</span>
              <a href="tel:+919028757041" className="hover:text-orange-500 transition-colors font-bold text-base">+91 90287 57041</a>
              <a href="tel:+919028757042" className="hover:text-orange-500 transition-colors font-bold text-base">+91 90287 57042</a>
            </div>
            <div className="flex items-center gap-4 mt-2">
              {[
                { id: 'wa', url: "https://wa.me/919028757041?text=Need%20to%20Know%20More%20about%20Courses" },
                { id: 'li', url: "https://www.linkedin.com/company/zee-institue-of-creative-media-arts-pimpri-chinchwad/" },
                { id: 'ig', url: "https://www.instagram.com/zicazima_pcmc/" },
                { id: 'fb', url: "https://www.facebook.com/zicazimapcmcpune/" },
                { id: 'yt', url: "https://www.youtube.com/@ZICAZIMAInstitutePCMCPune" }
              ].map((social) => (
                <div key={social.id} className="transition-transform duration-200 hover:scale-110">
                  <SocialIcon 
                    url={social.url} 
                    style={{ height: 28, width: 28 }} 
                    bgColor="rgba(255, 255, 255, 0.1)"
                    fgColor="#ffffff"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
