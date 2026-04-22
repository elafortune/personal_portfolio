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
    title: 'Système RAG Intelligent',
    shortDescription: 'Application de Retrieval-Augmented Generation pour la recherche documentaire',
    fullDescription: `Développement d'un système RAG (Retrieval-Augmented Generation) permettant de
    rechercher et synthétiser des informations à partir d'une base documentaire. Utilisation de LangChain
    pour orchestrer les différents composants et d'une base vectorielle pour le stockage des embeddings.`,
    image: '/images/projects/rag-system.svg',
    technologies: ['Python', 'LangChain', 'OpenAI', 'ChromaDB', 'FastAPI'],
    category: 'NLP',
    githubUrl: null,
    liveUrl: null,
    date: '2025-01',
    featured: true,
    outcomes: [
      'Réponses contextuelles précises basées sur les documents',
      'Interface API pour intégration facile',
      'Support de multiples formats de documents'
    ],
    challenges: `Optimisation du chunking pour améliorer la pertinence des résultats.
    Gestion de la qualité des réponses générées et réduction des hallucinations.`
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
