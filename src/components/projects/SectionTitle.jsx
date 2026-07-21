import React from "react";

const SectionTitle = () => {
  return (
    <div className="group flex flex-col items-center justify-center text-center cursor-pointer my-8 select-none font-['Orbitron',sans-serif]">
      {/* Line 1: FEATURED (Default: Outline -> Hover: Solid Fill) */}
      <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-widest">
        <span
          className="block text-transparent transition-all duration-0 ease-in-out group-hover:text-orange-500"
          style={{
            WebkitTextStroke: "2px #f97316",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.WebkitTextStroke = "0px transparent")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.WebkitTextStroke = "2px #f97316")
          }
        >
          Featured
        </span>
      </h2>

      {/* Line 2: PROJECTS (Default: Solid Fill -> Hover: Outline) */}
      <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-widest">
        <span
          className="block text-orange-500 transition-all duration-0 ease-in-out group-hover:text-transparent"
          style={{
            WebkitTextStroke: "0px transparent",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.WebkitTextStroke = "2px #f97316")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.WebkitTextStroke = "0px transparent")
          }
        >
          Projects
        </span>
      </h2>
    </div>
  );
};

export default SectionTitle;
