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
    summary: 'Mesurer le fossé entre données réelles et synthétiques pour fiabiliser l\'entraînement de modèles de vision en contexte défense.',
    description: `Stage de fin d'études en computer vision et développement full stack au sein d'un acteur
    majeur de la défense. Conception d'un framework d'évaluation de la fidélité des données synthétiques et
    d'une interface d'analyse pour l'entraînement de modèles de vision.`,
    achievements: [
      'Création d\'un framework d\'évaluation comparant la fidélité des images réelles/synthétiques (métriques bas niveau, FID, SAM) pour réduire le domain gap',
      'Optimisation itérative des données de synthèse pour maximiser les performances des modèles de segmentation, détection et tracking',
      'Conception d\'une IHM d\'analyse et de scoring (Python/TypeScript) pour la validation visuelle et statistique des jeux de données générés'
    ],
    technologies: ['Python', 'TypeScript', 'Computer Vision', 'FID', 'Segmentation', 'Détection', 'Tracking'],
    caseStudy: {
      context: `Un acteur majeur de la défense entraîne ses modèles de vision (segmentation, détection, tracking) en
      partie sur des données synthétiques — moins coûteuses à produire que des données réelles annotées, mais dont
      la fidélité au monde réel n'est jamais garantie a priori. Sans méthode pour mesurer cet écart (domain gap),
      impossible de savoir si les gains observés en synthèse se traduisent réellement en production.`,
      contribution: `J'ai conçu un framework d'évaluation comparant systématiquement images réelles et synthétiques
      sur des métriques bas niveau et des métriques perceptuelles (FID, SAM), puis une interface d'analyse
      (Python/TypeScript) permettant aux équipes de scorer visuellement et statistiquement chaque nouveau lot de
      données synthétiques avant de l'utiliser pour l'entraînement.`,
      challenge: `Le vrai risque n'était pas de produire un chiffre de fidélité, mais un chiffre qui corrèle
      réellement avec la performance des modèles en aval. J'ai croisé itérativement les métriques de fidélité avec
      les gains effectifs en segmentation, détection et tracking, pour m'assurer que le framework guidait de
      vraies décisions plutôt qu'un proxy trompeur.`,
      impact: [
        'Framework d\'évaluation réel/synthétique combinant métriques bas niveau et perceptuelles (FID, SAM), utilisé pour réduire le domain gap',
        'Optimisation itérative des données de synthèse guidée par les gains mesurés en segmentation, détection et tracking — pas par intuition',
        'IHM d\'analyse et de scoring (Python/TypeScript) adoptée pour la validation visuelle et statistique de chaque nouveau jeu de données généré'
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
    summary: 'Détecter et suivre des piétons en milieu urbain dense — même partiellement masqués — pour la sécurité des véhicules autonomes.',
    description: `Stage de fin d'études en IA générative et computer vision appliquée à la sécurité routière
    des véhicules autonomes. R&D sur des approches génératives et non génératives pour la détection et le
    tracking de piétons.`,
    achievements: [
      'Développement d\'un pipeline CNN + LSTM pour la détection et le tracking de piétons en environnement urbain dynamique (occlusions partielles)',
      'Implémentation d\'approches génératives basées sur le fine-tuning de VLM et un RAG multimodal',
      'Optimisation de la mémoire GPU (offloading, fine-tuning LoRA, prétraitements NumPy optimisés pour les transferts CPU-GPU)',
      'Benchmark comparatif des modèles en conditions réelles (milieu urbain, occlusions partielles)'
    ],
    technologies: ['Python', 'PyTorch', 'VLM', 'LoRA', 'RAG multimodal', 'CNN', 'LSTM', 'Computer Vision'],
    caseStudy: {
      context: `La détection de piétons pour les véhicules autonomes doit rester fiable en environnement urbain
      dense, avec des occlusions partielles fréquentes — exactement le cas où les approches de détection
      classiques échouent le plus souvent, avec des conséquences directes sur la sécurité routière.`,
      contribution: `J'ai développé un pipeline CNN + LSTM pour le tracking de piétons, puis exploré des approches
      génératives complémentaires (fine-tuning de VLM, RAG multimodal) pour renforcer la robustesse aux
      occlusions, avant de comparer l'ensemble par benchmark en conditions réelles.`,
      challenge: `Le compromis central était mémoire vs performance : les VLM et approches génératives sont
      gourmands en VRAM, incompatibles avec un fine-tuning naïf sur le matériel disponible. J'ai optimisé les
      prétraitements (transferts CPU-GPU en NumPy) et utilisé l'offloading et le fine-tuning LoRA pour garder un
      entraînement viable sans exploser la consommation mémoire.`,
      impact: [
        'Pipeline CNN + LSTM pour la détection et le tracking de piétons robuste aux occlusions partielles en environnement urbain dynamique',
        'Approches génératives (fine-tuning VLM, RAG multimodal) intégrées malgré une contrainte mémoire GPU forte, via offloading et LoRA',
        'Benchmark comparatif des modèles en conditions réelles pour objectiver le choix d\'approche plutôt que le supposer'
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
    summary: 'Développement d\'interfaces web et automatisation de workflows no-code pour une startup.',
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
    summary: 'Formation d\'ingénieur en mathématiques, statistiques et intelligence artificielle appliquée.',
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
