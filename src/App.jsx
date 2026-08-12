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
import Contact from './pages/Contact'

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  if (selectedProject) {
    return (
      <ProjectDetail
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-dark">
      <Navigation />

      <main>
        <Hero />
        <TrustedBy />
        <Projects onSelectProject={setSelectedProject} />
        <Skills />
        <WebCreation />
        <About />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
