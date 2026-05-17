import FormulaBlock from './FormulaBlock';

function ResearchSection({ project }) {
  const { research } = project;
  if (!research) return null;

  return (
    <section id="recherche" className="mb-24 scroll-mt-32">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 rounded-lg bg-primary-600/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.699-1.32 2.43l-3.114-.679a4.5 4.5 0 00-1.983.02l-3.147.694c-1.357.3-2.33-1.408-1.306-2.43l1.142-1.14M5 14.5l-1.402 1.402c-1 1-.03 2.699 1.32 2.43l3.114-.679a4.5 4.5 0 011.983.02l.236.052" />
          </svg>
        </div>
        <div>
          <p className="text-primary-400 text-xs font-mono uppercase tracking-widest mb-0.5">01</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Recherche</h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-primary-500/30 to-transparent ml-4" />
      </div>

      <div className="text-gray-300 leading-relaxed space-y-4 mb-12 max-w-3xl">
        {research.interest.split('\n\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {research.formulas && research.formulas.length > 0 && (
        <div>
          <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-5">
            Formalisation mathématique
          </h3>
          <div className="space-y-4">
            {research.formulas.map((formula, i) => (
              <FormulaBlock key={i} {...formula} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default ResearchSection;
