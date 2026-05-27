import { getCourseById } from './courses';

export interface SyllabusSections {
  theory: string[];
  lab: string[];
  ojt: string[];
}

export interface SyllabusSemester {
  number: number;
  roman: string;
  subtitle?: string;
  sections: SyllabusSections;
}

export interface MedhaviProgramContent {
  programmeOverview: string[];
  degree: string;
  eligibility: string;
  academicFramework: string;
  programmeFeatures: { title: string; lines?: string[]; image: string }[];
  selectionProcess: string[];
  medhaviEdge: string[];
  syllabusAlignedCourseId: string;
  syllabusAlignedCourseName: string;
}

export interface SyllabusYear {
  number: 1 | 2 | 3;
  label: string;
  semesters: SyllabusSemester[];
}

export const BVOC_SHARED = {
  university: 'Savitribai Phule Pune University (SPPU)',
  duration: '3 Years · NSQF Level 7',
  highlights: [
    '60% on-the-job training · 40% theory',
    'UGC recognised B.Voc degree',
    'Industry internships from Year 1',
    'Entry & exit at Diploma, Advanced Diploma, or Degree',
  ],
  intake: 30,
  exitOptions: [
    { duration: '1 Year', award: 'Diploma', nsqf: 'NSQF Level 5' },
    { duration: '2 Years', award: 'Advanced Diploma', nsqf: 'NSQF Level 6' },
    { duration: '3 Years', award: 'B.Voc Degree', nsqf: 'NSQF Level 7' },
  ],
  eligibility: [
    {
      year: 'First Year B.Voc',
      requirements: [
        '12th Passed with any stream (Science, Commerce, or Arts)',
        'OR 10th + 2 Years ITI',
        'OR 3-Year Diploma after 10th',
        'OR 2-Year Diploma after 12th',
      ],
      nsqf: 'Must have NSQF Level 4 in the respective subject',
    },
    {
      year: 'Second Year B.Voc',
      requirements: [
        '3-Year Diploma after 10th or 2-Year Diploma after 12th in a related branch',
      ],
      nsqf: 'Must have NSQF Level 5 in the respective subject',
    },
    {
      year: 'Third Year B.Voc',
      requirements: [] as string[],
      nsqf: 'Must have NSQF Level 6 in the respective subject',
    },
  ],
  eligibilityNote: 'All eligibility is as per AICTE / SPPU guidelines.',
  whyBVoc: [
    'On-the-job training in a company from day one',
    '60% on-job training in industry and 40% theory in college',
    "B.Voc degree is equivalent to any other bachelor's degree granted by UGC, AICTE, or a University",
    'After 1st year of B.Voc, eligible for direct 2nd-year admission into Engineering',
    'Stipend during on-job training based on merit',
    'Credit-based program with multiple entry and multiple exit options',
    'Eligible for all state / central government examinations, jobs, and higher studies',
    'Certificate of Diploma after 1st year or Advanced Diploma after 2nd year if unable to complete full program',
    'NSQF Level certificates provided throughout the program',
  ],
  awards: [
    {
      title: 'Best Industry Interface Institute in Maharashtra',
      organization: 'Prime Time',
      image: '/image/Degree Awards/PrimeTime.png',
    },
    {
      title: 'Best Industry-Academia Linkage Engineering Institute in Maharashtra',
      organization: 'India Today — India Excellence',
      image: '/image/Degree Awards/India Today.jpg',
    },
    {
      title: 'Platinum Ranking in AICTE-CII Survey of Industry-Linked Technical Institutes',
      organization: 'AICTE · CII',
      image: '/image/Degree Awards/AICTE.jpg',
    },
    {
      title: 'Ranked 114th — Top 175 All India Engineering & 104th — Top 125 Private Engineering Institutes',
      organization: 'Times Engineering',
      image: '/image/Degree Awards/times Engineering.jpg',
    },
    {
      title:
        'Quality Progress Award for Excellence in Engineering Education Through Effective Industry-Academic Linkages',
      organization: 'The Institution of Engineers (India)',
      image: '/image/Degree Awards/Institution of Engineers.svg',
    },
  ],
} as const;

