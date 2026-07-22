import { db } from "./firebase";
import { collection, getDocs, query, where, Timestamp } from "firebase/firestore";

export interface BlogSection {
  type: 'text_block' | 'heading' | 'grid_list' | 'image' | 'comparison_table';
  title?: string;
  content?: string;
  style?: string;
  level?: 2 | 3;
  items?: { text: string; icon: string }[];
  url?: string;
  alt?: string;
  headers?: string[];
  rows?: string[][];
}

export interface BlogData {
  slug: string;
  title: string;
  author: string;
  category: string;
  coverImage: string;
  date: string;
  createdAt?: Timestamp; // For backend sorting
  readTime: string;
  sections: BlogSection[];
  faqs?: { question: string; answer: string }[];
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  status?: 'draft' | 'published';
}

// Local fallback data for development
export const LOCAL_BLOGS: Record<string, BlogData> = {
  "notebooklm-digital-marketing-ai": {
    slug: "notebooklm-digital-marketing-ai",
    title: "The Silent AI Revolution: How NotebookLM is Rewriting Digital Marketing",
    author: "ZICA ZIMA Team",
    category: "AI & Marketing",
    coverImage: "/image/Blogs/NotebookLLM.png",
    date: "14 April, 2026",
    readTime: "8 min read",
    sections: [
      {
        type: "text_block",
        title: "Introduction: The Shift No One Noticed",
        content: "At 2:17 AM, a marketer somewhere uploads a competitor report, a few campaign documents, and last quarter’s analytics into an AI tool. Within seconds, the system responds—not with generic suggestions, but with a precise strategy, content direction, and gaps the marketer had completely overlooked. No brainstorming session. No hours of research. No guesswork. By morning, a campaign is ready—data-backed, structured, and highly targeted. This is not a glimpse into the distant future. This is happening now.",
        style: "italic_border"
      },
      {
        type: "text_block",
        title: "What is NotebookLM?",
        content: "NotebookLM is an AI-powered research and note-taking tool developed by Google. It allows users to upload documents such as PDFs, Google Docs, websites, and reports. The system then analyzes this information and provides responses, summaries, and insights based strictly on the uploaded content. Unlike traditional AI tools that rely on generalized internet knowledge, NotebookLM works within a controlled dataset—your dataset."
      },
      {
        type: "grid_list",
        title: "Why NotebookLM Matters in Digital Marketing",
        items: [
          { text: "SEO reports", icon: "search_check" },
          { text: "Competitor analysis", icon: "analytics" },
          { text: "Audience behavior data", icon: "groups" },
          { text: "Campaign performance metrics", icon: "trending_up" }
        ]
      },
      {
        type: "grid_list",
        title: "Benefits of Using NotebookLM for Marketers",
        items: [
          { text: "Personalized Outputs: Based on your data, ensuring high relevance.", icon: "person" },
          { text: "Time Efficiency: Reduces hours of manual research.", icon: "speed" },
          { text: "Improved Decision-Making: Actionable insights from complex datasets.", icon: "psychology" },
          { text: "Enhanced Content Quality: Structured, accurate, and well-informed.", icon: "verified" },
          { text: "Centralized Knowledge: All research in a single system.", icon: "folder_managed" }
        ]
      },
      {
        type: "comparison_table",
        title: "NotebookLM vs Traditional AI Tools",
        headers: ["Feature", "NotebookLM", "Traditional AI Tools"],
        rows: [
          ["Data Source", "User-provided documents", "General internet data"],
          ["Accuracy", "High (context-specific)", "Moderate"],
          ["Personalization", "Strong", "Limited"],
          ["Use Case", "Research & insights", "General assistance"]
        ]
      },
      {
        type: "grid_list",
        title: "Practical Applications Across Roles",
        items: [
          { text: "For Agencies: Faster planning and improved client reporting.", icon: "business" },
          { text: "For Freelancers: Efficient content creation and quick research.", icon: "person_celebrate" },
          { text: "For Students: Enhanced learning and structured assignments.", icon: "school" }
        ]
      },
      {
        type: "text_block",
        title: "Limitations to Consider",
        content: "Despite its advantages, NotebookLM has certain limitations: Its effectiveness depends on the quality of uploaded data. It may not provide real-time updates beyond the given dataset. Requires structured input for optimal results. Understanding these limitations is essential for maximizing its potential."
      },
      {
        type: "text_block",
        title: "The Future of Digital Marketing with NotebookLM",
        content: "The future of digital marketing is increasingly defined by data-driven strategies, AI-powered personalization, and automation. NotebookLM aligns with these trends by serving as a centralized intelligence system. As technology evolves, we expect integration with marketing platforms, advanced analytics, and enhanced automation features."
      },
      {
        type: "text_block",
        title: "Conclusion",
        content: "NotebookLM represents a significant shift in how digital marketing is executed. By focusing on user-specific data and delivering context-aware insights, it enables marketers to move beyond generic strategies and adopt a more precise, informed approach. Adopting such tools is no longer optional—it is a necessary step toward staying competitive in an increasingly data-driven landscape."
      }
    ],
    faqs: [
      {
        question: "What is NotebookLM and how does it help in digital marketing?",
        answer: "NotebookLM is an AI-powered research tool that analyzes user-provided data to generate insights, summaries, and strategies useful for content creation, SEO, and campaign planning."
      },
      {
        question: "How is NotebookLM different from other AI tools?",
        answer: "Unlike traditional AI tools, NotebookLM works on your own uploaded data, making its outputs more relevant, accurate, and personalized."
      },
      {
        question: "Can NotebookLM improve SEO performance?",
        answer: "Yes, it helps analyze SEO reports, identify content gaps, and understand competitor strategies, leading to improved optimization."
      },
      {
        question: "Who should use NotebookLM?",
        answer: "Digital marketers, agencies, freelancers, and students who deal with research, data analysis, and content creation can benefit from it."
      },
      {
        question: "Does NotebookLM require technical expertise?",
        answer: "No, it is designed to be user-friendly. However, better results depend on how effectively data is structured and provided."
      },
      {
        question: "What are the main limitations of NotebookLM?",
        answer: "Its performance depends on the quality of input data and it may not provide real-time updates beyond the uploaded information."
      }
    ],
    meta: {
      title: "How NotebookLM is Transforming Digital Marketing with AI in 2026",
      description: "Explore how NotebookLM is revolutionizing digital marketing through AI-powered insights, content creation, and data-driven strategies for better results.",
      keywords: "NotebookLM, AI, Digital Marketing, SEO"
    }
  },
  "chatbot-optimization-conversational-marketing": {
    slug: "chatbot-optimization-conversational-marketing",
    title: "Chatbot Optimization: Building Conversational Marketing Tools",
    date: "28 March, 2026",
    author: "ZICA ZIMA Team",
    category: "Conversational Marketing",
    readTime: "8 min read",
    coverImage: "/image/Blogs/Chatgpt.png",
    sections: [
      {
        type: "text_block",
        title: "Speed is the New Standard",
        content: "Today’s customers expect speed. They want answers instantly, support without delay, and communication that feels simple, smooth, and personalized. Chatbots have become one of the most valuable tools for businesses looking to improve customer interaction and marketing performance. Simply having a chatbot is not enough; businesses need chatbot optimization — the process of making conversations smarter, more useful, and more engaging."
      },
      {
        type: "grid_list",
        title: "What is Chatbot Optimization?",
        items: [
          { text: "Response Accuracy: Ensuring the bot understands and answers correctly.", icon: "check_circle" },
          { text: "Conversation Flow: Making interactions feel natural, not robotic.", icon: "forum" },
          { text: "Lead Generation: Naturally capturing user details within the chat.", icon: "person_add" },
          { text: "Speed & Performance: Reducing latency for a better user experience.", icon: "speed" }
        ]
      },
      {
        type: "image",
        url: "/image/Blogs/Chatbot_Optimization_Inner.png",
        alt: "Chatbot Conversation Flow Diagram"
      },
      {
        type: "grid_list",
        title: "Why Chatbots Matter in Digital Marketing",
        items: [
          { text: "24/7 Support: Always available to assist users.", icon: "timer" },
          { text: "Scale Communication: Handle thousands of queries simultaneously.", icon: "hub" },
          { text: "Qualify Inquiries: Automatically filter serious leads from general queries.", icon: "filter_list" },
          { text: "Improve Journeys: Guide users to the right product or course effortlessly.", icon: "navigation" }
        ]
      },
      {
        type: "grid_list",
        title: "Career Opportunities in Conversational Marketing",
        items: [
          { text: "Marketing Automation Specialist", icon: "settings_suggest" },
          { text: "Conversational UX Designer", icon: "design_services" },
          { text: "UX Writer for AI Systems", icon: "history_edu" },
          { text: "Lead Funnel Optimization Expert", icon: "ads_click" }
        ]
      },
      {
        type: "text_block",
        title: "The Human Side of Chatbot Design",
        content: "Even though chatbots are AI-driven, the best ones are designed with human understanding. They should reflect real user questions, human-friendly language, and brand personality. The most effective conversational tools are built by people who understand how users think, ask, and respond."
      },
      {
        type: "text_block",
        title: "Conclusion",
        content: "Chatbots are changing the way brands communicate. Learning how conversational marketing works can open exciting career opportunities in the AI-driven business world. The brands that connect best will be the ones that know how to talk smarter and respond faster. To learn more, visit our website: www.zicazimapcmc.com"
      }
    ],
    faqs: [
      {
        question: "What is chatbot optimization?",
        answer: "It is the process of improving a chatbot's conversation flow, responses, speed, and user experience to make it more effective for business goals."
      },
      {
        question: "How do chatbots help in digital marketing?",
        answer: "Chatbots help by answering queries instantly, guiding users, generating leads, and improving overall customer engagement 24/7."
      },
      {
        question: "Can chatbots improve lead generation?",
        answer: "Yes, optimized chatbots can engage users early, collect contact details, qualify leads, and support higher conversion rates."
      },
      {
        question: "Is chatbot optimization a useful career skill?",
        answer: "Absolutely. It is a growing skill in digital marketing, UX writing, AI communication, and automation-based roles."
      }
    ],
    meta: {
      title: "Chatbot Optimization for Better Conversational Marketing Results",
      description: "Discover how chatbot optimization improves customer engagement, lead generation, user experience, and conversational marketing performance.",
      keywords: "Chatbot Optimization, conversational marketing, AI chatbot, lead generation"
    }
  },
  "avgc-government-vision-2026": {
    slug: "avgc-government-vision-2026",
    title: "The Indian Government’s 2026 Vision for the AVGC Sector: Empowering Creativity & Jobs",
    date: "21 March, 2026",
    author: "ZICA ZIMA Team",
    category: "Government Policy",
    readTime: "7 min read",
    coverImage: "/image/Blogs/AVGC_Vision_India.png",
    sections: [
      {
        type: "text_block",
        title: "A Strategic Turning Point",
        content: "The AVGC industry — Animation, Visual Effects, Gaming, and Comics — has evolved into one of India’s fastest-growing creative sectors. In 2026, the Government of India reinforced its commitment to AVGC by introducing structured funding, infrastructure development, and skill-building initiatives to drive employment and digital exports."
      },
      {
        type: "grid_list",
        title: "AVGC Content Creator Labs",
        items: [
          { text: "15,000 secondary schools: Introducing animation and game design at an early stage.", icon: "school" },
          { text: "500 colleges nationwide: Building a strong foundation for future professionals.", icon: "account_balance" }
        ]
      },
      {
        type: "image",
        url: "/image/Blogs/AVGC_Creator_Lab.png",
        alt: "AVGC Content Creator Lab"
      },
      {
        type: "grid_list",
        title: "Financial Allocations (Union Budget 2026–27)",
        items: [
          { text: "₹250 crore: Talent development, structured training, and infrastructure.", icon: "payments" },
          { text: "₹35 crore: Strengthening institutions like NFDC and National Centre of Excellence.", icon: "account_balance_wallet" }
        ]
      },
      {
        type: "grid_list",
        title: "Roadmap for Job Creation",
        items: [
          { text: "Industry-aligned curriculum development.", icon: "menu_book" },
          { text: "Innovation hubs and research centers for AR/VR/XR.", icon: "vrpavilion" },
          { text: "Global collaboration and original IP development.", icon: "public" }
        ]
      },
      {
        type: "text_block",
        title: "Conclusion",
        content: "The Government of India’s 2026 initiatives mark a significant milestone. Through structured funding and skill development, the AVGC sector is positioned as a national growth engine. For students and professionals, 2026 represents the ultimate strategic turning point."
      }
    ],
    faqs: [
      {
        question: "What is the primary goal of the AVGC 2026 Vision?",
        answer: "The goal is to transform India from a service outsourcing hub to a creator of original intellectual property and immersive entertainment."
      },
      {
        question: "How many jobs are expected to be created in AVGC?",
        answer: "The sector is projected to require nearly 2 million professionals by 2030, driven by rapid OTT and gaming adoption."
      },
      {
        question: "What are AVGC Content Creator Labs?",
        answer: "These are specialized labs being set up in schools and colleges to introduce students to animation, VFX, and game design technologies."
      }
    ],
    meta: {
      title: "Indian Government AVGC Vision 2026: Budget, Labs & Jobs",
      description: "Explore the Union Budget 2026-27 updates for the AVGC sector, including Content Creator Labs, funding allocations, and job growth projections.",
      keywords: "AVGC, Indian Government, Union Budget 2026, VFX, Animation Jobs"
    }
  },
  "technical-seo-skills-2026": {
    slug: "technical-seo-skills-2026",
    title: "Top Technical SEO Skills for 2026",
    author: "ZICA ZIMA Team",
    category: "SEO",
    coverImage: "/image/Blogs/SEO.png",
    date: "19 March, 2026",
    readTime: "6 min read",
    sections: [
      {
        type: "text_block",
        title: "The Evolution of Technical SEO",
        content: "Technical SEO in 2026 is evolving rapidly as AI-powered search engines, generative results, and advanced ranking systems reshape digital visibility. Search engines now evaluate not just keywords, but context, performance, structured data, and user experience signals. To stay competitive, professionals must upgrade beyond traditional SEO practices and build strong technical expertise."
      },
      {
        type: "grid_list",
        title: "Key Technical SEO Pillars",
        items: [
          { text: "Advanced Crawl & Index Optimization: Managing crawl budget, XML sitemaps, and robots.txt.", icon: "rebase_edit" },
          { text: "Core Web Vitals & Performance: Optimizing LCP, CLS, and INP for speed.", icon: "speed" },
          { text: "JavaScript SEO: Handling hydration and rendering in React/Angular frameworks.", icon: "javascript" },
          { text: "Structured Data: Expertise in JSON-LD and entity optimization.", icon: "schema" }
        ]
      },
      {
        type: "image",
        url: "/image/Blogs/Technical_SEO_Audit.png",
        alt: "Technical SEO Audit Visual"
      },
      {
        type: "grid_list",
        title: "Future-Ready Skills",
        items: [
          { text: "Log File Analysis: Gaining insights into bot behavior and bottlenecks.", icon: "terminal" },
          { text: "AI & Generative Search Optimization: Structuring for conversational search.", icon: "smart_toy" },
          { text: "Technical Auditing & Automation: Proficiency in Google Search Console and Screaming Frog.", icon: "analytics" },
          { text: "Mobile-First & Voice Readiness: Ensuring responsive design and voice-friendly structure.", icon: "phone_iphone" }
        ]
      },
      {
        type: "text_block",
        title: "Conclusion",
        content: "For aspiring professionals seeking practical, industry-aligned training in digital marketing and technical SEO, ZICA ZIMA PCMC provides structured learning pathways designed for future-ready marketers. Adopting these skills is the only way to stay aligned with the evolving search ecosystem."
      }
    ],
    faqs: [
      {
        question: "What makes Technical SEO different in 2026?",
        answer: "AI-driven search engines focus on semantics, performance, and structured understanding rather than just keywords."
      },
      {
        question: "Is coding mandatory for Technical SEO?",
        answer: "While not fully mandatory, knowledge of HTML, CSS, and JavaScript significantly improves technical troubleshooting skills."
      },
      {
        question: "How does AI impact Technical SEO?",
        answer: "AI changes how search engines interpret intent, summarize content, and rank pages, requiring deeper technical optimization."
      },
      {
        question: "What career opportunities exist in Technical SEO?",
        answer: "Roles include Technical SEO Specialist, SEO Analyst, Search Strategist, and Digital Growth Consultant."
      }
    ],
    meta: {
      title: "Top Technical SEO Skills for 2026 - Master the Future of Search",
      description: "Discover the essential technical SEO skills for 2026, including AI search optimization, Core Web Vitals, and JavaScript rendering.",
      keywords: "Technical SEO, 2026 SEO, AI Search, Core Web Vitals"
    }
  }
};

