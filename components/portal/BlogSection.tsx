'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./BlogSection.module.css";
import { getAllBlogs, BlogData } from "@/lib/blogs";

const BlogCard = ({ title, desc, link, bgImage, date }: { title: string, desc: string, link: string, bgImage?: string, date?: string }) => {
  return (
    <div className={`${styles.card} group bg-slate-900 p-px`}>
      <div className="absolute inset-px overflow-hidden rounded-[0.9rem]">
        {bgImage && (
          <img 
            src={bgImage} 
            alt={title} 
            className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
          />
        )}
      </div>
      <div className={`${styles.cardContent} relative z-10`}>
        <h2 className={`text-xl md:text-2xl font-bold ${styles.cardTitle}`}>{title}</h2>
        {date && (
          <p className={`${styles.cardBody} text-orange-400 text-xs font-bold uppercase tracking-widest opacity-80`}>
            {date}
          </p>
        )}
        <p className={styles.cardBody}>
          {desc}
        </p>
        <Link href={link} className={styles.button}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default function BlogSection() {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      const data = await getAllBlogs();
      setBlogs(data);
      setLoading(false);
    }
    fetchBlogs();
  }, []);

  return (
    <section className="py-20 bg-surface relative overflow-hidden" id="blogs">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-tertiary-container/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="w-full px-2 md:px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6 tracking-tight">
            Latest from our <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#9d4300] to-[#f1711c]">Blog</span>
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Insights, updates, and stories from the world of animation, VFX, and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 justify-items-center w-full min-h-[400px]">
          {loading ? (
            <div className="col-span-full flex flex-col items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Loading Insights...</p>
            </div>
          ) : blogs.length > 0 ? (
            blogs.map((blog) => (
              <BlogCard 
                key={blog.slug}
                title={blog.title}
                desc={blog.meta.description.slice(0, 100) + "..."}
                link={`/blogs/${blog.slug}`}
                bgImage={blog.coverImage}
                date={blog.date}
              />
            ))
          ) : (
            <p className="col-span-full text-slate-500">No blogs found.</p>
          )}

          {/* Hardcoded placeholders for design consistency if only one blog exists */}
          {!loading && blogs.length === 1 && (
            <>
              <BlogCard 
                title="Animation Trends"
                desc="Explore the latest trends in 3D animation and what studios are looking for in new talent."
                link="#"
                bgImage="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
              />
              <BlogCard 
                title="Design Masterclass"
                desc="Learn the core principles of UI/UX design that every aspiring designer needs to know."
                link="#"
                bgImage="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=800&q=80"
              />
              <BlogCard 
                title="Careers in UI/UX"
                desc="A deep dive into why UI/UX design is one of the most highly sought-after creative careers today."
                link="#"
                bgImage="https://images.unsplash.com/photo-1541462608141-ad1557d44c02?auto=format&fit=crop&w=800&q=80"
              />
            </>
          )}
        </div>

        {/* Footer Link */}
        <div className="flex flex-col items-center mt-16">
          <Link 
            href="/blogs"
            className="group flex items-center gap-3 text-slate-900 font-extrabold text-lg transition-colors hover:text-orange-600"
          >
            <span>Explore our Latest Blog</span>
            <div className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center transition-all group-hover:border-orange-600 group-hover:bg-orange-600 group-hover:text-white">
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
