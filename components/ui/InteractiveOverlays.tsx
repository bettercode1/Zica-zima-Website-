'use client';

import dynamic from 'next/dynamic';

const SmoothCursorInternal = dynamic(() => import("@/components/ui/smooth-cursor").then(mod => mod.SmoothCursor), { ssr: false });
const SplashCursorInternal = dynamic(() => import("@/components/ui/SplashCursor"), { ssr: false });

export function InteractiveOverlays() {
  return (
    <>
      {/* 
        Restored SplashCursor with optimized settings to provide 
        the visual flair without the previous cursor lag.
      */}
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
