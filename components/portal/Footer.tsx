import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 w-full rounded-t-[3rem] mt-20 font-body text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 container mx-auto">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <img 
              src="/image/ZICA ZIMA PCMC LOGO.png" 
              alt="ZICA ZIMA PCMC Logo" 
              className="h-16 w-auto object-contain"
            />

          </div>

          <p className="text-slate-400 max-w-xs font-body">
            Defying static boundaries through world-class animation and design
            education.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 font-body">
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
        <div className="text-white font-medium text-center md:text-right font-body">
          © 2024 ZICA ZIMA PCMC Animation Institute.{' '}
          <br className="hidden md:block" />
          Empowering the next generation of creators.
        </div>

      </div>
    </footer>
  );
}
