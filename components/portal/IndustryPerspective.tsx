'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Data ─────────────────────────────────────────────────────────────── */

const VIDEOS = [
  {
    id: 'QxqOujfViYw',
    title: 'Animation Industry Insights',
    label: 'Industry Talk',
    embedUrl: 'https://www.youtube.com/embed/QxqOujfViYw?autoplay=1&rel=0',
    thumb: 'https://img.youtube.com/vi/QxqOujfViYw/hqdefault.jpg',
  },
  {
    id: 'rNvbGSSr1r0',
    title: 'Creative Industry Short',
    label: 'Quick Byte',
    embedUrl: 'https://www.youtube.com/embed/rNvbGSSr1r0?autoplay=1&rel=0',
    thumb: 'https://img.youtube.com/vi/rNvbGSSr1r0/hqdefault.jpg',
  },
  {
    id: 'Jm-phb5RDbs',
    title: 'Media Arts Perspective',
    label: 'Quick Byte',
    embedUrl: 'https://www.youtube.com/embed/Jm-phb5RDbs?autoplay=1&rel=0',
    thumb: 'https://img.youtube.com/vi/Jm-phb5RDbs/hqdefault.jpg',
  },
  {
    id: '1CiLhYt39VQ',
    title: 'Future of Creative Education',
    label: 'Industry Talk',
    embedUrl: 'https://www.youtube.com/embed/1CiLhYt39VQ?autoplay=1&rel=0',
    thumb: 'https://img.youtube.com/vi/1CiLhYt39VQ/hqdefault.jpg',
  },
];

const IMAGES = [
  {
    src: '/image/Industry Perspective/content creator labs article.jpg',
    alt: 'Content Creator Labs Article',
    caption: 'Content Creator Labs',
  },
  {
    src: '/image/Industry Perspective/creative industries as growth engines.jpg',
    alt: 'Creative Industries as Growth Engines',
    caption: 'Creative Industries as Growth Engines',
  },
  {
    src: '/image/Industry Perspective/finance minister news.jpg',
    alt: 'Finance Minister News',
    caption: 'Finance Minister on Creative Sector',
  },
  {
    src: '/image/Industry Perspective/fm  sitharaman.jpg',
    alt: 'FM Sitharaman',
    caption: 'FM Sitharaman on Media & Arts',
  },
];

