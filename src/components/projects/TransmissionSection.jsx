import { useState, useEffect } from 'react';

function TransmissionSection({ project }) {
  const { transmission, title, category } = project;
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightbox]);

  if (!transmission) return null;

  const gradientMap = {
    'Machine Learning': 'from-indigo-900/60 via-blue-800/40 to-violet-900/60',
    'NLP': 'from-emerald-900/60 via-cyan-800/40 to-sky-900/60',
    'Data Analysis': 'from-slate-900/60 via-blue-900/40 to-indigo-900/60',
    'Computer Vision': 'from-teal-900/60 via-emerald-800/40 to-cyan-900/60'
  };
  const gradient = gradientMap[category] || gradientMap['Data Analysis'];

  return (
    <section id="resultats" className="mb-16 scroll-mt-32">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 rounded-lg bg-primary-600/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
          </svg>
        </div>
        <div>
          <p className="text-primary-400 text-xs font-mono uppercase tracking-widest mb-0.5">03</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Résultats</h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-primary-500/30 to-transparent ml-4" />
      </div>

      {transmission.liveUrl ? (
        <div className="rounded-2xl border border-primary-500/20 overflow-hidden">
          <div className={`bg-gradient-to-br ${gradient} p-10 md:p-14 flex flex-col items-center text-center gap-6`}>
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
              <p className="text-white/60 text-sm font-mono">{transmission.liveUrl}</p>
            </div>
            <p className="text-white/75 text-sm leading-relaxed max-w-xl">
              {transmission.liveDescription}
            </p>
            <a
              href={transmission.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-white font-semibold transition-all duration-200 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Voir le projet en direct
            </a>
          </div>
          <div className="bg-dark-lighter px-6 py-4 flex items-center gap-2 border-t border-primary-500/10">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-gray-400 text-xs">{transmission.hostLabel || 'Déployé sur Render'}</span>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-primary-500/20 bg-dark-lighter overflow-hidden">
          <div className="px-6 py-5 border-b border-primary-500/10 flex items-center gap-3">
            <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
            <span className="text-sm font-semibold text-white">Livrables & Visualisations</span>
          </div>
          <div className="p-6">
            <div className="text-gray-300 leading-relaxed space-y-4">
              {transmission.visualDescription.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      {transmission.images && transmission.images.length > 0 && (
        <div className={transmission.liveUrl ? 'mt-8' : 'mt-6'}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transmission.images.map((img, i) => (
              <figure
                key={i}
                className="rounded-2xl border border-primary-500/20 bg-dark-lighter overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setLightbox(img)}
                  className="block w-full group relative cursor-zoom-in"
                  aria-label={`Agrandir : ${img.caption}`}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </button>
                <figcaption className="px-5 py-4 text-gray-400 text-sm leading-relaxed border-t border-primary-500/10">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}

      {transmission.liveUrl && (
        <div className={`mt-10 rounded-2xl border border-primary-500/20 bg-gradient-to-br ${gradient} p-8 md:p-12 flex flex-col items-center text-center gap-5`}>
          <p className="text-white/70 text-sm md:text-base max-w-xl">
            Le pipeline complet, pas une simulation — à tester directement.
          </p>
          <a
            href={transmission.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-white text-dark text-base md:text-lg font-bold shadow-lg shadow-black/20 transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Voir le projet en direct
          </a>
        </div>
      )}

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <figure
            className="max-w-5xl max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              className="max-w-full max-h-[80vh] rounded-lg object-contain"
            />
            <figcaption className="text-gray-300 text-sm text-center mt-4 max-w-2xl">
              {lightbox.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

export default TransmissionSection;
