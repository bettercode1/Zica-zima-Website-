import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/portal/Navbar';
import Footer from '@/components/portal/Footer';
import BlogContentRenderer, { BlogMediaImage } from '@/components/portal/BlogContentRenderer';
import { getBlogBySlug, getAllBlogs } from '@/lib/blogs';
import { logger } from '@/lib/logger';
import { notFound } from 'next/navigation';
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const blogs = await getAllBlogs();
    
    if (!blogs || blogs.length === 0) {
      logger.warn("No blogs found. Returning sample path to prevent build failure.");
      return [{ slug: 'notebooklm-digital-marketing-ai' }]; 
    }
    
    return blogs.map((blog) => ({
      slug: blog.slug,
    }));
  } catch (error) {
    logger.error("Error in generateStaticParams for blogs:", error);
    return [{ slug: 'notebooklm-digital-marketing-ai' }];
  }
}

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

  const hasCover = Boolean(blog.coverImage);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero — dark fallback so white title stays readable without cover */}
      <section className="relative flex h-[50vh] min-h-[320px] items-center justify-center overflow-hidden md:h-[60vh]">
        {hasCover ? (
          <BlogMediaImage
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover brightness-50"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900" />
        )}
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mb-6 inline-block rounded-full bg-orange-600 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
            {blog.category}
          </div>
          <h1 className="mx-auto mb-8 max-w-5xl text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl drop-shadow-lg">
            {blog.title}
          </h1>
          <div className="flex items-center justify-center gap-6 font-medium text-white/90">
            {blog.date && (
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-500">calendar_today</span>
                {blog.date}
              </span>
            )}
            {blog.readTime && (
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-500">schedule</span>
                {blog.readTime}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Force dark slate text so system/dark theme doesn't make TipTap HTML white-on-white */}
      <article className="bg-white px-4 py-20 text-slate-800 md:px-8">
        <div className="mx-auto max-w-4xl text-slate-800">
          <BlogContentRenderer sections={blog.sections} />

          <div className="mb-20 mt-20 rounded-3xl bg-orange-600 p-10 text-center text-white shadow-2xl shadow-orange-500/20 md:p-16">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to start your creative career?</h2>
            <p className="mb-10 text-xl text-white/90">
              Join ZICA ZIMA PCMC and learn animation, VFX, and digital design with industry mentors.
            </p>
            <Link 
              href="/"
              className="inline-block rounded-full bg-white px-10 py-4 text-lg font-extrabold text-orange-600 shadow-xl transition-transform hover:scale-105"
            >
              Learn More at ZICA ZIMA PCMC
            </Link>
          </div>

          {blog.faqs && blog.faqs.length > 0 && (
            <section className="mb-20">
              <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {blog.faqs.map((faq, index) => (
                  <div key={index} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                    <h4 className="mb-2 text-lg font-bold">{index + 1}. {faq.question}</h4>
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
