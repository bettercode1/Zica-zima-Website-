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

      {/* Floating Social Sidebar */}
      <div className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-[9999] flex flex-col gap-2 sm:gap-4 p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl bg-slate-950/60 backdrop-blur-md border border-white/10 shadow-2xl">
        <a 
          href="https://wa.me/919028757041?text=Need%20to%20Know%20More%20about%20Courses" 
          target="_blank" 
          rel="noreferrer" 
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg sm:rounded-xl bg-slate-900/50 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:-translate-x-1 active:scale-90"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-[22px] sm:h-[22px]" fill="currentColor">
            <path d="M12.012 2c-5.508 0-9.984 4.476-9.984 9.984 0 1.764.456 3.42 1.26 4.884l-1.332 4.86 4.98-1.308c1.416.768 3.024 1.212 4.728 1.212 5.508 0 9.984-4.476 9.984-9.984 0-5.508-4.476-9.984-9.984-9.984zm6.6 14.124c-.276.78-1.356 1.416-2.196 1.524-.588.072-1.356.108-3.924-.948-3.288-1.356-5.412-4.692-5.58-4.908-.156-.228-1.32-1.752-1.32-3.348 0-1.596.816-2.376 1.104-2.688.24-.264.636-.384.996-.384.12 0 .228.012.336.012.312.012.48.024.696.516.264.624.912 2.22 1.02 2.424.096.216.036.456-.12.636l-.6.756c-.168.18-.324.36-.144.672.18.3.792 1.308 1.692 2.112.9 1.176 1.74 1.344 2.04 1.488.312.144.492.12.672-.096.18-.216.768-.9 1.02-1.284.216-.312.444-.264.744-.144.3.12 1.908.9 2.244 1.068.336.168.564.24.648.384.096.168.096.96-.18 1.74z"/>
          </svg>
        </a>

        <a 
          href="https://www.linkedin.com/company/zee-institue-of-creative-media-arts-pimpri-chinchwad/" 
          target="_blank" 
          rel="noreferrer" 
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg sm:rounded-xl bg-slate-900/50 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all duration-300 hover:-translate-x-1 active:scale-90"
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] sm:w-5 sm:h-5" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>

        <a 
          href="https://www.instagram.com/zicazima_pcmc/" 
          target="_blank" 
          rel="noreferrer" 
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg sm:rounded-xl bg-slate-900/50 text-[#E1306C] hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white transition-all duration-300 hover:-translate-x-1 active:scale-90"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-[22px] sm:h-[22px]" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.341 3.608 1.316.975.975 1.254 2.242 1.316 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.341 2.633-1.316 3.608-.975.975-2.242 1.254-3.608 1.316-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.341-3.608-1.316-.975-.975-2.242-1.254-3.608-1.316-1.266-.058-1.646-.07-4.85-.07s-3.667-.014-4.947-.072-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        <a 
          href="https://www.facebook.com/zicazimapcmcpune/" 
          target="_blank" 
          rel="noreferrer" 
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg sm:rounded-xl bg-slate-900/50 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:-translate-x-1 active:scale-90"
          aria-label="Facebook"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-[22px] sm:h-[22px]" fill="currentColor">
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
          </svg>
        </a>

        <a 
          href="https://www.youtube.com/@ZICAZIMAInstitutePCMCPune" 
          target="_blank" 
          rel="noreferrer" 
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg sm:rounded-xl bg-slate-900/50 text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all duration-300 hover:-translate-x-1 active:scale-90"
          aria-label="YouTube"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-[22px] sm:h-[22px]" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
      </div>
    </>
  );
}
