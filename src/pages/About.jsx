import Section from '../components/common/Section';
import Timeline from '../components/about/Timeline';
import Card from '../components/common/Card';
import { aboutInfo, timeline, certifications, interests } from '../data/about';

function About() {
  return (
    <Section
      id="about"
      title="À Propos"
      subtitle="Mon parcours, mes expériences et ce qui me passionne dans la data science."
    >
      {/* Bio Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Profile Image & Quick Info */}
        <div className="lg:col-span-1">
          <Card>
            <div className="text-center">
              {/* Profile Image */}
              <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-primary-600/20 border-4 border-primary-500/50 overflow-hidden">
                <img
                  src={aboutInfo.profileImage}
                  alt={aboutInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-6xl text-primary-400">${aboutInfo.name.charAt(0)}</div>`;
                  }}
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {aboutInfo.name}
              </h3>
              <p className="text-primary-400 font-medium mb-4">
                {aboutInfo.title}
              </p>

              {/* Quick Stats */}
              <div className="space-y-3 text-left">
                {aboutInfo.location && (
                  <div className="flex items-start gap-2 text-gray-300">
                    <svg className="w-5 h-5 text-primary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{aboutInfo.location}</span>
                  </div>
                )}
                {aboutInfo.availability && (
                  <div className="flex items-start gap-2 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{aboutInfo.availability}</span>
                  </div>
                )}
              </div>

              {/* Social Buttons */}
              <div className="flex flex-col gap-2 mt-6">
                <a
                  href={aboutInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-all"
                  style={{ backgroundColor: '#0077B5' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#005f8e'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0077B5'}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  linkedin.com/in/emerick-lafortune
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* Bio Text */}
        <div className="lg:col-span-2">
          <Card>
            <h3 className="text-2xl font-bold text-white mb-4">
              Qui suis-je ?
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              {aboutInfo.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">
          Parcours Professionnel & Académique
        </h3>
        <Timeline items={timeline} />
      </div>

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.id} hoverable>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-primary-600/20 flex items-center justify-center overflow-hidden">
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<span class="text-2xl">🏆</span>';
                        }}
                      />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1 line-clamp-2">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-primary-400 mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(cert.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'short'
                      })}
                    </p>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Interests */}
      {interests && interests.length > 0 && (
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Centres d&apos;Intérêt
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <Card key={index}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{interest.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {interest.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}

export default About;