/** Base syllabus seed used to derive separate degree-specific data blocks. */
const BVOC_BASE_SYLLABUS_YEARS: SyllabusYear[] = [
  {
    number: 1,
    label: 'Year 1',
    semesters: [
      {
        number: 1,
        roman: 'I',
        sections: {
          theory: [
            'Web Applications',
            'Communication Skill-I',
            'Graphic Design (Basic Sketching and Human Anatomy in Drawing)',
            'Illustration And Photo-Editing',
          ],
          lab: ['Web Applications -Lab', 'Illustration And Photo-Editing -Lab'],
          ojt: [
            'Character Designer MES/Q0502',
            'Storyboard Artist MES/Q0507',
            'Editor MES/Q1401',
          ],
        },
      },
      {
        number: 2,
        roman: 'II',
        sections: {
          theory: ['Pre-Production', 'Audio Editing', 'Video Editing', 'Communication Skill- II'],
          lab: ['Audio Editing-lab', 'Video Editing-lab'],
          ojt: ['One more OJT from Semester I'],
        },
      },
    ],
  },
  {
    number: 2,
    label: 'Year 2',
    semesters: [
      {
        number: 3,
        roman: 'III',
        sections: {
          theory: [
            'Principles of Animation and Techniques of Animation',
            'Basic of 3-D Modelling',
            'Texture and Lighting',
            'Communication Skill-III',
          ],
          lab: ['Digital Animation with Flash - Lab', 'Maya - Lab'],
          ojt: ['Modeller MES/Q2501', 'Animator MES/Q0701', 'Rendering Artist MES/Q3503'],
        },
      },
      {
        number: 4,
        roman: 'IV',
        sections: {
          theory: [
            '3 D Animation',
            'Introduction to 3 D Motion Graphics & VFX',
            'Introduction to Rendering',
            'Communication Skill-IV',
          ],
          lab: ['3 D Animation Lab', 'Rendering-Lab'],
          ojt: ['One more OJT from Semester I'],
        },
      },
    ],
  },
  {
    number: 3,
    label: 'Year 3',
    semesters: [
      {
        number: 5,
        roman: 'V',
        sections: {
          theory: [
            'Digital Compositing',
            '3 D Texturing',
            'Basic of Accounts-I',
            'Computer Graphics',
          ],
          lab: ['Digital Compositing-Lab', '3 D Texturing -Lab'],
          ojt: [
            'Compositor MES/Q3505',
            'Texturing Artist MES/Q2503',
            'Rigging Artist MES/Q2502',
          ],
        },
      },
      {
        number: 6,
        roman: 'VI',
        sections: {
          theory: [
            'Muscle System',
            'Rigging',
            'Advanced Modelling with Z - Brush',
            'Basics of Accounts-II',
          ],
          lab: ['Maya Muscle - Lab', 'Rigging with Maya Lab'],
          ojt: ['One more OJT from Semester V'],
        },
      },
    ],
  },
];

function cloneSyllabusYears(source: SyllabusYear[]): SyllabusYear[] {
  return source.map((year) => ({
    ...year,
    semesters: year.semesters.map((semester) => ({
      ...semester,
      sections: {
        theory: [...semester.sections.theory],
        lab: [...semester.sections.lab],
        ojt: [...semester.sections.ojt],
      },
    })),
  }));
}

/** Keep degree syllabi independent so each can evolve without side effects. */
export const BVOC_SYLLABUS_YEARS_GRAPHICS_MULTIMEDIA = cloneSyllabusYears(
  BVOC_BASE_SYLLABUS_YEARS
);
export const BVOC_SYLLABUS_YEARS_ANIMATION_GRAPHIC_DESIGN = cloneSyllabusYears(
  BVOC_BASE_SYLLABUS_YEARS
);

const MEDHAVI_SEMESTER_HIGHLIGHTS = [
  'Fundamental of Art, Design & Computer Graphics',
  '3D Digital Art',
  'Rigging & Character Animation',
  'Dynamics and Motion Graphics',
  'Visual Effects',
  'Advanced Visual Effects',
] as const;

