import BvocProgramPage from '@/components/portal/BvocProgramPage';
import { BVOC_ANIMATION_VISUAL_EFFECTS } from '@/lib/bvocSyllabus';

export const metadata = {
  title: 'B.Voc Animation & Visual Effects | Medhavi Skills University | ZICA ZIMA PCMC',
  description:
    'B.Voc in Animation & Visual Effects at Medhavi Skills University in partnership with ZICA — programme overview, highlights, features, and PCDP-aligned syllabus.',
};

export default function BvocAnimationVisualEffectsPage() {
  return <BvocProgramPage program={BVOC_ANIMATION_VISUAL_EFFECTS} />;
}

