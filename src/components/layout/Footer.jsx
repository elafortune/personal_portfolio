import { NAV_LINKS } from '../../data/constants';
import { aboutInfo } from '../../data/about';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

function Footer() {
  const scrollTo = useSmoothScroll();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollTo(sectionId);
  };

  const socialLinks = [
    { name: 'GitHub', url: aboutInfo.social.github, icon: 'github' },
    { name: 'LinkedIn', url: aboutInfo.social.linkedin, icon: 'linkedin' },
    { name: 'Twitter', url: aboutInfo.social.twitter, icon: 'twitter' },
    { name: 'Kaggle', url: aboutInfo.social.kaggle, icon: 'kaggle' }
  ];

  return (
    <footer className="bg-dark-light border-t border-primary-500/30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Portfolio</h3>
            <p className="text-gray-400 mb-4">
              {aboutInfo.tagline}
            </p>
            <p className="text-sm text-gray-500">
              {aboutInfo.location}
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Retrouvez-moi</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label={social.name}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon === 'github' && (
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    )}
                    {social.icon === 'linkedin' && (
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    )}
                    {social.icon === 'twitter' && (
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    )}
                    {social.icon === 'kaggle' && (
                      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
                    )}
                  </svg>
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href={`mailto:${aboutInfo.email}`}
                className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
              >
                {aboutInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {aboutInfo.name}. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Développé avec React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
