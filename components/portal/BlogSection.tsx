import React from "react";
import Link from "next/link";
import styles from "./BlogSection.module.css";

const BlogCard = ({ title, desc, link, bgImage }: { title: string, desc: string, link: string, bgImage?: string }) => {
  return (
    <div className={styles.card} style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }}>
      <div className={styles.cardContent}>
        <h2 className={`text-2xl font-bold ${styles.cardTitle}`}>{title}</h2>
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
  return (
    <section className="py-20 bg-surface px-4 md:px-8 relative overflow-hidden" id="blog">
      {/* Decorative background elements matching the rest of the portal */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-tertiary-container/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6 tracking-tight">
            Latest from our <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#9d4300] to-[#f1711c]">Blog</span>
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Insights, updates, and stories from the world of animation, VFX, and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 justify-items-center w-full">
          <BlogCard 
            title="The Future of VFX"
            desc="Discover how AI and real-time rendering are shaping the future of visual effects in modern cinema."
            link="#"
            bgImage="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          />
          <BlogCard 
            title="Animation Trends"
            desc="Explore the latest trends in 3D animation and what studios are looking for in new talent."
            link="#"
            bgImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          />
          <BlogCard 
            title="Design Masterclass"
            desc="Learn the core principles of UI/UX design that every aspiring designer needs to know."
            link="#"
            bgImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          />
          <BlogCard 
            title="Careers in UI/UX"
            desc="A deep dive into why UI/UX design is one of the most highly sought-after creative careers today."
            link="#"
            bgImage="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          />
        </div>

        {/* Footer Link */}
        <div className="flex flex-col items-center mt-16">
          <Link 
            href="/blogs"
            className="group flex items-center gap-3 text-slate-900 font-extrabold text-lg transition-colors hover:text-orange-600"
          >
            <span>Explore Blogs</span>
            <div className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center transition-all group-hover:border-orange-600 group-hover:bg-orange-600 group-hover:text-white">
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