/** Maps PCDP (zica-1) module order to B.Voc semester highlights */
const ZICA_PCDP_MODULE_ORDER = [0, 2, 3, 4, 1, 5] as const;

function buildAnimationVisualEffectsSyllabusFromPcdp(): SyllabusYear[] {
  const course = getCourseById('zica-1');
  const modules = course?.curriculum?.modules;

  if (!modules || modules.length < 6) {
    return cloneSyllabusYears(BVOC_BASE_SYLLABUS_YEARS);
  }

  const semesters: SyllabusSemester[] = ZICA_PCDP_MODULE_ORDER.map((moduleIndex, index) => {
    const mod = modules[moduleIndex];
    return {
      number: index + 1,
      roman: ['I', 'II', 'III', 'IV', 'V', 'VI'][index],
      subtitle: MEDHAVI_SEMESTER_HIGHLIGHTS[index],
      sections: {
        theory: [...mod.topics],
        lab: mod.software ? mod.software.map((tool) => tool) : [],
        ojt: ['Industry Project / On-Job Training'],
      },
    };
  });

  return [
    { number: 1, label: 'Year 1', semesters: semesters.slice(0, 2) },
    { number: 2, label: 'Year 2', semesters: semesters.slice(2, 4) },
    { number: 3, label: 'Year 3', semesters: semesters.slice(4, 6) },
  ];
}

export const BVOC_SYLLABUS_YEARS_ANIMATION_VISUAL_EFFECTS =
  buildAnimationVisualEffectsSyllabusFromPcdp();

export type BvocUniversityName =
  | (typeof BVOC_SHARED)['university']
  | 'Medhavi Skills University';

export type BvocProgram = {
  id: string;
  title: string;
  programName: string;
  fullTitle: string;
  tagline: string;
  years: SyllabusYear[];
  contentVariant?: 'sppu' | 'medhavi';
  medhavi?: MedhaviProgramContent;
  university: BvocUniversityName;
  duration: string;
  eligibilityNote: string;
  whyBVoc: readonly string[];
} & Omit<typeof BVOC_SHARED, 'university' | 'duration' | 'eligibilityNote' | 'whyBVoc'>;

export const BVOC_GRAPHICS_MULTIMEDIA: BvocProgram = {
  ...BVOC_SHARED,
  id: 'bvoc-graphics-multimedia',
  title: 'B.Voc in Graphics & Multimedia',
  programName: 'Graphics & Multimedia',
  fullTitle: 'Bachelor of Vocation (B.Voc.) in Graphics & Multimedia',
  tagline: 'Industry-linked degree with theory, labs, and on-job training from day one.',
  years: BVOC_SYLLABUS_YEARS_GRAPHICS_MULTIMEDIA,
};

export const BVOC_ANIMATION_GRAPHIC_DESIGN: BvocProgram = {
  ...BVOC_SHARED,
  id: 'bvoc-animation-graphic-design',
  title: 'B.Voc in Animation & Graphic Design',
  programName: 'Animation & Graphic Design / Multimedia',
  fullTitle: 'Bachelor of Vocation (B.Voc.) in Animation and Graphic Design / Multimedia',
  tagline: 'From first sketch to studio-ready professional — a three-year creative journey.',
  years: BVOC_SYLLABUS_YEARS_ANIMATION_GRAPHIC_DESIGN,
};

