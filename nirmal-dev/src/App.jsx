
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "./nav/Navbar";
import Footer from "./footer/Footer";

// Section Imports
import HeroSection from "./home/HeroSection";
import About from "./about/About";

// Render the Projects Display Grid directly to prevent routing loops
import ProjectsSection from "./projects/ProjectsSection";

import Services from "./services/ServicesSection";
import Testimonial from "./testimonial/TestimonialSection";
import Contact from "./contact/Contact";

// Individual Inner Page Details Imports
import DayalNagari from "./projects/DayalNagari";
import DayalSarovar from "./projects/DayalSarovar";
import KengnalkarResidency from "./projects/KengnalkarResidency";
import NirmalCityProjects from "./projects/NirmalCityProjects";
import PadmavatiGreenCity from "./projects/PadmavatiGreenCity";
import PurushottamVilla from "./projects/PurushottamVilla";

// Page Import
import AboutDetails from "./about/AboutDetails";
// import { i } from "framer-motion/m";





export  function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
}



function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfbf7]">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* Main Home Route displaying all landing sections sequentially */}
          <Route
            path="/"
            element={
              <>
                <div id="home">
                  <HeroSection />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id="projects">
                  <ProjectsSection />
                </div>
                <div id="services">
                  <Services />
                </div>
                <div id="testimonial">
                  <Testimonial />
                </div>
                <div id="contact">
                  <Contact />
                </div>
              </>
            }
          />

          {/* Standalone deep-link sub routes */}
          <Route path="/about-details" element={<AboutDetails />} />

          {/* GLOBAL REAL ESTATE PROJECT DETAILS ENDPOINTS */}
          <Route path="/projects/dayal-nagri" element={<DayalNagari />} />
          <Route path="/projects/dayal-sarovar" element={<DayalSarovar />} />

          <Route
            path="/projects/kengnalkar-nirmal-residency-phase-1"
            element={<KengnalkarResidency />}
          />
          <Route
            path="/projects/kengnalkar-nirmal-residency-phase-2"
            element={<KengnalkarResidency />}
          />

          <Route
            path="/projects/nirmal-city-phase-1"
            element={<NirmalCityProjects />}
          />
          <Route
            path="/projects/nirmal-city-phase-2"
            element={<NirmalCityProjects />}
          />

          <Route
            path="/projects/padmavati-green-city"
            element={<PadmavatiGreenCity />}
          />

          <Route
            path="/projects/purushottam-villa-phase-1"
            element={<PurushottamVilla />}
          />
          <Route
            path="/projects/purushottam-villa-phase-2"
            element={<PurushottamVilla />}
          />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
