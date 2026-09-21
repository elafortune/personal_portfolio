import Section from '../components/common/Section';
import Card from '../components/common/Card';
import SkillCategory from '../components/skills/SkillCategory';
import { skillCategories } from '../data/skills';
import { useLanguage } from '../context/LanguageContext';
import { useLocalizedAbout } from '../hooks/useLocalizedData';

function Skills() {
  const { t } = useLanguage();
  const { languages } = useLocalizedAbout();

  return (
    <Section
      id="skills"
      title={t('skills_title')}
      subtitle={t('skills_subtitle')}
      className="bg-dark-light"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <SkillCategory key={category.id} category={category} />
        ))}
      </div>

      {/* Optional: Top Skills Summary */}
      <div className="mt-8 md:mt-12 text-center">
        <p className="text-gray-400 max-w-2xl mx-auto">
          {t('skills_summary', skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0))}
        </p>
      </div>

      {/* Languages */}
      <div className="max-w-md mx-auto mt-8 md:mt-12">
        <Card>
          <h3 className="text-xl font-bold text-white mb-4">{t('skills_languages_title')}</h3>
          <div className="space-y-3">
            {languages.map((lang, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-300 font-medium">{lang.name}</span>
                  <span className="text-gray-300 text-sm font-medium">{lang.level}</span>
                </div>
                <div className="w-full bg-dark-lighter rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary-600 to-primary-400 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${lang.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}

export default Skills;
