import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex flex-col md:flex-row items-center w-full mb-10 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Empty space for alternating desktop side */}
      <div className="hidden md:block md:w-1/2" />

      {/* Center Node / Icon (Removed duplicate bg class) */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 w-10 h-10 rounded-full bg-white/90 border-2 border-orange-500 flex items-center justify-center text-orange-600 shadow-md backdrop-blur-md">
        <Briefcase className="w-5 h-5" />
      </div>

      {/* Card Wrapper with Balanced Directional Spacing */}
      <div
        className={`w-full md:w-1/2 pl-12 md:pl-0 ${
          isEven
            ? "md:pl-10 md:pr-0" // Left-side card: Padding on the right side (towards center)
            : "md:pr-10 md:pl-0" // Right-side card: Padding on the left side (towards center)
        }`}
      >
        <div
          className={`bg-white/20 backdrop-blur-md border border-white/50 rounded-2xl p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 ${
            isEven ? "md:text-left" : "md:text-right"
          }`}
        >
          {/* Role Title */}
          <h3 className="text-lg sm:text-xl font-black text-neutral-950 leading-snug">
            {item.role}
          </h3>

          {/* Company Name */}
          <p className="text-orange-600 font-bold text-sm sm:text-base mt-0.5">
            {item.company}
          </p>

          {/* Period & Location Metadata */}
          <div
            className={`flex flex-wrap items-center gap-2.5 mt-3 text-xs text-neutral-700 font-medium ${
              isEven ? "justify-start" : "justify-start md:justify-end"
            }`}
          >
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/60 border border-black/5">
              <Calendar className="w-3.5 h-3.5 text-orange-500" />
              <span>{item.period}</span>
            </div>

            {item.location && (
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/60 border border-black/5">
                <MapPin className="w-3.5 h-3.5 text-neutral-600" />
                <span>{item.location}</span>
              </div>
            )}
          </div>

          {/* Compact Tech Badges */}
          {item.skills && item.skills.length > 0 && (
            <div
              className={`flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-black/5 ${
                isEven ? "justify-start" : "justify-start md:justify-end"
              }`}
            >
              {item.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-lg bg-white/60 text-neutral-900 border border-black/5 text-[11px] font-semibold select-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
