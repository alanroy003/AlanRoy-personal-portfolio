import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Go up 2 levels (../../) from src/components/projects/ to get to src/assets/
import projectsData from "../../assets/data/projects.json";

// Import directly from the same folder
import ProjectGrid from "./ProjectGrid";

const AllProjects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#D9D5D5",
        backgroundImage: `radial-gradient(#D4D4D8 0.75px, transparent 0.75px), linear-gradient(to right, #E4E4E7 1px, transparent 1px), linear-gradient(to bottom, #E4E4E7 1px, transparent 1px)`,
        backgroundSize: "100px 100px",
      }}
      className="min-h-screen p-2 sm:p-4 flex flex-col items-center relative py-6"
    >
      <div className="w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-7xl relative z-10 bg-white/10 backdrop-blur-xl border border-white/40 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 mt-20 sm:mt-24 mb-4 flex flex-col items-center shadow-xl">
        {" "}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] bg-orange-300/20 rounded-full blur-[110px] pointer-events-none -z-10" />
        <div className="w-full flex items-center justify-between mb-8 pb-4 border-b border-black/10">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/40 hover:bg-white/70 border border-white/60 text-neutral-900 font-bold text-xs sm:text-sm transition-all duration-200 shadow-xs hover:-translate-x-1 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-orange-600" />
            <span>Back to Home</span>
          </button>

          <h1 className="font-['Orbitron',sans-serif] text-xl sm:text-3xl font-black text-neutral-950 uppercase tracking-wider text-right">
            All <span className="text-orange-500">Projects</span>
          </h1>
        </div>
        <div className="w-full max-w-6xl my-4">
          <ProjectGrid projects={projectsData} />
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
