import type { MetadataRoute } from 'next';

import { getAllBlogs } from '@/lib/blogs';
import { zicaCourses, zimaCourses } from '@/lib/courses';

const siteUrl = 'https://www.zicazimapcmc.com';

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}> = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/courses/', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/courses/degree/bvoc-graphics-multimedia/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/courses/degree/bvoc-animation/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/courses/degree/bvoc-animation-visual-effects/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/blogs/', changeFrequency: 'daily', priority: 0.8 },
  { path: '/gallery/', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/director/', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/alumni/', changeFrequency: 'monthly', priority: 0.6 },
];

function getBlogLastModified(createdAt?: { toDate?: () => Date }): Date | undefined {
  try {
    return createdAt?.toDate?.();
  } catch {
    return undefined;
  }
}

/**
 * Serves the complete XML sitemap at /sitemap.xml.
 * It is revalidated hourly so new published Firestore blogs are discoverable
 * without requiring a full site deployment.
 */
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const courses = [...zicaCourses, ...zimaCourses];

  try {
    const blogs = await getAllBlogs();

    return [
      ...staticRoutes.map(({ path, changeFrequency, priority }) => ({
        url: `${siteUrl}${path}`,
        changeFrequency,
        priority,
      })),
      ...courses.map((course) => ({
        url: `${siteUrl}/courses/${course.id}/`,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })),
      ...blogs.map((blog) => ({
        url: `${siteUrl}/blogs/${encodeURIComponent(blog.slug)}/`,
        lastModified: getBlogLastModified(blog.createdAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })),
    ];
  } catch {
    return [
      ...staticRoutes.map(({ path, changeFrequency, priority }) => ({
        url: `${siteUrl}${path}`,
        changeFrequency,
        priority,
      })),
      ...courses.map((course) => ({
        url: `${siteUrl}/courses/${course.id}/`,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })),
    ];
  }
}
