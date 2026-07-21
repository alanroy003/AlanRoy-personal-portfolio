import React from "react";

const SkillsList = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React"],
    },
    {
      title: "Backend",
      skills: ["Django", "FastAPI", "Flask"],
    },
    {
      title: "Languages",
      skills: ["Python", "C#", "SQL"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Docker", "Firebase", "Git"],
    },
  ];

  return (
    <div className="flex flex-col h-full justify-between">
      <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight mb-6">
        Skills & Technologies
      </h3>

      <div className="space-y-5">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h4 className="text-xs sm:text-sm uppercase tracking-wider font-bold text-orange-600 mb-2">
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl bg-white/60 hover:bg-orange-500 text-neutral-900 hover:text-white border border-black/5 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs hover:scale-105 cursor-default select-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
