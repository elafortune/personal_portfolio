import Section from '../components/common/Section';
import ProjectFilter from '../components/projects/ProjectFilter';
import ProjectGrid from '../components/projects/ProjectGrid';
import { useFilter } from '../hooks/useFilter';
import { useLanguage } from '../context/LanguageContext';
import { useLocalizedProjects } from '../hooks/useLocalizedData';

function Projects({ onSelectProject }) {
  const { t } = useLanguage();
  const projects = useLocalizedProjects();
  const categories = [...new Set(projects.map((p) => p.category))];
  const { filteredItems, activeFilter, setFilter } = useFilter(projects, 'category');

  return (
    <Section
      id="projects"
      title={t('projects_title')}
      subtitle={t('projects_subtitle')}
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
            {t('projects_count_shown', filteredItems.length)}
          </p>
        </div>
      )}
    </Section>
  );
}

export default Projects;
