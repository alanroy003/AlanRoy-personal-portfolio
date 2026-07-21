import React from "react";
import heroImage from "../../assets/images/hero/hero-image.png";
import { FileText, Send, Mail } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com" },
    { name: "GitHub", icon: FaGithub, href: "https://github.com" },
    { name: "Twitter/X", icon: FaXTwitter, href: "https://x.com" },
    { name: "Gmail", icon: Mail, href: "mailto:your-email@gmail.com" },
  ];

  return (
    <section
      id="home"
      style={{
        backgroundColor: "#D9D5D5",
        backgroundImage: `radial-gradient(#D4D4D8 0.75px, transparent 0.75px), linear-gradient(to right, #E4E4E7 1px, transparent 1px), linear-gradient(to bottom, #E4E4E7 1px, transparent 1px)`,
        backgroundSize: "100px 100px",
      }}
      /* Increased top padding (pt-28 md:pt-32) to push glass card down from top */
      className="min-h-screen p-1 sm:p-2 flex flex-col items-center justify-between overflow-hidden relative pt-20 md:pt-10 pb-0"
    >
      {/* Outer Glassmorphism Container (Added mt-4 md:mt-6 to bring top down) */}
      <div className="w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-3rem)] min-h-[calc(100vh-20rem)] relative z-10 bg-white/10 backdrop-blur-xl border border-white/0 rounded-4xl sm:rounded-3xl md:rounded-4xl shadow-xl flex items-center justify-center p-4 sm:p-4 md:p-8 mt-4 md:mt-6 mb-auto">
        {/* Subtle Orange Glow inside panel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] bg-orange-300/20 rounded-full blur-[110px] pointer-events-none -z-10" />

        {/* Content Layout */}
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 lg:gap-16">
          {/* MOBILE ONLY: Top Image Card */}
          <div className="md:hidden flex justify-center items-center w-full">
            <div className="relative w-full max-w-90 sm:max-w-120 aspect-4/5 bg-orange-500 rounded-4xl overflow-hidden shadow-xl shadow-orange-950/15 flex items-end justify-center">
              <img
                src={heroImage}
                alt="Alan Roy"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* LEFT COLUMN: Name, Tagline, Socials, & Action Buttons */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left -mt-30 sm:-mt-30 md:mt-0 z-10">
            {/* Glass Badge Overlay for Mobile Overlap Effect */}
            <div className="bg-white/60 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-9 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none border border-white/40 md:border-none w-full max-w-md md:max-w-none">
              {/* Main Title */}
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-neutral-950 tracking-tighter leading-[0.95]">
                I‘am <br className="hidden md:block" />{" "}
                <span className="relative inline-block mt-1 sm:mt-2">
                  Alan Roy
                  {/* Orange Accent Square */}
                  <span className="absolute top-1 sm:top-2.5 -right-5 sm:-right-8 w-3 h-3 sm:w-5 sm:h-5 bg-orange-500" />
                </span>
              </h1>

              {/* Tagline */}
              <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-neutral-800 max-w-sm sm:max-w-md font-medium leading-relaxed opacity-90 mx-auto md:mx-0">
                Crafting scalable applications and solving real-world problems
                through code .
              </p>

              {/* Social Media Links */}
              <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white/50 hover:bg-orange-500 text-neutral-800 hover:text-white border border-black/10 transition-all duration-300 shadow-sm hover:scale-110"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-center md:justify-start gap-3 sm:gap-4 w-full">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <FileText className="w-4 h-4" />
                  Resume
                </a>

                <a
                  href="#contact"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Let's Connect
                </a>
              </div>
            </div>
          </div>

          {/* DESKTOP ONLY: Right Side Image Card */}
          <div className="hidden md:flex flex-1 justify-end items-center w-full">
            <div className="relative w-full max-w-[320px] lg:max-w-95 aspect-4/5 bg-orange-500 rounded-[2.5rem] overflow-hidden shadow-xl shadow-orange-950/15 flex items-end justify-center transition-transform hover:scale-[1.01] duration-300">
              <img
                src={heroImage}
                alt="Alan Roy"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background ambient lighting */}
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-orange-200/0 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-10 right-10 w-80 h-80 bg-white/0 rounded-full blur-[120px] pointer-events-none" />

      {/* GRADIENT SEPARATOR LINE */}
      <div className="w-full relative z-20 flex justify-center mt-6 mb-1">
        <div className="w-3/4 max-w-4xl h-px bg-linear-to-r from-transparent via-orange-500 to-transparent opacity-80" />
      </div>
    </section>
  );
};

export default Hero;
