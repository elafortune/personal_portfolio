import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

function ExperienceDetail({ experience, onBack }) {
  const { t, lang } = useLanguage();
  const locale = lang === 'en' ? 'en-US' : 'fr-FR';

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleBack = () => {
    onBack();
    setTimeout(() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  };

  const formatDate = (startDate, endDate, current) => {
    const start = new Date(startDate).toLocaleDateString(locale, { year: 'numeric', month: 'long' });
    if (current) return `${start} - ${t('timeline_today')}`;
    if (endDate) {
      const end = new Date(endDate).toLocaleDateString(locale, { year: 'numeric', month: 'long' });
      return `${start} - ${end}`;
    }
    return start;
  };

  const { caseStudy } = experience;

  const renderBullets = (points) => (
    <ul className="space-y-2.5">
      {points.map((point, i) => (
        <li key={i} className="flex items-start gap-2.5 text-gray-300">
          <svg className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <span className="leading-relaxed">{point}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen bg-dark">
      {/* Sticky header */}
      <header className="sticky top-0 z-40 bg-dark/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-4 gap-4">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm flex-shrink-0 group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">{t('experiencedetail_back_short')}</span>
            </button>

            <h1 className="text-white font-bold text-sm sm:text-base truncate">
              {experience.organization}
            </h1>

            <span className="flex-shrink-0 bg-white/5 text-gray-300 text-xs px-3 py-1 rounded-full border border-white/10">
              {experience.type === 'experience' ? t('experiencedetail_type_experience') : t('experiencedetail_type_education')}
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="border-b border-white/5 bg-dark-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 mb-5 text-sm text-gray-500">
              <span>{formatDate(experience.startDate, experience.endDate, experience.current)}</span>
              {experience.location && (
                <>
                  <span>•</span>
                  <span>{experience.location}</span>
                </>
              )}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              {experience.title}
            </h2>
            <p className="text-gray-400 font-medium mb-6">
              {experience.organization}
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              {experience.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <span key={i} className="text-xs bg-dark-lighter text-gray-300 px-3 py-1.5 rounded-lg border border-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-12">
        {caseStudy ? (
          <>
            <section>
              <h3 className="text-xs font-mono font-semibold tracking-wider uppercase text-gray-500 mb-3">
                {t('experiencedetail_context_title')}
              </h3>
              <p className="text-gray-300 leading-relaxed">{caseStudy.context}</p>
            </section>
            <section>
              <h3 className="text-xs font-mono font-semibold tracking-wider uppercase text-gray-500 mb-3">
                {t('experiencedetail_contribution_title')}
              </h3>
              <p className="text-gray-300 leading-relaxed">{caseStudy.contribution}</p>
            </section>
            <section>
              <h3 className="text-xs font-mono font-semibold tracking-wider uppercase text-gray-500 mb-3">
                {t('experiencedetail_challenge_title')}
              </h3>
              <p className="text-gray-300 leading-relaxed">{caseStudy.challenge}</p>
            </section>
            <section>
              <h3 className="text-xs font-mono font-semibold tracking-wider uppercase text-gray-500 mb-3">
                {t('experiencedetail_impact_title')}
              </h3>
              {renderBullets(caseStudy.impact)}
            </section>
          </>
        ) : (
          experience.achievements && experience.achievements.length > 0 && (
            <section>
              <h3 className="text-xs font-mono font-semibold tracking-wider uppercase text-gray-500 mb-3">
                {t('experiencedetail_keypoints_title')}
              </h3>
              {renderBullets(experience.achievements)}
            </section>
          )
        )}
      </div>

      {/* Bottom nav */}
      <div className="border-t border-white/5 bg-dark-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('experiencedetail_back_full')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExperienceDetail;
