import Section from '../components/common/Section';
import SkillCategory from '../components/skills/SkillCategory';
import { skillCategories } from '../data/skills';

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
      <div className="mt-12 text-center">
        <p className="text-gray-400 max-w-2xl mx-auto">
          Ces compétences ont été développées à travers {skillCategories.reduce(
            (acc, cat) => acc + cat.skills.length,
            0
          )} technologies et outils, appliqués dans de nombreux projets professionnels et personnels.
        </p>
      </div>
    </Section>
  );
}

export default Skills;
