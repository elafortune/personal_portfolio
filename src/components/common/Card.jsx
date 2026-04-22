function Card({ children, className = '', hoverable = false, onClick }) {
  const hoverClasses = hoverable
    ? 'hover:border-primary-400 hover:shadow-lg hover:shadow-primary-500/20 hover:-translate-y-1 cursor-pointer'
    : '';

  return (
    <div
      className={`
        bg-dark-light border border-primary-500/30 rounded-lg p-4 sm:p-6
        transition-all duration-300
        ${hoverClasses}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Card;
