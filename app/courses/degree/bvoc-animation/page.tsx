import BvocProgramPage from '@/components/portal/BvocProgramPage';
import { BVOC_ANIMATION } from '@/lib/bvocSyllabus';

export const metadata = {
  title: 'B.Voc Animation Syllabus | ZICA ZIMA PCMC',
  description:
    'Explore the 3-year B.Voc in Animation syllabus — theory, labs, and on-job training under SPPU.',
};

export default function BvocAnimationPage() {
  return <BvocProgramPage program={BVOC_ANIMATION} />;
}
