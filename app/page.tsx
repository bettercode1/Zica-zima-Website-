import dynamic from 'next/dynamic';
import Navbar from "@/components/portal/Navbar";
import Hero from "@/components/portal/Hero";
import AboutSection from "@/components/portal/AboutSection";
import WhyUs from "@/components/portal/WhyUs";
import Programs from "@/components/portal/Programs";
import CourseShowcase from "@/components/portal/CourseShowcase";
import Testimonials from "@/components/portal/Testimonials";
import Recruiters from "@/components/portal/Recruiters";
import BlogSection from "@/components/portal/BlogSection";
import Footer from "@/components/portal/Footer";

const ContactForm = dynamic(() => import("@/components/portal/ContactForm"), { 
  loading: () => <div className="h-96 animate-pulse bg-slate-100 rounded-3xl" />
});

export default function Page() {
  return (
    <main className="min-h-screen bg-surface-bright selection:bg-primary/20">
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><AboutSection /><WhyUs /></div>
      <div id="courses">
        <Programs />
        <CourseShowcase />
        <Testimonials />
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
