function Marquee() {
  const items = [
    '✦ React / Next.js',
    '✦ Sites vitrines',
    '✦ E-commerce',
    '✦ Réponse sous 24h',
    '✦ SEO optimisé',
    '✦ Coiffeurs & Salons',
    '✦ Influenceurs',
    '✦ Design sur mesure',
    '✦ Livraison rapide',
    '✦ Responsive design',
    '✦ Portfolio pro',
    '✦ Artisans & PME',
  ];

  // Duplicate for seamless loop
  const allItems = [...items, ...items];

  return (
    <div id="marquee-section" className="bg-primary-600 py-4 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-primary-600 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-primary-600 to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {allItems.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center text-white/90 font-semibold text-sm tracking-wide mx-6 flex-shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
