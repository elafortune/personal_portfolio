import Button from '../common/Button';

function ProjectFilter({ categories, activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      <Button
        variant={activeFilter === 'all' ? 'primary' : 'secondary'}
        size="sm"
        onClick={() => onFilterChange('all')}
      >
        Tous
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeFilter === category ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => onFilterChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}

export default ProjectFilter;