/* ─── Play Icon ─────────────────────────────────────────────────────────── */
function PlayIcon() {
  return (
    <div className="ip-play-icon">
      <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

/* ─── Video Modal ───────────────────────────────────────────────────────── */
function VideoModal({ video, onClose }: { video: typeof VIDEOS[0]; onClose: () => void }) {
  return (
    <motion.div
      className="ip-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="ip-popup"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close row */}
        <div className="ip-popup-header">
          <span className="ip-popup-label">{video.label}</span>
          <button className="ip-close-btn" onClick={onClose} aria-label="Close">
            ✕ Close
          </button>
        </div>

        {/* Video */}
        <div className="ip-video-embed">
          <iframe
            src={video.embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Caption */}
        <p className="ip-popup-caption">{video.title}</p>
      </motion.div>
    </motion.div>
  );
}

/* ─── Image Modal ───────────────────────────────────────────────────────── */
function ImageModal({ image, onClose }: { image: typeof IMAGES[0]; onClose: () => void }) {
  return (
    <motion.div
      className="ip-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="ip-popup ip-popup-img"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close row */}
        <div className="ip-popup-header">
          <span className="ip-popup-label">Press & Media</span>
          <button className="ip-close-btn" onClick={onClose} aria-label="Close">
            ✕ Close
          </button>
        </div>

        {/* Image */}
        <div className="ip-image-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            sizes="80vw"
          />
        </div>

        {/* Caption */}
        <p className="ip-popup-caption">{image.caption}</p>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Component ────────────────────────────────────────────────────── */
export default function IndustryPerspective() {
  const [activeVideo, setActiveVideo] = useState<typeof VIDEOS[0] | null>(null);
  const [activeImage, setActiveImage] = useState<typeof IMAGES[0] | null>(null);

  return (
    <section className="ip-section">
      {/* ── Section Header ── */}
      <div className="ip-header">
        <span className="ip-eyebrow">Industry Perspective</span>
        <h2 className="ip-title">
          Insights from the <span className="ip-accent">Creative World</span>
        </h2>
        <p className="ip-subtitle">
          Watch industry leaders share their thoughts on animation, media arts, and the future of creative education.
        </p>
      </div>

      {/* ── Videos Grid ── */}
      <div className="ip-sub-header">
        <span className="ip-sub-label">
          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
            <path d="M8 5v14l11-7z" />
          </svg>
          Featured Videos
        </span>
      </div>

      <div className="ip-grid">
        {VIDEOS.map((video) => (
          <motion.div
            key={video.id}
            className="ip-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => setActiveVideo(video)}
          >
            <div className="ip-card-thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={video.thumb} alt={video.title} className="ip-thumb-img" />
              <div className="ip-thumb-overlay">
                <PlayIcon />
              </div>
            </div>
            <div className="ip-card-body">
              <span className="ip-card-label">{video.label}</span>
              <p className="ip-card-title">{video.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Press & Media Images ── */}
      <div className="ip-sub-header" style={{ marginTop: '3rem' }}>
        <span className="ip-sub-label">
          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
          Press &amp; Media
        </span>
      </div>

      <div className="ip-grid">
        {IMAGES.map((image) => (
          <motion.div
            key={image.src}
            className="ip-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => setActiveImage(image)}
          >
            <div className="ip-card-thumb">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="ip-thumb-img object-cover"
                sizes="(max-width:768px) 100vw, 25vw"
              />
              <div className="ip-img-expand-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="22" height="22">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            </div>
            <div className="ip-card-body">
              <span className="ip-card-label">Press</span>
              <p className="ip-card-title">{image.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Modals ── */}
      <AnimatePresence>
        {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
        {activeImage && <ImageModal image={activeImage} onClose={() => setActiveImage(null)} />}
      </AnimatePresence>

      {/* ── Scoped Styles ── */}
      <style jsx>{`
        /* ── Section ── */
        .ip-section {
          padding: 5rem 1rem 5rem;
          background: #fff;
          position: relative;
        }
        @media (min-width: 640px)  { .ip-section { padding: 5rem 2rem; } }
        @media (min-width: 1024px) { .ip-section { padding: 5rem 6rem; } }

        /* ── Header ── */
        .ip-header { text-align: center; margin-bottom: 3rem; }
        .ip-eyebrow {
          display: inline-block;
          color: #ea580c;
          font-size: 0.7rem;
          font-weight: 900;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }
        .ip-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.15;
          margin: 0 0 1rem;
        }
        .ip-accent { color: #f97316; }
        .ip-subtitle {
          font-size: 1rem;
          color: #64748b;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ── Sub-label ── */
        .ip-sub-header { margin-bottom: 1.25rem; }
        .ip-sub-label {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #64748b;
          border-left: 3px solid #f97316;
          padding-left: 0.75rem;
        }

        /* ── Grid ── */
        .ip-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .ip-grid { grid-template-columns: repeat(4, 1fr); }
        }

        /* ── Card ── */
        .ip-card {
          border-radius: 14px;
          overflow: hidden;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          cursor: pointer;
          transition: box-shadow 0.22s ease, transform 0.22s ease;
        }
        .ip-card:hover {
          box-shadow: 0 8px 32px rgba(15,23,42,0.10);
          transform: translateY(-3px);
        }

        /* ── Card Body ── */
        .ip-card-body {
          padding: 1.25rem 1rem;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .ip-card-label {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #ea580c;
          display: block;
        }
        .ip-card-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          line-height: 1.4;
        }

        /* ── Thumbnail ── */
        .ip-card-thumb {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          overflow: hidden;
          background: #1e293b;
        }
        .ip-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }
        .ip-card:hover .ip-thumb-img { transform: scale(1.04); }
        .ip-thumb-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.28);
        }
        .ip-play-icon {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: rgba(249,115,22,0.92);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 2px 16px rgba(249,115,22,0.4);
          padding-left: 4px;
        }
        .ip-img-expand-icon {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(0,0,0,0.22);
          opacity: 0; transition: opacity 0.2s;
        }
        .ip-card:hover .ip-img-expand-icon { opacity: 1; }

        /* ── Overlay ── */
        :global(.ip-overlay) {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        /* Popup box */
        :global(.ip-popup) {
          position: relative;
          left: 0; top: 0;          /* centered by flexbox, not manual % */
          width: 62%;
          max-width: 860px;
          min-width: 300px;

          background-color: #ffffff;
          border: 2px solid #f97316;
          border-radius: 1em;
          box-shadow: -2px 5px 18px rgba(249, 115, 22, 0.45);

          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;

          color: #011627;
          overflow: hidden;
        }
        :global(.ip-popup-img) {
          width: 70%;
          max-width: 900px;
        }
        @media (max-width: 768px) {
          :global(.ip-popup), :global(.ip-popup-img) { width: 95%; }
        }

        /* Header row inside popup */
        :global(.ip-popup-header) {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem 0.75rem 1.25rem;
          border-bottom: 1px solid #fed7aa;
          background: #fff7ed;
        }
        :global(.ip-popup-label) {
          font-size: 0.65rem;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #f97316;
        }

        /* Close button — text style like the reference */
        :global(.ip-close-btn) {
          background: none;
          border: 1.5px solid #f97316;
          border-radius: 6px;
          color: #f97316;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.3rem 0.75rem;
          cursor: pointer;
          letter-spacing: 0.05em;
          transition: background 0.15s, color 0.15s;
        }
        :global(.ip-close-btn:hover) {
          background: #f97316;
          color: #fff;
        }

        /* Video embed */
        :global(.ip-video-embed) {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
        }
        :global(.ip-video-embed iframe) {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          border: none;
        }

        /* Enlarged image */
        :global(.ip-image-full) {
          position: relative;
          width: 100%;
          height: 65vh;
          max-height: 620px;
          background: #f1f5f9;
        }

        /* Caption at bottom */
        :global(.ip-popup-caption) {
          width: 100%;
          padding: 0.8rem 1.25rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #475569;
          text-align: center;
          margin: 0;
          border-top: 1px solid #e2e8f0;
        }
      `}</style>
    </section>
  );
}
