# Portfolio Data Scientist

Un portfolio professionnel et modulaire pour data scientist, construit avec React, Vite et Tailwind CSS.

## ✨ Fonctionnalités

- **🎯 Single Page Application** avec navigation par défilement fluide
- **📊 Section Projets** avec filtrage par catégorie et modals détaillés
- **🛠️ Section Compétences** organisées par catégories avec barres de progression
- **👤 Section À Propos** avec timeline professionnelle et académique
- **📧 Section Contact** avec liens vers réseaux sociaux
- **📱 Design Responsive** optimisé pour mobile, tablette et desktop
- **🎨 Design Sobre** avec palette de couleurs bleu, noir et blanc
- **⚡ Performance Optimale** grâce à Vite

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+ installé
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build de Production

```bash
# Créer le build de production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 📂 Structure du Projet

```
src/
├── components/       # Composants React réutilisables
│   ├── common/      # Composants génériques (Button, Card, Section)
│   ├── layout/      # Navigation, Footer
│   ├── projects/    # Composants spécifiques aux projets
│   ├── skills/      # Composants spécifiques aux compétences
│   └── about/       # Timeline et composants À propos
├── pages/           # Sections principales du site
│   ├── Hero.jsx     # Section d'accueil
│   ├── Projects.jsx # Showcase de projets
│   ├── Skills.jsx   # Compétences techniques
│   ├── About.jsx    # Bio et parcours
│   └── Contact.jsx  # Informations de contact
├── hooks/           # Hooks React personnalisés
│   ├── useScrollSpy.js
│   ├── useSmoothScroll.js
│   ├── useIntersectionObserver.js
│   └── useFilter.js
├── data/            # Données statiques
│   ├── projects.js  # Liste de vos projets
│   ├── skills.js    # Vos compétences
│   ├── about.js     # Infos personnelles
│   └── constants.js # Constantes globales
└── utils/           # Fonctions utilitaires
```

## 🎨 Personnalisation

### 1. Informations Personnelles

Éditez `src/data/about.js`:
```javascript
export const aboutInfo = {
  name: 'Votre Nom',
  title: 'Data Scientist',
  email: 'votre.email@example.com',
  // ... autres informations
}
```

### 2. Ajouter un Projet

Éditez `src/data/projects.js` et ajoutez un objet dans le tableau:
```javascript
{
  id: 'project-id',
  title: 'Nom du Projet',
  shortDescription: 'Description courte',
  fullDescription: 'Description complète...',
  image: '/images/projects/mon-projet.jpg',
  technologies: ['Python', 'TensorFlow'],
  category: 'Machine Learning',
  githubUrl: 'https://github.com/...',
  // ... autres champs
}
```

N'oubliez pas d'ajouter l'image dans `public/images/projects/`

### 3. Ajouter des Compétences

Éditez `src/data/skills.js` et ajoutez dans la catégorie appropriée:
```javascript
{
  name: 'Nouvelle Compétence',
  proficiency: 85,
  icon: '🔥'
}
```

### 4. Modifier les Couleurs

Le projet utilise une palette personnalisée définie dans `tailwind.config.js`:
- **Primary**: Nuances de bleu (primary-50 à primary-950)
- **Dark**: Noir profond avec variantes (dark, dark-light, dark-lighter)

Pour changer les couleurs, éditez les valeurs dans `tailwind.config.js`.

## 🛠️ Technologies Utilisées

- **React 18** - Framework UI
- **Vite 6** - Build tool ultra-rapide
- **Tailwind CSS 4** - Framework CSS utility-first
- **ESLint** - Linting du code
- **Custom Hooks** - Logique réutilisable (scroll, intersection observer, etc.)

## 📋 Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Prévisualiser le build
npm run lint     # Vérifier le code avec ESLint
```

## 📖 Documentation

- **CODING_STANDARDS.md** - Conventions de code détaillées
- **CLAUDE.md** - Guide complet de l'architecture du projet

## 🎯 Prochaines Étapes

1. **Personnaliser les données**
   - Remplacer les données d'exemple par vos vraies informations
   - Ajouter vos projets personnels
   - Mettre à jour votre bio et timeline

2. **Ajouter vos images**
   - Photo de profil dans `public/images/profile.jpg`
   - Screenshots de projets dans `public/images/projects/`
   - Logos de certifications dans `public/images/logos/`

3. **Ajuster le design**
   - Modifier les couleurs si nécessaire
   - Ajuster les espacements
   - Personnaliser les animations

4. **Déploiement**
   - Netlify, Vercel, GitHub Pages, ou autre plateforme
   - Le build est dans le dossier `dist/` après `npm run build`

## 🤝 Contribution

Ce projet est un portfolio personnel. N'hésitez pas à le forker et l'adapter à vos besoins.

## 📄 Licence

Ce projet est libre d'utilisation pour votre portfolio personnel.

## 💡 Support

Pour toute question sur l'architecture ou l'utilisation:
- Consultez `CLAUDE.md` pour la documentation complète
- Consultez `CODING_STANDARDS.md` pour les conventions de code

---

**Fait avec ❤️ en utilisant React, Vite et Tailwind CSS**
