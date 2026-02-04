import { useEffect } from 'react';
import Button from '../common/Button';

function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-dark-light border border-primary-500/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-2"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="inline-block bg-primary-600/20 text-primary-400 text-xs px-3 py-1 rounded-full mb-2">
                  {project.category}
                </span>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-400">
                  {new Date(project.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long'
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="mb-6 rounded-lg overflow-hidden bg-dark-lighter">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%231a1a1a" width="800" height="400"/%3E%3Ctext fill="%23666" font-family="sans-serif" font-size="24" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3ENo Image%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-3">Description</h3>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </p>
          </div>

          {/* Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-3">Résultats clés</h3>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges */}
          {project.challenges && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-3">Défis & Solutions</h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.challenges}
              </p>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-3">Technologies utilisées</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-dark-lighter text-gray-300 px-3 py-2 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-700">
            {project.githubUrl && (
              <Button
                variant="primary"
                href={project.githubUrl}
                className="flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Voir sur GitHub
              </Button>
            )}
            {project.liveUrl && (
              <Button
                variant="secondary"
                href={project.liveUrl}
                className="flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Voir la démo
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
