import Section from '../components/common/Section';
import Card from '../components/common/Card';
import { useLanguage } from '../context/LanguageContext';

const websitesByLang = {
  fr: [
    {
      id: 'cadeaux-douceurs',
      title: 'Cadeaux & Douceurs',
      description: 'Site e-commerce dédié à la vente de cadeaux et produits gourmands. Interface moderne avec navigation intuitive et expérience d\'achat optimisée.',
      category: 'E-commerce'
    },
    {
      id: 'maison-textures-couleurs',
      title: 'Maison Textures & Couleurs',
      description: 'Site vitrine pour une entreprise de décoration intérieure. Présentation élégante des collections et mise en valeur des créations avec une esthétique soignée.',
      category: 'Site Vitrine'
    },
    {
      id: 'neyaura-photography',
      title: 'Neyaura Photography',
      description: 'Portfolio photographique minimaliste et élégant. Galerie immersive mettant en valeur les clichés avec une navigation fluide et une présentation épurée.',
      category: 'Portfolio'
    }
  ],
  en: [
    {
      id: 'cadeaux-douceurs',
      title: 'Cadeaux & Douceurs',
      description: 'E-commerce site dedicated to selling gifts and gourmet products. Modern interface with intuitive navigation and an optimized shopping experience.',
      category: 'E-commerce'
    },
    {
      id: 'maison-textures-couleurs',
      title: 'Maison Textures & Couleurs',
      description: 'Showcase site for an interior decoration business. Elegant presentation of collections, highlighting the creations with a polished aesthetic.',
      category: 'Showcase Site'
    },
    {
      id: 'neyaura-photography',
      title: 'Neyaura Photography',
      description: 'Minimalist, elegant photography portfolio. An immersive gallery showcasing the shots with smooth navigation and a clean presentation.',
      category: 'Portfolio'
    }
  ]
};

const websiteMeta = {
  'cadeaux-douceurs': {
    url: 'https://cadeaux-douceurs.com/',
    gradientFrom: 'from-pink-600/25',
    gradientTo: 'to-rose-700/25',
    accent: 'text-pink-400',
    badge: 'bg-pink-500/20 text-pink-300',
    icon: '🎁'
  },
  'maison-textures-couleurs': {
    url: 'https://maison-textures-et-couleurs.com/',
    gradientFrom: 'from-amber-600/25',
    gradientTo: 'to-orange-700/25',
    accent: 'text-amber-400',
    badge: 'bg-amber-500/20 text-amber-300',
    icon: '🏠'
  },
  'neyaura-photography': {
    url: 'https://neyaura-photography.com/',
    gradientFrom: 'from-violet-600/25',
    gradientTo: 'to-purple-700/25',
    accent: 'text-violet-400',
    badge: 'bg-violet-500/20 text-violet-300',
    icon: '📷'
  }
};

function WebCreation() {
  const { t, lang } = useLanguage();
  const websites = websitesByLang[lang].map((site) => ({ ...site, ...websiteMeta[site.id] }));

  return (
    <Section
      id="web-creation"
      title={t('webcreation_title')}
      subtitle={t('webcreation_subtitle')}
      className="!py-8 md:!py-10"
    >
      <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory">
        {websites.map((site) => (
          <a
            key={site.id}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block flex-shrink-0 w-64 snap-start"
          >
            <Card hoverable className="h-full flex flex-col !p-4">
              {/* Preview area */}
              <div className={`h-20 rounded-lg mb-3 flex items-center justify-center bg-gradient-to-br ${site.gradientFrom} ${site.gradientTo} border border-white/10 relative overflow-hidden`}>
                <span className="text-3xl select-none">{site.icon}</span>
                <div className="absolute top-2 right-2">
                  <svg
                    className="w-3.5 h-3.5 text-white/40 group-hover:text-white/70 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              {/* Category badge */}
              <span className={`inline-block self-start text-[10px] font-medium px-2 py-0.5 rounded-full ${site.badge} mb-2`}>
                {site.category}
              </span>

              {/* Title */}
              <h3 className={`text-sm font-bold text-white mb-2 line-clamp-1 group-hover:${site.accent} transition-colors duration-300`}>
                {site.title}
              </h3>

              {/* URL */}
              <p className={`text-xs ${site.accent} truncate font-mono mt-auto`}>
                {site.url.replace('https://', '').replace(/\/$/, '')}
              </p>
            </Card>
          </a>
        ))}
      </div>
    </Section>
  );
}

export default WebCreation;
