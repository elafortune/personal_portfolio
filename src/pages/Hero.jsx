import { aboutInfo, getYearsOfExperience } from '../data/about';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import Button from '../components/common/Button';

function Hero() {
  const scrollTo = useSmoothScroll();
  const yearsOfExperience = getYearsOfExperience();

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    scrollTo('projects');
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    scrollTo('contact');
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-b from-dark via-dark to-dark-light"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-primary-600/20 border-4 border-primary-500/50 flex items-center justify-center overflow-hidden">
            <img
              src={aboutInfo.profileImage}
              alt={aboutInfo.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `<span class="text-5xl">${aboutInfo.name.charAt(0)}</span>`;
              }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Greeting */}
          <p className="text-primary-400 text-lg font-medium">
            Bonjour, je suis
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            {aboutInfo.name}
          </h1>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-300">
            {aboutInfo.title}
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary-400 font-light italic">
            {aboutInfo.tagline}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Data Scientist passionné avec {yearsOfExperience}+ ans d&apos;expérience en machine learning,
            analyse prédictive et visualisation de données. Je transforme des données
            complexes en solutions qui génèrent un impact business mesurable.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto mt-12 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400">{yearsOfExperience}+</div>
              <div className="text-sm text-gray-500 mt-1">Années d&apos;exp.</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400">15+</div>
              <div className="text-sm text-gray-500 mt-1">Projets complétés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400">8+</div>
              <div className="text-sm text-gray-500 mt-1">Technologies</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              variant="primary"
              size="lg"
              onClick={handleScrollToProjects}
            >
              Voir mes projets
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={handleScrollToContact}
            >
              Me contacter
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <button
            onClick={handleScrollToProjects}
            className="text-gray-500 hover:text-primary-400 transition-colors focus:outline-none"
            aria-label="Scroll down"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
