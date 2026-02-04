# Coding Standards - Portfolio Data Scientist

Ce document définit les standards et conventions de code pour ce projet.

## Conventions de Nommage

### Fichiers et Composants
- **Composants React**: PascalCase (ex: `ProjectCard.jsx`, `Navigation.jsx`)
- **Hooks personnalisés**: camelCase avec préfixe `use` (ex: `useScrollSpy.js`, `useFilter.js`)
- **Utilitaires**: camelCase (ex: `helpers.js`, `constants.js`)
- **Fichiers de données**: camelCase (ex: `projects.js`, `skills.js`)

### Variables et Fonctions
- **Variables**: camelCase (ex: `activeFilter`, `isOpen`)
- **Constantes**: UPPER_SNAKE_CASE (ex: `NAV_LINKS`, `ANIMATION_DURATION`)
- **Fonctions**: camelCase (ex: `handleClick`, `scrollToSection`)
- **Composants**: PascalCase (ex: `ProjectCard`, `SkillCategory`)

## Structure de Composants

Tous les composants React doivent suivre cette structure:

```jsx
// 1. Imports externes (React, bibliothèques tierces)
import { useState, useEffect } from 'react';

// 2. Imports internes (hooks, composants, utils)
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import Button from './Button';

// 3. Constantes locales au fichier
const DEFAULT_TIMEOUT = 300;

// 4. Définition du composant
function ComponentName({ prop1, prop2 }) {
  // 4.1 Hooks
  const [state, setState] = useState(null);
  const customHook = useSmoothScroll();

  // 4.2 Handlers et fonctions
  const handleClick = () => {
    // ...
  };

  // 4.3 Effects
  useEffect(() => {
    // ...
  }, []);

  // 4.4 Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}

// 5. Export
export default ComponentName;
```

## Guidelines de Styling avec Tailwind

### Ordre de Priorité
1. **Tailwind First**: Toujours utiliser les classes Tailwind en priorité
2. **Classes personnalisées**: Seulement si réutilisables (`@layer components` dans index.css)
3. **CSS inline**: Éviter sauf cas très spécifiques (valeurs dynamiques)

### Responsive Design
- **Mobile First**: Styles de base pour mobile, puis breakpoints pour écrans plus larges
- **Breakpoints**: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- **Exemple**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### Classes Tailwind Cohérentes
```jsx
// Spacing: utiliser échelle cohérente (4, 6, 8, 12, 16, 24)
<Section className="py-16 px-6" />

// Colors: utiliser la palette définie
<div className="bg-dark text-white border-primary-500" />

// Transitions: toujours ajouter pour hover/focus
<button className="transition-colors hover:bg-primary-600" />
```

## Accessibilité (a11y)

### HTML Sémantique
- Utiliser les bonnes balises: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Headings hiérarchiques: un seul `<h1>`, puis `<h2>`, `<h3>`, etc.

### ARIA et Attributs
```jsx
// Images: toujours un alt text
<img src="..." alt="Description claire" />

// Boutons interactifs
<button aria-label="Fermer le modal" onClick={handleClose}>
  <XIcon />
</button>

// Links: texte descriptif
<a href="..." aria-label="Voir le projet sur GitHub">
  GitHub
</a>
```

### Navigation au Clavier
- Tous les éléments interactifs doivent être accessibles au clavier
- Modal: focus trap, fermeture avec ESC
- Indicateurs de focus visibles: `focus:outline-none focus:ring-2 focus:ring-primary-500`

## Best Practices React

### Composants Fonctionnels
- Toujours utiliser des composants fonctionnels (pas de classes)
- Hooks pour la gestion d'état et effets de bord

### Props et Validation
```jsx
// Destructuration des props
function Card({ title, children, className = '' }) {
  // ...
}

// Props avec valeurs par défaut
function Button({ variant = 'primary', size = 'md', children }) {
  // ...
}
```

