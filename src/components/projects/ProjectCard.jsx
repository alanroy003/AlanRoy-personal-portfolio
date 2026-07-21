import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white/20 backdrop-blur-md border border-white/50 rounded-2xl md:rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-1">
      <div>
        {/* Screenshot / Fallback Panel (Updated: h-37.5) */}
        <div className="w-full h-37.5 bg-neutral-950/80 rounded-xl sm:rounded-2xl overflow-hidden mb-5 flex items-center justify-center border border-black/10">
          {project.img && project.img_url ? (
            <img
              src={project.img_url}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="px-4 text-center">
              <span className="text-sm font-bold text-neutral-200 font-sans tracking-wide">
                {project.title}
              </span>
            </div>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-black text-neutral-950 mb-3 leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-800 text-xs sm:text-sm leading-relaxed font-medium mb-5 opacity-90">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((item, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-xl bg-white/60 text-neutral-900 border border-black/5 text-xs font-semibold cursor-default select-none shadow-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 pt-3 border-t border-black/5">
        {project.github_link && (
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 rounded-xl bg-transparent border border-cyan-500 text-cyan-600 hover:bg-cyan-500/10 text-xs font-bold transition-all duration-200"
          >
            GitHub
          </a>
        )}

        {project.Live && project.livedemo_link && (
          <a
            href={project.livedemo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-all duration-200 shadow-xs"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
