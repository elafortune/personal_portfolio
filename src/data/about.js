export const aboutInfo = {
  name: 'Emerick Lafortune',
  title: 'Data Scientist',
  tagline: 'Transforming data into actionable insights',
  profileImage: '/images/profile.jpg',
  bio: [
    `Ingénieur diplômé de Télécom SudParis avec une spécialisation en Data Science et Intelligence Artificielle,
    je suis passionné par les technologies de pointe en IA. Mon parcours m'a permis d'acquérir une solide
    formation mathématique et une expertise pratique en machine learning, deep learning et IA générative.`,

    `À travers mes expériences chez Alten Labs et Air France KLM, j'ai pu travailler sur des projets variés :
    développement de systèmes RAG multimodaux, modèles de deep learning (LSTM, CNN, VLM), et pipelines de
    données Big Data. Je suis particulièrement intéressé par les applications concrètes de l'IA générative.`,

    `Curieux et rigoureux, j'aime relever des défis techniques complexes et transformer des idées innovantes
    en solutions fonctionnelles. Je suis actuellement à la recherche de nouvelles opportunités pour contribuer
    à des projets ambitieux en Data Science et Intelligence Artificielle.`
  ],
  location: 'Paris, France',
  email: 'emerick.lafortune@gmail.com',
  phone: '+33 6 12 34 56 78',
  availability: 'Disponible pour de nouvelles opportunités',
  social: {
    github: null,
    linkedin: 'https://linkedin.com/in/emerick-lafortune',
    twitter: null,
    kaggle: null,
    medium: null
  },
  resume: '/documents/CV_Data_Scientist.pdf'
};

export const timeline = [
  {
    id: 'exp-1',
    type: 'experience',
    title: 'AI Engineer (Stage)',
    organization: 'Alten Labs',
    location: 'Paris, France',
    startDate: '2025-07',
    endDate: '2026-01',
    current: false,
    description: `Stage de fin d'études en IA générative et computer vision. Développement de solutions
    RAG multimodales et de modèles de deep learning pour des applications industrielles.`,
    achievements: [
      'Développement d\'un système RAG multimodal avec VLM',
      'Implémentation de modèles LSTM+CNN pour l\'analyse de séries temporelles',
      'Contribution à des projets d\'IA générative en production'
    ],
    technologies: ['Python', 'RAG', 'VLM', 'LSTM', 'CNN', 'LangChain']
  },
  {
    id: 'exp-2',
    type: 'experience',
    title: 'Data Engineer (Stage)',
    organization: 'Air France KLM',
    location: 'Paris, France',
    startDate: '2024-04',
    endDate: '2024-10',
    current: false,
    description: `Stage de 6 mois en data engineering au sein de l'équipe data d'Air France KLM.
    Travail sur les pipelines de données et l'optimisation des traitements Big Data.`,
    achievements: [
      'Développement de pipelines de données avec PySpark',
      'Optimisation des requêtes SQL pour le traitement de données massives',
      'Automatisation de processus avec scripts Bash'
    ],
    technologies: ['PySpark', 'SQL', 'Bash', 'Big Data']
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

// Helper function to calculate years of experience
export const getYearsOfExperience = () => {
  const experiences = getExperience();
  if (experiences.length === 0) return 0;

  const firstJob = experiences[experiences.length - 1];
  const startYear = parseInt(firstJob.startDate.split('-')[0]);
  const currentYear = new Date().getFullYear();

  return currentYear - startYear;
};
