import BvocProgramPage from '@/components/portal/BvocProgramPage';
import { BVOC_ANIMATION_GRAPHIC_DESIGN } from '@/lib/bvocSyllabus';

export const metadata = {
  title: 'B.Voc Animation & Graphic Design Syllabus | ZICA ZIMA PCMC',
  description:
    'Explore the 3-year B.Voc in Animation & Graphic Design syllabus — theory, labs, and on-job training under SPPU.',
};

export default function BvocAnimationGraphicDesignPage() {
  return <BvocProgramPage program={BVOC_ANIMATION_GRAPHIC_DESIGN} />;
}