// Helper to transform Firestore data safely
function isPublishedBlog(data: {
  status?: string;
  published?: boolean;
  isPublished?: boolean;
}): boolean {
  if (data.published === true || data.isPublished === true) return true;

  if (!data.status) return true;

  const normalized = String(data.status).toLowerCase().trim();
  if (['published', 'live', 'active', 'public'].includes(normalized)) return true;
  if (['draft', 'archived', 'inactive', 'unpublished'].includes(normalized)) return false;

  return normalized === 'published';
}

/** Slug variants for CRM URLs (spaces, encoding, hyphen styles). */
function slugLookupVariants(slug: string): string[] {
  const decoded = decodeURIComponent(slug).trim();
  const variants = new Set<string>([
    slug,
    decoded,
    decoded.toLowerCase(),
    decoded.replace(/\s+/g, '-').toLowerCase(),
    decoded.replace(/-+/g, ' ').toLowerCase(),
  ]);
  return [...variants].filter(Boolean);
}

function dedupeBlogsBySlug(blogs: BlogData[]): BlogData[] {
  const bySlug = new Map<string, BlogData>();
  for (const blog of blogs) {
    if (blog.slug) bySlug.set(blog.slug, blog);
  }
  return [...bySlug.values()];
}

function formatBlogDate(value: unknown): string {
  if (!value) return '';
  if (typeof value === 'string') {
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
    }
    return value;
  }
  if (typeof value === 'object' && value !== null && 'seconds' in value) {
    const ts = value as { seconds: number };
    return new Date(ts.seconds * 1000).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  }
  if (value instanceof Date) {
    return value.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  }
  return '';
}

