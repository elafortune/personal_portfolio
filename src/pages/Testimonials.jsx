import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function TestimonialCard({ testimonial, index }) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`relative bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-1
        ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Large decorative quote mark */}
      <div
        className="absolute top-6 right-8 font-display text-8xl font-bold leading-none select-none pointer-events-none opacity-10"
        style={{ color: testimonial.palette[2] }}
      >
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-slate-700 text-base leading-relaxed mb-6 italic relative z-10">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center text-lg font-bold text-white shadow-md"
          style={{ background: `linear-gradient(135deg, ${testimonial.palette[2]}, ${testimonial.palette[3]})` }}
        >
          {testimonial.author[0]}
        </div>
        <div>
          <p className="font-display font-bold text-slate-900 text-sm">{testimonial.author}</p>
          <p className="text-xs text-slate-400">{testimonial.sectorIcon} {testimonial.sector}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const { t, lang } = useLanguage();

  const testimonials = projects
    .filter(p => p.testimonial)
    .map(p => ({
      text: lang === 'EN' ? p.testimonialEN : p.testimonial,
      author: p.clientName,
      sector: lang === 'EN' ? p.sectorEN : p.sector,
      sectorIcon: p.sectorIcon,
      palette: p.palette,
    }));

  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none opacity-30" style={{ background: 'radial-gradient(ellipse, #0ea5e9 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-3">Avis clients</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            {t('testimonials_title')}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">{t('testimonials_sub')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
