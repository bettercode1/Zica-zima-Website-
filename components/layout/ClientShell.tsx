'use client';

import type { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { ThemeProvider } from '@/components/theme-provider';
import { MaterialSymbolsFont } from '@/components/ui/MaterialSymbolsFont';

const SmoothScroll = dynamic(() => import('@/components/ui/SmoothScroll'));
const InteractiveOverlays = dynamic(
  () => import('@/components/ui/InteractiveOverlays').then((mod) => mod.InteractiveOverlays),
  { ssr: false }
);
const AdmissionsOfferPopupLoader = dynamic(
  () => import('@/components/portal/AdmissionsOfferPopupLoader'),
  { ssr: false }
);

interface ClientShellProps {
  children: ReactNode;
}

export function ClientShell({ children }: ClientShellProps) {
  return (
    <>
      <MaterialSymbolsFont />
      <ThemeProvider>
        <SmoothScroll>
          <InteractiveOverlays />
          {children}
        </SmoothScroll>
        <AdmissionsOfferPopupLoader />
      </ThemeProvider>
    </>
  );
}
