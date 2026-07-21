import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import projectsData from "../../assets/data/projects.json";
import SectionTitle from "./SectionTitle";
import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  const [displayCount, setDisplayCount] = useState(6);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      // Mobile / Tablet (<1024px) -> 4 projects
      // Laptop / Desktop (≥1024px) -> 6 projects
      if (window.innerWidth < 1024) {
        setDisplayCount(4);
      } else {
        setDisplayCount(6);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProjects = projectsData.slice(0, displayCount);

  return (
    <section
      id="projects"
      style={{
        backgroundColor: "#D9D5D5",
        backgroundImage: `radial-gradient(#D4D4D8 0.75px, transparent 0.75px), linear-gradient(to right, #E4E4E7 1px, transparent 1px), linear-gradient(to bottom, #E4E4E7 1px, transparent 1px)`,
        backgroundSize: "100px 100px",
      }}
      className="min-h-screen p-1 sm:p-2 flex flex-col items-center justify-between overflow-hidden relative pt-20 pb-0 md:py-0"
    >
      {/* Outer Glassmorphism Container */}
      <div className="w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-3rem)] min-h-[calc(100vh-6rem)] relative z-10 bg-white/10 backdrop-blur-xl border border-white/40 rounded-2xl sm:rounded-3xl md:rounded-4xl shadow-xl flex flex-col items-center p-4 sm:p-8 md:p-10 mt-4 md:mt-6 mb-auto">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] bg-orange-300/20 rounded-full blur-[110px] pointer-events-none -z-10" />

        <SectionTitle />

        {/* Display limited projects */}
        <div className="w-full max-w-6xl mx-auto my-auto py-6">
          <ProjectGrid projects={visibleProjects} />
        </div>

        {/* View All Projects Button */}
        {projectsData.length > displayCount && (
          <div className="mt-8 mb-4">
            <button
              onClick={() => navigate("/allprojects")}
              className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-md hover:scale-105 cursor-pointer"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>

      {/* Separator Line (Updated: bg-linear-to-r) */}
      <div className="w-full relative z-20 flex justify-center mt-6 mb-1">
        <div className="w-3/4 max-w-4xl h-px bg-linear-to-r from-transparent via-orange-500 to-transparent opacity-80" />
      </div>
    </section>
  );
};

export default Projects;