### Optimisation
- `useMemo` pour calculs coûteux
- `useCallback` pour fonctions passées en props
- Éviter les re-renders inutiles

### Gestion d'État
- État local (`useState`) pour UI simple
- Props drilling acceptable sur 2-3 niveaux max
- Pas de state management global nécessaire pour ce projet

## Organisation des Fichiers

### Imports Groupés et Ordonnés
```jsx
// 1. React et bibliothèques externes
import { useState } from 'react';

// 2. Hooks personnalisés
import { useScrollSpy } from '../hooks/useScrollSpy';

// 3. Composants
import Button from '../common/Button';
import Card from '../common/Card';

// 4. Données et utilitaires
import { projects } from '../data/projects';
import { formatDate } from '../utils/helpers';

// 5. Styles (si nécessaire)
import './styles.css';
```

### Exports
- **Default export**: pour le composant principal du fichier
- **Named exports**: pour utilitaires ou constantes secondaires

```jsx
// Bon
export default ProjectCard;

// Acceptable pour fichiers utilitaires
export { formatDate, calculateAge };
export const API_URL = '...';
```

## Gestion des Données

### Fichiers de Données
- Toujours exporter des constantes nommées
- Typer implicitement avec JSDoc si nécessaire

```jsx
// src/data/projects.js
export const projects = [
  {
    id: 'project-1',
    title: 'Project Title',
    // ...
  }
];

// src/data/constants.js
export const NAV_LINKS = [
  { id: 'home', label: 'Accueil', href: '#home' }
];
```

### Images
- Placer dans `public/images/` avec sous-dossiers par catégorie
- Référencer avec chemin absolu: `/images/projects/image.jpg`
- Toujours fournir alt text descriptif

## Conventions Git

### Commits Conventionnels
Format: `type(scope): message`

**Types**:
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `refactor`: Refactorisation sans changement de comportement
- `style`: Changements de style (formatting, CSS)
- `docs`: Documentation uniquement
- `chore`: Tâches de maintenance

**Exemples**:
```
feat(projects): add project filtering by technology
fix(navigation): correct smooth scroll offset calculation
refactor(hooks): simplify useScrollSpy implementation
style(card): adjust hover effects and spacing
docs(readme): update installation instructions
```

### Branches
- `main`: branche principale, toujours stable
- `feature/nom-feature`: nouvelles fonctionnalités
- `fix/nom-bug`: corrections de bugs

## Performance

### Optimisations Images
- Utiliser formats modernes (WebP) avec fallback
- Lazy loading pour images hors viewport: `loading="lazy"`
- Dimensions explicites pour éviter layout shifts

### Code Splitting
- Pas nécessaire pour ce projet (SPA simple)
- Vite gère le bundling automatiquement

### Bundle Size
- Éviter les dépendances lourdes inutiles
- Vérifier régulièrement avec `npm run build`

## Tests et Qualité

### Linting
- Toujours exécuter `npm run lint` avant commit
- Corriger tous les warnings ESLint
- Configuration ESLint flat config déjà en place

### Tests Manuels Requis
1. Navigation: scroll fluide, liens actifs
2. Filtrage de projets: tous les filtres fonctionnent
3. Modal: ouverture/fermeture, keyboard ESC
4. Responsive: mobile, tablet, desktop
5. Keyboard navigation: tab, enter, esc
6. Build production: `npm run build && npm run preview`

## Commentaires et Documentation

### Quand Commenter
- Logique complexe non évidente
- Workarounds ou solutions non standard
- TODOs pour améliorations futures

### Format des Commentaires
```jsx
// Single line pour explications courtes

/**
 * Multi-line pour fonctions complexes
 * @param {string} id - Section ID to scroll to
 * @returns {void}
 */
function scrollToSection(id) {
  // ...
}
```

### Éviter les Commentaires Évidents
```jsx
// Mauvais
const [isOpen, setIsOpen] = useState(false); // State for modal

// Bon
const [isOpen, setIsOpen] = useState(false);
```

## Ressources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
