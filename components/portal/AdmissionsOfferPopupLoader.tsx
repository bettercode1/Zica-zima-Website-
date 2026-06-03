'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const STORAGE_KEY = 'zicazimapcmc:offer-popup:dismissed-v2';
const FIRST_SLIDE_SRC = '/image/offers/admissions-offer-2026.webp';
const POPUP_MOUNT_DELAY_MS = 500;
const IDLE_TIMEOUT_MS = 4000;

const AdmissionsOfferPopup = dynamic(
  () => import('./AdmissionsOfferPopup'),
  { ssr: false }
);

function prefetchImage(src: string) {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
}

function scheduleIdle(callback: () => void) {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout: IDLE_TIMEOUT_MS });
  } else {
    window.setTimeout(callback, 1500);
  }
}

export default function AdmissionsOfferPopupLoader() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // sessionStorage may be unavailable; still allow popup
    }

    let cancelled = false;
    let mountTimer: ReturnType<typeof setTimeout> | undefined;

    const mountPopup = () => {
      prefetchImage(FIRST_SLIDE_SRC);
      mountTimer = setTimeout(() => {
        if (!cancelled) setShouldLoad(true);
      }, POPUP_MOUNT_DELAY_MS);
    };

    const onPageReady = () => scheduleIdle(mountPopup);

    if (document.readyState === 'complete') {
      onPageReady();
    } else {
      window.addEventListener('load', onPageReady, { once: true });
    }

    return () => {
      cancelled = true;
      if (mountTimer) clearTimeout(mountTimer);
    };
  }, []);

  if (!shouldLoad) return null;

  return <AdmissionsOfferPopup />;
}
