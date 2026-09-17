function Card({ children, className = '', hoverable = false, onClick }) {
  const hoverClasses = hoverable
    ? 'hover:border-white/20 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1 cursor-pointer'
    : '';

  return (
    <div
      className={`
        bg-dark-light border border-white/10 rounded-lg p-4 sm:p-6
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
