'use client';

import { useState } from 'react';
import Navbar from '@/components/portal/Navbar';
import Footer from '@/components/portal/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const tabs = ['All', 'Student works', 'Events', 'Campus', 'Alumni'] as const;
type Tab = typeof tabs[number];

type GalleryCategory = (typeof tabs)[number];

type GalleryImageItem = {
  id: number;
  type: 'image';
  category: Exclude<GalleryCategory, 'All'>;
  src: string;
  title: string;
};

type GalleryYoutubeItem = {
  id: number;
  type: 'youtube';
  category: Exclude<GalleryCategory, 'All'>;
  youtubeId: string;
  title: string;
};

type GalleryItem = GalleryImageItem | GalleryYoutubeItem;

function getYoutubeEmbedUrl(youtubeId: string) {
  // Muted autoplay is required for most browsers to allow autoplay.
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    playsinline: '1',
    loop: '1',
    playlist: youtubeId,
    rel: '0',
    modestbranding: '1',
  });

  return `https://www.youtube.com/embed/${youtubeId}?${params.toString()}`;
}

// Gallery items (images + one YouTube Short embedded with autoplay).
const galleryItems: GalleryItem[] = [
  // Student Works from public/image/studentwork
  { id: 1, type: 'image', category: 'Student works', src: '/image/studentwork/00.png', title: 'Character Art' },
  { id: 2, type: 'image', category: 'Student works', src: '/image/studentwork/005.jpg', title: '3D Visualization' },
  { id: 3, type: 'image', category: 'Student works', src: '/image/studentwork/011.jpg', title: 'Digital Painting' },
  { id: 4, type: 'image', category: 'Student works', src: '/image/studentwork/02.jpg', title: 'Concept Art' },
  { id: 5, type: 'image', category: 'Student works', src: '/image/studentwork/03.jpg', title: 'VFX Scene' },
  { id: 6, type: 'image', category: 'Student works', src: '/image/studentwork/04.jpg', title: 'Motion Graphics' },
  { id: 7, type: 'image', category: 'Student works', src: '/image/studentwork/1.jpg', title: 'Character Design' },
  { id: 8, type: 'image', category: 'Student works', src: '/image/studentwork/2.jpg', title: 'Environmental Design' },
  { id: 9, type: 'image', category: 'Student works', src: '/image/studentwork/Cafe posterr.jpg', title: 'Advertising Design' },
  { id: 10, type: 'image', category: 'Student works', src: '/image/studentwork/IMG_20241218_095827.jpg', title: 'Sketch Work' },
  { id: 11, type: 'image', category: 'Student works', src: '/image/studentwork/Print advertisment222.jpg', title: 'Commercial Design' },
  { id: 12, type: 'image', category: 'Student works', src: '/image/studentwork/Social Media posts 1-1.jpg', title: 'Social Media Campaign' },
  { id: 13, type: 'image', category: 'Student works', src: '/image/studentwork/Social Media posts 1-4.jpg', title: 'Social Media Strategy' },
  {
    id: 14,
    type: 'image',
    category: 'Student works',
    src: '/image/studentwork/WhatsApp Image 2026-02-11 at 12.49.12 PM (1).jpeg',
    title: 'Photography & Composition',
  },
  { id: 15, type: 'image', category: 'Student works', src: '/image/studentwork/WhatsApp Image 2026-02-11 at 12.53.04 PM.jpeg', title: 'Creative Composition' },
  { id: 16, type: 'image', category: 'Student works', src: '/image/studentwork/final render_scifi.jpg', title: 'Sci-Fi Render' },
  { id: 17, type: 'image', category: 'Student works', src: '/image/studentwork/glasss.png', title: 'Product Visualization' },

  // YouTube Short (embedded autoplay) - placed in Events tab.
  { id: 18, type: 'youtube', category: 'Events', youtubeId: '4wXdYwJY2j8', title: 'Zica Zima PCMC (YouTube Short)' },

  // Other Categories
  { id: 19, type: 'image', category: 'Events', src: '/image/Reel/gallery-events/event-01.jpeg', title: 'Event Photo 1' },
  { id: 20, type: 'image', category: 'Events', src: '/image/Reel/gallery-events/event-02.jpeg', title: 'Event Photo 2' },
  { id: 30, type: 'image', category: 'Events', src: '/image/Reel/gallery-events/event-03.jpeg', title: 'Event Photo 3' },
  { id: 31, type: 'image', category: 'Events', src: '/image/Reel/gallery-events/event-04.jpeg', title: 'Event Photo 4' },
  { id: 32, type: 'image', category: 'Events', src: '/image/Reel/gallery-events/event-05.jpeg', title: 'Event Photo 5' },
  { id: 24, type: 'image', category: 'Events', src: '/image/Reel/gallery-events/event-06.jpeg', title: 'Event Photo 6' },
  { id: 25, type: 'image', category: 'Events', src: '/image/Reel/gallery-events/event-07.jpeg', title: 'Event Photo 7' },
  { id: 26, type: 'image', category: 'Events', src: '/image/Reel/gallery-events/event-08.jpeg', title: 'Event Photo 8' },
  { id: 27, type: 'image', category: 'Events', src: '/image/Reel/gallery-events/event-09.jpeg', title: 'Event Photo 9' },
  { id: 21, type: 'image', category: 'Campus', src: '/image/Reel/student-reel-08.jpg', title: 'Creative Labs' },
  { id: 22, type: 'image', category: 'Campus', src: '/image/Reel/student-reel-10.jpg', title: 'Student Lounge' },
  { id: 23, type: 'image', category: 'Campus', src: '/image/Reel/student-reel-04.jpg', title: 'Recording Studio' },
  { id: 28, type: 'image', category: 'Alumni', src: '/image/Reel/student-reel-09.jpg', title: 'Success Stories' },
  { id: 29, type: 'image', category: 'Alumni', src: '/image/Reel/student-reel-02.jpg', title: 'Alumni Meetup' },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<Tab>('All');
  
  const filteredItems = galleryItems.filter((item) => activeTab === 'All' || item.category === activeTab);

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* Edgy Cinematic Header */}
      <section className="pt-40 pb-24 bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#ea580c_0%,transparent_50%)] opacity-30 blur-[80px] scale-150"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,#4f46e5_0%,transparent_50%)] opacity-20 blur-[80px] scale-150"></div>
          
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('/image/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block bg-orange-600/20 text-orange-500 text-xs font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6 border border-orange-600/30">
              The Drop
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">GALLERY</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Explore the creative journeys, backstage moments, and vibrant campus life of our amazing students and alumni.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Gallery Section */}
      <section className="py-24 px-4 sm:px-8 max-w-[1400px] mx-auto">
        
        {/* Dynamic Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16 relative z-20">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 ${
                activeTab === tab ? 'text-white shadow-2xl shadow-orange-600/40' : 'text-slate-500 hover:text-slate-900 bg-white shadow-sm border border-slate-200 hover:border-orange-300 hover:shadow-md'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabIndicatorGallery"
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>

        {/* Animated Standard Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: (index % 10) * 0.05 }}
                className="group relative rounded-[2rem] overflow-hidden shadow-xl bg-slate-200 cursor-pointer aspect-square"
              >
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    quality={70}
                  />
                ) : (
                  <div className="absolute inset-0">
                    <iframe
                      src={getYoutubeEmbedUrl(item.youtubeId)}
                      title={item.title}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                )}
                
                {/* Gen-Z Edgy Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 md:p-8 backdrop-blur-[2px]">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-75"
                  >
                    <span className="inline-block bg-white/20 backdrop-blur-md text-white border border-white/30 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full w-fit mb-3 shadow-lg">
                      {item.category}
                    </span>
                    <h3 className="text-white font-black text-2xl leading-tight mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-orange-400 text-sm font-bold uppercase tracking-wider group/link">
                      View full
                      <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-4xl text-slate-400">imagesmode</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-2 tracking-tight">Nothing here yet!</h3>
            <p className="text-slate-500 font-medium text-lg">Check back later for new drops in this category.</p>
          </motion.div>
        )}
      </section>

      {/* Call to action */}
      <section className="pb-24 px-4 text-center">
        <Link 
          href="/#admissions"
          className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-colors shadow-2xl hover:shadow-orange-600/30 hover:-translate-y-1 transform duration-300"
        >
          Want to be featured?
          <span className="material-symbols-outlined">rocket_launch</span>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
