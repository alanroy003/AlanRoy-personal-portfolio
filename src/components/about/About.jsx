import React from "react";
import SkillsList from "./SkillsList";

const About = () => {
  const highlights = [
    "Building innovative web and mobile applications.",
    "Always exploring new technologies and frameworks.",
    "Writing maintainable and readable code.",
    "Solving real-world problems through software solutions.",
  ];

  return (
    <section
      id="about"
      style={{
        backgroundColor: "#D9D5D5",
        backgroundImage: `radial-gradient(#D4D4D8 0.75px, transparent 0.75px), linear-gradient(to right, #E4E4E7 1px, transparent 1px), linear-gradient(to bottom, #E4E4E7 1px, transparent 1px)`,
        backgroundSize: "100px 100px",
      }}
      className="min-h-screen p-1 sm:p-2 flex flex-col items-center justify-between overflow-hidden relative pt-20 pb-0 md:py-0"
    >
      {/* Outer Glassmorphism Container matching your requested exact sizing */}
      <div className="w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-3rem)] min-h-[calc(100vh-6rem)] relative z-10 bg-white/10 backdrop-blur-xl border border-white/40 rounded-2xl sm:rounded-3xl md:rounded-4xl shadow-xl flex items-center justify-center p-4 sm:p-8 md:p-10 mt-4 md:mt-6 mb-auto">
        {/* Subtle Orange Glow inside panel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] bg-orange-300/20 rounded-full blur-[110px] pointer-events-none -z-10" />

        {/* Inner layout with tighter gap (gap-4 sm:gap-6 instead of gap-12) */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {/* LEFT CARD: About Me */}
          <div className="lg:col-span-6 bg-white/20 backdrop-blur-md border border-white/50 rounded-2xl md:rounded-3xl p-5 sm:p-7 flex flex-col justify-between shadow-sm">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 tracking-tight mb-4">
                About Me
              </h2>

              <p className="text-neutral-800 text-sm sm:text-base leading-relaxed font-medium mb-6 opacity-90">
                I'm a passionate Software Engineer from Kerala, India, with
                expertise in building modern software that makes a difference. I
                enjoy crafting elegant code, designing scalable systems, and
                exploring new technologies to solve real-world problems.
              </p>

              <ul className="space-y-2.5">
                {highlights.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-neutral-900"
                  >
                    <span className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT CARD: Skills List */}
          <div className="lg:col-span-6 bg-white/20 backdrop-blur-md border border-white/50 rounded-2xl md:rounded-3xl p-5 sm:p-7 shadow-sm">
            <SkillsList />
          </div>
        </div>
      </div>

      {/* GRADIENT SEPARATOR LINE */}
      <div className="w-full relative z-20 flex justify-center mt-6 mb-1">
        <div className="w-3/4 max-w-4xl h-px bg-linear-to-r from-transparent via-orange-500 to-transparent opacity-80" />
      </div>
    </section>
  );
};

export default About;