function normalizeImageSrc(src?: string): string {
  if (!src) return '';
  if (src.startsWith('http') || src.startsWith('data:') || src.startsWith('/')) return src;
  if (src.length > 100) return `data:image/png;base64,${src}`;
  return src;
}

/** Convert CRM nested section shapes into website renderer shape. */
export function normalizeSections(rawSections: unknown): BlogSection[] {
  if (!Array.isArray(rawSections)) return [];

  return rawSections
    .map((raw: unknown) => normalizeSection(raw))
    .filter((section): section is BlogSection => Boolean(section?.content || section?.url || section?.items?.length || section?.headers?.length));
}

function normalizeSection(raw: unknown): BlogSection | null {
  if (typeof raw === 'string') {
    const trimmed = raw.trim();
    return trimmed ? { type: 'text_block', content: trimmed } : null;
  }

  if (!raw || typeof raw !== 'object') return null;

  const section = raw as Record<string, unknown>;
  const type = String(section.type || 'text_block').toLowerCase();
  const nested = section.content;

  if (type === 'heading') {
    if (nested && typeof nested === 'object') {
      const nestedObj = nested as Record<string, unknown>;
      return {
        type: 'heading',
        level: nestedObj.level === 3 ? 3 : 2,
        content: String(nestedObj.text || nestedObj.content || ''),
      };
    }
    return {
      type: 'heading',
      level: 2,
      content: typeof nested === 'string' ? nested : String(section.title || ''),
    };
  }

  if (type === 'html' || type === 'rich_text' || type === 'richtext' || type === 'paragraph') {
    const htmlContent =
      (typeof nested === 'string' ? nested : '') ||
      String((section as { html?: string }).html || '') ||
      String((section as { body?: string }).body || '') ||
      (nested && typeof nested === 'object'
        ? String((nested as Record<string, unknown>).html || (nested as Record<string, unknown>).body || (nested as Record<string, unknown>).content || '')
        : '') ||
      String(section.content || '');

    return htmlContent.trim()
      ? { type: 'text_block', title: section.title as string | undefined, content: htmlContent, style: section.style as string | undefined }
      : null;
  }

  if (type === 'text_block' || type === 'text') {
    if (typeof nested === 'string') {
      return { type: 'text_block', title: section.title as string | undefined, content: nested, style: section.style as string | undefined };
    }
    if (nested && typeof nested === 'object') {
      const nestedObj = nested as Record<string, unknown>;
      return {
        type: 'text_block',
        title: String(nestedObj.title || section.title || ''),
        content: String(nestedObj.body || nestedObj.content || nestedObj.html || ''),
        style: String(nestedObj.style || section.style || ''),
      };
    }
    return {
      type: 'text_block',
      title: section.title as string | undefined,
      content: String(section.content || section.body || section.html || ''),
      style: section.style as string | undefined,
    };
  }

  if (type === 'image') {
    if (nested && typeof nested === 'object') {
      const nestedObj = nested as Record<string, unknown>;
      return {
        type: 'image',
        url: normalizeImageSrc(String(nestedObj.url || nestedObj.src || '')),
        alt: String(nestedObj.alt || nestedObj.caption || 'Blog image'),
        title: String(nestedObj.caption || section.title || ''),
      };
    }
    return {
      type: 'image',
      url: normalizeImageSrc(String(section.url || section.src || '')),
      alt: String(section.alt || 'Blog image'),
      title: section.title as string | undefined,
    };
  }

  if (type === 'grid_list') {
    if (Array.isArray(nested)) {
      return {
        type: 'grid_list',
        title: section.title as string | undefined,
        items: nested.map((item: Record<string, unknown>) => ({
          text: String(item.text || item.title || ''),
          icon: String(item.icon || 'check_circle'),
        })),
      };
    }
    const items = (section.items as Array<Record<string, unknown>> | undefined) || [];
    return {
      type: 'grid_list',
      title: section.title as string | undefined,
      items: items.map((item) => ({
        text: String(item.text || item.title || ''),
        icon: String(item.icon || 'check_circle'),
      })),
    };
  }

  if (type === 'comparison_table') {
    if (nested && typeof nested === 'object') {
      const nestedObj = nested as Record<string, unknown>;
      const headers: string[] = (nestedObj.headers as string[]) || [];
      const rows: string[][] = ((nestedObj.rows as unknown[]) || []).map((row) => {
        if (Array.isArray(row)) return row.map(String);
        if (row && typeof row === 'object') {
          const rowObj = row as Record<string, unknown>;
          return [String(rowObj.label || ''), ...((rowObj.values as unknown[]) || []).map(String)];
        }
        return [];
      });
      return { type: 'comparison_table', title: section.title as string | undefined, headers, rows };
    }
    return {
      type: 'comparison_table',
      title: section.title as string | undefined,
      headers: (section.headers as string[]) || [],
      rows: (section.rows as string[][]) || [],
    };
  }

  const fallbackContent =
    (typeof nested === 'string' ? nested : '') ||
    String(section.content || section.body || section.html || '');

  return fallbackContent.trim()
    ? { type: 'text_block', title: section.title as string | undefined, content: fallbackContent }
    : null;
}

