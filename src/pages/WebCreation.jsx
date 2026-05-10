import Section from '../components/common/Section';
import Card from '../components/common/Card';

const websites = [
  {
    id: 'cadeaux-douceurs',
    title: 'Cadeaux & Douceurs',
    description: 'Site e-commerce dédié à la vente de cadeaux et produits gourmands. Interface moderne avec navigation intuitive et expérience d\'achat optimisée.',
    url: 'https://cadeaux-douceurs.com/',
    category: 'E-commerce',
    gradientFrom: 'from-pink-600/25',
    gradientTo: 'to-rose-700/25',
    accent: 'text-pink-400',
    badge: 'bg-pink-500/20 text-pink-300',
    icon: '🎁'
  },
  {
    id: 'maison-textures-couleurs',
    title: 'Maison Textures & Couleurs',
    description: 'Site vitrine pour une entreprise de décoration intérieure. Présentation élégante des collections et mise en valeur des créations avec une esthétique soignée.',
    url: 'https://maison-textures-et-couleurs.com/',
    category: 'Site Vitrine',
    gradientFrom: 'from-amber-600/25',
    gradientTo: 'to-orange-700/25',
    accent: 'text-amber-400',
    badge: 'bg-amber-500/20 text-amber-300',
    icon: '🏠'
  },
  {
    id: 'neyaura-photography',
    title: 'Neyaura Photography',
    description: 'Portfolio photographique minimaliste et élégant. Galerie immersive mettant en valeur les clichés avec une navigation fluide et une présentation épurée.',
    url: 'https://neyaura-photography.vercel.app/',
    category: 'Portfolio',
    gradientFrom: 'from-violet-600/25',
    gradientTo: 'to-purple-700/25',
    accent: 'text-violet-400',
    badge: 'bg-violet-500/20 text-violet-300',
    icon: '📷'
  }
];

function WebCreation() {
  return (
    <Section
      id="web-creation"
      title="Création de Sites Web"
      subtitle="Sites web conçus et développés pour des clients et projets personnels — e-commerce, vitrines et portfolios."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {websites.map((site) => (
          <a
            key={site.id}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <Card hoverable className="h-full flex flex-col">
              {/* Preview area */}
              <div className={`h-36 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${site.gradientFrom} ${site.gradientTo} border border-white/10 relative overflow-hidden`}>
                <span className="text-5xl select-none">{site.icon}</span>
                <div className="absolute top-3 right-3">
                  <svg
                    className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              {/* Category badge */}
              <span className={`inline-block self-start text-xs font-medium px-2.5 py-1 rounded-full ${site.badge} mb-3`}>
                {site.category}
              </span>

              {/* Title */}
              <h3 className={`text-lg font-bold text-white mb-2 group-hover:${site.accent} transition-colors duration-300`}>
                {site.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                {site.description}
              </p>

              {/* URL */}
              <p className={`text-xs ${site.accent} truncate font-mono`}>
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
