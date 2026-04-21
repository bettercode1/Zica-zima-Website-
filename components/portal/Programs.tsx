import Image from 'next/image';

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
      className="py-16 md:py-24 bg-inverse-surface text-white rounded-2xl md:rounded-3xl mx-2 sm:mx-4 lg:mx-8 px-4 sm:px-8 lg:px-24"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-headline text-4xl font-extrabold mb-4">
            Unleash Your{' '}
            <span className="text-primary-container">Potential</span>
          </h2>
          <p className="text-slate-400 font-body">
            Specialized degree and certificate programs designed to take you
            from hobbyist to professional artist.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group relative bg-slate-800/50 rounded-xl overflow-hidden transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900/50 flex items-center justify-center">
                <Image
                  src={program.img}
                  alt={program.alt}
                  fill
                  className="object-contain transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 font-headline">{program.title}</h3>
                <p className="text-slate-400 mb-6 font-body">{program.description}</p>
                <a
                  href="#"
                  className="text-primary-container font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  View Module
                  <span className="material-symbols-outlined">trending_flat</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
