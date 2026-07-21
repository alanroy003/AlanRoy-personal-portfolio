// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const [activeSection, setActiveSection] = useState("Home");
//   const [visible, setVisible] = useState(true);
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About me", href: "#about" },
//     { name: "Skills", href: "#about" },
//     { name: "Project", href: "#projects" },
//     { name: "Experience", href: "#experience" },
//     { name: "Let's connect", href: "#contact" },
//   ];

//   // Handle Scroll Direction & Mouse Hover
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;

//       if (mobileMenuOpen) {
//         setVisible(true);
//         return;
//       }

//       if (prevScrollPos > currentScrollPos || currentScrollPos < 50) {
//         setVisible(true);
//       } else {
//         setVisible(false);
//       }

//       setPrevScrollPos(currentScrollPos);
//     };

//     const handleMouseMove = (e) => {
//       if (e.clientY <= 50) {
//         setVisible(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [prevScrollPos, mobileMenuOpen]);

//   // Handle Navigation Click Cleanly Across Routes
//   const handleNavClick = (e, link) => {
//     e.preventDefault();
//     setActiveSection(link.name);
//     setMobileMenuOpen(false);

//     if (location.pathname !== "/") {
//       // If we are on /allprojects, navigate to home page with hash tag
//       navigate(`/${link.href}`);
//     } else {
//       // If already on home page, smoothly scroll to section
//       const targetElement = document.querySelector(link.href);
//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: "smooth" });
//       } else if (link.href === "#home") {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-40 px-4 transition-transform duration-300 ease-in-out ${
//         visible ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       <nav className="max-w-6xl mx-auto mt-4 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 flex items-center justify-between bg-white/10 backdrop-blur-md border-b border-black rounded-full shadow-sm relative">
//         {/* LEFT SIDE: Brand Logo */}
//         <div
//           onClick={() => {
//             if (location.pathname !== "/") navigate("/");
//             else window.scrollTo({ top: 0, behavior: "smooth" });
//           }}
//           className="flex items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer"
//         >
//           <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border-2 border-orange-500 flex items-center justify-center font-bold text-xs sm:text-sm md:text-base text-orange-500 select-none">
//             A
//           </div>

//           <div className="hidden sm:block h-4 md:h-5 w-px bg-neutral-400 opacity-60" />

//           <span className="hidden sm:block text-xs md:text-sm tracking-wider uppercase font-medium text-neutral-800">
//             Alan Roy
//           </span>
//         </div>

//         {/* RIGHT SIDE: Desktop Navigation Links */}
//         <ul className="hidden md:flex items-center gap-6 md:gap-8 lg:gap-10">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <a
//                 href={`/${link.href}`}
//                 onClick={(e) => handleNavClick(e, link)}
//                 className={`text-sm md:text-base font-medium transition-colors duration-200 hover:text-orange-500 ${
//                   activeSection === link.name
//                     ? "text-orange-500 font-semibold"
//                     : "text-neutral-800"
//                 }`}
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* RIGHT SIDE: Mobile Hamburger Button */}
//         <button
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           className="md:hidden p-1.5 text-neutral-800 hover:text-orange-500 focus:outline-none"
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {mobileMenuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>

//         {/* MOBILE MENU DROPDOWN */}
//         {mobileMenuOpen && (
//           <div className="absolute top-16 left-0 right-0 bg-white/90 backdrop-blur-lg border border-black/10 rounded-2xl p-4 shadow-lg md:hidden flex flex-col gap-3">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={`/${link.href}`}
//                 onClick={(e) => handleNavClick(e, link)}
//                 className={`text-sm font-medium py-1.5 px-3 rounded-lg transition-colors ${
//                   activeSection === link.name
//                     ? "text-orange-500 bg-orange-50/50 font-semibold"
//                     : "text-neutral-800 hover:bg-neutral-100/50"
//                 }`}
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

//==========================================================================================================================

//**********************************************************************************************************************8 */

//=========================================================================================================================
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About me", href: "#about" },
    { name: "Skills", href: "#about" },
    { name: "Project", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Let's connect", href: "#contact" },
  ];

  // Handle Scroll Direction & Mouse Hover
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (mobileMenuOpen) {
        setVisible(true);
        return;
      }

      if (prevScrollPos > currentScrollPos || currentScrollPos < 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    const handleMouseMove = (e) => {
      if (e.clientY <= 50) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [prevScrollPos, mobileMenuOpen]);

  // Handle Navigation Click
  const handleNavClick = (e, link) => {
    e.preventDefault();
    setActiveSection(link.name);
    setMobileMenuOpen(false); // Close mobile drawer immediately

    if (location.pathname !== "/") {
      // Navigate to homepage with hash tag appended
      navigate(`/${link.href}`);
    } else {
      // Already on homepage -> Smooth Scroll
      const targetElement = document.querySelector(link.href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      } else if (link.href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-6xl mx-auto mt-4 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg relative">
        {/* LEFT SIDE: Brand Logo */}
        <div
          onClick={() => {
            setMobileMenuOpen(false);
            if (location.pathname !== "/") navigate("/");
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border-2 border-orange-500 flex items-center justify-center font-bold text-xs sm:text-sm md:text-base text-orange-500 select-none">
            A
          </div>

          <div className="hidden sm:block h-4 md:h-5 w-px bg-neutral-400 opacity-60" />

          <span className="hidden sm:block text-xs md:text-sm tracking-wider uppercase font-medium text-neutral-800">
            Alan Roy
          </span>
        </div>

        {/* RIGHT SIDE: Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 md:gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`/${link.href}`}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-sm md:text-base font-medium transition-colors duration-200 hover:text-orange-500 ${
                  activeSection === link.name
                    ? "text-orange-500 font-semibold"
                    : "text-neutral-800"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE: Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-neutral-800 hover:text-orange-500 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white/90 backdrop-blur-lg border border-black/10 rounded-2xl p-4 shadow-lg md:hidden flex flex-col gap-3 z-50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`/${link.href}`}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-sm font-medium py-1.5 px-3 rounded-lg transition-colors ${
                  activeSection === link.name
                    ? "text-orange-500 bg-orange-50/50 font-semibold"
                    : "text-neutral-800 hover:bg-neutral-100/50"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
