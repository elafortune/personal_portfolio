import { useEffect, useRef, useState } from 'react';
import ResearchSection from '../components/projects/ResearchSection';
import CodeSection from '../components/projects/CodeSection';
import TransmissionSection from '../components/projects/TransmissionSection';

const SECTIONS = [
  { id: 'recherche', label: 'Recherche', num: '01' },
  { id: 'code', label: 'Code', num: '02' },
  { id: 'transmission', label: 'Transmission', num: '03' }
];

function ProjectDetail({ project, onBack }) {
  const [activeSection, setActiveSection] = useState('recherche');
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    onBack();
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  };

  return (
    <div className="min-h-screen bg-dark">
      {/* Sticky header */}
      <header className="sticky top-0 z-40 bg-dark/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-3 gap-4">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm flex-shrink-0 group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Projets</span>
            </button>

            <h1 className="text-white font-bold text-sm sm:text-base truncate">
              {project.title}
            </h1>

            <span className="flex-shrink-0 bg-primary-600/20 text-primary-400 text-xs px-3 py-1 rounded-full border border-primary-500/20">
              {project.category}
            </span>
          </div>

          {/* Section tabs */}
          <div className="flex border-t border-white/5">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 sm:px-6 py-2.5 text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-200 border-b-2 ${
                  activeSection === section.id
                    ? 'text-primary-400 border-primary-400'
                    : 'text-gray-500 border-transparent hover:text-gray-300'
                }`}
              >
                <span className="hidden sm:inline">{section.num} — </span>
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Project hero */}
      <div className="border-b border-white/5 bg-dark-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-gray-500 text-sm">
                {new Date(project.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })}
              </span>
              {project.liveUrl && (
                <span className="flex items-center gap-1.5 text-green-400 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  En ligne
                </span>
              )}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {project.title}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="text-xs bg-dark-lighter text-gray-300 px-3 py-1.5 rounded-lg border border-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <ResearchSection project={project} />
        <CodeSection project={project} />
        <TransmissionSection project={project} />
      </div>

      {/* Bottom nav */}
      <div className="border-t border-white/5 bg-dark-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux projets
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm"
            >
              Voir le projet en direct
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
