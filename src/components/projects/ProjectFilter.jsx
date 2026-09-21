import { useLanguage } from '../../context/LanguageContext';

function ProjectFilter({ categories, activeFilter, onFilterChange }) {
  const { t } = useLanguage();
  const pillClass = (active) =>
    `px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
      active
        ? 'bg-primary-600 text-white'
        : 'border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
    }`;

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12">
      <button
        type="button"
        className={pillClass(activeFilter === 'all')}
        onClick={() => onFilterChange('all')}
      >
        {t('projects_filter_all')}
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={pillClass(activeFilter === category)}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilter;
