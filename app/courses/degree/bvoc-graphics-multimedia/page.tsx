import BvocProgramPage from '@/components/portal/BvocProgramPage';
import { BVOC_GRAPHICS_MULTIMEDIA } from '@/lib/bvocSyllabus';

export const metadata = {
  title: 'B.Voc Graphics & Multimedia Syllabus | ZICA ZIMA PCMC',
  description:
    'Explore the 3-year B.Voc in Graphics & Multimedia syllabus — six semesters of theory, labs, and on-job training under SPPU.',
};

export default function BvocGraphicsMultimediaPage() {
  return <BvocProgramPage program={BVOC_GRAPHICS_MULTIMEDIA} />;
}
