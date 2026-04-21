import { Geist, Geist_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})
const plusJakarta = Plus_Jakarta_Sans({subsets:['latin'],variable:'--font-headline'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

import { Metadata } from "next"
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import SplashCursor from "@/components/ui/SplashCursor"

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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className="cursor-none" suppressHydrationWarning>
        <ThemeProvider>
          <SplashCursor 
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
          <SmoothCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

