'use client';

import dynamic from 'next/dynamic';
import Navbar from "@/components/portal/Navbar";
import Hero from "@/components/portal/Hero";
import AboutSection from "@/components/portal/AboutSection";
import WhyUs from "@/components/portal/WhyUs";

const Programs = dynamic(() => import("@/components/portal/Programs"), { ssr: false });
const CourseShowcase = dynamic(() => import("@/components/portal/CourseShowcase"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/portal/Testimonials"), { ssr: false });
const Recruiters = dynamic(() => import("@/components/portal/Recruiters"), { ssr: false });
const ContactForm = dynamic(() => import("@/components/portal/ContactForm"), { ssr: false });
const Footer = dynamic(() => import("@/components/portal/Footer"), { ssr: false });
const BlogSection = dynamic(() => import("@/components/portal/BlogSection"), { ssr: false });

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
