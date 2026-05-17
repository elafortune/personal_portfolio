import CodeBlock from './CodeBlock';

function CodeSection({ project }) {
  const { code, githubUrl } = project;
  if (!code) return null;

  return (
    <section id="code" className="mb-24 scroll-mt-32">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 rounded-lg bg-primary-600/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        </div>
        <div>
          <p className="text-primary-400 text-xs font-mono uppercase tracking-widest mb-0.5">02</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Code</h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-primary-500/30 to-transparent ml-4" />
      </div>

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 mb-10 px-5 py-3 rounded-xl border border-primary-500/30 bg-dark-lighter hover:border-primary-400/60 hover:bg-primary-600/10 transition-all duration-200 group"
        >
          <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <div>
            <p className="text-white text-sm font-semibold group-hover:text-primary-300 transition-colors">
              Voir le code source complet
            </p>
            <p className="text-gray-500 text-xs">{githubUrl.replace('https://github.com/', '')}</p>
          </div>
          <svg className="w-4 h-4 text-gray-600 group-hover:text-primary-400 ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}

      <div className="space-y-6">
        {code.highlights.map((highlight, i) => (
          <CodeBlock key={i} {...highlight} />
        ))}
      </div>
    </section>
  );
}

export default CodeSection;
