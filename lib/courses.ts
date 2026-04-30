export interface Course {
  id: string;
  name: string;
  duration: string;
  level?: string;
  feeRange?: string;
  description: string;
  category: 'zica' | 'zima';
  icon: string;
  color: string;
  image?: string;
  backgroundImage?: string;
  curriculum?: {
    title: string;
    duration: string;
    modules: {
      name: string;
      duration: string;
      topics: string[];
      software?: string[];
    }[];
  };
  studentProfile?: string;
  breakingNews?: string;
}

export const zicaCourses: Course[] = [
  {
    id: "zica-1",
    name: "PCDP in 3D Animation Visual Effects",
    duration: "36 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "A comprehensive programme designed to equip students with skills in 3D modelling, texturing, rigging, animation, and advanced VFX techniques.",
    category: 'zica',
    icon: "animation",
    color: "from-blue-400 to-indigo-600",
    image: "/image/Courses/zica-1.png",
    backgroundImage: "/image/Courses/zica-1.png",
    curriculum: {
      title: "PROFESSIONAL CAREER DEVELOPMENT PROGRAMME IN 3D ANIMATION AND VISUAL EFFECTS",
      duration: "36 MONTHS",
      modules: [
        {
          name: "FUNDAMENTALS OF ART, DESIGN, AND COMPUTER GRAPHICS",
          duration: "6 MONTHS",
          topics: [
            "History of animation and VFX",
            "Drawing and sketching techniques",
            "Colour theory and painting",
            "Storytelling and scriptwriting",
            "Character design and digital illustration",
            "Storyboarding",
            "Computer graphics",
            "Video and audio editing"
          ],
          software: ["Photoshop", "Illustrator", "Premiere", "Audition"]
        },
        {
          name: "MOTION GRAPHICS AND VISUAL EFFECTS",
          duration: "6 MONTHS",
          topics: [
            "Digital compositing - 1",
            "Digital compositing - 2",
            "Advanced lighting"
          ],
          software: ["After Effects", "Nuke", "Maya", "Arnold"]
        },
        {
          name: "3D DIGITAL ART",
          duration: "6 MONTHS",
          topics: [
            "3D modelling",
            "Environmental modelling",
            "Advanced modelling and sculpting",
            "Advanced texturing"
          ],
          software: ["Maya", "SpeedTree", "ZBrush", "Substance Designer"]
        },
        {
          name: "RIGGING AND CHARACTER ANIMATION",
          duration: "6 MONTHS",
          topics: [
            "Advanced texturing",
            "Rendering and look development",
            "Lighting",
            "Rigging",
            "3D character animation"
          ],
          software: ["Substance Painter", "Marmoset Toolbag", "Maya", "Arnold"]
        },
        {
          name: "CHARACTER ANIMATION AND PARTICLE DYNAMICS",
          duration: "6 MONTHS",
          topics: [
            "Advanced character animation",
            "Dynamics",
            "Cloth simulation",
            "Fluid simulations"
          ],
          software: ["Maya", "XGen", "Bullet", "MASH", "Marvelous Designer", "Bifrost", "RealFlow"]
        },
        {
          name: "ADVANCED VISUAL EFFECTS",
          duration: "6 MONTHS",
          topics: [
            "Digital Compositing - 3",
            "Digital Tracking",
            "Advanced Effects"
          ],
          software: ["SilhouetteFX", "3D Equalizer", "Houdini"]
        }
      ]
    },
    studentProfile: "The certified students will emerge as highly skilled professionals ready to take on various roles in the animation and visual effects industry. They will possess strong artistic skills, technical expertise, creative storytelling, and problem-solving abilities. They will develop a diverse and impressive portfolio showcasing their work across various projects and assignments."
  },
  {
    id: "zica-2",
    name: "PCDP in Animation Visual Effects (Only for Degree Prog) + Additional 1.25 L for MSU",
    duration: "36 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "A degree-linked programme focusing on the core principles of animation and visual effects with academic certification.",
    category: 'zica',
    icon: "movie_filter",
    color: "from-green-400 to-emerald-600",
    image: "/image/Courses/zica-2.png",
    backgroundImage: "/image/Courses/zica-2.png",
    breakingNews: "We offer a BVoc degree program from a reputed university. This course provides a degree in Animation along with extensive hands-on practical training.",
    curriculum: {
      title: "PROFESSIONAL CAREER DEVELOPMENT PROGRAMME IN 3D ANIMATION AND VISUAL EFFECTS (DEGREE PROGRAMME)",
      duration: "36 MONTHS",
      modules: [
        {
          name: "FUNDAMENTALS OF ART, DESIGN, AND COMPUTER GRAPHICS",
          duration: "6 MONTHS",
          topics: [
            "History of animation and VFX",
            "Drawing and sketching techniques",
            "Colour theory and painting",
            "Storytelling and scriptwriting",
            "Character design and digital illustration",
            "Storyboarding",
            "Computer graphics",
            "Video and audio editing"
          ],
          software: ["Photoshop", "Illustrator", "Premiere", "Audition"]
        },
        {
          name: "MOTION GRAPHICS AND VISUAL EFFECTS",
          duration: "6 MONTHS",
          topics: [
            "Digital compositing - 1",
            "Digital compositing - 2",
            "Advanced lighting"
          ],
          software: ["After Effects", "Nuke", "Maya", "Arnold"]
        },
        {
          name: "3D DIGITAL ART",
          duration: "6 MONTHS",
          topics: [
            "3D modelling",
            "Environmental modelling",
            "Advanced modelling and sculpting",
            "Advanced texturing"
          ],
          software: ["Maya", "SpeedTree", "ZBrush", "Substance Designer"]
        },
        {
          name: "RIGGING AND CHARACTER ANIMATION",
          duration: "6 MONTHS",
          topics: [
            "Advanced texturing",
            "Rendering and look development",
            "Lighting",
            "Rigging",
            "3D character animation"
          ],
          software: ["Substance Painter", "Marmoset Toolbag", "Maya", "Arnold"]
        },
        {
          name: "CHARACTER ANIMATION AND PARTICLE DYNAMICS",
          duration: "6 MONTHS",
          topics: [
            "Advanced character animation",
            "Dynamics",
            "Cloth simulation",
            "Fluid simulations"
          ],
          software: ["Maya", "XGen", "Bullet", "MASH", "Marvelous Designer", "Bifrost", "RealFlow"]
        },
        {
          name: "ADVANCED VISUAL EFFECTS",
          duration: "6 MONTHS",
          topics: [
            "Digital Compositing - 3",
            "Digital Tracking",
            "Advanced Effects"
          ],
          software: ["SilhouetteFX", "3D Equalizer", "Houdini"]
        }
      ]
    },
    studentProfile: "The degree-linked certified students will emerge as highly skilled professionals with academic validation. They will possess strong artistic skills, technical expertise, and a degree from a reputed university, making them highly competitive in the animation and VFX industry."
  },
  {
    id: "zica-3",
    name: "PCDP in Advanced Game Art & Design",
    duration: "36 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Game Art and Design is an extensive 36-month programme that provides students with the essential skills and knowledge required to excel in the game art and design industry. It covers a wide range of topics, from fundamental drawing and design principles to advanced techniques in 3D modelling, texturing, rigging, animation, and game development.",
    category: 'zica',
    icon: "joystick",
    color: "from-orange-400 to-rose-500",
    image: "/image/Courses/zica-3.png",
    backgroundImage: "/image/Courses/zica-3.png",
    curriculum: {
      title: "PROFESSIONAL CAREER DEVELOPMENT PROGRAMME IN ADVANCED GAME ART AND DESIGN",
      duration: "36 MONTHS",
      modules: [
        {
          name: "FUNDAMENTALS OF GAME ART AND DESIGN",
          duration: "6 MONTHS",
          topics: [
            "History of Gaming and Game Design Theory",
            "Drawing basics and perspective",
            "Props design",
            "Advanced drawing and character anatomy (Human and creature)",
            "Digital painting techniques",
            "UI/UX design",
            "Prototyping",
            "2D assets designed for games",
            "2D character design"
          ],
          software: ["Photoshop", "XD", "Illustrator"]
        },
        {
          name: "VISUAL DESIGN AND COMPOSITING",
          duration: "6 MONTHS",
          topics: [
            "Fundamentals of photography",
            "Game logo design",
            "Gameplay poster design",
            "Digital Compositing - 1",
            "Digital Compositing - 2"
          ],
          software: ["Illustrator", "Photoshop", "After Effects", "Nuke"]
        },
        {
          name: "ASSET CREATION",
          duration: "6 MONTHS",
          topics: [
            "3D Modelling",
            "Texturing",
            "Advance texturing",
            "Environment design and asset creation",
            "Advanced character modelling"
          ],
          software: ["Blender", "Unreal"]
        },
        {
          name: "ADVANCED LIGHTING AND DYNAMICS",
          duration: "6 MONTHS",
          topics: [
            "Advanced lighting",
            "Dynamics",
            "Complex particles",
            "Basic Blueprint creation"
          ],
          software: ["Unreal", "Niagara Particles"]
        },
        {
          name: "ADVANCED ANIMATION AND BLUEPRINT",
          duration: "6 MONTHS",
          topics: [
            "Character Animation",
            "Advanced Blueprint",
            "Game Logic Implementation"
          ],
          software: ["Unreal Engine"]
        }
      ]
    },
    studentProfile: "The students will emerge as highly skilled professionals ready to excel in the game art and design industry. They will have strong artistic skills in drawing, sketching, and digital painting, along with expertise in industry-standard software for 3D modelling, texturing, rigging, animation, and game design. With a deep understanding of game design principles and UI/UX design, they will be adept at creating compelling game assets, characters, and environments. Their portfolios will showcase their capability to tackle complex challenges and produce high-quality work."
  },
  {
    id: "zica-4",
    name: "PDP in 3D Animation Visual Effects",
    duration: "27 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "3D Animation and Visual Effects is an intensive 27-month programme that provides students with the skills and knowledge required to excel in the dynamic field of animation and visual effects. It covers a wide range of topics, from fundamental art and design principles to advanced techniques in 3D modelling, texturing, rigging, animation, and visual effects.",
    category: 'zica',
    icon: "auto_fix_high",
    color: "from-purple-400 to-violet-600",
    image: "/image/Courses/zica-4.png",
    backgroundImage: "/image/Courses/zica-4.png",
    curriculum: {
      title: "PROFESSIONAL DEVELOPMENT PROGRAMME IN 3D ANIMATION AND VISUAL EFFECTS",
      duration: "27 MONTHS",
      modules: [
        {
          name: "FUNDAMENTALS OF ART, DESIGN, AND COMPUTER GRAPHICS",
          duration: "6 MONTHS",
          topics: [
            "History of Animation and VFX",
            "Drawing basics and sketching techniques",
            "Colour theory and painting",
            "Storytelling and scriptwriting",
            "Character design and digital illustration",
            "Storyboarding",
            "Computer Graphics",
            "Video and audio editing"
          ],
          software: ["Photoshop", "Illustrator", "Premiere", "Audition"]
        },
        {
          name: "3D DIGITAL ART",
          duration: "6 MONTHS",
          topics: [
            "3D modelling using Maya",
            "Environmental modelling",
            "Advanced texturing",
            "Rendering and look development"
          ],
          software: ["Maya", "SpeedTree", "Substance Painter", "Marmoset Toolbag"]
        },
        {
          name: "LIGHTING, ANIMATION, AND DYNAMICS",
          duration: "6 MONTHS",
          topics: [
            "Lighting techniques",
            "Rigging techniques",
            "3D character animation principles",
            "Dynamics",
            "Motion graphics"
          ],
          software: ["Maya", "Arnold", "XGen", "Bullet", "MASH"]
        },
        {
          name: "ADVANCED DYNAMICS AND VISUAL EFFECTS",
          duration: "6 MONTHS",
          topics: [
            "Advanced Dynamics",
            "Fire and Smoke Simulations",
            "Digital Compositing"
          ],
          software: ["Bifrost", "RealFlow", "FumeFX", "After Effects", "Nuke"]
        },
        {
          name: "ELECTIVE SPECIALISATION (ANY 1)",
          duration: "3 MONTHS",
          topics: [
            "Modelling and texturing specialisation",
            "Lighting and shading specialisation",
            "Character animation specialisation",
            "Visual effects specialisation"
          ],
          software: ["ZBrush", "Substance Painter", "Maya", "Arnold", "Nuke", "SilhouetteFX", "3D Equalizer", "Trapcode", "Red Giant"]
        }
      ]
    },
    studentProfile: "The certified students will emerge as highly skilled professionals ready to excel in the animation and visual effects industry. They will possess strong artistic skills in drawing, sketching, and digital illustration, along with technical expertise in industry-standard software for 3D modelling, texturing, rigging, animation, and visual effects. With a deep understanding of storytelling techniques and scriptwriting, they will be adept at creating compelling stories and characters."
  },
  {
    id: "zica-5",
    name: "PDP in Game Art & Design",
    duration: "27 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "This programme is designed for aspiring game designers, programmers, and interactive media creators. Students will learn the core principles of game design, art, storytelling, and production using industry-standard software and emerging technologies. They will acquire the skills needed to create immersive gaming experiences.",
    category: 'zica',
    icon: "videogame_asset",
    color: "from-pink-400 to-rose-600",
    image: "/image/Courses/zica-5.png",
    backgroundImage: "/image/Courses/zica-5.png",
    curriculum: {
      title: "PROFESSIONAL DEVELOPMENT PROGRAMME IN GAME ART AND DESIGN",
      duration: "27 MONTHS",
      modules: [
        {
          name: "FUNDAMENTALS OF GAME ART AND DESIGN",
          duration: "6 MONTHS",
          topics: [
            "History of gaming and game design",
            "Drawing basics and perspective",
            "Props and character anatomy",
            "Digital painting",
            "Game UI/UX design",
            "2D asset design",
            "Character design and final polishing"
          ],
          software: ["Photoshop", "XD", "Illustrator"]
        },
        {
          name: "COMPOSITING AND GAME ASSET CREATION",
          duration: "6 MONTHS",
          topics: [
            "Digital Compositing 1",
            "Digital Compositing 2",
            "Modelling",
            "Environment design and asset creation"
          ],
          software: ["After Effects", "Nuke", "Blender"]
        },
        {
          name: "TEXTURING, RIGGING, AND ANIMATION",
          duration: "6 MONTHS",
          topics: [
            "Texturing",
            "Rigging and skinning",
            "Advanced rigging",
            "Animation"
          ],
          software: ["Blender", "Substance Painter", "Mixamo", "Unreal Engine"]
        },
        {
          name: "ADVANCED LIGHTING, PARTICLES, AND ANIMATION",
          duration: "6 MONTHS",
          topics: [
            "Advanced lighting",
            "Particle system",
            "Basic blueprint creation",
            "Advanced animation"
          ],
          software: ["Unreal Engine", "Niagara", "Cascade", "Particle System", "Animation", "Blueprint", "Sequencer"]
        },
        {
          name: "ADVANCED BLUEPRINT AND PROJECT",
          duration: "3 MONTHS",
          topics: [
            "Advanced Blueprint with assignment",
            "Project"
          ],
          software: ["Unreal Engine"]
        }
      ]
    },
    studentProfile: "The certified students emerge as versatile digital artists and technical creators proficient in digital compositing, 3D modelling, rigging, animation, lighting, and real-time engine workflows. They are adept at using industry-standard tools like Adobe After Effects, Blender, Substance Painter, and Unreal Engine, enabling them to craft cinematic visuals, game-ready assets, and interactive experiences. Their skill set encompasses motion graphics, procedural texturing, character rigging, dynamic lighting, particle systems, and blueprint scripting, preparing them for roles in VFX, game design, and immersive media production."
  },
  {
    id: "zica-6",
    name: "PDP in Film Making Visual Effects",
    duration: "24 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Filmmaking and Visual Effects is a comprehensive 24-month programme designed to equip students with the skills and knowledge required to excel in the filmmaking and visual effects industry. It covers a wide range of topics, from fundamental art and design principles to advanced techniques in 3D modelling, texturing, rigging, animation, and visual effects. Students will gain hands-on experience with industry-standard software and tools, preparing them for successful careers in filmmaking and VFX.",
    category: 'zica',
    icon: "movie",
    color: "from-amber-400 to-orange-600",
    image: "/image/Courses/zica-6.png",
    backgroundImage: "/image/Courses/zica-6.png",
    curriculum: {
      title: "PROFESSIONAL DEVELOPMENT PROGRAMME IN FILMMAKING AND VISUAL EFFECTS",
      duration: "24 MONTHS",
      modules: [
        {
          name: "FUNDAMENTALS OF ART, DESIGN AND FILMMAKING",
          duration: "6 MONTHS",
          topics: [
            "Introduction to Animation and VFX industry",
            "Fundamentals of art and design",
            "Computer graphics",
            "Digital painting and matte painting",
            "Principles of Design and Frame Composition",
            "Storyboarding",
            "Fundamentals of photography",
            "Photo editing essentials",
            "Foundation of filmmaking",
            "Scriptwriting and Cinematography",
            "Video and audio editing"
          ],
          software: ["Photoshop", "Lightroom", "Premiere", "Audition"]
        },
        {
          name: "3D DIGITAL ART",
          duration: "6 MONTHS",
          topics: [
            "3D modelling and texturing",
            "Lighting techniques",
            "Rigging techniques"
          ],
          software: ["Maya", "Arnold"]
        },
        {
          name: "DYNAMICS AND VISUAL EFFECTS",
          duration: "6 MONTHS",
          topics: [
            "3D Character Animation Principles",
            "Advanced Dynamics",
            "Digital Compositing"
          ],
          software: ["Maya", "xGen", "Bullet", "Mash", "Bifrost", "RealFlow", "After Effects"]
        },
        {
          name: "ADVANCED VISUAL EFFECTS",
          duration: "6 MONTHS",
          topics: [
            "Animating 3D models",
            "Advanced rotoscopy",
            "Digital 2D tracking",
            "Digital compositing",
            "3D camera tracking",
            "Advanced effects",
            "Energy-based effects",
            "Portfolio development"
          ],
          software: ["Element 3D", "SilhouetteFX", "Mocha", "Nuke", "3D Equalizer", "Trapcode", "Red Giant", "Saber"]
        }
      ]
    },
    studentProfile: "The certified students will emerge as highly skilled professionals ready to excel in the filmmaking and visual effects industry. They will possess strong artistic skills and technical expertise in industry-standard software for 3D modelling, texturing, rigging, animation, and visual effects. With a deep understanding of filmmaking principles and visual storytelling, they will be adept at creating compelling films and visual effects."
  },
  {
    id: "zica-7",
    name: "PDP in Interior Design",
    duration: "24 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "The Interior Design programme deals with the art and science of enhancing the interior of a building's inner space to achieve an aesthetically pleasing and functional environment. This programme covers the essentials of design, art, and drawing, along with furniture design, material sourcing, interior graphics, an introduction to CAD, construction, services, case studies, building materials, and more, to help you become a professional interior designer.",
    category: 'zica',
    icon: "weekend",
    color: "from-cyan-400 to-blue-500",
    image: "/image/Courses/zica-7.png",
    backgroundImage: "/image/Courses/zica-7.png",
    curriculum: {
      title: "PROFESSIONAL DEVELOPMENT PROGRAMME IN INTERIOR DESIGN",
      duration: "24 MONTHS",
      modules: [
        {
          name: "DESIGN FUNDAMENTALS AND CONCEPTUALIZATION",
          duration: "6 MONTHS",
          topics: [
            "History of Interior Furniture Design (Indian and Western)",
            "Concept of Interior Design",
            "Fundamental of art",
            "Free-hand drawing",
            "Design development",
            "Space planning",
            "Services and techniques (theory and practical)"
          ],
          software: ["CAD", "Google SketchUp"]
        },
        {
          name: "RESIDENTIAL DESIGN AND TECHNICAL DRAFTING",
          duration: "6 MONTHS",
          topics: [
            "Architectural drafting",
            "Interior Design - Residential",
            "2D and 3D computer-aided drawing (CAD, SketchUp, 3D model-making, AR/VR)",
            "Computer graphic skills",
            "Creativity and concept development",
            "BOQ, budget and costing",
            "Drawing presentation",
            "Application and execution",
            "Introduction of AR and VR",
            "Portfolio"
          ],
          software: ["CAD", "Google SketchUp"]
        },
        {
          name: "RETAIL DESIGN AND CONSTRUCTION STUDIES",
          duration: "6 MONTHS",
          topics: [
            "Furniture history and application",
            "Design Studio Workshop 2: Retail",
            "Construction studies",
            "Services - Plumbing, lighting, AC, etc",
            "Computer rendering walkthrough"
          ],
          software: ["Illustrator (Introduction)", "Photoshop (Introduction)", "CAD", "3D drawings", "Google SketchUp"]
        },
        {
          name: "COMMERCIAL DESIGN AND PROFESSIONAL PRACTICE",
          duration: "6 MONTHS",
          topics: [
            "Design Studio Workshop 3: Office",
            "Design Studio Workshop 4: Restaurant and Hospitality",
            "Academic research and communication skills",
            "Industrial experience, internship, application and execution",
            "Portfolio development"
          ],
          software: ["CAD", "Google SketchUp - 3D (Walkthrough)"]
        }
      ]
    },
    studentProfile: "Graduates of this course can pursue careers as Interior Designers in residential, commercial, office, retail, hospitality, and public space design. They can also work as exhibition and stall designers, visual merchandisers, event and set designers, furniture designers, art directors, design consultants, colour consultants, or design entrepreneurs."
  },
  {
    id: "zica-8",
    name: "PDP in Fashion Design",
    duration: "24 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Our industry-focused Fashion Design programme emphasises comprehensive project-based learning, covering research, design development, pattern-making, and production techniques, as well as marketing and merchandising strategies. Students cultivate a heightened appreciation for design and refine their fashion aesthetics while nurturing their unique creative abilities. Through industry exposure, students gain a competitive edge, enhancing their creative thinking, ideation clarity, and presentation skills. Encouraged to cultivate their personal style, students learn to make a distinctive fashion statement. They acquire the confidence and expertise to conceptualise, design, produce, and showcase their collections.",
    category: 'zica',
    icon: "checkroom",
    color: "from-teal-400 to-emerald-500",
    image: "/image/Courses/zica-8.png",
    backgroundImage: "/image/Courses/zica-8.png",
    curriculum: {
      title: "PROFESSIONAL DEVELOPMENT PROGRAMME IN FASHION DESIGN",
      duration: "24 MONTHS",
      modules: [
        {
          name: "FOUNDATIONS OF FASHION DESIGN",
          duration: "8 MONTHS",
          topics: [
            "Drawing and Geometry",
            "Basic design elements, principles of design and colour theory",
            "Fashion model drawing and illustration",
            "Design Project: Theme concept mood board",
            "Basic pattern making",
            "Basic garment construction",
            "History of art and design: Indian and Western",
            "Computers",
            "Introduction to embroideries: Basic embroidery and Indian embroidery",
            "Textile Science 1: Fiber to fabric"
          ],
          software: ["Word", "PowerPoint", "Excel"]
        },
        {
          name: "ADVANCED DESIGN AND TEXTILES",
          duration: "8 MONTHS",
          topics: [
            "Basic Design - 2",
            "Design Principles - II",
            "Basic draping - Draping skirt and bodice",
            "Design Project I - (Skirt): Research, design development, theme concept mood board, pattern making and garment construction",
            "Design Project II - (Dress): Research, design development, theme concept mood board, pattern making and garment construction",
            "History of textiles: Indian and Western",
            "Fashion marketing",
            "Fashion forecasting - Market research",
            "Textile Science 2: Dyeing and printing"
          ],
          software: ["CAD", "Photoshop", "Illustrator", "CorelDRAW"]
        },
        {
          name: "PROFESSIONAL PORTFOLIO AND PRODUCTION",
          duration: "8 MONTHS",
          topics: [
            "Design Project: Draping - Draped Dress",
            "Design Project III - (Evening Wear): Research, design development, theme concept mood board, pattern making and garment construction",
            "Design Project IV - (Ethnic Wear): Research, design development, theme concept mood board, pattern making and garment construction",
            "CAD/CAM for Fashion and Textiles - Industry Software (Optitex / ReachCAD)",
            "Fashion Merchandising",
            "Managing export import business",
            "Manufacturing methods and processes, and quality control",
            "Portfolio development",
            "Project Styling: Films and advertisement",
            "Textile: Product development",
            "Fashion photography",
            "Fashion accessories",
            "Design Project V - (Final Collection): Research, design development, theme concept mood board, pattern making and garment construction",
            "Digital portfolio"
          ],
          software: ["CAD", "Photoshop", "Illustrator", "CorelDRAW"]
        }
      ]
    },
    studentProfile: "This course enables students to be professional fashion designers and work in the apparel industry, export houses, garment manufacturing, fashion retail stores, online fashion businesses, bloggers, and stylists in the media and film industry. As an entrepreneur, students learn how to launch their brand and open a boutique or fashion store."
  },
  {
    id: "zica-9",
    name: "Professional Programme in 2D Digital Animation",
    duration: "12 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "2D Digital Animation is an intensive 12-month programme that provides students with the essential skills and knowledge required to excel in 2D animation. It covers a wide range of topics, from fundamental art and design principles to advanced techniques in digital animation. Students will gain hands-on experience with industry-standard software and tools, preparing them for successful careers in 2D animation.",
    category: 'zica',
    icon: "draw",
    color: "from-red-400 to-orange-500",
    image: "/image/Courses/zica-9.png",
    backgroundImage: "/image/Courses/zica-9.png",
    curriculum: {
      title: "PROFESSIONAL PROGRAMME IN 2D DIGITAL ANIMATION",
      duration: "12 MONTHS",
      modules: [
        {
          name: "FUNDAMENTALS OF ART, DESIGN, VISUALISATION AND COMPUTER GRAPHICS",
          duration: "6 MONTHS",
          topics: [
            "History of animation and overview of sketching",
            "Principles of design and visual communication",
            "Perspective study (One, two, and three-point perspective)",
            "Sketching techniques and gesture drawing",
            "Still life composition and lighting",
            "Colour theory and cartoon drawing",
            "Human figure study and anatomy",
            "Animal study and anatomy",
            "Story creation and scriptwriting",
            "Introduction to computer graphics using Photoshop",
            "Character design and development",
            "Master layout design and background design"
          ],
          software: ["Photoshop"]
        },
        {
          name: "2D DIGITAL ANIMATION",
          duration: "6 MONTHS",
          topics: [
            "Storyboarding and animatic creation",
            "Digital 2D animation",
            "Character creation and background design",
            "Motion path animation and special effects",
            "Biomechanics and organic animation",
            "Walk cycles and run cycles",
            "Facial expressions and lip-synching",
            "Special effects animation (Water, fire, wind, lightning, and blast)"
          ],
          software: ["Animate"]
        }
      ]
    },
    studentProfile: "The certified students will emerge as highly skilled professionals ready to excel in the 2D animation industry. They will possess strong artistic skills in drawing, sketching, and digital painting, along with technical expertise in industry-standard software for 2D animation. With a deep understanding of animation principles and character design, they will be adept at creating compelling animations and visual stories."
  },
  {
    id: "zica-10",
    name: "Professional Programme in 3D Animation",
    duration: "12 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "3D Animation is an intensive 12-month programme that equips students with the core skills and knowledge needed to succeed in 3D animation. It covers a wide range of topics, from fundamental art and design principles to advanced techniques in 3D modelling, texturing, rigging, animation, and dynamics. At the end of the program, students will choose one of four specialisations, aligning their skills and portfolio with their desired career path.",
    category: 'zica',
    icon: "view_in_ar",
    color: "from-indigo-400 to-purple-500",
    image: "/image/Courses/zica-10.png",
    backgroundImage: "/image/Courses/zica-10.png",
    curriculum: {
      title: "PROFESSIONAL PROGRAMME IN 3D ANIMATION",
      duration: "12 MONTHS",
      modules: [
        {
          name: "FUNDAMENTALS OF ART AND COMPUTER GRAPHICS",
          duration: "2 MONTHS",
          topics: [
            "History of animation",
            "Fundamentals of art and design",
            "Principles of design and visual communication",
            "Computer graphics",
            "Digital painting and matte painting"
          ],
          software: ["Photoshop"]
        },
        {
          name: "3D ANIMATION USING MAYA",
          duration: "7 MONTHS",
          topics: [
            "3D modelling and texturing",
            "Lighting techniques",
            "Rigging techniques",
            "3D character animation principles"
          ],
          software: ["Maya", "Arnold"]
        },
        {
          name: "ANY ONE SPECIALISATION",
          duration: "3 MONTHS",
          topics: [
            "Modelling and texturing",
            "Lighting and shading",
            "Character animation",
            "Dynamics"
          ],
          software: ["ZBrush", "Substance Painter", "Maya", "Arnold", "After Effects", "Bifrost", "RealFlow", "FumeFX"]
        }
      ]
    },
    studentProfile: "The certified students will emerge as highly skilled professionals ready to excel in the 3D animation industry. They will possess strong artistic skills in drawing, sketching, and digital painting, along with technical expertise in industry-standard software for 3D modelling, texturing, rigging, animation, and dynamics. With a deep understanding of animation principles and character design, they will be adept at creating compelling animations and visual stories."
  },
  {
    id: "zica-11",
    name: "Professional Programme in Visual Effects",
    duration: "12 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Visual Effects is a comprehensive 12-month programme that provides students with the skills and knowledge required to excel in the visual effects industry. It covers a wide range of topics, from fundamental design principles to advanced techniques in 3D modelling, texturing, lighting, dynamics, and digital compositing. Students will gain hands-on experience with industry-standard software and tools, preparing them for successful careers in visual effects and production.",
    category: 'zica',
    icon: "auto_fix_normal",
    color: "from-blue-500 to-indigo-700",
    image: "/image/Courses/zica-11.png",
    backgroundImage: "/image/Courses/zica-11.png",
    curriculum: {
      title: "PROFESSIONAL PROGRAMME IN VISUAL EFFECTS",
      duration: "12 MONTHS",
      modules: [
        {
          name: "FUNDAMENTALS OF DESIGN, COMPUTER GRAPHICS AND FILMMAKING",
          duration: "3 MONTHS",
          topics: [
            "Introduction to visual effects",
            "Principles of design and visual communication",
            "Computer graphics",
            "Digital painting and matte painting",
            "Video and Audio editing"
          ],
          software: ["Photoshop", "Premiere", "Audition"]
        },
        {
          name: "INTRODUCTION TO 3D DIGITAL ART USING MAYA",
          duration: "3 MONTHS",
          topics: [
            "3D modelling",
            "Texturing",
            "Lighting Techniques"
          ],
          software: ["Maya"]
        },
        {
          name: "DYNAMICS AND FLUID EFFECTS",
          duration: "1.5 MONTHS",
          topics: [
            "Dynamics",
            "Fluid Effects",
            "Crowd Animation"
          ],
          software: ["Maya", "XGen", "Bullet", "MASH"]
        },
        {
          name: "VISUAL EFFECTS AND TRACKING",
          duration: "4.5 MONTHS",
          topics: [
            "Digital Compositing",
            "Advanced Compositing Techniques",
            "Rotoscopy",
            "3D Camera Tracking"
          ],
          software: ["After Effects", "Nuke", "SilhouetteFX", "3D Equalizer"]
        }
      ]
    },
    studentProfile: "The certified students will emerge as highly skilled professionals, equipped to excel in the visual effects industry. They will possess strong skills in dynamics and digital compositing, alongside a deep understanding of visual storytelling and filmmaking principles. This expertise will enable them to create compelling visual effects and deliver exceptional post-production work."
  },
  {
    id: "zica-12",
    name: "Professional Programme in Game Art and Design",
    duration: "12 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Game Art and Design is a dynamic 12-month course designed to immerse students in game art and design. It offers a comprehensive curriculum that spans from the foundational principles of game design to advanced techniques in digital painting, 3D modelling, and animation. Students will gain hands-on experience with industry-standard software, preparing them to create visually stunning and engaging game environments and characters.",
    category: 'zica',
    icon: "sports_esports",
    color: "from-green-500 to-emerald-700",
    image: "/image/Courses/zica-12.png",
    backgroundImage: "/image/Courses/zica-12.png",
    curriculum: {
      title: "PROFESSIONAL PROGRAMME IN GAME ART AND DESIGN",
      duration: "12 MONTHS",
      modules: [
        {
          name: "FUNDAMENTALS OF GAME ART AND DESIGN",
          duration: "6 MONTHS",
          topics: [
            "Introduction to game design",
            "Drawing basics and perspective",
            "Props design",
            "Advanced drawing and character anatomy",
            "Digital painting techniques",
            "Introduction to character design",
            "Digital compositing"
          ],
          software: ["Photoshop", "Illustrator", "After Effects"]
        },
        {
          name: "3D MODELING AND ANIMATION",
          duration: "6 MONTHS",
          topics: [
            "Basic and advanced modelling techniques",
            "PBR workflow and texture painting",
            "Environment design and asset creation",
            "Bone structures and constraints",
            "Keyframe animation and graph editor",
            "Lighting principles and techniques",
            "Blueprint creation and level design"
          ],
          software: ["Blender", "Substance Painter", "Unreal Engine"]
        }
      ]
    },
    studentProfile: "The certified students will emerge as versatile and skilled professionals ready to make their mark in the game art and design industry. They will possess a robust understanding of game design principles, coupled with advanced skills in digital painting, 3D modelling, and animation. With hands-on experience in industry-standard software, they will craft detailed game assets, immersive environments, and dynamic characters. Their portfolios will showcase a seamless blend of creativity and technical skill, making them standout additions to any game development team."
  },
  {
    id: "zica-13",
    name: "Professional Programme in Graphic Design",
    duration: "12 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Graphic Design is a meticulously crafted 12-month course aimed at nurturing creative talent and transforming them into proficient graphic designers. It delves into the core principles of design, digital illustration, and computer graphics, equipping students with the skills to create visually compelling designs. Through hands-on projects and real-world applications, students will learn to master industry-standard software and develop a robust portfolio that showcases their unique style and technical prowess.",
    category: 'zica',
    icon: "palette",
    color: "from-orange-500 to-rose-600",
    image: "/image/Courses/zica-13.png",
    backgroundImage: "/image/Courses/zica-13.png",
    curriculum: {
      title: "PROFESSIONAL PROGRAMME IN GRAPHIC DESIGN",
      duration: "12 MONTHS",
      modules: [
        {
          name: "FUNDAMENTALS OF ART, DESIGN, ILLUSTRATION, AND COMPUTER GRAPHICS",
          duration: "6 MONTHS",
          topics: [
            "Visual design concepts",
            "Colour theory",
            "Digital illustrations",
            "Computer graphics",
            "Design techniques and photo effects"
          ],
          software: ["Illustrator", "Photoshop", "Canva"]
        },
        {
          name: "LAYOUT DESIGN, UI, MOTION GRAPHICS, AND 3D PHOTOREALISTIC DESIGN",
          duration: "6 MONTHS",
          topics: [
            "Digital illustrations - 2",
            "Motion graphics",
            "Prototype mobile app design",
            "Photorealistic 3D design"
          ],
          software: ["CorelDRAW", "After Effects", "XD", "Figma", "Dimension"]
        }
      ]
    },
    studentProfile: "The students will emerge as innovative and skilled graphic designers ready to excel in the creative industry. They will possess a deep understanding of design principles, colour theory, and digital illustration, along with advanced skills in industry-standard software. Their ability to create compelling visual content, from branding and packaging to motion graphics and UI design, will make them valuable assets to any creative team."
  },
  {
    id: "zica-14",
    name: "Professional Programme in UI and UX Design",
    duration: "12 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "The Ul and UX design programme is an intensive 12-month course designed to equip students with the essential skills and knowledge to excel in user interface and user experience design. It covers a comprehensive range of topics, from the fundamental principles of UI/UX design to advanced techniques in wireframing, prototyping, and usability testing. Students will gain hands-on experience with industry-standard tools and methodologies, preparing them to create intuitive and engaging digital experiences.",
    category: 'zica',
    icon: "devices",
    color: "from-purple-500 to-violet-700",
    image: "/image/Courses/zica-14.png",
    backgroundImage: "/image/Courses/zica-14.png",
    curriculum: {
      title: "PROFESSIONAL PROGRAMME IN UI AND UX DESIGN",
      duration: "12 MONTHS",
      modules: [
        {
          name: "FUNDAMENTALS OF UI/UX DESIGN",
          duration: "6 MONTHS",
          topics: [
            "Fundamental principles of UI and UX design",
            "Understanding and applying design principles",
            "Colour theory",
            "Using typography effectively in design",
            "Computer graphics",
            "Laws of UX design",
            "Problem-defining documentation",
            "Defining research data"
          ],
          software: ["Photoshop", "Notion", "Miro"]
        },
        {
          name: "ADVANCED UI/UX TECHNIQUES",
          duration: "6 MONTHS",
          topics: [
            "Digital illustrations",
            "Creating prototypes and content grids",
            "Collaborative ideation",
            "Advanced wireframing and usability testing",
            "Design system and UI design"
          ],
          software: ["Illustrator", "XD", "FigJam", "Marvel", "Figma"]
        }
      ]
    },
    studentProfile: "The certified students will emerge as proficient and innovative UI/UX designers ready to excel in the digital design industry. Their ability to conduct user research, define problem statements, and collaborate effectively will make them valuable assets to any design team and contribute to the success of digital products and services."
  },
  {
    id: "zica-15",
    name: "Professional Programme in Digital Design and Marketing",
    duration: "12 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Digital Design and Marketing is a dynamic 12-month course designed to equip students with the skills and knowledge required to excel in digital design and marketing. It offers a comprehensive curriculum that spans from the foundational principles of design to advanced techniques in digital marketing. Students will gain hands-on experience with industry-standard software and tools, preparing them to create visually compelling designs and effective marketing strategies. It is tailored to foster creativity, technical proficiency, and strategic thinking, ensuring graduates are well-prepared to thrive in the competitive digital landscape.",
    category: 'zica',
    icon: "campaign",
    color: "from-pink-500 to-rose-700",
    image: "/image/Courses/zica-15.png",
    backgroundImage: "/image/Courses/zica-15.png",
    curriculum: {
      title: "PROFESSIONAL PROGRAMME IN DIGITAL DESIGN AND MARKETING",
      duration: "12 MONTHS",
      modules: [
        {
          name: "DIGITAL DESIGN",
          duration: "6 MONTHS",
          topics: [
            "Principles of design",
            "Colour theory",
            "Digital illustrations - 1",
            "Computer graphics",
            "Video and audio editing"
          ],
          software: ["Illustrator", "Photoshop", "Premiere", "Audition"]
        },
        {
          name: "DIGITAL MARKETING",
          duration: "6 MONTHS",
          topics: [
            "Digital illustrations - 2",
            "Introduction to digital marketing",
            "Social media marketing and platforms",
            "Website and Google Suite",
            "Analytics and tracking",
            "Search and paid advertising",
            "Advanced advertising",
            "Email, automation, and CRO",
            "Specialised marketing channels",
            "Business strategy and planning",
            "Advanced content and optimisation",
            "Project and portfolio development"
          ],
          software: ["CorelDRAW", "Google Suite", "Microsoft", "Clarity", "HubSpot CRM"]
        }
      ]
    },
    studentProfile: "The certified students will emerge as versatile and skilled professionals ready to excel in digital design and marketing. Their ability to create compelling visual content and effective marketing strategies will make them valuable assets to any organisation. With hands-on experience in digital marketing tools and techniques, they will be adept at driving engagement and conversions. Their diverse portfolio will showcase their creativity, technical proficiency, and strategic thinking, making them well-prepared to tackle complex challenges and contribute to the success of digital campaigns."
  },
  {
    id: "zica-16",
    name: "Professional Programme in Visual Promotion and Ad Design",
    duration: "12 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "This programme has been carefully designed to offer specialised knowledge of product and advertisement visual design. It covers the essential principles of product promotional design, focusing on both the creation and visualisation aspects of ad design. Throughout the course, students will engage with various platforms of visual promotion to ensure that they are well-equipped to understand the dynamics of promotion across different sectors. In the final module, students will have the opportunity to select elective specialisations, allowing them to hone their skills and expertise in specific areas of interest.",
    category: 'zica',
    icon: "ads_click",
    color: "from-amber-500 to-orange-700",
    image: "/image/Courses/zica-16.png",
    backgroundImage: "/image/Courses/zica-16.png",
    curriculum: {
      title: "PROFESSIONAL PROGRAMME IN VISUAL PROMOTION AND AD DESIGN",
      duration: "12 MONTHS",
      modules: [
        {
          name: "FUNDAMENTALS OF MEDIA AND VISUAL DESIGN",
          duration: "3 MONTHS",
          topics: [
            "Principle of product promotion",
            "Fundamental of perspective drawing",
            "Colour theory",
            "Fundamentals of product design",
            "Fundamentals of static and visual product design",
            "Concept of static and visual promotion"
          ],
          software: ["Photoshop", "Illustrator", "After Effects"]
        },
        {
          name: "3D PRODUCT MODELLING AND ANIMATION",
          duration: "5 MONTHS",
          topics: [
            "3D product and industrial modelling",
            "Shading and lighting",
            "Texture and light baking",
            "Rigging for animation",
            "Visual effects for product presentation",
            "Fundamental of product display animation",
            "Camera movement and depth",
            "Fundamentals rendering (object and light)",
            "2.5D projection mapping",
            "Fundamentals of anamorphic video"
          ],
          software: ["Blender"]
        },
        {
          name: "MOTION GRAPHICS AND COMPOSITING",
          duration: "2 MONTHS",
          topics: [
            "Introduction to Unreal",
            "Product shading and texturing",
            "Look development",
            "2D motion graphics",
            "Compositing",
            "Fundamentals of Matchmove",
            "Advance tracking system",
            "3D motion graphics",
            "Fundamentals of marketing product visualisation",
            "Colour correction",
            "Product visual output"
          ],
          software: ["Unreal", "3DEqualizer", "After Effects", "Premiere"]
        },
        {
          name: "PROJECT (ANY ONE)",
          duration: "2 MONTHS",
          topics: [
            "Creating static CGI advertisements with no camera motion",
            "Creating dynamic CGI advertisements with camera motion",
            "Creating dynamic CGI advertisements with camera motion and object motion",
            "Creating anamorphic video presentation for front and L shape screen"
          ],
          software: ["Photoshop", "Illustrator", "After Effects", "Blender", "Unreal", "3DEqualizer", "Premiere"]
        }
      ]
    },
    studentProfile: "The student will master visual promotional design, translating marketing ideas into compelling print and motion designs. The programme offers practical exposure to product and ad design, preparing students for roles in multinational companies. They will be ready for careers as ad developers, visual communicators, CGI artists, 2D designers, graphic designers, and more, contributing to top advertising and design teams."
  },
  {
    id: "zica-17",
    name: "Professional Programme in Graphic and Web Design",
    duration: "12 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Graphic and Web Design is an immersive 12-month course that provides students with the essential skills and knowledge required to excel in graphic and web design. It covers a wide range of topics from foundational design principles to advanced techniques in digital illustration, web design, and user experience design. Students will gain hands-on experience with industry-standard software and tools, preparing them to create visually compelling designs and functional websites. The curriculum is structured to promote creativity, technical proficiency, and strategic thinking, ensuring that students are well-prepared to meet the demands of the dynamic design industry.",
    category: 'zica',
    icon: "web",
    color: "from-cyan-500 to-blue-600",
    image: "/image/Courses/zica-17.png",
    backgroundImage: "/image/Courses/zica-17.png",
    curriculum: {
      title: "PROFESSIONAL PROGRAMME IN GRAPHIC AND WEB DESIGN",
      duration: "12 MONTHS",
      modules: [
        {
          name: "GRAPHIC DESIGN",
          duration: "6 MONTHS",
          topics: [
            "Digital illustrations - 1",
            "Computer graphics",
            "Digital illustrations - 2",
            "Layout design"
          ],
          software: ["Illustrator", "Photoshop", "CorelDRAW", "InDesign"]
        },
        {
          name: "WEB DESIGN",
          duration: "6 MONTHS",
          topics: [
            "Introduction to web design",
            "Designing components and prototyping",
            "HTML and CSS foundations",
            "UI/UX design and project work",
            "JavaScript basics",
            "Responsive design, framework, and SEO",
            "Final project and portfolio development"
          ],
          software: ["Figma", "HTML and CSS", "JavaScript", "Bootstrap"]
        }
      ]
    },
    studentProfile: "The certified students will emerge as versatile and skilled professionals ready to excel in graphic and web design. Their ability to create compelling visual content and functional websites will make them valuable assets to any organisation. With hands-on experience in web design tools and techniques, they will be adept at designing user-friendly interfaces and responsive layouts. Their diverse portfolio will showcase their creativity, technical proficiency, and strategic thinking, ensuring they are well-prepared to contribute to the success of digital projects."
  },
  {
    id: "zica-18",
    name: "Professional Programme in Interior Design",
    duration: "12 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Interior design is a multifaceted profession that includes conceptual development, space planning, site inspections, programming, research, communicating with stakeholders, construction management, and execution. This 12-month programme is designed for a student to get better employment opportunities.",
    category: 'zica',
    icon: "chair",
    color: "from-teal-500 to-emerald-600",
    image: "/image/Courses/zica-18.png",
    backgroundImage: "/image/Courses/zica-18.png",
    curriculum: {
      title: "PROFESSIONAL PROGRAMME IN INTERIOR DESIGN",
      duration: "12 MONTHS",
      modules: [
        {
          name: "FUNDAMENTALS OF INTERIOR DESIGN",
          duration: "6 MONTHS",
          topics: [
            "History of interior design (Indian and Western)",
            "Concept of interior design",
            "Fundamental of art",
            "Free-hand drawing",
            "Design development",
            "Space planning",
            "Services, techniques, theory, and practical"
          ],
          software: ["CAD", "Google SketchUp"]
        },
        {
          name: "ADVANCED INTERIOR DESIGN AND EXECUTION",
          duration: "6 MONTHS",
          topics: [
            "Architectural drafting",
            "Interior design: Residential",
            "2D and 3D computer-aided drawing",
            "Computer graphic skills",
            "Creativity and concept development",
            "BOQ, budget and costing",
            "Drawing presentation",
            "Application and execution",
            "Portfolio"
          ],
          software: ["CAD", "Google SketchUp"]
        }
      ]
    },
    studentProfile: "The students will be accomplished graduates, poised to contribute to residential space design, design consultancy, colour consultation, and entrepreneurial ventures in design. Equipped with strong technical skills and a fresh creative perspective, they will be ready to infuse innovation, artistry, and expertise into every project."
  },
  {
    id: "zica-19",
    name: "Professional Programme in Fashion Design",
    duration: "12 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Fashion design blends aesthetics with technical mastery, encompassing creative processes and technical proficiency. Emphasising research and experimentation, the programme offers diverse approaches to design. Students acquire updated technical skills and knowledge essential for the modern workplace, focusing on research, design development, pattern making, garment manufacturing, production technology, and marketing merchandising. Through this comprehensive curriculum, aspiring fashion professionals gain the expertise needed to excel in the dynamic field of fashion design.",
    category: 'zica',
    icon: "apparel",
    color: "from-red-500 to-orange-600",
    image: "/image/Courses/zica-19.png",
    backgroundImage: "/image/Courses/zica-19.png",
    curriculum: {
      title: "PROFESSIONAL PROGRAMME IN FASHION DESIGN",
      duration: "12 MONTHS",
      modules: [
        {
          name: "FUNDAMENTALS OF FASHION DESIGN",
          duration: "6 MONTHS",
          topics: [
            "Drawing and Geometry",
            "Basic design: Elements and principles of design and colour theory",
            "Fashion model drawing and illustration",
            "Design project: Theme concept mood board",
            "Basic pattern making",
            "Basic garment construction",
            "History of art and design: Indian and western",
            "Computers",
            "Introduction to embroideries: Basic embroidery and Indian embroidery",
            "Textile Science 1 - Fiber to fabric"
          ],
          software: ["Word", "PowerPoint", "Excel"]
        },
        {
          name: "ADVANCED FASHION DESIGN AND TECHNOLOGY",
          duration: "6 MONTHS",
          topics: [
            "Basic Design - 2",
            "Design Principles - II",
            "Basic draping - Draping skirt and bodice",
            "Design Project I - (Skirt): Research, design development, theme concept mood board, pattern making and garment construction",
            "Design Project II - (Dress): Research, design development, theme concept mood board, pattern making and garment construction",
            "History of textiles: Indian and Western",
            "Fashion marketing",
            "Fashion forecasting - Market research",
            "Textile Science 2: Dyeing and printing"
          ],
          software: ["CAD", "Photoshop", "Illustrator", "CorelDRAW"]
        }
      ]
    },
    studentProfile: "A certified professional in Fashion Design holds promising prospects in the industry. With a comprehensive understanding, they possess the versatility to excel in roles encompassing design, production, marketing, and more. Their expertise ensures valuable contributions to the dynamic landscape of fashion design."
  },
  {
    id: "zica-20",
    name: "Programme in Graphic Design",
    duration: "6 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Graphic Design is an intensive 6-month course designed to provide students with the essential skills and knowledge required to excel in the graphic design field. It covers a wide range of topics from foundational design principles to advanced techniques in digital illustration and layout design. Students will gain hands-on experience with industry-standard software, preparing them to create visually compelling designs.",
    category: 'zica',
    icon: "design_services",
    color: "from-indigo-500 to-purple-600",
    image: "/image/Courses/zica-20.png",
    backgroundImage: "/image/Courses/zica-20.png",
    curriculum: {
      title: "PROGRAMME IN GRAPHIC DESIGN",
      duration: "6 MONTHS",
      modules: [
        {
          name: "GRAPHIC DESIGN",
          duration: "6 MONTHS",
          topics: [
            "Digital illustrations - 1",
            "Computer graphics",
            "Digital illustrations - 2",
            "Layout design"
          ],
          software: ["Illustrator", "Photoshop", "CorelDRAW", "InDesign"]
        }
      ]
    },
    studentProfile: "The certified students will emerge as creative and skilled graphic designers ready to excel in the graphic design industry. Their ability to create compelling visual content, from branding and packaging to digital illustrations, will make them valuable assets to any creative team. With a diverse portfolio showcasing their creativity and technical proficiency, they will be well-prepared to contribute to the visual storytelling of brands and businesses."
  },
  {
    id: "zica-21",
    name: "Programme in Web Design",
    duration: "6 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "The Program in Web Design (PWD) is a complete 6-month course designed to equip students with the skills and knowledge required to excel in the field of web design. This program covers a wide range of topics, from the basics of design principles to advanced techniques in HTML, CSS, JavaScript, and responsive design. Students will gain hands-on experience with industry-standard tools and methodologies, preparing them to create visually appealing and user-friendly websites.",
    category: 'zica',
    icon: "language",
    color: "from-blue-400 to-indigo-500",
    image: "/image/Courses/zica-21.png",
    backgroundImage: "/image/Courses/zica-21.png",
    curriculum: {
      title: "PROGRAMME IN WEB DESIGN",
      duration: "6 MONTHS",
      modules: [
        {
          name: "WEB DESIGN",
          duration: "6 MONTHS",
          topics: [
            "Introduction to web design and design basics",
            "Elements and principles of design",
            "Introduction to UI/UX design and wireframing",
            "Designing components and prototyping",
            "Typography and colour theory",
            "HTML and CSS foundation",
            "UI/UX design and project work",
            "JavaScript basics",
            "Responsive design, framework and SEO",
            "Web hosting",
            "Portfolio development"
          ],
          software: ["HTML", "CSS", "Figma", "JavaScript", "Bootstrap"]
        }
      ]
    },
    studentProfile: "The certified students will emerge as proficient and innovative web designers ready to excel in the web design industry. Their ability to work within the web design pipeline, technical proficiency, and creative problem-solving skills will make them valuable assets to any web design team. With a diverse portfolio showcasing their expertise, they will be well-prepared to contribute to the success of digital projects."
  },

  {
    id: "zica-23",
    name: "Programme in Digital Marketing",
    duration: "6 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Digital Marketing is a vigorous 6-month course designed to provide students with the essential skills and knowledge required to excel in the digital marketing field. It covers a comprehensive range of topics from the fundamentals of digital marketing to advanced techniques in SEO, social media marketing, and content creation. The curriculum is structured to advance creativity, analytical thinking, and technical proficiency.",
    category: 'zica',
    icon: "trending_up",
    color: "from-orange-400 to-rose-400",
    image: "/image/Courses/zica-23.png",
    backgroundImage: "/image/Courses/zica-23.png",
    curriculum: {
      title: "PROGRAMME IN DIGITAL MARKETING",
      duration: "6 MONTHS",
      modules: [
        {
          name: "DIGITAL MARKETING",
          duration: "6 MONTHS",
          topics: [
            "Introduction to digital marketing",
            "Social media marketing and platforms",
            "Website and Google Suite",
            "Search and paid advertising",
            "Email, automation, and CRO",
            "Specialised marketing channels",
            "Business strategy and planning",
            "AI tools in digital marketing",
            "Advanced content and optimisation",
            "Computer graphics",
            "Design ideas and colour theory"
          ],
          software: ["Various AI Tools", "Google Suite", "HubSpot CRM", "Photoshop", "Canva"]
        }
      ]
    },
    studentProfile: "The certified professionals will emerge as proficient and innovative digital marketers ready to excel in the industry. Their ability to analyse data, optimise content, and engage audiences will make them valuable assets to any marketing team. With a diverse portfolio showcasing their expertise, they will be well-prepared to contribute to the success of digital marketing initiatives."
  },
  {
    id: "zica-24",
    name: "Programme in Architectural Design and Animation",
    duration: "6 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Architectural Design and Animation is a specialised 6-month course to equip students with the essential skills and knowledge. It covers a comprehensive range of topics, from the fundamentals of architectural design to advanced techniques in 3D modelling, rendering, and animation. Students will gain hands-on experience with industry-standard software, preparing them to create visually stunning and technically accurate architectural presentations.",
    category: 'zica',
    icon: "architecture",
    color: "from-purple-400 to-violet-500",
    image: "/image/Courses/zica-24.png",
    backgroundImage: "/image/Courses/zica-24.png",
    curriculum: {
      title: "PROGRAMME IN ARCHITECTURAL DESIGN AND ANIMATION",
      duration: "6 MONTHS",
      modules: [
        {
          name: "ARCHITECTURAL DESIGN AND ANIMATION",
          duration: "6 MONTHS",
          topics: [
            "Introduction to Architectural Design",
            "Computer graphics",
            "2D drafting using AutoCAD",
            "3D modelling and animation",
            "Render settings and image samplers",
            "Lighting and materials",
            "Rendering techniques",
            "Video and audio editing"
          ],
          software: ["Photoshop", "AutoCAD", "Autodesk 3ds Max", "V-Ray", "Premiere", "Audition"]
        }
      ]
    },
    studentProfile: "Graduates will emerge as proficient and innovative architectural visualisers ready to excel in the industry. They will be adept at creating visually stunning and technically accurate architectural presentations. Their ability to work within the architectural design pipeline, technical proficiency and problem-solving skills will make them valuable assets to any architectural visualisation team. With a diverse portfolio showcasing their expertise, they will contribute to the success of architectural projects."
  },
  {
    id: "zica-25",
    name: "Programme in Fashion Styling",
    duration: "6 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "The course enables the students to understand client requirements and deliver their best work. Students will create an entire look for a client and commercial projects as well. Students will be able to enhance the brand image of any brand by incorporating various elements, keeping the brand sensibility in mind.",
    category: 'zica',
    icon: "content_cut",
    color: "from-pink-400 to-rose-500",
    image: "/image/Courses/zica-25.png",
    backgroundImage: "/image/Courses/zica-25.png",
    curriculum: {
      title: "PROGRAMME IN FASHION STYLING",
      duration: "6 MONTHS",
      modules: [
        {
          name: "FASHION STYLING",
          duration: "6 MONTHS",
          topics: [
            "Introduction to fashion styling",
            "Introduction to basics (Design elements and foundation art)",
            "Categories of styling and their respective titles",
            "Fashion terms, language, and types",
            "Sections of a garments",
            "Various body types and styling to hide flaws and enhance their appearance",
            "Introduction to CAD",
            "Introduction to illustration",
            "Fashion research and idea development",
            "Personal grooming",
            "Sourcing of garments and accessories",
            "The principles of fashion styling for an individual",
            "Optical illusions and their importance in style",
            "Hair and makeup ideas",
            "Writing skills and fashion vocabulary",
            "Theme-based styling",
            "Case studies and mock shoot",
            "Fashion consulting outcomes",
            "Styling module project",
            "Photoshoots",
            "Promotional booklets",
            "Concept-based promotional fashion film"
          ],
          software: ["CAD", "Illustrator", "Photoshop"]
        }
      ]
    },
    studentProfile: "The individual will gain employment opportunities with designers, retail brands, advertorial magazines, print media, electronic media and fashion stylists. They may also venture into personal styling and work for individual clients and well-known celebrities. The candidate can work as an image consultant, grooming expert or personal shopper."
  },
  {
    id: "zica-26",
    name: "Programme in Advanced Motion Graphics",
    duration: "6 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Advanced Motion Graphics is a specialized 6-month course designed to provide students with the skills and knowledge required to excel in motion graphics. It covers a comprehensive range of topics from the fundamentals of motion graphics to advanced techniques in digital illustration, video editing, and 3D object-based particle animation. The curriculum is structured to enhance creativity, technical proficiency and a deep understanding of motion graphics principles.",
    category: 'zica',
    icon: "motion_photos_on",
    color: "from-amber-400 to-orange-500",
    image: "/image/Courses/zica-26.png",
    backgroundImage: "/image/Courses/zica-26.png",
    curriculum: {
      title: "PROGRAMME IN ADVANCED MOTION GRAPHICS",
      duration: "6 MONTHS",
      modules: [
        {
          name: "ADVANCED MOTION GRAPHICS",
          duration: "6 MONTHS",
          topics: [
            "Fundamentals of motion graphics",
            "Computer graphics",
            "Digital illustration for motion graphics",
            "Audio and video editing",
            "Motion graphics techniques",
            "3D object-based particle"
          ],
          software: ["Photoshop", "Illustrator", "Premiere", "Audition", "After Effects", "Element 3D"]
        }
      ]
    },
    studentProfile: "The certified students will emerge as highly skilled and innovative motion graphics designers ready to excel in the industry. They will possess a deep understanding of motion graphics principles, digital illustration, and video editing, along with advanced skills in industry-standard software. Their ability to work within the motion graphics pipeline, technical proficiency, and creative problem-solving skills will make them valuable assets to any motion graphics team."
  },
  {
    id: "zica-27",
    name: "Programme in UI and UX Design",
    duration: "6 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "UI and UX design is an intensive 6-month course that provides students with the essential skills and knowledge required to excel in user interface and user experience design. It covers a comprehensive range of topics from the fundamentals of UI/UX design to advanced techniques in wireframing, prototyping, and usability testing. Students will gain hands-on experience with industry-standard tools and methodologies, preparing them to create intuitive and engaging digital experiences.",
    category: 'zica',
    icon: "touch_app",
    color: "from-cyan-400 to-blue-400",
    image: "/image/Courses/zica-27.png",
    backgroundImage: "/image/Courses/zica-27.png",
    curriculum: {
      title: "PROGRAMME IN UI AND UX DESIGN",
      duration: "6 MONTHS",
      modules: [
        {
          name: "UI AND UX DESIGN",
          duration: "6 MONTHS",
          topics: [
            "Fundamental principles of UI and UX design",
            "Laws of UX design",
            "Colour theory and typography",
            "Introduction to computer graphics",
            "UI design techniques",
            "Advanced wireframing and usability testing",
            "Design system and UI design"
          ],
          software: ["Photoshop", "XD", "Marvel", "Figma"]
        }
      ]
    },
    studentProfile: "The certified students will emerge as proficient and innovative UI/UX designers ready to excel in the digital design industry. Their ability to conduct user research, define problem statements, and collaborate effectively will make them valuable assets to any design team. With a diverse portfolio showcasing their creativity and technical proficiency, they will be well-prepared to contribute to the success of digital products and services."
  },
  {
    id: "zica-28",
    name: "Programme in Digital Photography",
    duration: "5 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Digital Photography is an intensive 5-month course designed to provide students with the skills and knowledge required to excel in the digital photography field. It covers a comprehensive range of topics from the history and fundamentals of photography to advanced techniques in digital editing and photo manipulation. Students will gain hands-on experience with industry-standard tools and methodologies, preparing them to create visually compelling and technically proficient photographs.",
    category: 'zica',
    icon: "photo_camera",
    color: "from-teal-400 to-emerald-400",
    image: "/image/Courses/zica-28.png",
    backgroundImage: "/image/Courses/zica-28.png",
    curriculum: {
      title: "PROGRAMME IN DIGITAL PHOTOGRAPHY",
      duration: "5 MONTHS",
      modules: [
        {
          name: "DIGITAL PHOTOGRAPHY",
          duration: "5 MONTHS",
          topics: [
            "Fundamentals of photography",
            "Basics of digital cameras and accessories",
            "Range and exposures",
            "Camera lenses and optics",
            "Photography techniques and styles",
            "Digital exposure techniques",
            "Macro photography and night photography",
            "Bit depth, sharpness, and image noise",
            "Composition and lighting",
            "Action and motion in photography",
            "Digital photo editing",
            "Presentation and assessment"
          ],
          software: ["Photoshop", "Lightroom"]
        }
      ]
    },
    studentProfile: "The certified students will emerge as proficient and innovative digital photographers ready to excel in the photography industry. They will possess a deep understanding of photography principles, camera operations, and digital editing techniques, along with advanced skills in industry-standard software. Equipped with hands-on experience in tools like Adobe Photoshop and Lightroom, they will be adept at creating visually compelling and technically proficient photographs. Their ability to work within the digital photography pipeline, technical proficiency, and problem-solving skills will make them valuable assets to any photography team."
  },
  {
    id: "zica-29",
    name: "Programme in Motion Graphics and Editing",
    duration: "4 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Motion Graphics and Editing is a focused 4-month course designed to equip students with the skills and knowledge required to excel in motion graphics and video editing. It covers a comprehensive range of topics from the fundamentals of editing to advanced techniques in motion graphics and audio editing. Students will gain hands-on experience with industry-standard software, preparing them to create visually compelling motion graphics and video edits.",
    category: 'zica',
    icon: "video_settings",
    color: "from-red-400 to-orange-400",
    image: "/image/Courses/zica-29.png",
    backgroundImage: "/image/Courses/zica-29.png",
    curriculum: {
      title: "PROGRAMME IN MOTION GRAPHICS AND EDITING",
      duration: "4 MONTHS",
      modules: [
        {
          name: "MOTION GRAPHICS AND EDITING",
          duration: "4 MONTHS",
          topics: [
            "Overview of editing and postproduction process",
            "Aesthetics of editing and the role of an editor",
            "Computer graphics",
            "Video and audio editing",
            "Colour correction and grading",
            "Working with effects and motion",
            "Speed control and time remapping",
            "Keying and background replacement",
            "Motion graphics animation",
            "Particle systems and simulations"
          ],
          software: ["Photoshop", "Premiere", "Audition", "After Effects"]
        }
      ]
    },
    studentProfile: "The certified students will emerge as proficient and innovative motion graphic designers and video editors ready to excel in the industry. They will possess a deep understanding of editing principles, motion graphics, and audio editing, along with advanced skills in industry-standard software. Their ability to work within the editing pipeline, technical proficiency, and problem-solving skills will make them valuable assets to any motion graphics and editing team."
  },
  {
    id: "zica-30",
    name: "Unreal Engine",
    duration: "10 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "This course offers a comprehensive guide for beginners to develop their interactive game environments. Students will learn the fundamentals of game design, including level creation, blueprint scripting, character and enemy implementation, collision systems, and packaging for distribution. With hands-on tutorials covering everything from basic navigation to advanced audio integration, participants will learn the skills required to bring their game ideas to life.",
    category: 'zica',
    icon: "blur_on",
    color: "from-indigo-400 to-purple-400",
    image: "/image/Courses/zica-30.png",
    backgroundImage: "/image/Courses/zica-30.png",
    curriculum: {
      title: "UNREAL ENGINE",
      duration: "10 MONTHS",
      modules: [
        {
          name: "UNREAL ENGINE",
          duration: "10 MONTHS",
          topics: [
            "Unreal Engine",
            "Blueprint",
            "Levels",
            "Audio",
            "Project"
          ],
          software: ["Unreal Engine"]
        }
      ]
    },
    studentProfile: "This course caters to aspiring game developers keen on mastering Unreal Engine. Students will learn essential skills like level design, blueprint scripting, asset integration, and audio implementation. Ideal for beginners, it covers everything from basic navigation to advanced gameplay mechanics. Students are equipped with the knowledge and tools to create immersive and interactive gaming experiences. The course is suitable for individuals passionate about game development and eager to unleash their creativity."
  },
  {
    id: "zica-31",
    name: "Blender",
    duration: "10 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "The Blender programme covers a comprehensive range of topics essential for 3D modelling and animation. It starts with fundamental techniques such as creating and transforming mesh objects, utilising modifiers for symmetrical objects, and advanced operations like Boolean operations and UV mapping. Rigging explores character animation and mechanical rigging. Particle systems, dynamics, and simulations are also covered extensively. Additionally, it delves into animation principles, techniques, and tools like keyframing, graph editor, and pose libraries.",
    category: 'zica',
    icon: "rebase_edit",
    color: "from-blue-600 to-indigo-800",
    image: "/image/Courses/zica-31.png",
    backgroundImage: "/image/Courses/zica-31.png",
    curriculum: {
      title: "BLENDER",
      duration: "10 MONTHS",
      modules: [
        {
          name: "BLENDER",
          duration: "10 MONTHS",
          topics: [
            "Interface and modelling",
            "Unwrap and texture",
            "Materials",
            "Lighting and rendering",
            "Rigging",
            "Dynamics and FX",
            "Animation"
          ],
          software: ["Blender"]
        }
      ]
    },
    studentProfile: "This programme caters to aspiring 3D artists and animators seeking a comprehensive understanding of Blender's capabilities. It's suitable for beginners looking to grasp fundamental concepts like mesh editing and object manipulation and intermediate users aiming to delve into advanced topics such as rigging, particle systems, lighting, and animation principles. The curriculum provides a well-rounded education in 3D modelling, animation, and rendering techniques, empowering students to create diverse digital content."
  },
  {
    id: "zica-32",
    name: "Programme in Maya",
    duration: "6 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Autodesk Maya is the industry standard for 3D animation, modeling, simulation, and rendering. This intensive 6-month course is designed to take students from foundational concepts to advanced production techniques. Students will learn the entire 3D animation pipeline, including high-quality modeling, texturing, rigging, character animation, and complex dynamics. The curriculum focuses on preparing students for professional studio environments with a focus on lighting, rendering, and portfolio development.",
    category: 'zica',
    icon: "3d_rotation",
    color: "from-green-600 to-emerald-800",
    image: "/image/Courses/zica-32.png",
    backgroundImage: "/image/Courses/zica-32.png",
    curriculum: {
      title: "PROGRAMME IN MAYA",
      duration: "6 MONTHS",
      modules: [
        {
          name: "MAYA",
          duration: "6 MONTHS",
          topics: [
            "3D Modeling (Characters, Props, Environments)",
            "Texturing and Shading (Materials, UV Mapping)",
            "Rigging (Skeletal Structures, Puppet Controls)",
            "3D Character Animation (Principles of Movement)",
            "Lighting and Rendering (Arnold)",
            "Dynamics and VFX (Particles, Fluids, Hair/Fur)",
            "Animation Production Pipeline"
          ],
          software: ["Autodesk Maya", "Arnold"]
        }
      ]
    },
    studentProfile: "Graduates will emerge as proficient 3D artists and animators ready for roles in film, television, gaming, and advertising. They will possess a deep understanding of Maya’s extensive toolset, enabling them to work as 3D Modelers, Animators, Rigging Artists, or Lighting Artists. With a strong foundation in both technical and creative aspects of 3D production, they are equipped to meet industry standards and contribute to professional production pipelines."
  },
  {
    id: "zica-33",
    name: "Houdini",
    duration: "6 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "The Houdini programme offers an in-depth exploration of procedural 3D content creation. Designed for aspiring VFX artists and technical directors, the course covers core topics including procedural modelling, UV mapping, texturing, lighting, rendering, particle simulation, Pyro FX, and dynamic effects such as rain, chocolate simulations, oceans, and destruction effects.",
    category: 'zica',
    icon: "water_drop",
    color: "from-orange-600 to-rose-700",
    image: "/image/Courses/zica-33.png",
    backgroundImage: "/image/Courses/zica-33.png",
    curriculum: {
      title: "HOUDINI",
      duration: "6 MONTHS",
      modules: [
        {
          name: "HOUDINI",
          duration: "6 MONTHS",
          topics: [
            "Modelling",
            "UV and material",
            "Lighting",
            "Render",
            "Pyro FX and particle effects",
            "Special effects",
            "Advanced projects"
          ],
          software: ["Houdini"]
        }
      ]
    },
    studentProfile: "The certified Houdini professionals emerge as highly skilled technical artists, proficient in procedural 3D modelling, particle and fluid simulations, dynamic effects, and cinematic lighting setups. They are adept at using Houdini's node-based workflow for complex VFX and simulation tasks, preparing them for roles in film, television, gaming, and advertising industries. With a strong portfolio showcasing real-world projects, they are ready to contribute to professional VFX pipelines and creative studios."
  },
  {
    id: "zica-34",
    name: "3Ds Max",
    duration: "6 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Specialized training in 3Ds Max for architectural visualization and game art.",
    category: 'zica',
    icon: "view_in_ar_new",
    color: "from-purple-600 to-violet-800",
    image: "/image/Courses/zica-34.png",
    backgroundImage: "/image/Courses/zica-34.png",
    curriculum: {
      title: "PROGRAMME IN 3DS MAX",
      duration: "6 MONTHS",
      modules: [
        {
          name: "3DS MAX",
          duration: "6 MONTHS",
          topics: [
            "3D Modeling and Texturing",
            "Architectural Visualization",
            "Interior and Exterior Rendering",
            "Lighting and Materials",
            "V-Ray / Arnold Rendering",
            "Game Asset Creation",
            "Animation Foundations"
          ],
          software: ["Autodesk 3ds Max", "V-Ray", "Arnold"]
        }
      ]
    },
    studentProfile: "Graduates will emerge as proficient 3D visualizers and modelers, specifically skilled in architectural and industrial visualization. Their expertise in 3ds Max will allow them to create highly detailed models and photorealistic renders, making them valuable assets to architectural firms, interior design studios, and game development companies."
  },
  {
    id: "zica-35",
    name: "Zbrush",
    duration: "3 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Intensive training in digital sculpting and character creation using Pixologic Zbrush.",
    category: 'zica',
    icon: "brush",
    color: "from-pink-600 to-rose-800",
    image: "/image/Courses/zica-35.png",
    backgroundImage: "/image/Courses/zica-35.png",
    curriculum: {
      title: "PROGRAMME IN ZBRUSH",
      duration: "3 MONTHS",
      modules: [
        {
          name: "ZBRUSH",
          duration: "3 MONTHS",
          topics: [
            "Digital Sculpting Foundations",
            "High-poly Character Modeling",
            "Anatomy Sculpting",
            "Polypainting and Texturing",
            "Dynamesh and ZRemesher",
            "Displacement and Normal Map Generation",
            "Integration with 3D Pipelines"
          ],
          software: ["Pixologic ZBrush"]
        }
      ]
    },
    studentProfile: "Certified students will become expert digital sculptors, capable of creating highly detailed organic and hard-surface models. Their mastery of ZBrush will enable them to work as Character Artists, Creature Designers, and Asset Modelers in the film and gaming industries, where high-fidelity digital art is essential."
  },
  {
    id: "zica-36",
    name: "Final Cut Pro (FCP)",
    duration: "3 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Professional video editing techniques using FCP for film and television production.",
    category: 'zica',
    icon: "movie_edit",
    color: "from-amber-600 to-orange-800",
    image: "/image/Courses/zica-36.png",
    backgroundImage: "/image/Courses/zica-36.png",
    curriculum: {
      title: "PROGRAMME IN FINAL CUT PRO",
      duration: "3 MONTHS",
      modules: [
        {
          name: "FINAL CUT PRO",
          duration: "3 MONTHS",
          topics: [
            "Non-linear Editing Interface",
            "Magnetic Timeline Techniques",
            "Color Correction and Grading",
            "Audio Post-production",
            "Multi-cam Editing",
            "Motion Graphics Integration",
            "Exporting for Various Platforms"
          ],
          software: ["Apple Final Cut Pro"]
        }
      ]
    },
    studentProfile: "Graduates will be proficient video editors ready to tackle professional projects in film, television, and digital media. With a deep understanding of FCP's powerful editing tools and color grading capabilities, they will be equipped to deliver high-quality video content for a variety of industry sectors."
  },
  {
    id: "zica-37",
    name: "AutoCAD",
    duration: "2.5 Month",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Master 2D and 3D drafting for architecture, engineering, and construction.",
    category: 'zica',
    icon: "architecture",
    color: "from-cyan-600 to-blue-700",
    image: "/image/Courses/zica-37.png",
    backgroundImage: "/image/Courses/zica-37.png",
    curriculum: {
      title: "PROGRAMME IN AUTOCAD",
      duration: "2.5 MONTHS",
      modules: [
        {
          name: "AUTOCAD",
          duration: "2.5 MONTHS",
          topics: [
            "2D Drafting Foundations",
            "Architectural Floor Plans",
            "Geometric Construction",
            "3D Modeling Basics",
            "Dimensioning and Annotation",
            "Plotting and Printing Standards",
            "Project Documentation"
          ],
          software: ["AutoCAD"]
        }
      ]
    },
    studentProfile: "Certified AutoCAD professionals will emerge as skilled drafters and designers capable of producing technical drawings for architecture, engineering, and construction. Their precision and technical proficiency will make them essential contributors to design and planning departments across various industrial sectors."
  },
  {
    id: "zica-38",
    name: "Adobe Photoshop",
    duration: "2 Month",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Mastering image editing, retouching, and digital painting in Photoshop.",
    category: 'zica',
    icon: "photo_library",
    color: "from-teal-600 to-emerald-700",
    image: "/image/Courses/zica-38.png",
    backgroundImage: "/image/Courses/zica-38.png",
    curriculum: {
      title: "PROGRAMME IN ADOBE PHOTOSHOP",
      duration: "2 MONTHS",
      modules: [
        {
          name: "PHOTOSHOP",
          duration: "2 MONTHS",
          topics: [
            "Image Editing and Retouching",
            "Digital Painting and Illustration",
            "Color Correction and Enhancement",
            "Layer-based Compositing",
            "Typography and Layout",
            "UI/UX Asset Creation",
            "Final Output Optimization"
          ],
          software: ["Adobe Photoshop"]
        }
      ]
    },
    studentProfile: "Graduates will be versatile digital artists with a mastery of image manipulation and creative design. Their skills in Photoshop will allow them to excel in roles such as Graphic Designer, Photo Editor, Digital Painter, and UI Designer, providing them with a strong foundation for any creative career."
  },
  {
    id: "zica-39",
    name: "Adobe Illustrator",
    duration: "2 Month",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Creating vector-based designs, logos, and illustrations in Illustrator.",
    category: 'zica',
    icon: "draw",
    color: "from-red-600 to-orange-700",
    image: "/image/Courses/zica-39.png",
    backgroundImage: "/image/Courses/zica-39.png",
    curriculum: {
      title: "PROGRAMME IN ADOBE ILLUSTRATOR",
      duration: "2 MONTHS",
      modules: [
        {
          name: "ILLUSTRATOR",
          duration: "2 MONTHS",
          topics: [
            "Vector Graphic Principles",
            "Logo and Branding Design",
            "Icon and Infographic Creation",
            "Advanced Typography",
            "Layout and Print Design",
            "Digital Illustration",
            "Vectorizing Hand-drawn Art"
          ],
          software: ["Adobe Illustrator"]
        }
      ]
    },
    studentProfile: "Certified Illustrator professionals will be experts in vector-based design, capable of creating scalable and precise artwork for print and digital media. Their proficiency in branding and identity design will make them valuable assets to advertising agencies, design studios, and corporate marketing teams."
  },
  {
    id: "zica-40",
    name: "CorelDraw",
    duration: "2 Month",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Learning vector graphics and layout design for the print and advertising industry.",
    category: 'zica',
    icon: "polyline",
    color: "from-indigo-600 to-purple-700",
    image: "/image/Courses/zica-40.png",
    backgroundImage: "/image/Courses/zica-40.png",
    curriculum: {
      title: "PROGRAMME IN CORELDRAW",
      duration: "2 MONTHS",
      modules: [
        {
          name: "CORELDRAW",
          duration: "2 MONTHS",
          topics: [
            "Vector Illustration Basics",
            "Layout Design for Print",
            "Packaging and Label Design",
            "Advertising Materials Creation",
            "Color Management for Printing",
            "Logo and Stationery Design",
            "Prepression Techniques"
          ],
          software: ["CorelDRAW"]
        }
      ]
    },
    studentProfile: "Graduates will emerge as skilled print and layout designers, particularly proficient in the demands of the commercial printing industry. Their ability to create complex vector designs and professional layouts will prepare them for roles in printing houses, advertising firms, and marketing departments."
  },
  {
    id: "zica-41",
    name: "Adobe Animate",
    duration: "2 Month",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Teaches the creation of interactive vector-based animations for the web and mobile.",
    category: 'zica',
    icon: "animation",
    color: "from-blue-700 to-indigo-900",
    image: "/image/Courses/zica-41.png",
    backgroundImage: "/image/Courses/zica-41.png",
    curriculum: {
      title: "PROGRAMME IN ADOBE ANIMATE",
      duration: "2 MONTHS",
      modules: [
        {
          name: "ADOBE ANIMATE",
          duration: "2 MONTHS",
          topics: [
            "2D Vector Animation Foundations",
            "Character Design and Rigging",
            "Interactive Web Content",
            "Frame-by-Frame Animation",
            "Motion Tweening and ActionScript",
            "HTML5 Canvas and WebGL Output",
            "Mobile App UI Animation"
          ],
          software: ["Adobe Animate"]
        }
      ]
    },
    studentProfile: "Certified students will be proficient 2D animators and interactive designers. Their mastery of Adobe Animate will enable them to create engaging animations for the web, mobile platforms, and television, making them highly sought after in the digital media and advertising industries."
  },
  {
    id: "zica-42",
    name: "Adobe After Effects",
    duration: "2 Month",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Mastering motion graphics and visual effects compositing in After Effects.",
    category: 'zica',
    icon: "blur_linear",
    color: "from-green-700 to-emerald-900",
    image: "/image/Courses/zica-42.png",
    backgroundImage: "/image/Courses/zica-42.png",
    curriculum: {
      title: "PROGRAMME IN ADOBE AFTER EFFECTS",
      duration: "2 MONTHS",
      modules: [
        {
          name: "AFTER EFFECTS",
          duration: "2 MONTHS",
          topics: [
            "Motion Graphics Principles",
            "Visual Effects Compositing",
            "Keying and Masking Techniques",
            "2D and 3D Tracking",
            "Particle Systems and Dynamics",
            "Kinetic Typography",
            "Expressions and Automation"
          ],
          software: ["Adobe After Effects"]
        }
      ]
    },
    studentProfile: "Graduates will emerge as skilled Motion Graphics Artists and VFX Compositors. Their deep understanding of After Effects will allow them to create high-impact visual content for film, broadcast, and social media, establishing them as essential members of any creative production team."
  },
  {
    id: "zica-43",
    name: "Fusion",
    duration: "2 Month",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Learn advanced node-based compositing and visual effects in Blackmagic Design Fusion.",
    category: 'zica',
    icon: "filter_vintage",
    color: "from-orange-700 to-rose-800",
    image: "/image/Courses/zica-43.png",
    backgroundImage: "/image/Courses/zica-43.png",
    curriculum: {
      title: "PROGRAMME IN FUSION",
      duration: "2 MONTHS",
      modules: [
        {
          name: "FUSION",
          duration: "2 MONTHS",
          topics: [
            "Node-based Compositing Workflow",
            "3D Workspace and Cameras",
            "Advanced Keying and Extraction",
            "Rotoscoping and Tracking",
            "Particle Simulations",
            "VFX Integration and Color Pipeline",
            "Final Render Optimization"
          ],
          software: ["Blackmagic Design Fusion"]
        }
      ]
    },
    studentProfile: "Certified Fusion professionals will be proficient node-based compositors, capable of handling complex VFX tasks for high-end film and television projects. Their technical expertise in Fusion's 3D environment and node system will prepare them for roles as VFX Artists and Compositors in professional studios."
  },
  {
    id: "zica-44",
    name: "Nuke",
    duration: "2 Month",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Professional node-based compositing and visual effects used in Hollywood blockbusters.",
    category: 'zica',
    icon: "grain",
    color: "from-purple-700 to-violet-900",
    image: "/image/Courses/zica-44.png",
    backgroundImage: "/image/Courses/zica-44.png",
    curriculum: {
      title: "PROGRAMME IN NUKE",
      duration: "2 MONTHS",
      modules: [
        {
          name: "NUKE",
          duration: "2 MONTHS",
          topics: [
            "Industry-standard Node Compositing",
            "Deep Compositing and Multi-channel Workflows",
            "Advanced Keying (Primatte/Keylight)",
            "Planar and 3D Tracking",
            "Camera Projection and Matte Painting",
            "Python Scripting for Nuke",
            "VFX Pipeline Integration"
          ],
          software: ["Foundry Nuke"]
        }
      ]
    },
    studentProfile: "Graduates will emerge as elite VFX Compositors with a mastery of the industry's leading node-based software. Their technical proficiency in Nuke will allow them to work on Hollywood-level feature films and high-budget television productions, making them highly valuable assets to the global VFX industry."
  },
  {
    id: "zica-45",
    name: "Adobe Premiere",
    duration: "1.5 Month",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "Industry-standard video editing techniques for professional storytelling.",
    category: 'zica',
    icon: "video_library",
    color: "from-pink-700 to-rose-900",
    image: "/image/Courses/zica-45.png",
    backgroundImage: "/image/Courses/zica-45.png",
    curriculum: {
      title: "PROGRAMME IN ADOBE PREMIERE PRO",
      duration: "1.5 MONTHS",
      modules: [
        {
          name: "PREMIERE PRO",
          duration: "1.5 MONTHS",
          topics: [
            "Non-linear Editing Foundations",
            "Timeline Management and Organization",
            "Advanced Video Transitions",
            "Audio Mixing and Sound Design",
            "Color Correction with Lumetri",
            "Dynamic Link with After Effects",
            "Exporting and Delivery Standards"
          ],
          software: ["Adobe Premiere Pro"]
        }
      ]
    },
    studentProfile: "Certified Premiere Pro editors will be proficient storytellers, capable of editing high-quality video content for a variety of platforms. Their technical mastery of the editing process and post-production workflow will make them valuable assets to production houses, digital agencies, and freelance creative teams."
  },
  {
    id: "zica-46",
    name: "Visual Effects",
    duration: "6 month",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "A specialized program in the fundamentals of visual effects and compositing.",
    category: 'zica',
    icon: "flare",
    color: "from-amber-700 to-orange-900",
    image: "/image/Courses/zica-46.png",
    backgroundImage: "/image/Courses/zica-46.png",
    curriculum: {
      title: "PROGRAMME IN VISUAL EFFECTS",
      duration: "6 MONTHS",
      modules: [
        {
          name: "VISUAL EFFECTS",
          duration: "6 MONTHS",
          topics: [
            "VFX Pipeline and Fundamentals",
            "Advanced Digital Compositing",
            "Dynamics and Particle Simulations",
            "Keying and Rotoscoping",
            "Matchmoving and Camera Tracking",
            "Energy-based Effects",
            "Portfolio Development"
          ],
          software: ["After Effects", "Nuke", "SilhouetteFX", "3DEqualizer"]
        }
      ]
    },
    studentProfile: "Graduates will emerge as comprehensive VFX professionals, equipped with the technical and creative skills necessary to excel in the visual effects industry. Their ability to handle diverse tasks from compositing to dynamics will make them versatile and valuable members of any post-production studio or creative agency."
  }
];

