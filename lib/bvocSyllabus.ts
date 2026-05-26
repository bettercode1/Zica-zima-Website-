export interface SyllabusSections {
  theory: string[];
  lab: string[];
  ojt: string[];
}

export interface SyllabusSemester {
  number: number;
  roman: string;
  sections: SyllabusSections;
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

/** SPPU B.Voc syllabus — Graphics & Multimedia / Animation (six semesters) */
export const BVOC_SYLLABUS_YEARS: SyllabusYear[] = [
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

export type BvocProgram = {
  id: string;
  title: string;
  programName: string;
  fullTitle: string;
  tagline: string;
  years: SyllabusYear[];
} & typeof BVOC_SHARED;

export const BVOC_GRAPHICS_MULTIMEDIA: BvocProgram = {
  ...BVOC_SHARED,
  id: 'bvoc-graphics-multimedia',
  title: 'B.Voc in Graphics & Multimedia',
  programName: 'Graphics & Multimedia',
  fullTitle: 'Bachelor of Vocation (B.Voc.) in Graphics & Multimedia',
  tagline: 'Industry-linked degree with theory, labs, and on-job training from day one.',
  years: BVOC_SYLLABUS_YEARS,
};

export const BVOC_ANIMATION_GRAPHIC_DESIGN: BvocProgram = {
  ...BVOC_SHARED,
  id: 'bvoc-animation-graphic-design',
  title: 'B.Voc in Animation & Graphic Design',
  programName: 'Animation & Graphic Design / Multimedia',
  fullTitle: 'Bachelor of Vocation (B.Voc.) in Animation and Graphic Design / Multimedia',
  tagline: 'From first sketch to studio-ready professional — a three-year creative journey.',
  years: BVOC_SYLLABUS_YEARS,
};
