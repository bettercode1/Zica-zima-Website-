import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import("@/components/portal/Navbar"), {
  loading: () => <div className="h-16 md:h-24 bg-white/80 animate-pulse" />,
});
const Hero = dynamic(() => import("@/components/portal/Hero"));
const Footer = dynamic(() => import("@/components/portal/Footer"));

const IndustryPerspective = dynamic(() => import("@/components/portal/IndustryPerspective"));
const WhyUs = dynamic(() => import("@/components/portal/WhyUs"));
const Programs = dynamic(() => import("@/components/portal/Programs"));
const CourseShowcase = dynamic(() => import("@/components/portal/CourseShowcase"));
const Testimonials = dynamic(() => import("@/components/portal/Testimonials"));
const StarAlumni = dynamic(() => import("@/components/portal/StarAlumni"));
const Recruiters = dynamic(() => import("@/components/portal/Recruiters"));
const BlogSection = dynamic(() => import("@/components/portal/BlogSection"));
const NewLocationSection = dynamic(() => import("@/components/portal/NewLocationSection"));

const ContactForm = dynamic(() => import("@/components/portal/ContactForm"), { 
  loading: () => <div className="h-96 animate-pulse bg-slate-100 rounded-3xl" />
});

export default function Page() {
  return (
    <main className="min-h-screen bg-surface-bright selection:bg-primary/20">
      <Navbar />
      <div id="home"><Hero /></div>
      <NewLocationSection />
      <div id="about"><IndustryPerspective /><WhyUs /></div>
      <div id="courses">
        <Programs />
        <CourseShowcase />
        <Testimonials />
        <StarAlumni />
        <Recruiters />
      </div>
      <BlogSection />
      <div id="admissions"><ContactForm /></div>
      <Footer />

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
        <button
          className="kinetic-gradient w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform active:scale-95"
          title="Chat with us"
        >
          <span
            className="material-symbols-outlined text-2xl md:text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            chat_bubble
          </span>
        </button>
      </div>
    </main>
  );
}
