import type { Metadata } from "next";
import { Geist_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})
const plusJakarta = Plus_Jakarta_Sans({subsets:['latin'],variable:'--font-headline'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

import { InteractiveOverlays } from "@/components/ui/InteractiveOverlays"
import SmoothScroll from "@/components/ui/SmoothScroll"

export const metadata: Metadata = {
  title: 'ZICA ZIMA PCMC | Animation & Film Making Institute',
  description: 'Premier Animation, VFX, and Film Making Institute in PCMC. Backed by Zee Learn.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased scroll-smooth", fontMono.variable, inter.variable, plusJakarta.variable)}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" />
        {/* Fallback for older browsers or if Symbols fail */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" />
      </head>
      <body className="cursor-none" suppressHydrationWarning>
        <ThemeProvider>
          <SmoothScroll>
            <InteractiveOverlays />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}