function buildSectionsFromBlogRoot(data: Record<string, unknown>): BlogSection[] {
  const fromArray = normalizeSections(data.sections);
  if (fromArray.length > 0) return fromArray;

  const rootContent = [data.body, data.html, data.content, data.richText, data.rich_text]
    .find((value) => typeof value === 'string' && value.trim()) as string | undefined;

  if (rootContent) {
    return [{ type: 'text_block', content: rootContent }];
  }

  return [];
}

function transformBlogData(data: Record<string, unknown>): BlogData {
  const blog = { ...(data as unknown as BlogData) };

  blog.date = formatBlogDate(data.date) || formatBlogDate(data.publishedAt) || formatBlogDate(data.createdAt) || '';
  blog.coverImage = normalizeImageSrc(String(blog.coverImage || data.coverImageUrl || data.image || ''));
  blog.sections = buildSectionsFromBlogRoot(data);
  blog.meta = {
    title: String((data.meta as { title?: string } | undefined)?.title || data.title || ''),
    description: String((data.meta as { description?: string } | undefined)?.description || data.excerpt || data.summary || ''),
    keywords: String((data.meta as { keywords?: string } | undefined)?.keywords || ''),
  };
  blog.readTime = String(data.readTime || '5 min read');
  blog.category = String(blog.category || data.category || 'Blog');
  blog.title = String(blog.title || blog.meta.title || 'Untitled');

  return blog;
}

