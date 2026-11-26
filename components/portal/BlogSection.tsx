import Image from 'next/image';
import Link from 'next/link';
import { unstable_cache } from 'next/cache';
import styles from './BlogSection.module.css';
import { getAllBlogs, type BlogData } from '@/lib/blogs';

const getHomeBlogs = unstable_cache(
  async () => (await getAllBlogs()).slice(0, 4),
  ['home-blogs'],
  { revalidate: 3600 }
);

const BlogCard = ({
  title,
  desc,
  link,
  bgImage,
  date,
}: {
  title: string;
  desc: string;
  link: string;
  bgImage?: string;
  date?: string;
}) => {
  const canOptimize = Boolean(bgImage) && !bgImage?.startsWith('data:');

  return (
    <div className={`${styles.card} group bg-slate-900 p-px`}>
      <div className="absolute inset-px overflow-hidden rounded-[0.9rem] bg-slate-800">
        {canOptimize && bgImage ? (
          <Image
            src={bgImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            quality={60}
            className="object-cover opacity-60"
          />
        ) : null}
      </div>
      <div className={`${styles.cardContent} relative z-10`}>
        <h2 className={`text-xl md:text-2xl font-bold ${styles.cardTitle}`}>{title}</h2>
        {date ? (
          <p className={`${styles.cardBody} text-orange-400 text-xs font-bold uppercase tracking-widest opacity-80`}>
            {date}
          </p>
        ) : null}
        <p className={styles.cardBody}>{desc}</p>
        <Link href={link} className={styles.button}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

function cardDescription(blog: BlogData) {
  const description = blog.meta?.description || blog.title || '';
  return description.slice(0, 100) + (blog.meta?.description ? '...' : '');
}

export default async function BlogSection() {
  const blogs = await getHomeBlogs();

  return (
    <section className="py-20 bg-surface relative overflow-hidden" id="blogs">
      <div className="w-full px-2 md:px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface mb-4 sm:mb-6 tracking-tight leading-tight">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#9d4300] to-[#f1711c]">Backstage</span>
          </h2>
          <p className="text-sm sm:text-lg text-on-surface-variant max-w-2xl mx-auto px-4">
            Insights, updates, and stories from the world of animation, VFX, and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 justify-items-center w-full min-h-[400px]">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              title={blog.title}
              desc={cardDescription(blog)}
              link={`/blogs/${blog.slug}`}
              bgImage={blog.coverImage}
              date={blog.date}
            />
          ))}
        </div>

        <div className="flex flex-col items-center mt-16">
          <Link
            href="/blogs"
            className="group flex items-center gap-3 text-slate-900 font-extrabold text-lg transition-colors hover:text-orange-600"
          >
            <span>Explore Our Backstage</span>
            <div className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center transition-all group-hover:border-orange-600 group-hover:bg-orange-600 group-hover:text-white">
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
