export interface Course {
  id: string;
  name: string;
  duration: string;
  description: string;
  category: 'zica' | 'zima';
  icon: string;
  color: string;
}

export const zicaCourses: Course[] = [
  {
    id: "zica-1",
    name: "PCDP in 3D Animation Visual Effects",
    duration: "36 Months",
    description: "A comprehensive programme designed to equip students with skills in 3D modelling, texturing, rigging, animation, and advanced VFX techniques.",
    category: 'zica',
    icon: "animation",
    color: "from-blue-400 to-indigo-600"
  },
  {
    id: "zica-2",
    name: "PCDP in Animation Visual Effects (Only for Degree Prog) + Additional 1.25 L for MSU",
    duration: "36 Months",
    description: "A degree-linked programme focusing on the core principles of animation and visual effects with academic certification.",
    category: 'zica',
    icon: "movie_filter",
    color: "from-green-400 to-emerald-600"
  },
  {
    id: "zica-3",
    name: "PCDP in Advanced Game Art & Design",
    duration: "36 Months",
    description: "Master the skills needed to design characters, environments, and game worlds, covering everything from fundamental art to advanced game mechanics.",
    category: 'zica',
    icon: "joystick",
    color: "from-orange-400 to-rose-500"
  },
  {
    id: "zica-4",
    name: "PDP in 3D Animation Visual Effects",
    duration: "27 Months",
    description: "A fast-track professional development programme covering the essential pipeline of 3D animation and visual effects.",
    category: 'zica',
    icon: "auto_fix_high",
    color: "from-purple-400 to-violet-600"
  },
  {
    id: "zica-5",
    name: "PDP in Game Art & Design",
    duration: "27 Months",
    description: "Focused on mastering the creative and technical aspects of game design, including character implementation and level creation.",
    category: 'zica',
    icon: "videogame_asset",
    color: "from-pink-400 to-rose-600"
  },
  {
    id: "zica-6",
    name: "PDP in Film Making Visual Effects",
    duration: "24 Months",
    description: "A 2-year course focused on the complete pipeline of film-making and visual effects, preparing students for the dynamic film industry.",
    category: 'zica',
    icon: "movie",
    color: "from-amber-400 to-orange-600"
  },
  {
    id: "zica-7",
    name: "PDP in Interior Design",
    duration: "24 Months",
    description: "Covers the art and science of enhancing interior spaces to achieve healthier, more aesthetically pleasing, and functional environments.",
    category: 'zica',
    icon: "weekend",
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: "zica-8",
    name: "PDP in Fashion Design",
    duration: "24 Months",
    description: "Focuses on applying design, aesthetics, and beauty to clothing and accessories, influenced by cultural and social trends.",
    category: 'zica',
    icon: "checkroom",
    color: "from-teal-400 to-emerald-500"
  },
  {
    id: "zica-9",
    name: "Professional Program in 2D Animation",
    duration: "12 months",
    description: "Teaches the fundamentals of 2D animation, including character design, storyboarding, and classical animation techniques.",
    category: 'zica',
    icon: "draw",
    color: "from-red-400 to-orange-500"
  },
  {
    id: "zica-10",
    name: "Professional Program in 3D Animation",
    duration: "12 months",
    description: "A one-year program covering essential 3D animation skills from modeling and texturing to rigging and animation.",
    category: 'zica',
    icon: "view_in_ar",
    color: "from-indigo-400 to-purple-500"
  },
  {
    id: "zica-11",
    name: "Professional Program in Visual Effects",
    duration: "12 months",
    description: "Master the art of creating stunning visual effects for film and television, including compositing and rotoscoping.",
    category: 'zica',
    icon: "auto_fix_normal",
    color: "from-blue-500 to-indigo-700"
  },
  {
    id: "zica-12",
    name: "Professional Program in Game Art & Design",
    duration: "12 months",
    description: "A specialized program for aspiring game artists to learn character design and environment building.",
    category: 'zica',
    icon: "sports_esports",
    color: "from-green-500 to-emerald-700"
  },
  {
    id: "zica-13",
    name: "Professional Program in Graphic Design",
    duration: "12 months",
    description: "Teaches visual concepts to communicate ideas that inspire and captivate consumers, including layout and production design.",
    category: 'zica',
    icon: "palette",
    color: "from-orange-500 to-rose-600"
  },
  {
    id: "zica-14",
    name: "Professional Program in UI & UX",
    duration: "12 months",
    description: "Explores design principles for user-centered digital experiences, mastering wireframing, color theory, and typography.",
    category: 'zica',
    icon: "devices",
    color: "from-purple-500 to-violet-700"
  },
  {
    id: "zica-15",
    name: "Professional Program in Digital Design and Marketing",
    duration: "12 months",
    description: "Combines creative design skills with digital marketing strategies for a career in the digital era.",
    category: 'zica',
    icon: "campaign",
    color: "from-pink-500 to-rose-700"
  },
  {
    id: "zica-16",
    name: "Professional Program in Visual Promotion and AD Design",
    duration: "12 months",
    description: "Focuses on creating compelling visual content for advertisements and promotional campaigns.",
    category: 'zica',
    icon: "ads_click",
    color: "from-amber-500 to-orange-700"
  },
  {
    id: "zica-17",
    name: "Professional Program in Graphic & Web Design",
    duration: "12 months",
    description: "A dual-focus program covering both print-based graphic design and interactive web design.",
    category: 'zica',
    icon: "web",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "zica-18",
    name: "Professional Program in Interior Design",
    duration: "12 months",
    description: "A comprehensive introduction to interior design principles, spatial planning, and material selection.",
    category: 'zica',
    icon: "chair",
    color: "from-teal-500 to-emerald-600"
  },
  {
    id: "zica-19",
    name: "Professional Program in Fashion Design",
    duration: "12 months",
    description: "Teaches the core skills of fashion illustration, garment construction, and textile science.",
    category: 'zica',
    icon: "apparel",
    color: "from-red-500 to-orange-600"
  },
  {
    id: "zica-20",
    name: "Program in Graphic Design",
    duration: "6 months",
    description: "A fast-track program to learn the core principles of graphic design, typography, and image editing.",
    category: 'zica',
    icon: "design_services",
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: "zica-21",
    name: "Program in Web Design",
    duration: "6 months",
    description: "Combines text, images, and interactive media to create professional websites using HTML, CSS, and JavaScript.",
    category: 'zica',
    icon: "language",
    color: "from-blue-400 to-indigo-500"
  },
  {
    id: "zica-22",
    name: "Program in Compositing",
    duration: "6 months",
    description: "Focuses on the technical aspects of combining multiple layers of visual elements into a single image.",
    category: 'zica',
    icon: "layers",
    color: "from-green-400 to-emerald-500"
  },
  {
    id: "zica-23",
    name: "Program in Digital Marketing",
    duration: "6 months",
    description: "Covers SEO, social media marketing, and digital advertising strategies to grow businesses online.",
    category: 'zica',
    icon: "trending_up",
    color: "from-orange-400 to-rose-400"
  },
  {
    id: "zica-24",
    name: "Program in Architectural Design & Animation",
    duration: "6 months",
    description: "Teaches architectural visualization and animation techniques to bring building designs to life.",
    category: 'zica',
    icon: "architecture",
    color: "from-purple-400 to-violet-500"
  },
  {
    id: "zica-25",
    name: "Program in Fashion Styling",
    duration: "6 months",
    description: "Focuses on the art of styling for fashion shoots, events, and personal branding.",
    category: 'zica',
    icon: "content_cut",
    color: "from-pink-400 to-rose-500"
  },
  {
    id: "zica-26",
    name: "Program in Advanced Motion Graphics",
    duration: "6 months",
    description: "Teaches the creation of complex motion graphics and visual effects for broadcast and web.",
    category: 'zica',
    icon: "motion_photos_on",
    color: "from-amber-400 to-orange-500"
  },
  {
    id: "zica-27",
    name: "Program in UI & UX",
    duration: "6 months",
    description: "A focused program on user interface and user experience design for digital products.",
    category: 'zica',
    icon: "touch_app",
    color: "from-cyan-400 to-blue-400"
  },
  {
    id: "zica-28",
    name: "Program in Digital Photography",
    duration: "3 months",
    description: "Covers fundamentals of digital photography, professional camera handling, lighting, and image editing.",
    category: 'zica',
    icon: "photo_camera",
    color: "from-teal-400 to-emerald-400"
  },
  {
    id: "zica-29",
    name: "Program in Motion Graphics & Video Editing",
    duration: "3 months",
    description: "A short-term course teaching the essentials of video editing and motion graphic design.",
    category: 'zica',
    icon: "video_settings",
    color: "from-red-400 to-orange-400"
  },
  {
    id: "zica-30",
    name: "Unreal",
    duration: "10 Months",
    description: "A guide for beginners to develop interactive game environments and blueprint scripting in Unreal Engine.",
    category: 'zica',
    icon: "blur_on",
    color: "from-indigo-400 to-purple-400"
  },
  {
    id: "zica-31",
    name: "Blender",
    duration: "10 Months",
    description: "Comprehensive coverage of 3D modeling and animation essentials using Blender.",
    category: 'zica',
    icon: "rebase_edit",
    color: "from-blue-600 to-indigo-800"
  },
  {
    id: "zica-32",
    name: "Maya",
    duration: "7 Months",
    description: "Focuses on mastering Autodesk Maya for professional 3D modelling, animation, and rendering.",
    category: 'zica',
    icon: "3d_rotation",
    color: "from-green-600 to-emerald-800"
  },
  {
    id: "zica-33",
    name: "Houdini",
    duration: "6 Months",
    description: "Teaches procedural workflow and simulation techniques for creating complex visual effects.",
    category: 'zica',
    icon: "water_drop",
    color: "from-orange-600 to-rose-700"
  },
  {
    id: "zica-34",
    name: "3Ds Max",
    duration: "6 Months",
    description: "Specialized training in 3Ds Max for architectural visualization and game art.",
    category: 'zica',
    icon: "view_in_ar_new",
    color: "from-purple-600 to-violet-800"
  },
  {
    id: "zica-35",
    name: "Zbrush",
    duration: "3 Months",
    description: "Intensive training in digital sculpting and character creation using Pixologic Zbrush.",
    category: 'zica',
    icon: "brush",
    color: "from-pink-600 to-rose-800"
  },
  {
    id: "zica-36",
    name: "Final Cut Pro (FCP)",
    duration: "3 Months",
    description: "Professional video editing techniques using FCP for film and television production.",
    category: 'zica',
    icon: "movie_edit",
    color: "from-amber-600 to-orange-800"
  },
  {
    id: "zica-37",
    name: "AutoCAD",
    duration: "2.5 Month",
    description: "Master 2D and 3D drafting for architecture, engineering, and construction.",
    category: 'zica',
    icon: "architecture",
    color: "from-cyan-600 to-blue-700"
  },
  {
    id: "zica-38",
    name: "Adobe Photoshop",
    duration: "2 Month",
    description: "Mastering image editing, retouching, and digital painting in Photoshop.",
    category: 'zica',
    icon: "photo_library",
    color: "from-teal-600 to-emerald-700"
  },
  {
    id: "zica-39",
    name: "Adobe Illustrator",
    duration: "2 Month",
    description: "Creating vector-based designs, logos, and illustrations in Illustrator.",
    category: 'zica',
    icon: "draw",
    color: "from-red-600 to-orange-700"
  },
  {
    id: "zica-40",
    name: "CorelDraw",
    duration: "2 Month",
    description: "Learning vector graphics and layout design for the print and advertising industry.",
    category: 'zica',
    icon: "polyline",
    color: "from-indigo-600 to-purple-700"
  },
  {
    id: "zica-41",
    name: "Adobe Animate",
    duration: "2 Month",
    description: "Teaches the creation of interactive vector-based animations for the web and mobile.",
    category: 'zica',
    icon: "animation",
    color: "from-blue-700 to-indigo-900"
  },
  {
    id: "zica-42",
    name: "Adobe After Effects",
    duration: "2 Month",
    description: "Mastering motion graphics and visual effects compositing in After Effects.",
    category: 'zica',
    icon: "blur_linear",
    color: "from-green-700 to-emerald-900"
  },
  {
    id: "zica-43",
    name: "Fusion",
    duration: "2 Month",
    description: "Learn advanced node-based compositing and visual effects in Blackmagic Design Fusion.",
    category: 'zica',
    icon: "filter_vintage",
    color: "from-orange-700 to-rose-800"
  },
  {
    id: "zica-44",
    name: "Nuke",
    duration: "2 Month",
    description: "Professional node-based compositing and visual effects used in Hollywood blockbusters.",
    category: 'zica',
    icon: "grain",
    color: "from-purple-700 to-violet-900"
  },
  {
    id: "zica-45",
    name: "Adobe Premiere",
    duration: "1.5 Month",
    description: "Industry-standard video editing techniques for professional storytelling.",
    category: 'zica',
    icon: "video_library",
    color: "from-pink-700 to-rose-900"
  },
  {
    id: "zica-46",
    name: "Visual Effects",
    duration: "6 month",
    description: "A specialized program in the fundamentals of visual effects and compositing.",
    category: 'zica',
    icon: "flare",
    color: "from-amber-700 to-orange-900"
  }
];

