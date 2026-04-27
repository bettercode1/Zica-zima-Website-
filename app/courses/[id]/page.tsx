import { getCourseById, zicaCourses, zimaCourses } from '@/lib/courses';
import { notFound } from 'next/navigation';
import CourseDetailsClient from '@/components/portal/CourseDetailsClient';

export const dynamicParams = false;

export async function generateStaticParams() {
  const allCourses = [...zicaCourses, ...zimaCourses];
  return allCourses.map((course) => ({
    id: course.id,
  }));
}

export default async function CourseDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const course = getCourseById(resolvedParams.id);

  if (!course) {
    notFound();
  }

  return <CourseDetailsClient course={course} />;
}
