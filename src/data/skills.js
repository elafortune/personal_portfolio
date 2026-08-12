export const skillCategories = [
  {
    id: 'ml-dl',
    category: 'Machine Learning & Deep Learning',
    skills: [
      { name: 'PyTorch', proficiency: 85, icon: '🔥' },
      { name: 'TensorFlow', proficiency: 85, icon: '🧠' },
      { name: 'Scikit-learn', proficiency: 95, icon: '🤖' },
      { name: 'XGBoost/LightGBM', proficiency: 90, icon: '🌳' },
      { name: 'Computer Vision', proficiency: 85, icon: '👁️' },
      { name: 'NLP', proficiency: 80, icon: '📝' }
    ]
  },
  {
    id: 'big-data',
    category: 'Big Data & Data Engineering',
    skills: [
      { name: 'PySpark', proficiency: 80, icon: '⚡' },
      { name: 'Hadoop', proficiency: 70, icon: '🐘' },
      { name: 'SQL', proficiency: 90, icon: '🗄️' },
      { name: 'Apache Airflow', proficiency: 70, icon: '🌊' },
      { name: 'Pandas', proficiency: 95, icon: '🐼' },
      { name: 'NumPy', proficiency: 95, icon: '🔢' }
    ]
  },
  {
    id: 'production',
    category: 'Production & MLOps',
    skills: [
      { name: 'C/C++', proficiency: 80, icon: '⚙️' },
      { name: 'Docker', proficiency: 85, icon: '🐳' },
      { name: 'Kubernetes', proficiency: 75, icon: '☸️' },
      { name: 'CI/CD (Jenkins)', proficiency: 75, icon: '🔄' },
      { name: 'MLflow', proficiency: 75, icon: '📦' },
      { name: 'AWS (S3, EC2, SageMaker)', proficiency: 75, icon: '☁️' }
    ]
  },
  {
    id: 'software-engineering',
    category: 'Software Engineering & Full Stack',
    skills: [
      { name: 'Python', proficiency: 95, icon: '🐍' },
      { name: 'TypeScript', proficiency: 75, icon: '🔷' },
      { name: 'React', proficiency: 75, icon: '⚛️' },
      { name: 'FastAPI', proficiency: 80, icon: '🚀' },
      { name: 'Git/GitHub', proficiency: 90, icon: '🔧' },
      { name: 'Linux', proficiency: 75, icon: '🐧' }
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
