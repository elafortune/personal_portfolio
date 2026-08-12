export const aboutInfo = {
  name: 'Emerick Lafortune',
  title: 'Ingénieur IA / Full Stack',
  tagline: 'Du prototype de recherche à l\'application en production',
  profileImage: '/images/profile.jpg',
  bio: [
    `Ingénieur diplômé de Télécom SudParis, spécialisé en Data Science et Intelligence Artificielle, je conçois
    et je livre des systèmes intelligents de bout en bout — du modèle au déploiement en production. Ma formation
    combine une base mathématique solide et une pratique concrète du machine learning, du deep learning et de
    l'IA générative.`,

    `Chez MBDA, Alten Labs et Air France KLM, j'ai travaillé aussi bien sur des systèmes de computer vision
    robustes à grande échelle que sur des pipelines Big Data et des interfaces full stack (Python/TypeScript).
    Cette double casquette — data scientist et ingénieur logiciel — me permet de porter un projet du prototype
    de recherche jusqu'à l'application en production.`,

    `Curieux et rigoureux, j'aime relever des défis techniques complexes et transformer des idées innovantes
    en solutions fonctionnelles et robustes. Je suis actuellement à la recherche de nouvelles opportunités pour
    contribuer à des projets ambitieux en IA et en ingénierie logicielle.`
  ],
  location: 'Paris, France',
  email: 'emerick.lafortune@gmail.com',
  phone: '+33 6 63 73 26 77',
  availability: 'Disponible pour de nouvelles opportunités',
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
    title: 'Computer Vision & Full Stack Engineer (Stage)',
    organization: 'MBDA',
    location: 'France',
    startDate: '2026-01',
    endDate: '2026-07',
    current: false,
    description: `Stage de fin d'études en computer vision et développement full stack au sein d'un acteur
    majeur de la défense. Conception d'un framework d'évaluation de la fidélité des données synthétiques et
    d'une interface d'analyse pour l'entraînement de modèles de vision.`,
    achievements: [
      'Création d\'un framework d\'évaluation comparant la fidélité des images réelles/synthétiques (métriques bas niveau, FID, SAM) pour réduire le domain gap',
      'Optimisation itérative des données de synthèse pour maximiser les performances des modèles de segmentation, détection et tracking',
      'Conception d\'une IHM d\'analyse et de scoring (Python/TypeScript) pour la validation visuelle et statistique des jeux de données générés'
    ],
    technologies: ['Python', 'TypeScript', 'Computer Vision', 'FID', 'Segmentation', 'Détection', 'Tracking']
  },
  {
    id: 'exp-1',
    type: 'experience',
    title: 'Generative AI Engineer & Computer Vision (Stage)',
    organization: 'Alten Labs',
    location: 'Paris, France',
    startDate: '2025-07',
    endDate: '2026-01',
    current: false,
    description: `Stage de fin d'études en IA générative et computer vision appliquée à la sécurité routière
    des véhicules autonomes. R&D sur des approches génératives et non génératives pour la détection et le
    tracking de piétons.`,
    achievements: [
      'Développement d\'un pipeline CNN + LSTM pour la détection et le tracking de piétons en environnement urbain dynamique (occlusions partielles)',
      'Implémentation d\'approches génératives basées sur le fine-tuning de VLM et un RAG multimodal',
      'Optimisation de la mémoire GPU (offloading, fine-tuning LoRA, prétraitements NumPy optimisés pour les transferts CPU-GPU)',
      'Benchmark comparatif des modèles en conditions réelles (milieu urbain, occlusions partielles)'
    ],
    technologies: ['Python', 'PyTorch', 'VLM', 'LoRA', 'RAG multimodal', 'CNN', 'LSTM', 'Computer Vision']
  },
  {
    id: 'exp-2',
    type: 'experience',
    title: 'Big Data Engineer (Stage)',
    organization: 'Air France KLM',
    location: 'Paris, France',
    startDate: '2024-04',
    endDate: '2024-10',
    current: false,
    description: `Stage de 6 mois au sein de l'équipe data d'Air France KLM. Conception de pipelines ETL à
    grande échelle et mise en place de pratiques DevOps pour l'industrialisation des traitements de données.`,
    achievements: [
      'Conception et orchestration de pipelines ETL en PySpark, Hadoop, SQL et Shell pour le traitement de données à grande échelle',
      'Automatisation de la création de bases de données miniatures à partir de données de production pour les environnements de test',
      'Développement de pipelines robustes pour la récupération de centaines de tables issues de services hétérogènes',
      'Mise en place de pratiques DevOps : CI/CD (Jenkins, GitHub), automatisation des workflows, tests d\'intégration',
      'Travail en environnement agile (Jira, Confluence, Miro) en collaboration étroite avec les équipes data et IT'
    ],
    technologies: ['PySpark', 'Hadoop', 'SQL', 'Bash', 'Jenkins', 'CI/CD', 'Big Data']
  },
  {
    id: 'exp-3',
    type: 'experience',
    title: 'Software Engineer (Stage)',
    organization: 'LONVI',
    location: 'France',
    startDate: '2022-06',
    endDate: '2022-08',
    current: false,
    description: `Stage en développement logiciel dans une startup. Développement d'applications
    web et mise en place de workflows automatisés avec des outils no-code.`,
    achievements: [
      'Développement d\'interfaces utilisateur en JavaScript',
      'Mise en place de workflows automatisés avec n8n',
      'Création d\'applications internes avec Budibase'
    ],
    technologies: ['JavaScript', 'Budibase', 'n8n', 'No-Code']
  },
  {
    id: 'edu-1',
    type: 'education',
    title: 'Diplôme d\'Ingénieur - Spécialisation Data Science & IA',
    organization: 'Télécom SudParis',
    location: 'Évry, France',
    startDate: '2021-09',
    endDate: '2025-09',
    current: false,
    description: `Formation d'ingénieur avec spécialisation en mathématiques, statistiques et
    intelligence artificielle. Projets appliqués en machine learning, deep learning et data engineering.`,
    achievements: [
      'Spécialisation en Data Science et Intelligence Artificielle',
      'Projets en machine learning, NLP et computer vision',
      'Formation solide en mathématiques et statistiques appliquées'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'SQL', 'Spark']
  },
  {
    id: 'edu-2',
    type: 'education',
    title: 'Classes Préparatoires MPSI/MP',
    organization: 'Lycée Stanislas',
    location: 'Cannes, France',
    startDate: '2018-09',
    endDate: '2021-06',
    current: false,
    description: `Classes préparatoires aux grandes écoles en filière Mathématiques-Physique.
    Formation intensive en mathématiques, physique et informatique.`,
    achievements: [
      'Admission à Télécom SudParis sur concours',
      'Solide formation en mathématiques et physique',
      'Développement de la rigueur scientifique et des capacités d\'analyse'
    ],
    technologies: ['Python', 'C', 'Mathématiques', 'Physique']
  }
];

export const certifications = [];

export const interests = [
  {
    icon: '🏆',
    title: 'Compétitions Kaggle',
    description: 'Participation aux challenges de machine learning et data science'
  },
  {
    icon: '🧠',
    title: 'Recherche en IA',
    description: 'Veille active sur les dernières avancées en IA générative et deep learning'
  },
  {
    icon: '🌐',
    title: 'Création de Sites Web',
    description: 'Conception et développement de sites web : e-commerce, vitrines, portfolios'
  },
  {
    icon: '🏀',
    title: 'Basketball',
    description: 'Pratique régulière du basketball en loisir'
  },
  {
    icon: '♟️',
    title: 'Échecs',
    description: 'Passionné de stratégie, classé 2270 Elo FIDE'
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
