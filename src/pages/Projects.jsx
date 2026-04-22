import { useState } from 'react';
import Section from '../components/common/Section';
import ProjectFilter from '../components/projects/ProjectFilter';
import ProjectGrid from '../components/projects/ProjectGrid';
import ProjectModal from '../components/projects/ProjectModal';
import { projects, getUniqueCategories } from '../data/projects';
import { useFilter } from '../hooks/useFilter';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = getUniqueCategories();
  const { filteredItems, activeFilter, setFilter } = useFilter(projects, 'category');

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
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
          onProjectClick={handleProjectClick}
        />

        {filteredItems.length > 0 && (
          <div className="text-center mt-8 md:mt-12">
            <p className="text-gray-400">
              {filteredItems.length} projet{filteredItems.length > 1 ? 's' : ''} affiché{filteredItems.length > 1 ? 's' : ''}
            </p>
          </div>
        )}
      </Section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default Projects;
