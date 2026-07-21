import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Added useLocation

import LoadingScreen from "./components/loader/LoadingScreen";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";
import AllProjects from "./components/projects/AllProjects";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation(); // Hook to listen for route & hash changes

  // Handles smooth scrolling to anchor targets cross-page (e.g. from /allprojects back to /#projects)
  useEffect(() => {
    if (!isLoading && location.hash) {
      // Small timeout ensures the homepage layout is fully rendered before scrolling
      const timer = setTimeout(() => {
        const targetElement = document.querySelector(location.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [location, isLoading]);

  if (isLoading) {
    return <LoadingScreen onFinish={() => setIsLoading(false)} />;
  }

  const COLORS = {
    screenBg: "#DDDDDD",
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: COLORS.screenBg }}
    >
      <Navbar />
      <Routes>
        {/* Main Home Route */}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <About />
              <Projects />
              <Experience />
              <Contact />
            </main>
          }
        />

        {/* All Projects Dedicated Page Route */}
        <Route path="/allprojects" element={<AllProjects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
