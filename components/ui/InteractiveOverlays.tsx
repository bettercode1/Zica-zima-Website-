'use client';

import dynamic from 'next/dynamic';

const SmoothCursorInternal = dynamic(() => import("@/components/ui/smooth-cursor").then(mod => mod.SmoothCursor), { ssr: false });
const SplashCursorInternal = dynamic(() => import("@/components/ui/SplashCursor"), { ssr: false });

export function InteractiveOverlays() {
  return (
    <>
      <SplashCursorInternal 
        SIM_RESOLUTION={64}
        DYE_RESOLUTION={512}
        DENSITY_DISSIPATION={2.5}
        VELOCITY_DISSIPATION={2.0}
        PRESSURE={0.2}
        PRESSURE_ITERATIONS={10}
        CURL={10}
        SPLAT_RADIUS={0.15}
        SPLAT_FORCE={4000}
        COLOR_UPDATE_SPEED={10}
        SHADING={false}
        RAINBOW_MODE={true}
      />
      <SmoothCursorInternal />
    </>
  );
}
