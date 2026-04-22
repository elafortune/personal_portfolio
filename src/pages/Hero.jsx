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
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 pb-16 sm:pb-20 bg-gradient-to-b from-dark via-dark to-dark-light overflow-hidden"
    >
      {/* Subtle background glow */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #1d4ed8 0%, transparent 70%)', filter: 'blur(100px)' }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-16 items-center">

          {/* === Photo === */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              {/* Outer subtle ring */}
              <div className="absolute -inset-4 rounded-[28px] border border-primary-500/10 pointer-events-none" />
              <div className="absolute -inset-8 rounded-[34px] border border-primary-500/5 pointer-events-none" />

              {/* Soft glow behind photo */}
              <div
                className="absolute -inset-2 rounded-[22px] opacity-40 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, #1d4ed8 0%, transparent 70%)', filter: 'blur(20px)' }}
              />

              {/* Photo card */}
              <div className="relative w-44 h-56 sm:w-52 sm:h-64 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
                <img
                  src={aboutInfo.profileImage}
                  alt={aboutInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(145deg, #1e3a5f 0%, #1e40af 100%)';
                    e.target.parentElement.innerHTML += '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center"><span style="font-size:80px;font-weight:700;color:#93c5fd;font-family:system-ui,sans-serif;letter-spacing:-2px">EL</span></div>';
                  }}
                />
                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.65) 0%, transparent 100%)' }}
                />
              </div>

              {/* Availability badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 shadow-lg"
                style={{ background: 'rgba(30,41,59,0.95)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full" style={{ boxShadow: '0 0 6px #4ade80', animation: 'pulse 2s infinite' }} />
                <span className="text-slate-400 text-xs font-medium">Disponible · Paris</span>
              </div>
            </div>
          </div>

          {/* === Content === */}
          <div className="lg:col-span-3 text-center lg:text-left mt-6 lg:mt-0">

            {/* School/institution label */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <div className="h-px w-4 sm:w-6 bg-primary-500/50" />
              <span className="text-slate-500 text-[10px] sm:text-xs font-medium tracking-widest uppercase">Télécom SudParis · Ingénieur IA</span>
              <div className="h-px w-4 sm:w-6 bg-primary-500/50" />
            </div>

            {/* Name — subtle and natural */}
            <div className="mb-4">
              <h1 className="leading-tight tracking-tight">
                <span className="block text-[34px] sm:text-[42px] md:text-[52px] font-semibold text-white">Emerick</span>
                <span className="block text-[34px] sm:text-[42px] md:text-[52px] font-light text-slate-400 -mt-1">Lafortune</span>
              </h1>
              <div className="flex items-center gap-3 mt-3 justify-center lg:justify-start">
                <span className="text-primary-400 text-base font-medium">Data Scientist</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span className="text-slate-500 text-base">Intelligence Artificielle</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Machine learning, deep learning et IA générative. Je construis des systèmes intelligents
              qui transforment des données complexes en solutions à impact mesurable.
            </p>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-8 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-white/5">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-400">{yearsOfExperience}+</div>
                <div className="text-xs text-gray-500 mt-0.5">Ans d'expérience</div>
              </div>
              <div className="w-px bg-white/5" />
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-400">15+</div>
                <div className="text-xs text-gray-500 mt-0.5">Projets complétés</div>
              </div>
              <div className="w-px bg-white/5" />
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-400">8+</div>
                <div className="text-xs text-gray-500 mt-0.5">Technologies</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button variant="primary" size="lg" onClick={handleScrollToProjects}>
                Voir mes projets
              </Button>
              <Button variant="secondary" size="lg" onClick={handleScrollToContact}>
                Me contacter
              </Button>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={handleScrollToProjects}
          className="text-gray-600 hover:text-primary-400 transition-colors focus:outline-none"
          aria-label="Scroll down"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Hero;
