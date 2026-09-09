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
      title="Réalisations Web"
      subtitle="Sites livrés en production pour des clients — preuve d'une capacité full stack à porter un projet du backend jusqu'à l'interface."
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
