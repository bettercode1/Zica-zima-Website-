import { GlowCard } from "@/components/ui/spotlight-card";

const features = [
  {
    icon: 'school',
    title: 'Industry Curriculum',
    description:
      'Our modules are co-developed with leading studios like Pixar and Double Negative to ensure you learn what the market demands.',
    bg: 'bg-white/40',
  },
  {
    icon: 'work_history',
    title: 'Placement Guidance',
    description:
      'Dedicated career cell with mock interviews, portfolio building workshops, and direct campus recruitment from top MNCs.',
    bg: 'bg-white/40',
  },
  {
    icon: 'psychology',
    title: 'Mentorship',
    description:
      'Learn directly from National Award-winning animators and VFX supervisors through regular masterclasses.',
    bg: 'bg-white/40',
  },
  {
    icon: 'devices',
    title: 'Studio Labs',
    description:
      'Access to professional-grade hardware, including Wacom Cintiqs, VR headsets, and high-end render farms 24/7.',
    bg: 'bg-white/40',
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-8 lg:px-24 bg-surface-container-low/30">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-start">
          {/* Left Sticky Text */}
          <div className="lg:w-1/3 lg:sticky top-32 text-center lg:text-left">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 text-black">
              Designed for the{' '}
              <span className="text-primary">Next Gen</span> of Creators.
            </h2>
            <p className="text-slate-800 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We don't just teach software; we build careers through a
              curriculum that mirrors the fast-paced animation industry.
            </p>
            <div className="space-y-4 inline-block text-left">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="font-bold text-black">Authorized Unreal Engine Training</span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="font-bold text-black">100% Placement Assistance</span>
              </div>
            </div>
          </div>

          {/* Right Feature Cards Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f) => (
              <GlowCard 
                key={f.title} 
                glowColor="orange"
                customSize={true}
                className="w-full h-auto p-0"
              >

                <div className="p-8 space-y-4 h-full relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">
                      {f.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-black">{f.title}</h3>
                  <p className="text-slate-800 leading-relaxed">{f.description}</p>
                </div>

              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