export const zimaCourses: Course[] = [
  {
    id: "zima-1",
    name: "Program in Acting",
    duration: "6 Months",
    description: "A conservatory programme based on Stanislavsky's 'Method Acting' model, preparing student actors for the profession.",
    category: 'zima',
    icon: "theater_comedy",
    color: "from-purple-400 to-violet-600"
  },
  {
    id: "zima-2",
    name: "Program in Fashion Modelling & Personal Grooming",
    duration: "4 Months",
    description: "Helps aspiring models develop confidence, poise, and personal style for a career in fashion.",
    category: 'zima',
    icon: "face_retouching_natural",
    color: "from-pink-400 to-rose-600"
  },
  {
    id: "zima-3",
    name: "Program in Professional Dancing",
    duration: "4 Months",
    description: "Professional training in various dance forms to prepare students for the entertainment industry.",
    category: 'zima',
    icon: "diversity_3",
    color: "from-amber-400 to-orange-600"
  },
  {
    id: "zima-4",
    name: "Professional Program in Film Making",
    duration: "12 Months",
    description: "A comprehensive one-year journey from developing an idea to delivering a finished film.",
    category: 'zima',
    icon: "movie",
    color: "from-blue-400 to-indigo-600"
  },
  {
    id: "zima-5",
    name: "Professional Program in Sound Recording",
    duration: "12 Months",
    description: "Focuses on audio engineering, recording, mixing, and mastering for film and music.",
    category: 'zima',
    icon: "mic",
    color: "from-green-400 to-emerald-600"
  },
  {
    id: "zima-6",
    name: "Sound - Electronic Music Production",
    duration: "6 Months",
    description: "Learn the technical and creative aspects of producing electronic music using digital tools.",
    category: 'zima',
    icon: "equalizer",
    color: "from-orange-400 to-rose-500"
  },
  {
    id: "zima-7",
    name: "Sound - Film Sound Design",
    duration: "6 Months",
    description: "Specialized training in creating immersive soundscapes and audio effects for cinema.",
    category: 'zima',
    icon: "surround_sound",
    color: "from-purple-500 to-violet-700"
  },
  {
    id: "zima-8",
    name: "Program in Cinematography",
    duration: "6 Months",
    description: "Teaches the art of visual storytelling through camera techniques, lighting, and composition.",
    category: 'zima',
    icon: "video_camera_front",
    color: "from-pink-500 to-rose-700"
  },
  {
    id: "zima-9",
    name: "Program in Direction",
    duration: "6 Months",
    description: "Focuses on the creative and technical aspects of directing for film and television.",
    category: 'zima',
    icon: "director_chair",
    color: "from-amber-500 to-orange-700"
  },
  {
    id: "zima-10",
    name: "Program in Editing (FCP + AVID + Premiere)",
    duration: "6 Months",
    description: "Mastering professional editing software for seamless storytelling.",
    category: 'zima',
    icon: "movie_edit",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "zima-11",
    name: "Program in Film & Television Production",
    duration: "6 Months",
    description: "Covers the essentials of production management and the filmmaking process.",
    category: 'zima',
    icon: "video_camera_back",
    color: "from-teal-500 to-emerald-600"
  },
  {
    id: "zima-12",
    name: "Program in Screen Writing",
    duration: "6 Months",
    description: "Teaches the fundamentals of storytelling, character development, and script formatting.",
    category: 'zima',
    icon: "history_edu",
    color: "from-red-500 to-orange-600"
  },
  {
    id: "zima-13",
    name: "Voicing & TV presentation",
    duration: "3 Months",
    description: "Training in voice modulation and presentation skills for television and radio.",
    category: 'zima',
    icon: "record_voice_over",
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: "zima-14",
    name: "Final Cut Pro (FCP)",
    duration: "2 Months",
    description: "Intensive course on video editing using the professional FCP software.",
    category: 'zima',
    icon: "video_file",
    color: "from-blue-600 to-indigo-800"
  },
  {
    id: "zima-15",
    name: "Avid Media Composer",
    duration: "2 Months",
    description: "Mastering the industry-standard editing tool for professional film and TV.",
    category: 'zima',
    icon: "video_settings",
    color: "from-green-600 to-emerald-800"
  },
  {
    id: "zima-16",
    name: "Premiere",
    duration: "2 Months",
    description: "Fast-paced course on video editing and storytelling using Adobe Premiere Pro.",
    category: 'zima',
    icon: "theaters",
    color: "from-orange-600 to-rose-700"
  }
];
