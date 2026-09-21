import { useState } from 'react'
import './App.css'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import TrustedBy from './components/common/TrustedBy'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Skills from './pages/Skills'
import WebCreation from './pages/WebCreation'
import About from './pages/About'
import ExperienceDetail from './pages/ExperienceDetail'
import Contact from './pages/Contact'
import { useLocalizedProjects, useLocalizedAbout } from './hooks/useLocalizedData'

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedExperienceId, setSelectedExperienceId] = useState(null);
  const projects = useLocalizedProjects();
  const { timeline } = useLocalizedAbout();

  const selectedProject = selectedProjectId ? projects.find((p) => p.id === selectedProjectId) : null;
  const selectedExperience = selectedExperienceId ? timeline.find((e) => e.id === selectedExperienceId) : null;

  if (selectedProject) {
    return (
      <ProjectDetail
        project={selectedProject}
        onBack={() => setSelectedProjectId(null)}
      />
    );
  }

  if (selectedExperience) {
    return (
      <ExperienceDetail
        experience={selectedExperience}
        onBack={() => setSelectedExperienceId(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-dark">
      <Navigation />

      <main>
        <Hero />
        <TrustedBy />
        <Projects onSelectProject={(project) => setSelectedProjectId(project.id)} />
        <Skills />
        <About onSelectExperience={(experience) => setSelectedExperienceId(experience.id)} />
        <Contact />
        <WebCreation />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
