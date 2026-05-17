import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('python', python);

const customStyle = {
  margin: 0,
  borderRadius: 0,
  background: '#0d1117',
  fontSize: '0.82rem',
  lineHeight: '1.6',
  padding: '1.5rem'
};

function CodeBlock({ title, language = 'python', snippet, description }) {
  return (
    <div className="border border-primary-500/20 rounded-xl overflow-hidden">
      <div className="px-5 py-3 bg-dark-lighter border-b border-primary-500/10 flex items-center justify-between">
        <span className="text-white text-sm font-semibold">{title}</span>
        <span className="text-xs font-mono bg-primary-600/20 text-primary-400 px-2 py-0.5 rounded">
          {language}
        </span>
      </div>
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={customStyle}
          showLineNumbers
          lineNumberStyle={{ color: '#444', minWidth: '2.5em' }}
        >
          {snippet}
        </SyntaxHighlighter>
      </div>
      {description && (
        <div className="px-5 py-4 bg-dark-lighter border-t border-primary-500/10">
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  );
}

export default CodeBlock;
