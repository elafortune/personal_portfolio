# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

### Development
```bash
npm install          # Install dependencies (required before first run)
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production (output: dist/)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

## Project Overview

This is a **professional Data Scientist portfolio** built with a modular architecture. The site features:
- Single-page application with smooth scroll navigation
- 5 main sections: Hero, Projects, Skills, About, Contact
- Project filtering and modal details
- Responsive design (mobile-first)
- Sober color scheme (blue, black, white)

## Project Architecture

### Tech Stack
- **Framework**: React 18 with JSX (functional components, hooks)
- **Build Tool**: Vite 6 (fast HMR, optimized builds)
- **Styling**: Tailwind CSS 4 (utility-first CSS framework)
- **Linting**: ESLint with React plugins (flat config format)
- **No external routing**: Uses scroll-based navigation with custom hooks

### Project Structure
```
/
├── public/
│   └── images/              # Static images (projects, profile, logos)
│       ├── projects/
│       ├── logos/
│       └── profile.jpg
├── src/
│   ├── components/          # Reusable React components
│   │   ├── common/          # Generic components (Button, Card, Section, ScrollToTop)
│   │   ├── layout/          # Layout components (Navigation, Footer)
│   │   ├── projects/        # Project-specific (ProjectCard, ProjectGrid, ProjectFilter, ProjectModal)
│   │   ├── skills/          # Skills-specific (SkillCategory)
│   │   └── about/           # About-specific (Timeline)
│   ├── pages/               # Main sections (not routes)
│   │   ├── Hero.jsx         # Landing section
│   │   ├── Projects.jsx     # Projects showcase with filtering
│   │   ├── Skills.jsx       # Skills by category
│   │   ├── About.jsx        # Bio, timeline, certifications
│   │   └── Contact.jsx      # Contact information
│   ├── hooks/               # Custom React hooks
│   │   ├── useScrollSpy.js  # Track active section
│   │   ├── useSmoothScroll.js # Smooth scroll to sections
│   │   ├── useIntersectionObserver.js # Detect viewport intersection
│   │   └── useFilter.js     # Filter items by category
│   ├── data/                # Static data files
│   │   ├── constants.js     # Nav links, breakpoints, etc.
│   │   ├── projects.js      # Project data and helpers
│   │   ├── skills.js        # Skills by category
│   │   └── about.js         # Personal info, timeline, certifications
│   ├── utils/               # Utility functions
│   │   └── helpers.js       # Format dates, truncate text, etc.
│   ├── main.jsx             # Application entry point
│   ├── App.jsx              # Root component (assembles all sections)
│   ├── App.css              # Component styles
│   └── index.css            # Global styles, Tailwind directives
├── CODING_STANDARDS.md      # Detailed coding conventions
├── CLAUDE.md                # This file
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration (custom colors)
└── postcss.config.js        # PostCSS configuration
```

### Key Architectural Points

**Entry Flow**: `index.html` → `src/main.jsx` → `src/App.jsx` → Sections (Hero, Projects, etc.)

**Navigation Model**:
- Single-page with scroll-based navigation
- `useScrollSpy` hook tracks active section
- `useSmoothScroll` hook handles smooth scrolling
- No React Router needed

**Data Flow**:
- All data is stored in `src/data/` as JavaScript modules
- Components import data directly
- Helper functions in data files (e.g., `getUniqueCategories()`)

**Component Hierarchy**:
- `App.jsx` orchestrates all sections
- Sections (`pages/`) use common components (`components/common/`)
- Specific features use specialized components (e.g., `ProjectModal`)

**State Management**:
- Local state with `useState` (no Redux/Context needed)
- Custom hooks for reusable logic
- Props drilling acceptable for this project size

**Vite Specifics**:
- Uses ES modules natively (no CommonJS)
- `index.html` is the entry point (not in public/)
- HMR works automatically for `.jsx` files
- Import paths are relative or from node_modules

**ESLint Configuration**: Uses flat config format (`eslint.config.js`) not legacy `.eslintrc`

**Development Server**: Runs on port 5173 by default

**Tailwind CSS**:
- Custom color palette: `primary` (blue shades), `dark` (black shades), white
- Custom components: `.btn-primary`, `.btn-secondary`
- Configuration in `tailwind.config.js`
- Base styles and animations in `src/index.css`
- Utility classes: line-clamp, custom animations (fadeIn, slideIn, etc.)

## File Conventions

- **React components**: `.jsx` extension, PascalCase naming
- **Hooks**: `.js` extension, camelCase with `use` prefix
- **Data files**: `.js` extension, camelCase naming
- **Styling**: Tailwind utility classes first, custom CSS in `@layer` directives
- **ES6+ syntax**: Arrow functions, destructuring, template literals
- **Assets**: Store in `public/images/`, reference with absolute paths (e.g., `/images/profile.jpg`)

## Adding New Content

### Add a New Project
1. Open `src/data/projects.js`
2. Add a new object to the `projects` array with this structure:
   ```js
   {
     id: 'unique-id',
     title: 'Project Name',
     shortDescription: 'Brief description for card',
     fullDescription: 'Detailed description for modal',
     image: '/images/projects/image.jpg',
     technologies: ['Python', 'TensorFlow', 'etc'],
     category: 'Machine Learning', // Must match existing category
     githubUrl: 'https://github.com/...',
     liveUrl: 'https://...' or null,
     date: '2025-01',
     featured: true/false,
     outcomes: ['Result 1', 'Result 2'],
     challenges: 'Description of challenges faced'
   }
   ```
3. Add the project image to `public/images/projects/`

### Add a New Skill Category
1. Open `src/data/skills.js`
2. Add a new object to the `skillCategories` array:
   ```js
   {
     id: 'unique-id',
     category: 'Category Name',
     skills: [
       { name: 'Skill Name', proficiency: 85, icon: '🔥' }
     ]
   }
   ```

### Update Personal Info
1. Open `src/data/about.js`
2. Modify `aboutInfo` object (name, title, bio, etc.)
3. Add to `timeline` array for experience/education
4. Add to `certifications` array for new certifications
5. Add to `interests` array for new interests

### Add a New Section
1. Create a new component in `src/pages/YourSection.jsx`
2. Import and add to `src/App.jsx`
3. Add navigation link to `src/data/constants.js` in `NAV_LINKS`

## Styling Guidelines

### Color Usage
- **Background**: `bg-dark`, `bg-dark-light`, `bg-dark-lighter`
- **Text**: `text-white` (primary), `text-gray-300/400` (secondary), `text-primary-400` (accent)
- **Borders**: `border-primary-500/30` (subtle), `border-primary-600` (prominent)
- **Buttons**: Use `.btn-primary` or `.btn-secondary` classes

### Responsive Patterns
```jsx
// Mobile-first grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Conditional spacing
<section className="py-12 md:py-16 lg:py-24">

