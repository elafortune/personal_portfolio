import { useEffect, useRef } from 'react';
import katex from 'katex';

function FormulaBlock({ name, latex, description }) {
  const formulaRef = useRef(null);

  useEffect(() => {
    if (formulaRef.current && latex) {
      katex.render(latex, formulaRef.current, {
        displayMode: true,
        throwOnError: false,
        trust: false
      });
    }
  }, [latex]);

  return (
    <div className="border border-primary-500/20 rounded-xl bg-dark-lighter overflow-hidden">
      <div className="px-5 py-3 border-b border-primary-500/10 bg-primary-600/5">
        <span className="text-primary-400 text-sm font-mono font-semibold tracking-wide">
          {name}
        </span>
      </div>
      <div className="px-6 py-6">
        <div
          ref={formulaRef}
          className="text-white overflow-x-auto katex-display-override"
        />
        {description && (
          <p className="text-gray-400 text-sm leading-relaxed mt-5 pt-4 border-t border-gray-700/50">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default FormulaBlock;