async function fetchBlogFromFirestore(slug: string): Promise<BlogData | null> {
  for (const candidate of slugLookupVariants(slug)) {
    const blogsQuery = query(collection(db, 'blogs'), where('slug', '==', candidate));
    const blogsSnapshot = await getDocs(blogsQuery);
    if (!blogsSnapshot.empty) {
      const data = blogsSnapshot.docs[0].data();
      if (!isPublishedBlog(data)) return null;
      return transformBlogData(data as Record<string, unknown>);
    }
  }
  return null;
}

export async function getBlogBySlug(slug: string): Promise<BlogData | null> {
  try {
    if (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID !== "placeholder") {
      const blog = await fetchBlogFromFirestore(slug);
      if (blog) return blog;
    }
    for (const candidate of slugLookupVariants(slug)) {
      if (LOCAL_BLOGS[candidate]) return LOCAL_BLOGS[candidate];
    }
    return null;
  } catch {
    for (const candidate of slugLookupVariants(slug)) {
      if (LOCAL_BLOGS[candidate]) return LOCAL_BLOGS[candidate];
    }
    return null;
  }
}

export async function getAllBlogs(): Promise<BlogData[]> {
  try {
    let allBlogs: BlogData[] = [];
    
    // 1. Fetch from Firebase
    if (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID !== "placeholder") {
      const blogsSnapshot = await getDocs(collection(db, "blogs"));
      if (!blogsSnapshot.empty) {
        allBlogs = blogsSnapshot.docs
          .map(doc => doc.data())
          .filter(isPublishedBlog)
          .map((data) => transformBlogData(data as Record<string, unknown>));
      }
    }
    
    // 2. Add Static Blogs (Firebase wins on duplicate slug)
    const staticBlogs = Object.values(LOCAL_BLOGS).map(b => transformBlogData(b as unknown as Record<string, unknown>));
    allBlogs = dedupeBlogsBySlug([...staticBlogs, ...allBlogs]);

    // 3. Sort by Date
    return allBlogs.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  } catch {
    return Object.values(LOCAL_BLOGS).map(b => transformBlogData(b as unknown as Record<string, unknown>));
  }
}

