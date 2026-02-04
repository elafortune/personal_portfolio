export const skillCategories = [
  {
    id: 'programming',
    category: 'Langages de Programmation',
    skills: [
      { name: 'Python', proficiency: 95, icon: '🐍' },
      { name: 'R', proficiency: 80, icon: '📊' },
      { name: 'SQL', proficiency: 90, icon: '🗄️' },
      { name: 'C', proficiency: 75, icon: '⚙️' },
      { name: 'TypeScript', proficiency: 70, icon: '🔷' },
      { name: 'Node.js', proficiency: 70, icon: '🟢' },
      { name: 'Bash/Shell', proficiency: 70, icon: '💻' }
    ]
  },
  {
    id: 'ml-ai',
    category: 'Machine Learning & IA',
    skills: [
      { name: 'Scikit-learn', proficiency: 95, icon: '🤖' },
      { name: 'TensorFlow', proficiency: 85, icon: '🧠' },
      { name: 'PyTorch', proficiency: 85, icon: '🔥' },
      { name: 'XGBoost/LightGBM', proficiency: 90, icon: '🌳' },
      { name: 'Keras', proficiency: 85, icon: '🎯' },
      { name: 'Hugging Face Transformers', proficiency: 80, icon: '🤗' }
    ]
  },
  {
    id: 'data-processing',
    category: 'Traitement de Données',
    skills: [
      { name: 'Pandas', proficiency: 95, icon: '🐼' },
      { name: 'NumPy', proficiency: 95, icon: '🔢' },
      { name: 'PySpark', proficiency: 75, icon: '⚡' }
    ]
  },
  {
    id: 'data-viz',
    category: 'Visualisation de Données',
    skills: [
      { name: 'Matplotlib', proficiency: 90, icon: '📈' },
      { name: 'Seaborn', proficiency: 90, icon: '🎨' },
      { name: 'Plotly', proficiency: 85, icon: '📊' },
      { name: 'Tableau', proficiency: 75, icon: '📉' },
      { name: 'Power BI', proficiency: 70, icon: '📊' }
    ]
  },
  {
    id: 'tools-platforms',
    category: 'Outils & Plateformes',
    skills: [
      { name: 'Git/GitHub', proficiency: 90, icon: '🔧' },
      { name: 'Docker', proficiency: 85, icon: '🐳' },
      { name: 'AWS (S3, EC2, SageMaker)', proficiency: 75, icon: '☁️' },
      { name: 'Jupyter/JupyterLab', proficiency: 95, icon: '📓' },
      { name: 'MLflow', proficiency: 75, icon: '🔄' },
      { name: 'Apache Airflow', proficiency: 70, icon: '🌊' }
    ]
  },
  {
    id: 'databases',
    category: 'Bases de Données',
    skills: [
      { name: 'PostgreSQL', proficiency: 85, icon: '🐘' },
      { name: 'MongoDB', proficiency: 75, icon: '🍃' },
      { name: 'MySQL', proficiency: 80, icon: '🗄️' },
      { name: 'SQLite', proficiency: 85, icon: '📁' }
    ]
  },
  {
    id: 'specializations',
    category: 'Spécialisations',
    skills: [
      { name: 'Natural Language Processing', proficiency: 85, icon: '📝' },
      { name: 'Computer Vision', proficiency: 80, icon: '👁️' },
      { name: 'Time Series Analysis', proficiency: 85, icon: '📅' },
      { name: 'A/B Testing', proficiency: 90, icon: '🧪' },
      { name: 'Statistical Modeling', proficiency: 90, icon: '📐' },
      { name: 'Deep Learning', proficiency: 85, icon: '🧬' }
    ]
  },
  {
    id: 'soft-skills',
    category: 'Compétences Transversales',
    skills: [
      { name: 'Communication de résultats', proficiency: 90, icon: '💬' },
      { name: 'Storytelling avec données', proficiency: 85, icon: '📖' },
      { name: 'Gestion de projet Agile', proficiency: 80, icon: '🔄' },
      { name: 'Collaboration inter-équipes', proficiency: 90, icon: '🤝' },
      { name: 'Mentorat technique', proficiency: 75, icon: '👨‍🏫' }
    ]
  }
];

// Helper function to get all skills flattened
export const getAllSkills = () => {
  return skillCategories.flatMap(category =>
    category.skills.map(skill => ({
      ...skill,
      category: category.category
    }))
  );
};

// Helper function to get top skills by proficiency
export const getTopSkills = (limit = 10) => {
  return getAllSkills()
    .sort((a, b) => b.proficiency - a.proficiency)
    .slice(0, limit);
};

// Helper function to get skills by category
export const getSkillsByCategory = (categoryId) => {
  const category = skillCategories.find(cat => cat.id === categoryId);
  return category ? category.skills : [];
};
