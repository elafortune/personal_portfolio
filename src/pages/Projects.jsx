import Section from '../components/common/Section';
import ProjectFilter from '../components/projects/ProjectFilter';
import ProjectGrid from '../components/projects/ProjectGrid';
import { projects, getUniqueCategories } from '../data/projects';
import { useFilter } from '../hooks/useFilter';

function Projects({ onSelectProject }) {
  const categories = getUniqueCategories();
  const { filteredItems, activeFilter, setFilter } = useFilter(projects, 'category');

  return (
    <Section
      id="projects"
      title="Mes Projets"
      subtitle="Une sélection de projets data science qui démontrent mon expertise en machine learning, analyse de données et développement de solutions impactantes."
    >
      <ProjectFilter
        categories={categories}
        activeFilter={activeFilter}
        onFilterChange={setFilter}
      />

      <ProjectGrid
        projects={filteredItems}
        onProjectClick={onSelectProject}
      />

      {filteredItems.length > 0 && (
        <div className="text-center mt-8 md:mt-12">
          <p className="text-gray-400">
            {filteredItems.length} projet{filteredItems.length > 1 ? 's' : ''} affiché{filteredItems.length > 1 ? 's' : ''}
          </p>
        </div>
      )}
    </Section>
  );
}

export default Projects;
