import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const points = [
  {
    icon: '🎨',
    title: 'Design sur mesure',
    desc: 'Chaque site est pensé pour votre identité. Aucun template générique.',
    color: 'bg-violet-50 text-violet-600 border-violet-100',
  },
  {
    icon: '🚀',
    title: 'Livraison rapide',
    desc: 'Votre site en ligne en quelques semaines, sans délais interminables.',
    color: 'bg-orange-50 text-orange-600 border-orange-100',
  },
  {
    icon: '📱',
    title: 'Responsive design',
    desc: 'Rendu parfait sur mobile, tablette et desktop dès la livraison.',
    color: 'bg-sky-50 text-sky-600 border-sky-100',
  },
  {
    icon: '🔍',
    title: 'SEO optimisé',
    desc: 'Structure et contenu pensés pour être trouvé sur Google.',
    color: 'bg-green-50 text-green-600 border-green-100',
  },
  {
    icon: '⚡',
    title: 'Réponse sous 24h',
    desc: 'Questions, retours, évolutions — vous ne restez jamais sans réponse.',
    color: 'bg-yellow-50 text-yellow-600 border-yellow-100',
  },
  {
    icon: '🛍️',
    title: 'E-commerce',
    desc: 'Boutique en ligne complète : catalogue, panier, paiement sécurisé.',
    color: 'bg-pink-50 text-pink-600 border-pink-100',
  },
  {
    icon: '🏠',
    title: 'Sites vitrines',
    desc: 'Présentez votre activité avec une image pro qui inspire confiance.',
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  },
  {
    icon: '✂️',
    title: 'Coiffeurs & Salons',
    desc: 'Sites pensés pour le secteur beauté : galerie, services, réservation.',
    color: 'bg-rose-50 text-rose-600 border-rose-100',
  },
  {
    icon: '📲',
    title: 'Influenceurs',
    desc: 'Un hub central pour centraliser vos contenus, services et collaborations.',
    color: 'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100',
  },
  {
    icon: '🏪',
    title: 'Artisans & PME',
    desc: 'Petites structures, grand impact : une présence en ligne qui fait vendre.',
    color: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    icon: '⚛️',
    title: 'React / Next.js',
    desc: 'Technologies modernes pour des sites rapides, fiables et scalables.',
    color: 'bg-cyan-50 text-cyan-600 border-cyan-100',
  },
  {
    icon: '💼',
    title: 'Portfolio pro',
    desc: 'Mettez en valeur vos réalisations avec un portfolio qui vous ressemble.',
    color: 'bg-slate-50 text-slate-600 border-slate-200',
  },
];

function PointCard({ point, index }) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`group bg-white border border-slate-100 rounded-2xl p-5 flex items-start gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300
        ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${(index % 6) * 60}ms` }}
    >
      <div className={`w-11 h-11 rounded-xl border flex items-center justify-center text-xl flex-shrink-0 ${point.color}`}>
        {point.icon}
      </div>
      <div>
        <h4 className="font-display font-bold text-slate-900 text-sm mb-1">{point.title}</h4>
        <p className="text-xs text-slate-500 leading-relaxed">{point.desc}</p>
      </div>
    </div>
  );
}

function ValueProps() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.05, triggerOnce: true });

  return (
    <section className="py-20 px-6 bg-surface-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Nos points forts
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-5">
            Ce que nous apportons
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Une expertise basée sur la compréhension du marché et des besoins de centaines de professionnels — coiffeurs, créateurs, artisans, petites entreprises.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map((point, i) => (
            <PointCard key={i} point={point} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValueProps;
