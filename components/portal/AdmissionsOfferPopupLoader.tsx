'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const STORAGE_KEY = 'zicazimapcmc:offer-popup:dismissed-v2';
const POPUP_LOAD_DELAY_MS = 2500;

const AdmissionsOfferPopup = dynamic(
  () => import('./AdmissionsOfferPopup'),
  { ssr: false }
);

export default function AdmissionsOfferPopupLoader() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // sessionStorage may be unavailable; still allow popup
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const loadPopup = () => {
      timer = setTimeout(() => {
        if (!cancelled) setShouldLoad(true);
      }, POPUP_LOAD_DELAY_MS);
    };

    if (document.readyState === 'complete') {
      loadPopup();
    } else {
      window.addEventListener('load', loadPopup, { once: true });
    }

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, []);

  if (!shouldLoad) return null;

  return <AdmissionsOfferPopup />;
}
