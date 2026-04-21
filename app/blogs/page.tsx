'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/portal/Navbar";
import Footer from "@/components/portal/Footer";
import { getBlogsPaginated, BlogData, getTotalBlogsCount } from "@/lib/blogs";
import { motion, AnimatePresence } from "framer-motion";

const BLOG_LIMIT = 15;

const BlogCard = ({ blog, index }: { blog: BlogData, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % BLOG_LIMIT) * 0.1 }}
      className="group bg-slate-900 rounded-[2.5rem] overflow-hidden relative h-[450px] shadow-2xl flex flex-col justify-end"
    >
      <div className="absolute inset-0">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 p-8 md:p-10 space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
            {blog.category}
          </span>
          <span className="text-orange-400 text-xs font-bold uppercase tracking-widest opacity-80">
            {blog.date}
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight group-hover:text-orange-500 transition-colors">
          {blog.title}
        </h2>
        
        <p className="text-slate-300 text-sm md:text-base line-clamp-2 opacity-80 font-medium">
          {blog.meta.description}
        </p>

        <div className="pt-2">
          <Link 
            href={`/blogs/${blog.slug}`} 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-orange-600 hover:border-orange-600 transition-all group/btn"
          >
            Read Article
            <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [lastDoc, setLastDoc] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    async function init() {
      setLoading(true);
      const [data, count] = await Promise.all([
        getBlogsPaginated(BLOG_LIMIT),
        getTotalBlogsCount()
      ]);
      setBlogs(data.blogs);
      setLastDoc(data.lastDoc);
      setTotalCount(count);
      setLoading(false);
    }
    init();
  }, []);

  const loadMore = async () => {
    if (!lastDoc || loadingMore) return;
    setLoadingMore(true);
    const data = await getBlogsPaginated(BLOG_LIMIT, lastDoc);
    setBlogs(prev => [...prev, ...data.blogs]);
    setLastDoc(data.lastDoc);
    setLoadingMore(false);
  };

  const hasMore = blogs.length < totalCount;

  return (
    <main className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* Cinematic Hero */}
      <section className="relative pt-40 pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#f97316_0%,transparent_50%)] opacity-30 blur-3xl scale-150"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,#6366f1_0%,transparent_50%)] opacity-20 blur-3xl scale-150"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block bg-orange-600/20 text-orange-500 text-xs font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6 border border-orange-600/30">
              Insight Hub
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              STAY <span className="text-orange-500">INSPIRED</span><br />
              DIVE DEEPER
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Explore the intersection of AI, creativity, and digital strategy. <br className="hidden md:block" />
              Your source for professional industry expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-4 md:px-8 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-40">
              <div className="w-20 h-20 border-[6px] border-orange-500 border-t-transparent rounded-full animate-spin mb-8 shadow-[0_0_50px_rgba(249,115,22,0.3)]"></div>
              <p className="text-slate-500 font-black uppercase tracking-[0.2em] text-sm">Synchronizing Intelligence...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                <AnimatePresence>
                  {blogs.map((blog, index) => (
                    <BlogCard key={blog.slug} blog={blog} index={index} />
                  ))}
                </AnimatePresence>
              </div>

              {hasMore && (
                <div className="mt-20 flex justify-center">
                  <button
                    onClick={loadMore}
                    disabled={loadingMore}
                    className="group relative bg-slate-900 text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest overflow-hidden transition-all hover:pr-14 disabled:opacity-50"
                  >
                    <span className="relative z-10">
                      {loadingMore ? "Fetching More..." : "Load More Stories"}
                    </span>
                    {!loadingMore && (
                      <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all material-symbols-outlined">
                        expand_more
                      </span>
                    )}
                    <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </div>
              )}

              {blogs.length === 0 && (
                <div className="text-center py-40">
                  <h3 className="text-2xl font-bold text-slate-400">No stories found. Stay tuned!</h3>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

