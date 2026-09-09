import { useLanguage } from '../context/LanguageContext';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function PersonaCard({ icon, title, desc, color, border, iconBg, cta, index, scrollTo }) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`group relative bg-white border ${border} rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-default
        ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Hover glow */}
      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${color}`} />

      <div className="relative z-10">
        <div className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110`}>
          {icon}
        </div>
        <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed mb-7 text-sm">{desc}</p>
        <button
          onClick={() => scrollTo('projects')}
          className="text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors flex items-center gap-1.5 group/btn"
        >
          {cta}
          <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Personas() {
  const { t } = useLanguage();
  const scrollTo = useSmoothScroll();

  const personas = [
    {
      icon: t('persona_1_icon'),
      title: t('persona_1_title'),
      desc: t('persona_1_desc'),
      color: 'bg-gradient-to-br from-pink-50 to-rose-50',
      border: 'border-pink-100 hover:border-pink-300',
      iconBg: 'bg-pink-100',
    },
    {
      icon: t('persona_2_icon'),
      title: t('persona_2_title'),
      desc: t('persona_2_desc'),
      color: 'bg-gradient-to-br from-violet-50 to-purple-50',
      border: 'border-violet-100 hover:border-violet-300',
      iconBg: 'bg-violet-100',
    },
    {
      icon: t('persona_3_icon'),
      title: t('persona_3_title'),
      desc: t('persona_3_desc'),
      color: 'bg-gradient-to-br from-sky-50 to-blue-50',
      border: 'border-sky-100 hover:border-sky-300',
      iconBg: 'bg-sky-100',
    },
  ];

  return (
    <section id="personas" className="py-24 px-6 bg-surface-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">Vos besoins</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('personas_title')}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t('personas_sub')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((p, i) => (
            <PersonaCard key={i} {...p} cta={t('personas_cta')} index={i} scrollTo={scrollTo} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Personas;
