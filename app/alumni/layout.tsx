import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Legends | ZICA ZIMA PCMC — Bollywood & Industry Achievers',
  description:
    'Meet the star alumni of ZICA ZIMA Pimpri Chinchwad — National Award winners, Bollywood film editors, directors, VFX supervisors, and cinematographers who trained at our institute.',
  openGraph: {
    title: 'The Legends | ZICA ZIMA PCMC',
    description:
      'Our graduates are shaping the Indian film & media industry. Discover their stories.',
    url: 'https://zicazimapcmc.com/alumni',
    siteName: 'ZICA ZIMA PCMC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Legends | ZICA ZIMA PCMC',
    description:
      'Bollywood directors, editors, VFX artists, and more — all alumni of ZICA ZIMA PCMC.',
  },
};

export default function AlumniLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
