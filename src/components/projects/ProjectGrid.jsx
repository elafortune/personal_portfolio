import ProjectCard from './ProjectCard';

function ProjectGrid({ projects, onProjectClick }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">Aucun projet trouvé</p>
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
