export const projects = [
  {
    id: 'project-1',
    title: 'Analyse de Données E-commerce',
    shortDescription: 'Analyse exploratoire et visualisation de données pour un site e-commerce',
    fullDescription: `Projet d'analyse de données pour comprendre les comportements d'achat sur une plateforme e-commerce.
    Exploration des données clients, analyse des tendances de ventes et création de visualisations interactives
    pour identifier les opportunités d'amélioration du business.`,
    image: '/images/projects/ecommerce-analysis.svg',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    category: 'Data Analysis',
    githubUrl: null,
    liveUrl: null,
    date: '2024-01',
    featured: false,
    outcomes: [
      'Identification des produits les plus rentables',
      'Analyse de la saisonnalité des ventes',
      'Visualisations interactives pour l\'équipe business'
    ],
    challenges: `Nettoyage d'un dataset volumineux avec données manquantes et incohérentes.
    Création de métriques pertinentes pour le suivi des performances commerciales.`
  },
  {
    id: 'project-2',
    title: 'Détection de Fraudes Bancaires',
    shortDescription: 'Modèle de Machine Learning pour détecter les transactions frauduleuses en temps réel',
    fullDescription: `Développement d'un système de détection de fraudes pour les transactions bancaires.
    Utilisation de techniques de machine learning pour identifier les comportements suspects et
    minimiser les faux positifs tout en maximisant la détection des vraies fraudes.`,
    image: '/images/projects/fraud-detection.svg',
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Imbalanced-learn'],
    category: 'Machine Learning',
    githubUrl: null,
    liveUrl: null,
    date: '2024-06',
    featured: true,
    outcomes: [
      'Précision de 95%+ sur la détection des fraudes',
      'Réduction significative des faux positifs',
      'Pipeline de traitement optimisé pour le temps réel'
    ],
    challenges: `Gestion d'un dataset fortement déséquilibré avec techniques de SMOTE et undersampling.
    Optimisation du compromis précision/rappel pour minimiser l'impact sur les clients légitimes.`
  },
  {
    id: 'project-3',
    title: 'Agent IA',
    shortDescription: 'Un agent conversationnel intelligent capable de raisonner, chercher et agir de manière autonome',
    fullDescription: `Et si une IA ne se contentait plus de répondre, mais apprenait à agir ?

C'est la question qui est à l'origine de ce projet. Là où un simple chatbot récite ce qu'il a mémorisé, un agent raisonne : il décompose un problème, choisit les bons outils, interroge des sources externes, puis synthétise une réponse ancrée dans le réel.

L'idée centrale est simple mais puissante — combiner la capacité de compréhension d'un grand modèle de langage avec la précision d'une recherche documentaire ciblée. Le résultat : un assistant qui ne hallucine pas, qui cite ses sources, et qui s'adapte au contexte de chaque échange.

Ce projet explore l'architecture complète d'un agent IA moderne : une API backend construite avec FastAPI, un moteur RAG (Retrieval-Augmented Generation) orchestré par LangChain, une base vectorielle ChromaDB pour le stockage des embeddings, et une interface frontend pensée pour rendre l'expérience fluide et accessible.

L'objectif n'était pas de construire un énième chatbot générique, mais un outil à usage réel — capable d'ingérer des documents personnalisés, de les comprendre en profondeur, et de répondre avec précision aux questions qui comptent vraiment.`,
    image: '/images/projects/rag-system.svg',
    technologies: ['Python', 'LangChain', 'OpenAI', 'ChromaDB', 'FastAPI', 'React'],
    category: 'NLP',
    githubUrl: 'https://github.com/elafortune/personal_agent',
    liveUrl: 'https://personal-agent-wk8s.onrender.com',
    date: '2025-01',
    featured: true,
    outcomes: [
      'Agent capable de raisonner en plusieurs étapes avant de répondre',
      'Réponses contextuelles précises ancrées dans les documents fournis',
      'Réduction significative des hallucinations grâce au RAG',
      'Interface complète frontend + backend déployable'
    ],
    challenges: `Trouver le bon équilibre entre autonomie de l'agent et contrôle des réponses.
    Optimisation du chunking documentaire pour maximiser la pertinence des résultats.
    Gestion de la latence end-to-end pour une expérience utilisateur fluide.`
  }
];

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category) => {
  if (!category || category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get unique categories
export const getUniqueCategories = () => {
  return [...new Set(projects.map(project => project.category))];
};
