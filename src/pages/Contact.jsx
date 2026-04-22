import Section from '../components/common/Section';
import Card from '../components/common/Card';
import { aboutInfo } from '../data/about';

function Contact() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: aboutInfo.email,
      link: `mailto:${aboutInfo.email}`,
      description: 'Envoyez-moi un email'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      title: 'LinkedIn',
      value: aboutInfo.social.linkedin.replace('https://linkedin.com/in/', ''),
      link: aboutInfo.social.linkedin,
      description: 'Connectons-nous'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Localisation',
      value: aboutInfo.location,
      link: null,
      description: 'Où je me trouve'
    }
  ];

  const additionalLinks = [
    {
      name: 'Twitter',
      url: aboutInfo.social.twitter,
      icon: 'twitter'
    },
    {
      name: 'Kaggle',
      url: aboutInfo.social.kaggle,
      icon: 'kaggle'
    },
    {
      name: 'Medium',
      url: aboutInfo.social.medium,
      icon: 'medium'
    }
  ].filter(link => link.url);

  return (
    <Section
      id="contact"
      title="Contactez-moi"
      subtitle="Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter. Je suis toujours ouvert à de nouvelles collaborations."
      className="bg-dark-light"
    >
      {/* Main Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {contactMethods.map((method, index) => (
          <Card
            key={index}
            hoverable={!!method.link}
            onClick={() => method.link && window.open(method.link, method.link.startsWith('mailto:') ? '_self' : '_blank')}
          >
            <div className="text-center">
              <div className="text-primary-400 mb-4 flex justify-center">
                {method.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {method.title}
              </h3>
              <p className="text-sm text-gray-400 mb-2 break-all">
                {method.value}
              </p>
              <p className="text-xs text-gray-500">
                {method.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Additional Social Links */}
      {additionalLinks.length > 0 && (
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-6">
            Retrouvez-moi aussi sur
          </h3>
          <div className="flex justify-center gap-6">
            {additionalLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label={link.name}
              >
                <div className="w-14 h-14 bg-dark border border-primary-500/30 rounded-full flex items-center justify-center text-primary-400 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300 group-hover:scale-110">
                  {link.icon === 'twitter' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  )}
                  {link.icon === 'kaggle' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
                    </svg>
                  )}
                  {link.icon === 'medium' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-2 group-hover:text-primary-400 transition-colors">
                  {link.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-16 text-center max-w-2xl mx-auto">
        <Card>
          <h3 className="text-2xl font-bold text-white mb-4">
            Travaillons ensemble
          </h3>
          <p className="text-gray-300 mb-6">
            Que vous ayez un projet de data science, besoin d&apos;expertise en machine learning,
            ou simplement envie d&apos;échanger sur les données, je serais ravi de discuter avec vous.
          </p>
          <a
            href={`mailto:${aboutInfo.email}`}
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Envoyer un email
          </a>
        </Card>
      </div>
    </Section>
  );
}

export default Contact;
