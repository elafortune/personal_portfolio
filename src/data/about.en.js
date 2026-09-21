export const aboutInfo = {
  name: 'Emerick Lafortune',
  title: 'AI / Full Stack Engineer',
  tagline: 'From research prototype to production application',
  profileImage: '/images/profile.jpg',
  bio: [
    `Engineering graduate from Télécom SudParis, specialized in Data Science and Artificial Intelligence, I design
    and deliver end-to-end intelligent systems, from the model to production deployment. My training
    combines a solid mathematical foundation with hands-on practice in machine learning, deep learning and
    generative AI.`,

    `At MBDA, Alten Labs and Air France KLM, I worked on large-scale, robust computer vision systems
    as well as Big Data pipelines and full-stack interfaces (Python/TypeScript).
    This dual profile as a data scientist and software engineer lets me carry a project from research
    prototype through to production application.`,

    `Curious and rigorous, I enjoy tackling complex technical challenges and turning innovative ideas
    into functional, robust solutions. I am currently looking for new opportunities to
    contribute to ambitious AI and software engineering projects.`
  ],
  location: 'Paris, France',
  email: 'emerick.lafortune@gmail.com',
  phone: '+33 6 63 73 26 77',
  availability: 'Available for new opportunities',
  social: {
    github: null,
    linkedin: 'https://linkedin.com/in/emerick-lafortune',
    twitter: null,
    kaggle: null,
    medium: null
  },
  resume: '/documents/CV_Emerick_Lafortune.pdf'
};