export async function getTotalBlogsCount(): Promise<number> {
  let firebaseCount = 0;
  try {
    if (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID !== "placeholder") {
      const blogsSnapshot = await getDocs(collection(db, "blogs"));
      firebaseCount = blogsSnapshot.docs.filter(doc => isPublishedBlog(doc.data())).length;
    }
  } catch (e) {}
  
  const staticCount = Object.keys(LOCAL_BLOGS).length;
  return firebaseCount + staticCount;
}

export async function getBlogsPaginated(limitCount: number = 15, lastVisible?: any): Promise<{ blogs: BlogData[], lastDoc?: any }> {
  try {
    let allBlogs: BlogData[] = [];
    
    // 1. Fetch from Firebase
    if (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID !== "placeholder") {
      const blogsSnapshot = await getDocs(collection(db, "blogs"));
      if (!blogsSnapshot.empty) {
        allBlogs = blogsSnapshot.docs
          .map(doc => doc.data())
          .filter(isPublishedBlog)
          .map((data) => transformBlogData(data as Record<string, unknown>));
      }
    }
    
    // 2. Add Static Blogs (Firebase wins on duplicate slug)
    const staticBlogs = Object.values(LOCAL_BLOGS).map(b => transformBlogData(b as unknown as Record<string, unknown>));
    allBlogs = dedupeBlogsBySlug([...staticBlogs, ...allBlogs]);

    // 3. Sort by Date
    allBlogs.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });

    // 4. Manual Pagination for the combined list
    const startIdx = lastVisible ? parseInt(lastVisible) : 0;
    const paginatedBlogs = allBlogs.slice(startIdx, startIdx + limitCount);
    const nextIdx = (startIdx + limitCount < allBlogs.length) ? (startIdx + limitCount).toString() : undefined;

    return { 
      blogs: paginatedBlogs, 
      lastDoc: nextIdx 
    };
  } catch (error) {
    const staticBlogs = Object.values(LOCAL_BLOGS).slice(0, limitCount);
    return { blogs: staticBlogs, lastDoc: undefined };
  }
}

