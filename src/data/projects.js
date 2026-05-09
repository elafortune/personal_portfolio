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
    shortDescription: 'Pipeline ML complet pour détecter les transactions frauduleuses sur un dataset fortement déséquilibré',
    fullDescription: `La fraude bancaire coûte des milliards chaque année — et pourtant, moins de 0.2 % des transactions sont frauduleuses. C'est précisément ce paradoxe qui rend le problème si difficile et si intéressant.

Un modèle naïf qui prédit "légitime" à chaque transaction affiche 99.8 % d'accuracy. Et détecte zéro fraude. Ce projet part de ce constat pour construire quelque chose d'utile : une pipeline ML professionnelle qui sait quoi optimiser, et pourquoi.

Trois modèles sont entraînés et comparés — Random Forest, Régression Logistique, XGBoost — sur un split stratifié 70/15/15 conçu pour préserver la distribution rare des fraudes. Le déséquilibre des classes est traité en amont avec SMOTE, et la sélection finale du meilleur modèle repose sur la PR-AUC, la métrique de référence quand les classes sont asymétriques.

Mais le projet va plus loin : il intègre une détection de data drift par test de Kolmogorov-Smirnov. Si les nouvelles données s'éloignent significativement de la distribution d'entraînement, le système le signale et propose un réentraînement — parce qu'un bon modèle d'aujourd'hui peut devenir obsolète demain.

L'ensemble est accessible via une interface web interactive : import de données, visualisations EDA, lancement de la pipeline en live, évaluation sur de nouveaux datasets, et analyse du drift feature par feature.`,
    image: '/images/projects/fraud-detection.svg',
    technologies: ['Python', 'FastAPI', 'Scikit-learn', 'XGBoost', 'imbalanced-learn', 'React', 'Tailwind CSS', 'Pandas', 'SciPy'],
    category: 'Machine Learning',
    githubUrl: 'https://github.com/elafortune/credit_card_fraud',
    liveUrl: 'https://credit-card-fraud-ou77.onrender.com',
    date: '2024-06',
    featured: true,
    outcomes: [
      'Comparaison automatique de 3 modèles (Random Forest, LogReg, XGBoost) avec hyperparameter search',
      'Gestion du déséquilibre extrême (0.17 % de fraudes) via SMOTE',
      'Détection de data drift par KS-test avec recommandation de réentraînement',
      'Interface complète : EDA, entraînement live, évaluation et réapprentissage'
    ],
    challenges: `Optimiser le recall sans sacrifier la précision sur 284 807 transactions à 0.17 % de fraudes.
    Construire une détection de drift générique applicable à n'importe quel nouveau dataset avec les mêmes colonnes.
    Gérer l'état de la pipeline ML côté serveur de manière thread-safe pour l'interface live.`
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
