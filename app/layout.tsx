import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics"
import { GoogleTagManagerBody, GoogleTagManagerHead } from "@/components/analytics/GoogleTagManager"
import { ClientShell } from "@/components/layout/ClientShell"

const inter = Inter({subsets:['latin'],variable:'--font-sans', display: 'swap'})
const plusJakarta = Plus_Jakarta_Sans({subsets:['latin'],variable:'--font-headline', display: 'swap'})

export const metadata: Metadata = {
  title: 'ZICA ZIMA PCMC | Animation & Film Making Institute',
  description: 'Premier Animation, VFX, and Film Making Institute in PCMC. Backed by Zee Learn.',
  keywords: [
    'anime characters', 'vfx full form', 'vfx', 'anime character names', 'animation courses',
    '3d animation', 'Animation institute in PCMC', '3D animation institute in Chinchwad',
    'Graphic design courses in Chinchwad', 'VFX courses in Chinchwad', '2D animation classes in Chinchwad',
    'Film making course in PCMC', 'UI UX design course in Chinchwad', 'graphic design',
    'graphics and design', 'graphic design graphic design', 'design graphic design',
    'design in graphic design', 'graphics in design', 'graphic design graphic',
    'design of graphics', '3d in animation', 'animation 3d animation',
    'graphic designer graphic designer', '3d and animation', 'graphic design programs',
    'graphic artist programs', 'graphic design courses', 'graphic design class',
    'graphic and design course', 'class graphic design', 'motion graphics',
    'and motion graphics', 'graphic design what', 'graphic designer does what',
    'creative designing', 'job in animation', 'graphic designing near me',
    'ZICA Pune', 'ZIMA Pune', 'ZICA Pimpri Chinchwad', 'animation institute Pune', 
    'VFX institute Pune', 'film making courses', 'cinematography courses', 'game design courses', 
    '3D animation training', 'Maya training', 'Houdini courses', 'Unreal Engine training', 
    'authorized Unreal Engine center', '100% placement assistance', 'interior design courses', 
    'fashion design courses', 'sound engineering courses', 'film editing courses', 'acting courses', 
    'MKCL certified', 'Zee Learn', 'Medhavi Skills University', 'Skill India', 'animation career', 
    'VFX jobs', 'game designer jobs', 'animation course fees Pune', 'best animation institute Maharashtra', 
    'digital arts PCMC', 'character animation', 'rigging courses', 'compositing training', 
    'visual storytelling', 'concept art', 'storyboarding', 'CGI courses', 'animation rendering', 
    'professional animation training', 'animation course admission 2026', 'career counseling animation', 
    'VFX career India', 'film making career', 'visual effects training', 'animation portfolio development', 
    'demo reel creation', 'game art design', 'PCDP 3D animation', 'PDP courses', 'diploma animation', 
    'animation certification', 'pre-production courses', 'post-production training', 'motion capture', 
    'virtual production'
  ],
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
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
      className={cn("antialiased scroll-smooth", inter.variable, plusJakarta.variable)}
    >
      <head>
        <GoogleAnalytics />
        <GoogleTagManagerHead />
      </head>
      <body className="md:cursor-none" suppressHydrationWarning>
        <GoogleTagManagerBody />
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  )
}

