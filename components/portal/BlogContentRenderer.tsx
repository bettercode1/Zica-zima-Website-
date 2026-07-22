import React from 'react';
import Image from 'next/image';
import { BlogSection } from '@/lib/blogs';

interface Props {
  sections: BlogSection[];
}

function isRemoteHttp(src: string) {
  return src.startsWith('http://') || src.startsWith('https://');
}

function isLocalPath(src: string) {
  return src.startsWith('/');
}

/** Renders blog images: Next Image for http/local, plain img for data URLs. */
export function BlogMediaImage({
  src,
  alt,
  fill,
  className,
  priority,
}: {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}) {
  if (!src) return null;

  if (src.startsWith('data:')) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={fill ? `absolute inset-0 h-full w-full object-cover ${className || ''}` : className}
      />
    );
  }

  if (isRemoteHttp(src) || isLocalPath(src)) {
    return (
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={fill ? undefined : 1200}
        height={fill ? undefined : 675}
        className={className}
        priority={priority}
        unoptimized={
          isRemoteHttp(src) &&
          (src.includes('firebasestorage') || (!src.includes('unsplash') && !src.includes('googleusercontent')))
        }
      />
    );
  }

  return null;
}

/** Parse markdown heading — check ### before ## before # so hashes are not left in the title. */
function parseMarkdownHeading(line: string): { level: 1 | 2 | 3; label: string } | null {
  const clean = (raw: string) => raw.replace(/\s*#+\s*$/g, '').trim();
  const h3 = line.match(/^###\s+(.+)$/);
  if (h3) return { level: 3, label: clean(h3[1]) };
  const h2 = line.match(/^##\s+(.+)$/);
  if (h2) return { level: 2, label: clean(h2[1]) };
  const h1 = line.match(/^#\s+(.+)$/);
  if (h1) return { level: 1, label: clean(h1[1]) };
  return null;
}

function looksLikeHtml(text: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test((text || '').trim());
}

/** Strip scripts, unsafe handlers, light text colors, and light text utility classes. */
function sanitizeBlogHtml(html: string): string {
  let out = html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi, '')
    .replace(/\son\w+\s*=\s*(['"]).*?\1/gi, '')
    .replace(/\son\w+\s*=\s*[^\s>]+/gi, '')
    .replace(/javascript:/gi, '');

  // Remove inline color / background that make text invisible on white pages
  out = out.replace(/\sstyle=(['"])([\s\S]*?)\1/gi, (_match, _quote, styles: string) => {
    const cleaned = styles
      .replace(/(?:^|;)\s*color\s*:[^;]*/gi, '')
      .replace(/(?:^|;)\s*background(?:-color)?\s*:[^;]*/gi, '')
      .replace(/(?:^|;)\s*background\s*:[^;]*/gi, '')
      .replace(/(?:^|;)\s*-webkit-text-fill-color\s*:[^;]*/gi, '')
      .replace(/(?:^|;)\s*opacity\s*:[^;]*/gi, '')
      .trim()
      .replace(/^;+|;+$/g, '');
    return cleaned ? ` style="${cleaned}"` : '';
  });

  out = out.replace(/\scolor=(['"])[^'"]*\1/gi, '');

  // Strip light Tailwind text utilities TipTap/HTML might carry
  out = out.replace(
    /\sclass=(['"])([^'"]*)\1/gi,
    (_m, q, cls: string) => {
      const next = cls
        .split(/\s+/)
        .filter(
          (c) =>
            c &&
            !/^(text-white|text-gray-1|text-slate-1|text-zinc-1|text-neutral-1|text-stone-1|opacity-0|opacity-5|opacity-10|opacity-20)/.test(
              c
            )
        )
        .join(' ');
      return next ? ` class=${q}${next}${q}` : '';
    }
  );

  return out;
}

/** Body renderer: HTML from CRM Panel editor, or legacy markdown-ish text. */
function FormattedBody({ text, className }: { text: string; className?: string }) {
  if (!text) return null;

  if (looksLikeHtml(text)) {
    return (
      <div
        className={`blog-html-body ${className || ''}`}
        dangerouslySetInnerHTML={{ __html: sanitizeBlogHtml(text) }}
      />
    );
  }

  const lines = text.replace(/\r\n/g, '\n').split('\n');
  const blocks: React.ReactNode[] = [];
  let listItems: string[] = [];
  let listType: 'ul' | 'ol' | null = null;
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    const joined = paragraph.join(' ').trim();
    if (joined) {
      blocks.push(
        <p key={`p-${blocks.length}`} className="mb-4 leading-relaxed text-slate-700">
          {formatInline(joined)}
        </p>
      );
    }
    paragraph = [];
  };

  const flushList = () => {
    if (!listType || listItems.length === 0) return;
    const Tag = listType;
    blocks.push(
      <Tag
        key={`list-${blocks.length}`}
        className={`${listType === 'ul' ? 'list-disc' : 'list-decimal'} mb-6 ml-6 space-y-2 text-slate-700`}
      >
        {listItems.map((item, i) => (
          <li key={i}>{formatInline(item)}</li>
        ))}
      </Tag>
    );
    listItems = [];
    listType = null;
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    const heading = parseMarkdownHeading(trimmed);
    const ul = trimmed.match(/^[-*]\s+(.+)$/);
    const ol = trimmed.match(/^\d+[.)]\s+(.+)$/);

    if (heading) {
      flushParagraph();
      flushList();
      if (heading.level === 1) {
        blocks.push(
          <h2 key={`h-${blocks.length}`} className="mb-4 mt-10 text-3xl font-bold text-slate-900">
            {formatInline(heading.label)}
          </h2>
        );
      } else if (heading.level === 2) {
        blocks.push(
          <h2 key={`h-${blocks.length}`} className="mb-4 mt-8 text-2xl font-bold text-slate-900">
            {formatInline(heading.label)}
          </h2>
        );
      } else {
        blocks.push(
          <h3 key={`h-${blocks.length}`} className="mb-3 mt-6 text-xl font-semibold text-slate-900">
            {formatInline(heading.label)}
          </h3>
        );
      }
      continue;
    }

    if (ul) {
      flushParagraph();
      if (listType && listType !== 'ul') flushList();
      listType = 'ul';
      listItems.push(ul[1]);
      continue;
    }

    if (ol) {
      flushParagraph();
      if (listType && listType !== 'ol') flushList();
      listType = 'ol';
      listItems.push(ol[1]);
      continue;
    }

    flushList();
    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();

  return <div className={`space-y-2 text-slate-700 ${className || ''}`}>{blocks}</div>;
}

function formatInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export default function BlogContentRenderer({ sections }: Props) {
  if (!sections?.length) {
    return (
      <p className="text-center text-slate-400 italic py-12">
        No content sections for this article yet.
      </p>
    );
  }

  return (
    <div className="space-y-12">
      {sections.map((section, index) => {
        switch (section.type) {
          case 'heading': {
            const Tag = section.level === 3 ? 'h3' : 'h2';
            return (
              <Tag
                key={index}
                className={
                  section.level === 3
                    ? 'text-xl font-semibold text-slate-900'
                    : 'text-3xl font-bold text-slate-900'
                }
              >
                {section.content}
              </Tag>
            );
          }

          case 'text_block':
            return (
              <div key={index} className="max-w-none">
                {section.title && (
                  <h2 className="mb-6 text-3xl font-bold text-slate-900">{section.title}</h2>
                )}
                <div
                  className={
                    section.style === 'italic_border'
                      ? 'italic border-l-4 border-orange-500 pl-6 text-slate-700'
                      : ''
                  }
                >
                  <FormattedBody text={section.content || ''} />
                </div>
              </div>
            );

          case 'grid_list':
            return (
              <div key={index} className="max-w-none">
                {section.title && (
                  <h2 className="mb-6 text-3xl font-bold text-slate-900">{section.title}</h2>
                )}
                <ul className="mb-8 grid list-none grid-cols-1 gap-4 md:grid-cols-2">
                  {section.items?.map((item, i) => (
                    <li
                      key={i}
                      className="m-0 flex list-none items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
                    >
                      <span className="material-symbols-outlined text-orange-600">
                        {item.icon || 'check_circle'}
                      </span>
                      <span className="text-slate-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );

          case 'image':
            if (!section.url) return null;
            return (
              <figure key={index} className="my-12">
                <div className="relative h-64 overflow-hidden rounded-3xl border-4 border-white shadow-2xl md:h-96">
                  <BlogMediaImage
                    src={section.url}
                    alt={section.alt || 'Blog Image'}
                    fill
                    className="object-cover"
                  />
                </div>
                {section.title && (
                  <figcaption className="mt-3 text-center text-sm text-slate-500">
                    {section.title}
                  </figcaption>
                )}
              </figure>
            );

          case 'comparison_table':
            return (
              <div key={index} className="mb-16 overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                {section.title && (
                  <h2 className="bg-slate-100 px-6 py-4 text-xl font-bold text-slate-900">
                    {section.title}
                  </h2>
                )}
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      {section.headers?.map((header, i) => (
                        <th key={i} className="p-6 font-bold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows?.map((row, i) => (
                      <tr key={i} className="border-b border-slate-100">
                        {row.map((cell, j) => (
                          <td key={j} className={`p-6 ${j === 0 ? 'bg-slate-50 font-bold' : ''}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
