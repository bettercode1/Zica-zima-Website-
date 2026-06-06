'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const SmoothCursorInternal = dynamic(() => import("@/components/ui/smooth-cursor").then(mod => mod.SmoothCursor), { ssr: false });
const SplashCursorInternal = dynamic(() => import("@/components/ui/SplashCursor"), { ssr: false });

function shouldEnableInteractiveOverlays() {
  if (typeof window === 'undefined') return false;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const isSmallScreen = window.matchMedia('(max-width: 767px)').matches;

  return !prefersReducedMotion && !isCoarsePointer && !isSmallScreen;
}

export function InteractiveOverlays() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (shouldEnableInteractiveOverlays()) {
      setEnabled(true);
    }
  }, []);

  if (!enabled) return null;

  return (
    <>
      <SplashCursorInternal 
        SIM_RESOLUTION={24}
        DYE_RESOLUTION={256}
        DENSITY_DISSIPATION={2.8}
        VELOCITY_DISSIPATION={2.0}
        PRESSURE={0.2}
        PRESSURE_ITERATIONS={2}
        CURL={8}
        SPLAT_RADIUS={0.12}
        SPLAT_FORCE={3500}
        COLOR_UPDATE_SPEED={10}
        SHADING={false}
        RAINBOW_MODE={true}
      />
      <SmoothCursorInternal />
    </>
  );
}
