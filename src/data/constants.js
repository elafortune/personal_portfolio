// Navigation links
export const NAV_LINKS = [
  { id: 'home', labelKey: 'nav_home', href: '#home' },
  { id: 'projects', labelKey: 'nav_projects', href: '#projects' },
  { id: 'skills', labelKey: 'nav_skills', href: '#skills' },
  { id: 'about', labelKey: 'nav_about', href: '#about' },
  { id: 'contact', labelKey: 'nav_contact', href: '#contact' },
  { id: 'web-creation', labelKey: 'nav_web_creation', href: '#web-creation' }
];

// Animation durations (in milliseconds)
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500
};

// Scroll offset for fixed navigation
export const SCROLL_OFFSET = 80;

// Intersection observer thresholds
export const INTERSECTION_THRESHOLD = 0.1;

// Responsive breakpoints (match Tailwind config)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

// Project categories
export const PROJECT_CATEGORIES = [
  'Machine Learning',
  'Data Analysis',
  'Data Visualization',
  'Deep Learning',
  'NLP',
  'Computer Vision'
];

// Skill proficiency levels
export const PROFICIENCY_LEVELS = {
  beginner: 30,
  intermediate: 60,
  advanced: 80,
  expert: 95
};
