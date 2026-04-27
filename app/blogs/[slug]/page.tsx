import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/portal/Navbar';
import Footer from '@/components/portal/Footer';
import BlogContentRenderer from '@/components/portal/BlogContentRenderer';
import { getBlogBySlug, getAllBlogs } from '@/lib/blogs';
import { notFound } from 'next/navigation';
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

// Required for static export
export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const blogs = await getAllBlogs();
    if (!blogs || blogs.length === 0) {
      console.warn("No blogs found during generateStaticParams. Build might be empty.");
      return [];
    }
    return blogs.map((blog) => ({
      slug: blog.slug,
    }));
  } catch (error) {
    console.error("Error in generateStaticParams for blogs:", error);
    return [];
  }
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return {};

  return {
    title: blog.meta.title,
    description: blog.meta.description,
    keywords: blog.meta.keywords,
  };
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 bg-orange-600 text-white text-xs font-bold uppercase tracking-widest rounded-full">
            {blog.category}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-5xl mx-auto leading-tight mb-8">
            {blog.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/80 font-medium">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-orange-500">calendar_today</span>
              {blog.date}
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-orange-500">schedule</span>
              {blog.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main content sections rendered dynamically */}
          <BlogContentRenderer sections={blog.sections} />

          {/* Call to Action */}
          <div className="mt-20 bg-orange-600 rounded-3xl p-10 md:p-16 text-center text-white mb-20 shadow-2xl shadow-orange-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to lead the AI Revolution?</h2>
            <p className="text-xl mb-10 text-white/90">Join our masterclass and master the tools shaping the future of design and marketing.</p>
            <Link 
              href="/"
              className="inline-block bg-white text-orange-600 px-10 py-4 rounded-full font-extrabold text-lg hover:scale-105 transition-transform shadow-xl"
            >
              Learn More at ZICA ZIMA PCMC
            </Link>
          </div>

          {/* FAQs */}
          {blog.faqs && blog.faqs.length > 0 && (
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {blog.faqs.map((faq, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="font-bold text-lg mb-2">{index + 1}. {faq.question}</h4>
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}
