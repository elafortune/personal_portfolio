import ProjectCard from './ProjectCard';
import { useLanguage } from '../../context/LanguageContext';

function ProjectGrid({ projects, onProjectClick }) {
  const { t } = useLanguage();

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">{t('projects_empty')}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={onProjectClick}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;
