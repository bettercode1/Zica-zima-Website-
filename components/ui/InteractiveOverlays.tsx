'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const SmoothCursorInternal = dynamic(
  () => import('@/components/ui/smooth-cursor').then((mod) => mod.SmoothCursor),
  { ssr: false }
);

type NetworkInformation = {
  saveData?: boolean;
  effectiveType?: string;
};

function getNetworkInfo(): NetworkInformation | undefined {
  return (navigator as Navigator & { connection?: NetworkInformation }).connection;
}

function shouldEnableInteractiveOverlays() {
  if (typeof window === 'undefined') return false;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const isSmallScreen = window.matchMedia('(max-width: 767px)').matches;
  const connection = getNetworkInfo();
  const saveData = connection?.saveData === true;
  const slowConnection =
    connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g';

  return !prefersReducedMotion && !isCoarsePointer && !isSmallScreen && !saveData && !slowConnection;
}

function scheduleIdle(callback: () => void) {
  const idle = window.requestIdleCallback;
  if (typeof idle === 'function') {
    idle(callback, { timeout: 8000 });
  } else {
    window.setTimeout(callback, 4000);
  }
}

export function InteractiveOverlays() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!shouldEnableInteractiveOverlays()) return;
    scheduleIdle(() => setEnabled(true));
  }, []);

  if (!enabled) return null;

  return <SmoothCursorInternal />;
}
