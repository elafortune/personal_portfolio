import Section from '../components/common/Section';
import Card from '../components/common/Card';
import SkillCategory from '../components/skills/SkillCategory';
import { skillCategories } from '../data/skills';
import { languages } from '../data/about';

function Skills() {
  return (
    <Section
      id="skills"
      title="Compétences"
      subtitle="Un éventail de compétences techniques couvrant le machine learning, l'analyse de données, la visualisation et les technologies modernes de data science."
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
          Ces compétences ont été développées à travers {skillCategories.reduce(
            (acc, cat) => acc + cat.skills.length,
            0
          )} technologies et outils, appliqués dans de nombreux projets professionnels et personnels.
        </p>
      </div>

      {/* Langues */}
      <div className="max-w-md mx-auto mt-8 md:mt-12">
        <Card>
          <h3 className="text-xl font-bold text-white mb-4">Langues</h3>
          <div className="space-y-3">
            {languages.map((lang, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-300 font-medium">{lang.name}</span>
                  <span className="text-primary-400 text-sm font-medium">{lang.level}</span>
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
