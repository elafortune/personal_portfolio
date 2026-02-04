import './App.css'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navigation />

      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