export const timeline = [
  {
    id: 'exp-mbda',
    type: 'experience',
    title: 'Computer Vision & Full Stack Engineer (Internship)',
    organization: 'MBDA',
    location: 'France',
    startDate: '2026-01',
    endDate: '2026-07',
    current: false,
    summary: 'Compare generation methods and real/synthetic fidelity metrics to reduce the domain gap on defense vision data.',
    description: `End-of-studies internship in computer vision and full-stack development at a
    major defense player. Comparison of methodologies for evaluating synthetic image quality and
    several image generation methods, with a full-stack application for large-scale analysis
    of the generated datasets.`,
    achievements: [
      'Comparison of methodologies for evaluating synthetic vs. real image quality: qualitative image-processing metrics (PSD, SIFT, entropy), deep learning scoring metrics and foundation models (DA2, DINOv2, DSiNE) to reduce the domain gap',
      'In-depth studies of several image generation methods: Gaussian splatting (3DGS), Unreal Engine, RGB → IR transfer learning',
      'Comparison of generation methods in latent space: determining optimal synthesis metadata and the best images from the generated datasets',
      'Full-stack development (Python/TypeScript) of a production-optimized application (multi-GPU, datasets of 10,000+ images) for analysis and scoring, enabling visual and statistical validation of synthetic datasets'
    ],
    technologies: ['Python', 'TypeScript', 'Computer Vision', 'Gaussian Splatting', 'Unreal Engine', 'DINOv2', 'Multi-GPU'],
    caseStudy: {
      context: `A major defense player trains its vision models partly on synthetic data, cheaper to
      produce than annotated real data, but whose fidelity to the real world is never guaranteed a priori.
      With no method to measure this gap (domain gap) or to compare generation methods against each other,
      there was no way to know which synthetic data was worth using for training.`,
      contribution: `I systematically compared several real/synthetic fidelity evaluation methodologies
      (low-level PSD/SIFT/entropy metrics, deep learning scoring, DA2/DINOv2/DSiNE foundation models) and
      several image generation methods (Gaussian splatting, Unreal Engine, RGB → IR transfer learning),
      then developed a multi-GPU-optimized full-stack application (Python/TypeScript) to score
      more than 10,000 generated images both visually and statistically.`,
      challenge: `The real risk wasn't producing a fidelity number, but a number that stays usable
      at scale and guides an actual choice of synthesis metadata. Comparing generation methods
      in latent space to determine optimal metadata, on datasets of more than 10,000
      images, required a multi-GPU-optimized application rather than a one-off analysis notebook.`,
      impact: [
        'Rigorous comparison of evaluation methodologies (low-level metrics, deep learning scoring, foundation models) to reduce the real/synthetic domain gap',
        'Comparative study of several image generation methods (Gaussian splatting, Unreal Engine, RGB → IR transfer learning)',
        'Multi-GPU-optimized full-stack application (Python/TypeScript), adopted for analyzing and scoring synthetic datasets of more than 10,000 images'
      ]
    }
  },
  {
    id: 'exp-1',
    type: 'experience',
    title: 'Generative AI Engineer & Computer Vision (Internship)',
    organization: 'Alten Labs',
    location: 'Paris, France',
    startDate: '2025-07',
    endDate: '2026-01',
    current: false,
    summary: 'Detect pedestrian crossing intent for autonomous vehicle safety, comparing a generative and a non-generative approach under real-world conditions.',
    description: `End-of-studies internship in generative and non-generative AI R&D applied to autonomous
    vehicle road safety. Pedestrian detection and tracking, with two complementary approaches compared across
    three distinct evaluation contexts.`,
    achievements: [
      'Generative approach: VLM model benchmark followed by LoRA fine-tuning (+11% recall) for determining crossing intent',
      'Non-generative approach: segmentation, depth estimation, optical flow and keypoint tracking pipeline',
      'Multimodal RAG (text + image) based on vision transformers (Mask2Former, PixelFormer, Cotracker3)',
      'GPU optimization of the ViT pipeline: offloading, checkpointing, CPU-GPU NumPy transfer, downcasting',
      'Model evaluation across 3 distinct contexts: pure detection, occluded pedestrian detection, pedestrian intent determination'
    ],
    technologies: ['Python', 'PyTorch', 'VLM', 'LoRA', 'Multimodal RAG', 'Vision Transformers', 'Optical Flow', 'Computer Vision'],
    caseStudy: {
      context: `Pedestrian detection for autonomous vehicles must remain reliable in dense
      urban environments, including anticipating crossing intent, not just detecting a presence, with direct
      consequences on road safety.`,
      contribution: `I compared two complementary approaches: a generative approach (VLM model
      benchmark then LoRA fine-tuning, +11% recall) and a non-generative approach using a classic pipeline
      (segmentation, depth estimation, optical flow, keypoint tracking), complemented by a multimodal RAG based
      on vision transformers (Mask2Former, PixelFormer, Cotracker3) to enrich the text + image context.`,
      challenge: `Fitting a multi-model vision transformer pipeline within the available GPU budget
      required fine-grained optimization at every step of image processing (offloading, checkpointing,
      CPU-GPU NumPy transfer, downcasting), then evaluating both approaches across 3 distinct contexts (pure
      detection, occlusion, intent) rather than a single global metric, so as not to mask failure cases specific
      to each approach.`,
      impact: [
        'Generative approach: +11% recall via VLM benchmark and LoRA fine-tuning on crossing intent determination',
        'Multimodal RAG (text + image) on vision transformers integrated to enrich detection and tracking',
        'GPU-optimized pipeline (offloading, checkpointing, downcasting) enabling evaluation across 3 distinct contexts with no hardware compromise'
      ]
    }
  },
  {
    id: 'exp-2',
    type: 'experience',
    title: 'Big Data Engineer (Internship)',
    organization: 'Air France KLM',
    location: 'Paris, France',
    startDate: '2024-04',
    endDate: '2024-10',
    current: false,
    summary: 'Industrialize the retrieval of hundreds of heterogeneous tables into reliable ETL pipelines, with end-to-end CI/CD.',
    description: `6-month internship within Air France KLM's data team. Design of large-scale
    ETL pipelines and implementation of DevOps practices to industrialize data processing.`,
    achievements: [
      'Design and orchestration of ETL pipelines in PySpark, Hadoop, SQL and Shell for large-scale data processing',
      'Automated creation of miniature databases from production data for test environments',
      'Development of robust pipelines to retrieve hundreds of tables from heterogeneous services',
      'Implementation of DevOps practices: CI/CD (Jenkins, GitHub), workflow automation, integration testing',
      'Work in an agile environment (Jira, Confluence, Miro) in close collaboration with data and IT teams'
    ],
    technologies: ['PySpark', 'Hadoop', 'SQL', 'Bash', 'Jenkins', 'CI/CD', 'Big Data'],
    caseStudy: {
      context: `Air France KLM's data team needed reliable ETL pipelines to process large-scale
      production data, while giving test teams access to representative datasets
      without exposing full production data.`,
      contribution: `I designed and orchestrated ETL pipelines in PySpark, Hadoop, SQL and Shell to retrieve
      hundreds of tables from heterogeneous services, and automated the creation of miniature
      databases from production data for test environments, all integrated into a
      CI/CD chain (Jenkins, GitHub).`,
      challenge: `The difficulty wasn't algorithmic but one of scale and heterogeneity: hundreds of
      tables from different systems, with inconsistent schemas and volumes, to industrialize into
      a single robust chain rather than ad hoc scripts per source.`,
      impact: [
        'ETL pipelines (PySpark, Hadoop, SQL, Shell) industrialized to process hundreds of tables from heterogeneous services',
        'Automated generation of miniature databases representative of production for test environments',
        'DevOps practices implemented (CI/CD Jenkins/GitHub, integration tests) to make deployments more reliable in an agile environment'
      ]
    }
  },
  {
    id: 'exp-3',
    type: 'experience',
    title: 'Software Engineer (Internship)',
    organization: 'LONVI',
    location: 'France',
    startDate: '2022-06',
    endDate: '2022-08',
    current: false,
    summary: 'Automate internal business processes (prospecting, accounting) via data pipelines and low-code/no-code workflows.',
    description: `Software development internship at a startup. Automation of internal
    business processes and implementation of data ingestion pipelines, from business APIs
    through to application storage.`,
    achievements: [
      'Automation of internal business processes (prospecting, project management)',
      'Implementation of automated data ingestion pipelines, from business APIs through to application storage',
      'Development of low-code/no-code workflows (n8n, Budibase) for orchestration and data synchronization across tools',
      'Automation of business processes (project, accounting) reducing manual tasks and error risk'
    ],
    technologies: ['JavaScript', 'Budibase', 'n8n', 'No-Code', 'API']
  },
  {
    id: 'edu-1',
    type: 'education',
    title: "Engineering Degree in Applied Mathematics and Statistics: AI and Machine Learning",
    organization: 'Télécom SudParis, Institut Polytechnique de Paris',
    location: 'Évry, France',
    startDate: '2021-09',
    endDate: '2025-09',
    current: false,
    summary: 'Engineering program in mathematics, statistics and applied artificial intelligence.',
    description: `Engineering program specialized in mathematics and statistics applied to
    artificial intelligence and machine learning, at Institut Polytechnique de Paris.`,
    achievements: [
      'Statistics → Machine Learning → data science: supervised and unsupervised learning, parametric and non-parametric statistics, graphical models',
      'Big Data & Data Engineering: ETL pipelines, SQL, PySpark and Shell',
      'Advanced Python development: object-oriented programming applied to deep learning, reinforcement learning and computer vision'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'SQL', 'PySpark']
  },
  {
    id: 'edu-vilnius',
    type: 'education',
    title: 'University Exchange',
    organization: 'Vilnius University',
    location: 'Vilnius, Lithuania',
    startDate: '2023-02',
    endDate: '2023-06',
    current: false,
    summary: 'Academic exchange semester: full-stack web development and financial technology coursework.',
    description: `Exchange semester as part of the engineering program at Télécom SudParis. Full-stack
    web development project and low-level programming and finance coursework.`,
    achievements: [
      'Full-stack web programming in MERN (MongoDB, Express, React, Node): book-ordering user interface (HTML, CSS, JavaScript back end)',
      'Windows API (C#) and financial technology coursework, taught in English'
    ],
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'C#', 'JavaScript']
  },
  {
    id: 'edu-2',
    type: 'education',
    title: 'Preparatory Classes MPSI/MP',
    organization: 'Lycée Stanislas',
    location: 'Cannes, France',
    startDate: '2018-09',
    endDate: '2021-06',
    current: false,
    summary: 'Selective science preparatory program: mathematical rigor and analytical method.',
    description: `Preparatory classes for France's top engineering schools, Mathematics-Physics track.
    Intensive training in mathematics, physics and computer science.`,
    achievements: [
      'Admission to Télécom SudParis by competitive examination',
      'Solid foundation in mathematics and physics',
      'Development of scientific rigor and analytical skills'
    ],
    technologies: ['Python', 'C', 'Mathematics', 'Physics']
  }
];