// Text sizing
<h2 className="text-3xl md:text-4xl lg:text-5xl">
```

### Animations
- Components use `useIntersectionObserver` for fade-in on scroll
- Custom animations in `index.css`: `animate-fadeIn`, `animate-slideInLeft`, etc.
- Transitions on interactive elements: `transition-colors duration-300`

## Common Tasks

### Testing Locally
```bash
npm run dev              # Start dev server
# Navigate to http://localhost:5173
# Test all sections, navigation, filtering, modals
```

### Before Committing
```bash
npm run lint            # Check for ESLint errors
npm run build           # Ensure production build works
```

### Production Build
```bash
npm run build           # Creates dist/ folder
npm run preview         # Preview production build locally
```

## Troubleshooting

### Build Errors
- Check for missing imports
- Verify all image paths exist in `public/images/`
- Run `npm run lint` to catch issues

### Navigation Not Working
- Verify section IDs match `NAV_LINKS` in `constants.js`
- Check `SCROLL_OFFSET` value if sections are misaligned

### Images Not Loading
- Images must be in `public/images/`
- Use absolute paths: `/images/...` not `./images/...`
- Components have fallback for missing images

## Reference Documentation

- **Coding Standards**: See `CODING_STANDARDS.md` for detailed conventions
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Hooks**: https://react.dev/reference/react
- **Vite**: https://vitejs.dev

## Project Status

✅ All sections implemented and functional
✅ Responsive design tested
✅ Production build tested
✅ ESLint passing with no errors
🎯 Ready for content customization
