import Image from 'next/image';
import Link from 'next/link';
import LazyImage from '@/components/ui/LazyImage';

const programs = [
  {
    title: '3D Animation',
    description:
      'Character modeling, rigging, and cinematic storytelling using Maya and Houdini.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7i47LVUJHUsKk-uW-Z07k-UKH6fXBXwtmR512AE9VX2nBKxwigTYGNFSsaQxitlY3kjs8758CEFooGOIE4Sw4Id8i_N78ZoqmmBIN6nVcWN8ha0qOMUzIImst9eCp1py8ZZymEs-i8LAnqHweCkRZC_eavv4ZIsdbgbrpocK8yq0SS7JjWfDxPCs6Q5ekGal-6jvqRfetv9ZSXp15mlOITTWutFHz2r7ZPaBZh8CH05acGA91MNMw0RsHGEwFTQBzZnPrSQWAvwns',
    alt: '3D character sculpt in professional digital software',
  },
  {
    title: 'VFX Master',
    description:
      'Advanced compositing, rotoscoping, and matchmoving for film and television industries.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR6QLYd8WBibNYPbojwMeyB5v3Knom5sQnC2nCBG8O6NnI4kfFHQNmoXJ0XZqrrVXBMrEMlyAZQhXMDpEG9mrg3IcqzB7s9252sjNIQnYX3doDlnaDWSaRCb8jy2r7NBV3EBLf5l8c4NTr03b44vpSid88uUMQ4gaYQXfN-bKFIC1djPtJmf8p_Xou8nic5aLCoWvqSfZ1-RGuDS6CX5XvBrrJ84kCTmUcjDrn4DkkEb86AyXqwuVB9iEmjHOFjv8_V-5760Vp-kZk',
    alt: 'VFX studio with blue screen compositing',
  },
  {
    title: 'Graphic Design',
    description:
      'Master typography, branding, and UI/UX design with a focus on modern aesthetic principles.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU-JqeX4XEfJzi9UQhbHv8hms8qXTPXwcuYkVFo2WfBvsZ8_2tjb0h7BYZLdLFOu1PHiIMF2RcubNyn4XqgBCf8ei51uP0l1wnVQNkmVcSdgmWcZKNowYJ9bV5PnNc0Uu1td4iFV8wIppz9rajzRzVnsL_vzg5sN5d8JRlv-La20HdCc9H2IGMEWFHrIj3rrhxwArxWe3_LQhUtLNO7cK2bICJSb-Acfq7S-sMNjlwjBK2gBeaLr_H7WGwlFqtsjgGy_csPmd-pxPs',
    alt: 'Modern graphic design workspace with neon branding',
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-12 md:py-24 bg-slate-950 text-white rounded-[2rem] md:rounded-[3rem] mx-2 sm:mx-4 lg:mx-8 px-4 sm:px-6 lg:px-24"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.3em] block mb-2">Our Programs</span>
          <h2 className="font-headline text-2xl sm:text-4xl font-black mb-4 leading-tight">
            Unleash Your{' '}
            <span className="text-orange-500">Potential</span>
          </h2>
          <p className="text-slate-400 font-bold text-sm sm:text-base px-4">
            Specialized degree and certificate programs designed to take you
            from hobbyist to professional artist.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group relative bg-slate-900/40 border border-slate-800/50 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-slate-900/60 hover:border-orange-500/20"
            >
              <div className="relative aspect-[16/10] sm:aspect-[4/3] p-3">
                <div className="relative w-full h-full overflow-hidden rounded-2xl bg-slate-800/50 flex items-center justify-center">
                  <LazyImage
                    src={program.img}
                    alt={program.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-black mb-2 font-headline tracking-tight">{program.title}</h3>
                <p className="text-slate-400 mb-6 font-bold text-xs sm:text-sm leading-relaxed">{program.description}</p>
                <Link
                  href="/courses"
                  className="text-orange-500 font-black text-[11px] uppercase tracking-widest flex items-center gap-2 group/btn transition-all"
                >
                  View Module
                  <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">trending_flat</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
