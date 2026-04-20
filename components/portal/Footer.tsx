import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 w-full rounded-t-[2rem] md:rounded-t-[3rem] mt-16 md:mt-20 font-body text-sm">
      <div className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-12 py-12 md:py-16 gap-10 container mx-auto text-center lg:text-left">
        {/* Brand */}
        <div className="flex flex-col items-center lg:items-start gap-4">
          <div className="flex items-center">
            <img 
              src="/image/ZICA ZIMA PCMC LOGO.png" 
              alt="ZICA ZIMA PCMC Logo" 
              className="h-14 md:h-16 w-auto object-contain brightness-0 invert"
            />
          </div>

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
          © 2024 ZICA ZIMA PCMC Animation Institute.{' '}
          <br className="hidden lg:block" />
          Empowering creators worldwide.
        </div>

      </div>
    </footer>
  );
}