const MEDHAVI_ANIMATION_VFX_CONTENT: MedhaviProgramContent = {
  programmeOverview: [
    'The B.Voc. in Animation and Visual Effects programme at Medhavi Skills University is designed to herald a transformative learning experience, tailored to meet the demands of the future global workforce. The dynamic partnership of Medhavi with Zee Institute of Creative Art (ZICA), aims to revolutionize education in the digital arts. The alliance seeks to seamlessly integrate ZICA’s cutting-edge expertise in animation, VFX, and filmmaking with Medhavi’s robust educational framework. The course is structured to be project-centric and hands-on, complemented by lectures, workshops, industry visits, and live presentations, all aimed at acquainting students with the dynamic realm of animation and visual effects.',
    'The course has been meticulously crafted to empower students with the essential skills and knowledge required by a professional in the field to tackle projects of varying complexities. The curriculum puts emphasis on practical projects and real-world applications to build a robust portfolio. This course will give learners the access to advanced studios and equipment to foster creativity and innovation. They will learn from professionals with extensive industry experience also gain invaluable experience through internships with top companies in the animation and visual effects industry.',
  ],
  degree: '3 Years',
  eligibility: '10+2 (any stream)',
  academicFramework:
    'In navigating a thriving professional trajectory in the current scenario, alongside mastering core competencies, individuals must embrace self-directed learning, cultivate self-awareness, engage in multidisciplinary problem-solving, hone professional-grade practice, foster digital proficiency, grasp current social and global dynamics, and develop employability and industry relevant skills.',
  programmeFeatures: [
    {
      title: 'UGC Recognised Degree',
      image: '/image/Programme Features for B.Voc Animation and Visual Effect/UGC_India_Logo2-1.jpg',
    },
    {
      title: 'Learn & Earn Opportunity',
      image:
        '/image/Programme Features for B.Voc Animation and Visual Effect/education-logo-online-school-and-learning-logo-vector-DFGFD-1.jpg',
    },
    {
      title: 'On Job Training',
      lines: ['(Pan India)'],
      image:
        '/image/Programme Features for B.Voc Animation and Visual Effect/success-leadership-education-book-logo-260nw-1019062198-1.jpg',
    },
    {
      title: 'Blended Learning',
      image:
        '/image/Programme Features for B.Voc Animation and Visual Effect/Blended-Learning-removebg-preview-1.png',
    },
    {
      title: 'Placement Opportunity',
      image: '/image/Programme Features for B.Voc Animation and Visual Effect/job-placement-1.jpg',
    },
  ],
  selectionProcess: [
    'Shortlisting / Counselling by University Counselling Team',
    'After Selection, a Provisional Letter for Admission will be issued by the University.',
  ],
  medhaviEdge: [
    'Multiple Entry and Multiple Exit — With 30% General Education, 70% Skill Training with Skilling and Industry Partners',
    'Work with Industry and Apprenticeship — Opportunity to Work with Industry during education',
    'Industry as/in Campus — For understanding/practice of Industry from Day-1',
    'Industry and Skill Certifications — Certification from Industry & Professional body',
    'Training by Industry Experts — to enable an environment of Industry Grade',
    'Competency Driven Curriculum — For professional competencies and outcomes',
    'Learning the Professional way — Meta Learning, Problem solving, Life skills, Digital comfort and communication',
    'Learning by doing — Practical & Practice to Do-Experience-Learn',
    'Phygital Learning Ecosystem — For smart and life-long learning in 21st century',
    'Continuous and Outcome – based Assessment — What is done/ learnt every day, is assessed in real time',
  ],
  syllabusAlignedCourseId: 'zica-1',
  syllabusAlignedCourseName: 'PCDP in 3D Animation Visual Effects',
};

export const BVOC_ANIMATION_VISUAL_EFFECTS: BvocProgram = {
  ...BVOC_SHARED,
  id: 'bvoc-animation-visual-effects',
  title: 'B.Voc in Animation & Visual Effects',
  programName: 'Animation & Visual Effects',
  fullTitle: 'Bachelor of Vocation (B.Voc.) in Animation and Visual Effects',
  tagline: 'A studio-driven degree for mastering animation craft and professional visual effects.',
  years: BVOC_SYLLABUS_YEARS_ANIMATION_VISUAL_EFFECTS,
  contentVariant: 'medhavi',
  medhavi: MEDHAVI_ANIMATION_VFX_CONTENT,
  university: 'Medhavi Skills University',
  duration: '3 Years · UGC Recognised B.Voc',
  eligibilityNote: 'All eligibility is as per Medhavi Skills University guidelines.',
  whyBVoc: [
    'On-the-job training in a company from day one',
    '60% on-job training in industry and 40% theory in college',
    "B.Voc degree is equivalent to any other bachelor's degree granted by UGC or a University",
    'Stipend during on-job training based on merit',
    'Credit-based program with multiple entry and multiple exit options',
    'Eligible for all state / central government examinations, jobs, and higher studies',
    'NSQF Level certificates provided throughout the program',
  ],
};
