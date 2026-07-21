import React from "react";
import experienceData from "../../assets/data/experience.json";
import TimelineItem from "./TimelineItem";

const Experience = () => {
  return (
    <section
      id="experience"
      style={{
        backgroundColor: "#D9D5D5",
        backgroundImage: `radial-gradient(#D4D4D8 0.75px, transparent 0.75px), linear-gradient(to right, #E4E4E7 1px, transparent 1px), linear-gradient(to bottom, #E4E4E7 1px, transparent 1px)`,
        backgroundSize: "100px 100px",
      }}
      className="min-h-screen p-1 sm:p-2 flex flex-col items-center justify-between overflow-hidden relative pt-20 pb-0 md:py-0"
    >
      <div className="w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-3rem)] min-h-[calc(100vh-6rem)] relative z-10 bg-white/10 backdrop-blur-xl border border-white/40 rounded-2xl sm:rounded-3xl md:rounded-4xl shadow-xl flex flex-col items-center p-4 sm:p-8 md:p-10 mt-4 md:mt-6 mb-auto">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] bg-orange-300/20 rounded-full blur-[110px] pointer-events-none -z-10" />

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-['Orbitron',sans-serif] text-2xl sm:text-4xl font-black text-neutral-950 uppercase tracking-wider">
            Work <span className="text-orange-500">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-2 rounded-full" />
        </div>

        {/* Alternating Timeline Layout */}
        <div className="w-full max-w-5xl mx-auto relative my-auto py-4">
          {/* Center Vertical Line (Updated: bg-linear-to-b) */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-linear-to-b from-orange-500 via-orange-300 to-transparent -translate-x-1/2" />

          {/* Timeline Items */}
          {experienceData.map((item, index) => (
            <TimelineItem key={item.id || index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom Separator (Updated: bg-linear-to-r) */}
      <div className="w-full relative z-20 flex justify-center mt-6 mb-1">
        <div className="w-3/4 max-w-4xl h-px bg-linear-to-r from-transparent via-orange-500 to-transparent opacity-80" />
      </div>
    </section>
  );
};

export default Experience;
