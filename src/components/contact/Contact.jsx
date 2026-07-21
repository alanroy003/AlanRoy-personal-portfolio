import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#D9D5D5",
        backgroundImage: `radial-gradient(#D4D4D8 0.75px, transparent 0.75px), linear-gradient(to right, #E4E4E7 1px, transparent 1px), linear-gradient(to bottom, #E4E4E7 1px, transparent 1px)`,
        backgroundSize: "100px 100px",
      }}
      className="min-h-screen p-1 sm:p-2 flex flex-col items-center justify-between overflow-hidden relative pt-20 pb-0 md:py-0"
    >
      {/* Outer Glassmorphism Container */}
      <div className="w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-3rem)] min-h-[calc(100vh-6rem)] relative z-10 bg-white/10 backdrop-blur-xl border border-white/40 rounded-2xl sm:rounded-3xl md:rounded-4xl shadow-xl flex flex-col items-center p-4 sm:p-8 md:p-10 mt-4 md:mt-6 mb-auto">
        {/* Glow Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] bg-orange-300/20 rounded-full blur-[110px] pointer-events-none -z-10" />

        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-['Orbitron',sans-serif] text-2xl sm:text-4xl font-black text-neutral-950 uppercase tracking-wider">
            Let's <span className="text-orange-500">Connect</span>
          </h2>
          <p className="text-neutral-700 font-medium text-xs sm:text-sm mt-2 max-w-md mx-auto">
            Have a project in mind or want to collaborate? Feel free to drop a
            message below!
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Contact Form Wrapper */}
        <div className="w-full flex justify-center my-auto">
          <ContactForm />
        </div>
      </div>

      {/* Bottom Separator Line (Tailwind v4 syntax) */}
      <div className="w-full relative z-20 flex justify-center mt-6 mb-1">
        <div className="w-3/4 max-w-4xl h-px bg-linear-to-r from-transparent via-orange-500 to-transparent opacity-80" />
      </div>
    </section>
  );
};

export default Contact;
