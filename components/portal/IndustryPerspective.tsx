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
          <span className="ip-sub-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
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
            role="button"
            tabIndex={0}
            aria-label={`Play video: ${video.title}`}
          >
            <div className="ip-card-thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={video.thumb} alt={video.title} className="ip-thumb-img" />
              <div className="ip-thumb-gradient" aria-hidden="true" />
              <div className="ip-thumb-overlay">
                <PlayIcon />
              </div>
            </div>
            <div className="ip-card-body">
              <span className="ip-card-label">{video.label}</span>
              <p className="ip-card-title">{video.title}</p>
              <span className="ip-card-cta" aria-hidden="true">
                Watch now
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Press & Media Images ── */}
      <div className="ip-sub-header" style={{ marginTop: '3rem' }}>
        <span className="ip-sub-label">
          <span className="ip-sub-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
            </svg>
          </span>
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
            role="button"
            tabIndex={0}
            aria-label={`View article: ${image.caption}`}
          >
            <div className="ip-card-thumb ip-card-thumb-press">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="ip-thumb-img object-cover"
                sizes="(max-width:768px) 100vw, 25vw"
              />
              <div className="ip-thumb-gradient" aria-hidden="true" />
              <span className="ip-img-expand-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </span>
            </div>
            <div className="ip-card-body">
              <span className="ip-card-label">Press</span>
              <p className="ip-card-title">{image.caption}</p>
              <span className="ip-card-cta" aria-hidden="true">
                Read article
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
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
          font-size: clamp(1.6rem, 5vw, 2.8rem);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.15;
          margin: 0 0 1rem;
          letter-spacing: -0.02em;
        }
        .ip-accent { color: #f97316; }
        .ip-subtitle {
          font-size: clamp(0.85rem, 2.5vw, 1.1rem);
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
          font-weight: 500;
        }

        /* ── Sub-label ── */
        .ip-sub-header { margin-bottom: 1.5rem; }
        .ip-sub-label {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #0f172a;
          background: linear-gradient(135deg, rgba(249,115,22,0.10) 0%, rgba(249,115,22,0.02) 100%);
          border: 1px solid rgba(249,115,22,0.22);
          border-radius: 999px;
          padding: 0.4rem 0.9rem 0.4rem 0.45rem;
        }
        .ip-sub-icon {
          width: 24px; height: 24px;
          border-radius: 999px;
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(249,115,22,0.35);
          flex-shrink: 0;
        }

        /* ── Grid ── */
        .ip-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .ip-grid { grid-template-columns: repeat(4, 1fr); gap: 1.75rem; }
        }

        /* ── Card ── */
        .ip-card {
          border-radius: 22px;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.85);
          cursor: pointer;
          position: relative;
          box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 4px 12px -2px rgba(15,23,42,0.05);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                      box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                      border-color 0.35s ease;
          outline: none;
        }
        .ip-card:hover,
        .ip-card:focus-visible {
          box-shadow: 0 24px 50px -12px rgba(249,115,22,0.22),
                      0 12px 24px -8px rgba(15,23,42,0.12);
          transform: translateY(-6px);
          border-color: rgba(249,115,22,0.40);
        }
        .ip-card:focus-visible {
          box-shadow: 0 0 0 3px rgba(249,115,22,0.35),
                      0 24px 50px -12px rgba(249,115,22,0.22),
                      0 12px 24px -8px rgba(15,23,42,0.12);
        }

        /* ── Card Body ── */
        .ip-card-body {
          padding: 1rem 1.1rem 1.15rem;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          position: relative;
        }
        .ip-card-label {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.6rem;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c2410c;
          background: linear-gradient(135deg, rgba(249,115,22,0.14) 0%, rgba(249,115,22,0.04) 100%);
          border: 1px solid rgba(249,115,22,0.22);
          padding: 0.3rem 0.6rem;
          border-radius: 999px;
          line-height: 1;
        }
        .ip-card-title {
          font-size: 0.92rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.4;
          letter-spacing: -0.005em;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.25s ease;
        }
        .ip-card:hover .ip-card-title { color: #b45309; }
        .ip-card-cta {
          margin-top: 0.15rem;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #ea580c;
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .ip-card-cta svg {
          transition: transform 0.3s ease;
        }
        .ip-card:hover .ip-card-cta {
          opacity: 1;
          transform: translateX(0);
        }
        .ip-card:hover .ip-card-cta svg {
          transform: translateX(3px);
        }

        /* ── Thumbnail ── */
        .ip-card-thumb {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          overflow: hidden;
          background: #0f172a;
        }
        .ip-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .ip-card:hover .ip-thumb-img { transform: scale(1.07); }
        .ip-thumb-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15,23,42,0) 45%, rgba(15,23,42,0.55) 100%);
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .ip-thumb-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.18);
          transition: background 0.3s ease;
        }
        .ip-card:hover .ip-thumb-overlay { background: rgba(0,0,0,0.28); }
        .ip-play-icon {
          width: 58px; height: 58px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 24px rgba(249,115,22,0.45),
                      inset 0 1px 0 rgba(255,255,255,0.25);
          padding-left: 4px;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                      box-shadow 0.35s ease;
        }
        .ip-card:hover .ip-play-icon {
          transform: scale(1.1);
          box-shadow: 0 12px 32px rgba(249,115,22,0.55),
                      0 0 0 10px rgba(249,115,22,0.14),
                      inset 0 1px 0 rgba(255,255,255,0.3);
        }

        /* ── Press card corner pill ── */
        .ip-card-thumb-press .ip-img-expand-icon {
          position: absolute;
          top: 0.7rem;
          right: 0.7rem;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0f172a;
          opacity: 0;
          transform: translateY(-4px);
          transition: opacity 0.3s ease,
                      transform 0.3s ease,
                      background 0.3s ease,
                      color 0.3s ease;
          box-shadow: 0 6px 16px rgba(15,23,42,0.18);
        }
        .ip-card:hover .ip-card-thumb-press .ip-img-expand-icon {
          opacity: 1;
          transform: translateY(0);
          background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
          color: #ffffff;
        }

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
