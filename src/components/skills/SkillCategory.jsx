import Card from '../common/Card';

function SkillCategory({ category }) {
  return (
    <Card>
      <h3 className="text-xl font-bold text-white mb-4">
        {category.category}
      </h3>
      <div className="space-y-3">
        {category.skills.map((skill, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="text-lg">{skill.icon}</span>
                <span className="text-gray-300 font-medium">{skill.name}</span>
              </div>
              <span className="text-primary-400 text-sm font-medium">
                {skill.proficiency}%
              </span>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-dark-lighter rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary-600 to-primary-400 h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default SkillCategory;
