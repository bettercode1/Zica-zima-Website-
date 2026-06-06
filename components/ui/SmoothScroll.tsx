'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode, useEffect, useState } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

function scheduleIdle(callback: () => void) {
  const idle = window.requestIdleCallback;
  if (typeof idle === 'function') {
    idle(callback, { timeout: 5000 });
  } else {
    window.setTimeout(callback, 2000);
  }
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    scheduleIdle(() => setEnabled(true));
  }, []);

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 1.1,
        touchMultiplier: 1.5,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
