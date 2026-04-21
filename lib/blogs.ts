import { db } from "./firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

export interface BlogSection {
  type: 'text_block' | 'grid_list' | 'image' | 'comparison_table';
  title?: string;
  content?: string;
  style?: string;
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
  readTime: string;
  sections: BlogSection[];
  faqs?: { question: string; answer: string }[];
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
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

export async function getBlogBySlug(slug: string): Promise<BlogData | null> {
  console.log("Fetching blog for slug:", slug);
  try {
    // 1. Try to fetch from Firestore if configured
    if (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID !== "placeholder") {
      const blogDoc = await getDoc(doc(db, "blogs", slug));
      if (blogDoc.exists()) {
        return blogDoc.data() as BlogData;
      }
    }
    
    // 2. Fallback to local data for now
    const blog = LOCAL_BLOGS[slug] || null;
    console.log("Blog found in local data:", !!blog);
    return blog;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return LOCAL_BLOGS[slug] || null;
  }
}

export async function getAllBlogs(): Promise<BlogData[]> {
  try {
    if (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID !== "placeholder") {
      const blogsSnapshot = await getDocs(collection(db, "blogs"));
      const blogs = blogsSnapshot.docs.map(doc => doc.data() as BlogData);
      // Sort by date descending (assuming date is a string that sorts well or has year)
      return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    return Object.values(LOCAL_BLOGS);
  } catch (error) {
    console.error("Error fetching all blogs:", error);
    return Object.values(LOCAL_BLOGS);
  }
}

export async function getBlogsPaginated(limitCount: number = 15, lastVisible?: any): Promise<{ blogs: BlogData[], lastDoc?: any }> {
  try {
    if (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID !== "placeholder") {
      const { query, orderBy, limit, startAfter } = await import("firebase/firestore");
      let q = query(collection(db, "blogs"), orderBy("date", "desc"), limit(limitCount));
      
      if (lastVisible) {
        q = query(collection(db, "blogs"), orderBy("date", "desc"), startAfter(lastVisible), limit(limitCount));
      }
      
      const blogsSnapshot = await getDocs(q);
      const blogs = blogsSnapshot.docs.map(doc => doc.data() as BlogData);
      const last = blogsSnapshot.docs[blogsSnapshot.docs.length - 1];
      
      return { blogs, lastDoc: last };
    }
    
    // Local fallback pagination
    const allBlogs = Object.values(LOCAL_BLOGS);
    const sortedBlogs = allBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // Since local data is small, we just slice it
    const startIdx = lastVisible ? parseInt(lastVisible) : 0;
    const paginatedBlogs = sortedBlogs.slice(startIdx, startIdx + limitCount);
    const nextIdx = startIdx + limitCount < sortedBlogs.length ? (startIdx + limitCount).toString() : undefined;
    
    return { blogs: paginatedBlogs, lastDoc: nextIdx };
  } catch (error) {
    console.error("Error in paginated fetch:", error);
    return { blogs: Object.values(LOCAL_BLOGS).slice(0, limitCount), lastDoc: undefined };
  }
}

export async function getTotalBlogsCount(): Promise<number> {
  try {
    if (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID !== "placeholder") {
      const { getCountFromServer } = await import("firebase/firestore");
      const coll = collection(db, "blogs");
      const snapshot = await getCountFromServer(coll);
      return snapshot.data().count;
    }
    return Object.keys(LOCAL_BLOGS).length;
  } catch (error) {
    return Object.keys(LOCAL_BLOGS).length;
  }
}

