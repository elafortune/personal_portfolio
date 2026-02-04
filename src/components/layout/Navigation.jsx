import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../data/constants';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import Button from '../common/Button';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = NAV_LINKS.map(link => link.id);
  const activeSectionId = useScrollSpy(sectionIds);
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollTo(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="text-2xl font-bold text-white">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="hover:text-primary-400 transition-colors"
            >
              Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-sm font-medium transition-colors hover:text-primary-400 ${
                  activeSectionId === link.id
                    ? 'text-primary-400'
                    : 'text-gray-300'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" size="sm" href="/documents/CV_Data_Scientist.pdf">
              Télécharger CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`block py-2 px-4 rounded transition-colors ${
                  activeSectionId === link.id
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-300 hover:bg-dark-lighter'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button variant="primary" size="sm" href="/documents/CV_Data_Scientist.pdf" className="w-full">
                Télécharger CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