export const zimaCourses: Course[] = [
  {
    id: "zima-1",
    name: "Professional Programme in Filmmaking",
    duration: "12 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "The Professional Programme in Filmmaking is a 12-month course for aspiring filmmakers, offering over 700 hours of comprehensive training.",
    category: 'zima',
    icon: "movie",
    color: "from-blue-400 to-indigo-600",
    image: "/image/Courses/zima-4.png",
    backgroundImage: "/image/Courses/zima-4.png",
    curriculum: {
      title: "PROFESSIONAL PROGRAMME IN FILMMAKING",
      duration: "12 MONTHS",
      modules: [
        {
          name: "INTRODUCTION AND BASICS",
          duration: "3 MONTHS",
          topics: [
            "Story analysis, characterisation, and dialogue writing",
            "History of cinema and Indian cinema",
            "Fundamentals of direction, camera, photography, and lighting",
            "Acting basics: speech, monologue, and body language",
            "Introduction to editing, sound, and production basics",
            "Pre-production and case studies"
          ]
        },
        {
          name: "SCREENWRITING AND CINEMATOGRAPHY",
          duration: "3 MONTHS",
          topics: [
            "Screenwriting, dialogue, and narrative structure",
            "Cinematography techniques and creative camera work",
            "Acting: Improvisation, physical, and voice culture",
            "Editing: Fiction, non-fiction, and rhythm manipulation",
            "Sound recording, ADR, and recording instruments",
            "Economics, budgeting, and pre-production planning"
          ]
        },
        {
          name: "ADVANCED TECHNIQUES AND POST-PRODUCTION",
          duration: "3 MONTHS",
          topics: [
            "Script structuring, character layering, and second draft",
            "Casting, shot division, and pre-production",
            "Lighting and camera movement practicals",
            "Post-production: Editing, Pro Tools, audio, and surround sound",
            "Production management, finances, and contracts"
          ]
        },
        {
          name: "SPECIALISATION AND FINAL PROJECT",
          duration: "3 MONTHS",
          topics: [
            "Specialise in screenwriting, direction, cinematography, acting, editing, or sound",
            "Work on a final film project with mentorship and creative decision-making"
          ],
          software: ["Premiere", "FCP", "Avid Media Composer", "Pro Tools", "Nuendo", "Cubase"]
        }
      ]
    },
    studentProfile: "The certified professionals will be well-rounded filmmakers proficient in storytelling, screenwriting, cinematography, editing, and sound design. They will have hands-on experience in producing and directing short films, documentaries, and music videos."
  },
  {
    id: "zima-2",
    name: "Programme in Direction",
    duration: "6 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "The Programme in Direction is a 6-month course designed to teach aspiring directors the essential skills required for filmmaking and television production.",
    category: 'zima',
    icon: "director_chair",
    color: "from-amber-500 to-orange-700",
    image: "/image/Courses/zima-9.png",
    backgroundImage: "/image/Courses/zima-9.png",
    curriculum: {
      title: "PROGRAMME IN DIRECTION",
      duration: "6 MONTHS",
      modules: [
        {
          name: "INTRODUCTION AND BASICS",
          duration: "3 MONTHS",
          topics: [
            "Story analysis, characterisation, and dialogue writing",
            "History of cinema and Indian cinema",
            "Fundamentals of direction, camera, photography, and lighting",
            "Acting basics: speech, monologue, and body language",
            "Introduction to editing, sound, and production basics",
            "Pre-production and case studies"
          ]
        },
        {
          name: "SCREENWRITING AND CINEMATOGRAPHY",
          duration: "3 MONTHS",
          topics: [
            "Screenwriting, dialogue, and narrative structure",
            "Cinematography techniques and creative camera work",
            "Acting: Improvisation, physical, and voice culture",
            "Editing: Fiction, non-fiction, and rhythm manipulation",
            "Sound recording, ADR, and recording instruments",
            "Economics, budgeting, and pre-production planning"
          ],
          software: ["Premiere", "FCP", "Avid Media Composer", "Pro Tools", "Nuendo", "Cubase"]
        }
      ]
    },
    studentProfile: "Emerging students will be equipped with a solid foundation in filmmaking, including screenwriting, cinematography, and production management. With practical experience in documentaries, promos, and film projects, they will be prepared to take on the role of a director or assistant director."
  },
  {
    id: "zima-3",
    name: "Programme in Screenwriting",
    duration: "6 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "The Programme in Screenwriting is a 6-month course that equips aspiring screenwriters with essential skills for the entertainment industry. Students will learn concept development, story structure, character creation, and dialogue writing.",
    category: 'zima',
    icon: "history_edu",
    color: "from-red-500 to-orange-600",
    image: "/image/Courses/zima-12.png",
    backgroundImage: "/image/Courses/zima-12.png",
    curriculum: {
      title: "PROGRAMME IN SCREENWRITING",
      duration: "6 MONTHS",
      modules: [
        {
          name: "SCREENWRITING CURRICULUM",
          duration: "6 MONTHS",
          topics: [
            "Introduction to Screenwriting: Story elements, screenplay structure, and genres",
            "Story and Structure: 3-act structure, plot points, building conflict, and character arcs",
            "Writing Process: From idea to screenplay, scene creation, and dialogue writing",
            "Character Development: Protagonist vs. antagonist, emotional need, and secondary characters",
            "Screenplay Editing: Weaving, restructuring, and editing the screenplay",
            "Adaptation: Research, biopics, and writing for TV vs. Film",
            "Practical Application: Writing short and feature-length screenplays, industry trends, and career opportunities"
          ],
          software: ["Final Draft", "Celtx"]
        }
      ]
    },
    studentProfile: "The certified professional will be equipped with essential skills in story development, character creation, and dialogue writing. They will have a deep understanding of screenwriting techniques, historical perspectives, and Indian scriptwriters."
  },
  {
    id: "zima-4",
    name: "Programme in Cinematography",
    duration: "6 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "The Programme in Cinematography offers comprehensive training in film and video photography, emphasising both theory and practical application.",
    category: 'zima',
    icon: "video_camera_front",
    color: "from-pink-500 to-rose-700",
    image: "/image/Courses/zima-8.png",
    backgroundImage: "/image/Courses/zima-8.png",
    curriculum: {
      title: "PROGRAMME IN CINEMATOGRAPHY",
      duration: "6 MONTHS",
      modules: [
        {
          name: "CINEMATOGRAPHY CURRICULUM",
          duration: "6 MONTHS",
          topics: [
            "The principles of still and motion picture photography",
            "Various types of light sources and their practical application",
            "Basics of lighting and detailed practicals on different types of lighting situations",
            "Filters and composition, the study of colour temperature, and depth of field",
            "Study of movie cameras and various types of film stock",
            "The grammar of single-camera and multi-camera placements",
            "Roots and reasons for selecting a camera style",
            "Study of video cameras and principles of videography",
            "Principles of optics as applied to photography",
            "Assignments and group projects for students on digital cameras",
            "Hands-on training with RED Camera"
          ]
        }
      ]
    },
    studentProfile: "The emerging student will possess a solid foundation in film and video photography, equipped with practical skills in lighting, camera techniques, and composition. They will have hands-on experience with various types of cameras, film stock, and multi-camera setups."
  },
  {
    id: "zima-5",
    name: "Programme in Film and TV Production",
    duration: "6 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "The Programme in Film and TV Production offers comprehensive training in all aspects of filmmaking, from pre-production to post-production. Students will gain expertise in budgeting, finance, legal agreements, and the producer's role.",
    category: 'zima',
    icon: "video_camera_back",
    color: "from-teal-500 to-emerald-600",
    image: "/image/Courses/zima-11.png",
    backgroundImage: "/image/Courses/zima-11.png",
    curriculum: {
      title: "PROGRAMME IN FILM AND TV PRODUCTION",
      duration: "6 MONTHS",
      modules: [
        {
          name: "PRODUCTION CURRICULUM",
          duration: "6 MONTHS",
          topics: [
            "From script to shoot, an in-depth knowledge of the various departments",
            "Structure of the Indian film industry, production, distribution and exhibition",
            "In-depth knowledge about the producer's role during the filmmaking process",
            "Building up a project with cast and crew - delegation of responsibilities",
            "Introduction and expertise in various budgeting software",
            "Legal agreements",
            "Writing the business plan",
            "Permissions, Budgeting and finance",
            "Production and post-production",
            "Marketing and Promotions - from in-film placements to marketing tie-ups",
            "Distribution"
          ]
        }
      ]
    },
    studentProfile: "Emerging students are skilled in managing all stages of the filmmaking process, from script to shoot. They are proficient in budgeting, finance, legal agreements, and project management, with a strong understanding of the Indian film industry's structure."
  },
  {
    id: "zima-6",
    name: "Programme in Film and TV Editing",
    duration: "6 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "The Programme in Film and TV Editing offers comprehensive training in the art and technique of editing for film and television.",
    category: 'zima',
    icon: "movie_edit",
    color: "from-cyan-500 to-blue-600",
    image: "/image/Courses/zima-10.png",
    backgroundImage: "/image/Courses/zima-10.png",
    curriculum: {
      title: "PROGRAMME IN FILM AND TV EDITING",
      duration: "6 MONTHS",
      modules: [
        {
          name: "EDITING CURRICULUM",
          duration: "6 MONTHS",
          topics: [
            "The grammar, the aesthetic and the technique of editing",
            "History of editing",
            "The language of cinema",
            "Practical learning of FCP, AVID, and Adobe Premiere software",
            "Classroom editing practical",
            "Visiting studios",
            "Editing student projects (Ad film, documentary/non-fiction, short film, music video projects)"
          ],
          software: ["FCP", "Avid", "Premiere Pro"]
        }
      ]
    },
    studentProfile: "The emerging student will have a strong grasp of editing grammar, aesthetics, and techniques, along with proficiency in industry-standard software like FCP, Avid, and Adobe Premiere Pro."
  },
  {
    id: "zima-7",
    name: "Professional Programme in Sound Engineering",
    duration: "12 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "The Professional Programme in Sound Engineering is a comprehensive one-year course designed to build expertise in sound recording, mixing, post-production, and music composition.",
    category: 'zima',
    icon: "equalizer",
    color: "from-orange-400 to-rose-500",
    image: "/image/Courses/zima-5.png",
    backgroundImage: "/image/Courses/zima-5.png",
    curriculum: {
      title: "PROFESSIONAL PROGRAMME IN SOUND ENGINEERING",
      duration: "12 MONTHS",
      modules: [
        {
          name: "SOUND ENGINEERING CURRICULUM",
          duration: "12 MONTHS",
          topics: [
            "Sound recording, mixing, and post-production",
            "Music composition and arranging",
            "Microphone techniques, VST mastering, and studio acoustics",
            "Modern technologies, including AI in audio and sound design",
            "Hands-on projects in music mixing, film composition, Foley, ADR, and surround sound"
          ],
          software: ["Pro Tools", "Luna", "Nuendo", "Cubase"]
        }
      ]
    },
    studentProfile: "This programme equips aspiring sound engineers with the skills to excel in music production, film soundtracks, and live audio."
  },
  {
    id: "zima-8",
    name: "Programme in Sound Recording",
    duration: "6 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "The Programme in Sound Recording is a 6-month course designed to build a strong foundation in audio recording and production.",
    category: 'zima',
    icon: "mic",
    color: "from-green-400 to-emerald-600",
    image: "/image/Courses/zima-5.png",
    backgroundImage: "/image/Courses/zima-5.png",
    curriculum: {
      title: "PROGRAMME IN SOUND RECORDING",
      duration: "6 MONTHS",
      modules: [
        {
          name: "FOUNDATION STAGE",
          duration: "3 MONTHS",
          topics: [
            "Theory and recording technology",
            "DAW (Pro Tools and Luna)",
            "Audio processors"
          ]
        },
        {
          name: "ADVANCED STAGE",
          duration: "3 MONTHS",
          topics: [
            "Microphone techniques for recording",
            "Stereo recording methods",
            "Music mixdown and mixing",
            "VST audio mastering",
            "On location sound",
            "Live recording",
            "Headphone monitoring system",
            "Studio acoustics, types and importance",
            "Home studio vs. Professional studio",
            "Mixing console"
          ],
          software: ["Pro Tools", "Luna"]
        }
      ]
    },
    studentProfile: "The certified professionals will emerge as skilled sound engineers with a solid foundation in audio recording and production. Proficient in Pro Tools and Luna, they will have expertise in microphone techniques, mixing consoles, VST mastering, and live sound applications."
  },
  {
    id: "zima-9",
    name: "Programme in Music Production",
    duration: "6 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "The Programme in Music Production is a 6-month course designed to equip aspiring producers with essential skills in music creation and production.",
    category: 'zima',
    icon: "surround_sound",
    color: "from-purple-500 to-violet-700",
    image: "/image/Courses/zima-6.png",
    backgroundImage: "/image/Courses/zima-6.png",
    curriculum: {
      title: "PROGRAMME IN MUSIC PRODUCTION",
      duration: "6 MONTHS",
      modules: [
        {
          name: "FOUNDATION STAGE",
          duration: "3 MONTHS",
          topics: [
            "Theory and technology",
            "DAW (Logic Pro and Cubase)",
            "Audio processors"
          ]
        },
        {
          name: "ADVANCED STAGE",
          duration: "3 MONTHS",
          topics: [
            "VST instrument",
            "Drum programming",
            "MIDI sequencing",
            "Music arranging basics",
            "The process for composing for film",
            "Acoustic instrument studies",
            "AI technology",
            "Music composing",
            "Studio visit"
          ],
          software: ["Logic Pro", "Cubase"]
        }
      ]
    },
    studentProfile: "The certified professionals will be proficient music producers skilled in using Logic Pro and Cubase for music creation. They will have expertise in drum programming, MIDI sequencing, VST instruments, and music arranging."
  },
  {
    id: "zima-10",
    name: "Programme in Audio Production",
    duration: "6 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "The Programme in Audio Production is a 6-month course designed to equip students with the skills needed for professional audio production.",
    category: 'zima',
    icon: "speaker",
    color: "from-indigo-500 to-purple-600",
    image: "/image/Courses/zima-7.png",
    backgroundImage: "/image/Courses/zima-7.png",
    curriculum: {
      title: "PROGRAMME IN AUDIO PRODUCTION",
      duration: "6 MONTHS",
      modules: [
        {
          name: "FOUNDATION STAGE",
          duration: "3 MONTHS",
          topics: [
            "Theory and technology",
            "DAW (Pro Tools and Nuendo)",
            "Audio processors"
          ]
        },
        {
          name: "ADVANCED STAGE",
          duration: "3 MONTHS",
          topics: [
            "Film appreciation",
            "Intro to audio post-production stages",
            "ADR (Automated dialogue replacement)",
            "Directing actors in ADR",
            "Sound design",
            "Foley artist and recording",
            "Music editing",
            "Sync sound",
            "Video, screen technology and synchronisation",
            "Production dialogue editing",
            "Noise reduction and audio restoration",
            "AI for music and audio",
            "Surround sound",
            "Studio visit"
          ],
          software: ["Pro Tools", "Nuendo"]
        }
      ]
    },
    studentProfile: "The graduates will be proficient in Pro Tools and Nuendo for audio production. They will have a solid understanding of audio post-production, including ADR, sound design, foley recording, and music editing."
  },
  {
    id: "zima-11",
    name: "Programme in Film Acting",
    duration: "6 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "The Programme in Film Acting offers comprehensive training in various aspects of acting. Over six months, students will engage in voice and diction exercises, improvisation, and monologue preparation.",
    category: 'zima',
    icon: "theater_comedy",
    color: "from-green-500 to-teal-600",
    image: "/image/Courses/zima-1.png",
    backgroundImage: "/image/Courses/zima-1.png",
    curriculum: {
      title: "PROGRAMME IN FILM ACTING",
      duration: "6 MONTHS",
      modules: [
        {
          name: "ACTING CURRICULUM",
          duration: "6 MONTHS",
          topics: [
            "Introduction: Open-up exercises, imagination, and memory training",
            "Voice and diction: Voice training, relaxation, and diction exercises",
            "Improvisation: Senses-based improvisation and partner exercises",
            "Monologue and scene work Preparation, performance, and analysis of monologues and scenes",
            "Theatre: Reading, casting, preparation, and final performance",
            "Hollywood scene work: Preparation, shooting, and dubbing",
            "Music video acting: Preparation, shooting, and final assessment",
            "Film screenings: Regular screenings and assessments throughout the course"
          ]
        }
      ]
    },
    studentProfile: "Emerging students will possess strong foundational skills in voice, diction, and improvisation. They will be proficient in preparing and performing monologues, scenes, and plays."
  },
  {
    id: "zima-12",
    name: "Programme in Fashion Modelling and Personal Grooming",
    duration: "4 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "The Programme in Fashion Modelling and Personal Grooming is a comprehensive 4-month course designed to provide aspiring models with essential skills in runway techniques, personal grooming, styling, and posing.",
    category: 'zima',
    icon: "face_retouching_natural",
    color: "from-pink-400 to-rose-600",
    image: "/image/Courses/zima-2.png",
    backgroundImage: "/image/Courses/zima-2.png",
    curriculum: {
      title: "PROGRAMME IN FASHION MODELLING AND PERSONAL GROOMING",
      duration: "4 MONTHS",
      modules: [
        {
          name: "MONTH 1",
          duration: "1 MONTH",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
          topics: [
            "Introduction to fashion modelling, runway basics, professionalism",
            "Confidence building, and body language"
          ]
        },
        {
          name: "MONTH 2",
          duration: "1 MONTH",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
          topics: [
            "Personal grooming, styling, posing techniques, and portfolio building"
          ]
        },
        {
          name: "MONTH 3",
          duration: "1 MONTH",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
          topics: [
            "Advanced posing, fitness and wellness for models and personality development"
          ]
        },
        {
          name: "MONTH 4",
          duration: "1 MONTH",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
          topics: [
            "Career development, fashion industry insights, social media branding",
            "Castings and auditions, and final runway show"
          ]
        }
      ]
    },
    studentProfile: "The emerging student is a confident and polished individual equipped with essential modelling skills. They possess a strong understanding of runway techniques, personal styling, and effective posing for both editorial and commercial photoshoots."
  },
  {
    id: "zima-13",
    name: "Programme in Professional Dancing",
    duration: "4 Months",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
    description: "The Programme in Professional Dancing offers a comprehensive exploration of Bollywood dance styles, techniques, and choreography.",
    category: 'zima',
    icon: "diversity_3",
    color: "from-amber-400 to-orange-600",
    image: "/image/Courses/zima-3.png",
    backgroundImage: "/image/Courses/zima-3.png",
    curriculum: {
      title: "PROGRAMME IN PROFESSIONAL DANCING",
      duration: "4 MONTHS",
      modules: [
        {
          name: "MONTH 1",
          duration: "1 MONTH",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
          topics: [
            "Introduction to Bollywood dance styles and basic techniques"
          ]
        },
        {
          name: "MONTH 2",
          duration: "1 MONTH",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
          topics: [
            "Introducing Bollywood style variations and techniques"
          ]
        },
        {
          name: "MONTH 3",
          duration: "1 MONTH",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
          topics: [
            "Advanced techniques, styling, and choreography practice"
          ]
        },
        {
          name: "MONTH 4",
          duration: "1 MONTH",
    level: "Beginner to Pro",
    feeRange: "₹50k - ₹2L (Est.)",
          topics: [
            "Performance preparation, advanced choreography, and final showcase"
          ]
        }
      ]
    },
    studentProfile: "The emerging student is a versatile and confident dancer skilled in a wide range of Bollywood dance styles. With advanced technical proficiency in footwork, expressions, and choreography, they are capable of performing in high-energy, expressive routines."
  }
];

export function getCourseById(id: string): Course | undefined {
  return [...zicaCourses, ...zimaCourses].find(course => course.id === id);
}
