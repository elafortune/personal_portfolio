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
    summary: 'Comparer méthodes de génération et métriques de fidélité réel/synthèse pour réduire le domain gap sur des données de vision défense.',
    description: `Stage de fin d'études en computer vision et développement full stack au sein d'un acteur
    majeur de la défense. Comparaison de méthodologies d'évaluation de la qualité d'images de synthèse et de
    plusieurs méthodes de génération d'images, avec une application full stack pour l'analyse à grande échelle
    des datasets générés.`,
    achievements: [
      'Comparaison de méthodologies d\'évaluation de la qualité d\'images de synthèse par rapport au réel : métriques qualitatives de traitement d\'image (PSD, SIFT, entropy), métriques de scoring deep learning et modèles de fondation (DA2, DINOv2, DSiNE) pour réduire le domain gap',
      'Études approfondies de plusieurs méthodes de génération d\'images : Gaussian splatting (3DGS), Unreal Engine, transfer learning RGB → IR',
      'Comparaison des méthodes de génération en espace latent : détermination des métadonnées optimales de synthèse et des meilleures images des datasets générés',
      'Développement fullstack (Python/TypeScript) d\'une application optimisée en production (multi-GPU, datasets de +10 000 images) pour l\'analyse et le scoring, permettant la validation visuelle et statistique des datasets de synthèse'
    ],
    technologies: ['Python', 'TypeScript', 'Computer Vision', 'Gaussian Splatting', 'Unreal Engine', 'DINOv2', 'Multi-GPU'],
    caseStudy: {
      context: `Un acteur majeur de la défense entraîne ses modèles de vision en partie sur des données
      synthétiques — moins coûteuses à produire que des données réelles annotées, mais dont la fidélité au monde
      réel n'est jamais garantie a priori. Sans méthode pour mesurer cet écart (domain gap) ni pour comparer les
      méthodes de génération entre elles, impossible de savoir quelles données de synthèse valent la peine d'être
      utilisées pour l'entraînement.`,
      contribution: `J'ai comparé systématiquement plusieurs méthodologies d'évaluation de la fidélité réel/synthèse
      (métriques bas niveau PSD/SIFT/entropy, scoring deep learning, modèles de fondation DA2/DINOv2/DSiNE) et
      plusieurs méthodes de génération d'images (Gaussian splatting, Unreal Engine, transfer learning RGB → IR),
      puis développé une application fullstack (Python/TypeScript) optimisée multi-GPU pour scorer visuellement
      et statistiquement des datasets de plus de 10 000 images générées.`,
      challenge: `Le vrai risque n'était pas de produire un chiffre de fidélité, mais un chiffre qui reste
      exploitable à l'échelle et qui guide un vrai choix de métadonnées de synthèse. Comparer les méthodes de
      génération en espace latent pour déterminer les métadonnées optimales, sur des datasets de plus de 10 000
      images, imposait une application optimisée multi-GPU plutôt qu'un notebook d'analyse ponctuel.`,
      impact: [
        'Comparaison rigoureuse de méthodologies d\'évaluation (métriques bas niveau, scoring deep learning, modèles de fondation) pour réduire le domain gap réel/synthèse',
        'Étude comparative de plusieurs méthodes de génération d\'images (Gaussian splatting, Unreal Engine, transfer learning RGB → IR)',
        'Application fullstack (Python/TypeScript) optimisée multi-GPU, adoptée pour l\'analyse et le scoring de datasets de synthèse de plus de 10 000 images'
      ]
    }
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
    summary: 'Détecter l\'intention de traversée des piétons pour la sécurité des véhicules autonomes, via une approche générative et une approche non générative comparées en conditions réelles.',
    description: `Stage de fin d'études en R&D IA générative et non générative appliquée à la sécurité routière
    des véhicules autonomes. Détection de piéton et tracking, avec deux approches complémentaires comparées sur
    trois contextes d'évaluation distincts.`,
    achievements: [
      'Approche générative : benchmark de modèles VLM suivi d\'un fine-tuning via LoRA (+11 % de recall) pour la détermination de l\'intention de traversée',
      'Approche non générative : pipeline de segmentation, depth estimation, optical flow et keypoint tracking',
      'RAG multimodal (texte + image) basé sur des vision transformers (Mask2Former, PixelFormer, Cotracker3)',
      'Optimisation GPU du pipeline ViT : offloading, checkpointing, transfert NumPy CPU-GPU, downcasting',
      'Évaluation des modèles sur 3 contextes distincts : détection pure, détection de piétons en occlusion, détermination de l\'intention piéton'
    ],
    technologies: ['Python', 'PyTorch', 'VLM', 'LoRA', 'RAG multimodal', 'Vision Transformers', 'Optical Flow', 'Computer Vision'],
    caseStudy: {
      context: `La détection de piétons pour les véhicules autonomes doit rester fiable en environnement urbain
      dense, y compris pour anticiper l'intention de traversée — pas seulement détecter une présence — avec des
      conséquences directes sur la sécurité routière.`,
      contribution: `J'ai comparé deux approches complémentaires : une approche générative (benchmark de modèles
      VLM puis fine-tuning LoRA, +11 % de recall) et une approche non générative par pipeline classique
      (segmentation, depth estimation, optical flow, keypoint tracking), complétées par un RAG multimodal basé
      sur des vision transformers (Mask2Former, PixelFormer, Cotracker3) pour enrichir le contexte texte + image.`,
      challenge: `Faire tenir un pipeline de vision transformers multi-modèles sur le budget GPU disponible a
      demandé une optimisation fine à chaque étape du passage des images (offloading, checkpointing, transfert
      NumPy CPU-GPU, downcasting) — puis évaluer les deux approches sur 3 contextes distincts (détection pure,
      occlusion, intention) plutôt qu'une seule métrique globale, pour ne pas masquer les cas d'échec spécifiques
      à chaque approche.`,
      impact: [
        'Approche générative : +11 % de recall via benchmark VLM et fine-tuning LoRA sur la détermination de l\'intention de traversée',
        'RAG multimodal (texte + image) sur vision transformers intégré pour enrichir la détection et le tracking',
        'Pipeline GPU optimisé (offloading, checkpointing, downcasting) permettant l\'évaluation sur 3 contextes distincts sans compromis matériel'
      ]
    }
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
    summary: 'Industrialiser la récupération de centaines de tables hétérogènes en pipelines ETL fiables, avec CI/CD de bout en bout.',
    description: `Stage de 6 mois au sein de l'équipe data d'Air France KLM. Conception de pipelines ETL à
    grande échelle et mise en place de pratiques DevOps pour l'industrialisation des traitements de données.`,
    achievements: [
      'Conception et orchestration de pipelines ETL en PySpark, Hadoop, SQL et Shell pour le traitement de données à grande échelle',
      'Automatisation de la création de bases de données miniatures à partir de données de production pour les environnements de test',
      'Développement de pipelines robustes pour la récupération de centaines de tables issues de services hétérogènes',
      'Mise en place de pratiques DevOps : CI/CD (Jenkins, GitHub), automatisation des workflows, tests d\'intégration',
      'Travail en environnement agile (Jira, Confluence, Miro) en collaboration étroite avec les équipes data et IT'
    ],
    technologies: ['PySpark', 'Hadoop', 'SQL', 'Bash', 'Jenkins', 'CI/CD', 'Big Data'],
    caseStudy: {
      context: `L'équipe data d'Air France KLM avait besoin de pipelines ETL fiables pour traiter des données de
      production à grande échelle, tout en donnant aux équipes de test un accès à des jeux de données
      représentatifs sans exposer les données de production complètes.`,
      contribution: `J'ai conçu et orchestré des pipelines ETL en PySpark, Hadoop, SQL et Shell pour récupérer des
      centaines de tables issues de services hétérogènes, et automatisé la création de bases de données
      miniatures à partir des données de production pour les environnements de test — le tout intégré dans une
      chaîne CI/CD (Jenkins, GitHub).`,
      challenge: `La difficulté n'était pas algorithmique mais d'échelle et d'hétérogénéité : des centaines de
      tables issues de systèmes différents, avec des schémas et volumétries incohérents, à industrialiser dans
      une chaîne robuste unique plutôt qu'en scripts ad hoc par source.`,
      impact: [
        'Pipelines ETL (PySpark, Hadoop, SQL, Shell) industrialisés pour traiter des centaines de tables issues de services hétérogènes',
        'Génération automatisée de bases de données miniatures représentatives de la production pour les environnements de test',
        'Pratiques DevOps mises en place (CI/CD Jenkins/GitHub, tests d\'intégration) pour fiabiliser les déploiements en environnement agile'
      ]
    }
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
    summary: 'Automatiser les processus métiers internes (prospection, comptabilité) via des pipelines de données et des workflows low-code/no-code.',
    description: `Stage en développement logiciel dans une startup. Automatisation de processus métiers
    internes et mise en place de pipelines d'ingestion de données, depuis les API métiers jusqu'au stockage
    applicatif.`,
    achievements: [
      'Automatisation de processus métiers en interne (prospection, gestion de projet)',
      'Mise en place de pipelines d\'ingestion de données automatisés, depuis des API métiers jusqu\'au stockage applicatif',
      'Développement de workflows low-code/no-code (n8n, Budibase) pour l\'orchestration et la synchronisation de données inter-outils',
      'Automatisation de processus métiers (projet, comptabilité) réduisant les tâches manuelles et les risques d\'erreur'
    ],
    technologies: ['JavaScript', 'Budibase', 'n8n', 'No-Code', 'API']
  },
  {
    id: 'edu-1',
    type: 'education',
    title: 'Diplôme d\'Ingénieur — Mathématiques et statistiques appliquées : IA et Machine Learning',
    organization: 'Télécom SudParis — Institut Polytechnique de Paris',
    location: 'Évry, France',
    startDate: '2021-09',
    endDate: '2025-09',
    current: false,
    summary: 'Formation d\'ingénieur en mathématiques, statistiques et intelligence artificielle appliquée.',
    description: `Formation d'ingénieur avec spécialisation en mathématiques et statistiques appliquées à
    l'intelligence artificielle et au machine learning, au sein de l'Institut Polytechnique de Paris.`,
    achievements: [
      'Statistiques → Machine Learning → data science : apprentissage supervisé et non supervisé, statistiques paramétriques et non paramétriques, modèles graphiques',
      'Big Data & Data Engineering : pipelines ETL, SQL, PySpark et Shell',
      'Développement Python avancé : programmation orientée objet appliquée au deep learning, au reinforcement learning et à la computer vision'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'SQL', 'PySpark']
  },
  {
    id: 'edu-vilnius',
    type: 'education',
    title: 'Échange universitaire',
    organization: 'Vilnius University',
    location: 'Vilnius, Lituanie',
    startDate: '2023-02',
    endDate: '2023-06',
    current: false,
    summary: 'Semestre d\'échange académique — développement web full stack et cours de technologies financières.',
    description: `Semestre d'échange dans le cadre de la formation d'ingénieur à Télécom SudParis. Projet de
    développement web full stack et cours de programmation bas niveau et de finance.`,
    achievements: [
      'Programmation web full stack en MERN (MongoDB, Express, React, Node) : interface utilisateur de commande de livres (HTML, CSS, back-end JavaScript)',
      'Cours de Windows API (C#) et de technologies financières, dispensés en anglais'
    ],
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'C#', 'JavaScript']
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
    summary: 'Classes préparatoires scientifiques — rigueur mathématique et méthode d\'analyse.',
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

export const certifications = [
  {
    id: 'cert-toeic',
    name: 'TOEIC — 965 / 990',
    issuer: 'ETS Global'
  },
  {
    id: 'cert-dlai-data-eng',
    name: 'Introduction to Data Engineering',
    issuer: 'DeepLearning.AI'
  }
];

export const languages = [
  { name: 'Français', level: 'Langue maternelle', proficiency: 100 },
  { name: 'Anglais', level: 'Langue maternelle', proficiency: 100 },
  { name: 'Espagnol', level: 'Avancé', proficiency: 70 }
];

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