export const certifications = [
  {
    id: 'cert-toeic',
    name: 'TOEIC 965 / 990',
    issuer: 'ETS Global'
  },
  {
    id: 'cert-dlai-data-eng',
    name: 'Introduction to Data Engineering',
    issuer: 'DeepLearning.AI'
  }
];

export const languages = [
  { name: 'French', level: 'Native', proficiency: 100 },
  { name: 'English', level: 'Native', proficiency: 100 },
  { name: 'Spanish', level: 'Advanced', proficiency: 70 }
];

export const interests = [
  {
    icon: '🏆',
    title: 'Kaggle Competitions',
    description: 'Participation in machine learning and data science challenges'
  },
  {
    icon: '🧠',
    title: 'AI Research',
    description: 'Actively following the latest advances in generative AI and deep learning'
  },
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Designing and building websites: e-commerce, showcase sites, portfolios'
  },
  {
    icon: '🏀',
    title: 'Basketball',
    description: 'Regular recreational basketball player'
  },
  {
    icon: '♟️',
    title: 'Chess',
    description: 'Passionate about strategy, rated 2270 Elo FIDE'
  }
];

// Helper function to get current position
export const getCurrentPosition = () => {
  return timeline.find(item => item.type === 'experience' && item.current);
};

// Helper function to get experience items
export const getExperience = () => {
  return timeline.filter(item => item.type === 'experience');
};

// Helper function to get education items
export const getEducation = () => {
  return timeline.filter(item => item.type === 'education');
};

// Helper function to calculate years of experience in Data Science / AI / Engineering roles
// (excludes exp-3, a generic software internship unrelated to this track)
export const getYearsOfExperience = () => {
  const experiences = getExperience().filter(item => item.id !== 'exp-3');
  if (experiences.length === 0) return 0;

  const startYears = experiences.map(item => parseInt(item.startDate.split('-')[0]));
  const earliestYear = Math.min(...startYears);
  const currentYear = new Date().getFullYear();

  return currentYear - earliestYear;
};
