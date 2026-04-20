import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-900 w-full rounded-t-[2rem] md:rounded-t-[3rem] mt-16 md:mt-20 font-body text-sm">
      <div className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-12 py-12 md:py-16 gap-10 container mx-auto text-center lg:text-left">
        {/* Brand */}
        <div className="flex flex-col items-center lg:items-start gap-6">
          <Link href="/" className="block relative h-16 w-48 md:h-20 md:w-56">
            <Image 
              src="/image/ZICA ZIMA PCMC LOGO.png" 
              alt="ZICA ZIMA PCMC Logo" 
              fill
              className="object-contain"
            />
          </Link>

          <p className="text-slate-400 max-w-xs font-body">
            Defying static boundaries through world-class animation and design
            education.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 font-body">
          {['Privacy Policy', 'Terms of Service', 'Alumni', 'Careers', 'Contact'].map(
            (link) => (
              <Link
                key={link}
                href="#"
                className="text-slate-400 hover:text-orange-400 transition-all opacity-80 hover:opacity-100"
              >
                {link}
              </Link>
            )
          )}
        </div>

        {/* Copyright */}
        <div className="text-slate-400 font-medium text-center lg:text-right font-body">
          © 2026 ZICA ZIMA PCMC Animation Institute.{' '}
          <br className="hidden lg:block" />
          Empowering creators worldwide.
        </div>

      </div>
    </footer>
  );
}
