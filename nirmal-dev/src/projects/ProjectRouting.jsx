// //     import { Routes, Route } from 'react-router-dom'
// //     // 1. Import your main gallery section
// //     // import ProjectsSection from './projects/ProjectsSection';

// //     // // 2. Import ALL individual project page components
// //     // import DayalNagari from './projects/DayalNagari';
// //     // import DayalSarovar from './projects/DayalSarovar';
// //     // import KengnalkarResidency from './projects/KengnalkarResidency'; // <-- Added missing import
// //     // import NirmalCityProjects from './projects/NirmalCityProjects';
// //     // import PadmavatiGreenCity from './projects/PadmavatiGreenCity';
// //     // import PurushottamVilla from './projects/PurushottamVilla';


// //    import ProjectsSection from './ProjectsSection';

// //    import DayalNagari from './DayalNagari';
// //    import DayalSarovar from './DayalSarovar';
// //    import KengnalkarResidency from './KengnalkarResidency';
// //     import NirmalCityProjects from './NirmalCityProjects';
// //     import PadmavatiGreenCity from './PadmavatiGreenCity';
// //     import PurushottamVilla from './PurushottamVilla';

// //     export default function ProjectRouting() {
// //     return (
// //         <Routes>
// //         {/* Home page displays your 3D Carousel / Gallery */}
// //         <Route path="/" element={<ProjectsSection />} />

// //         {/* Explicit routes for individual project dashboards */}
// //         <Route path="/projects/dayal-nagri" element={<DayalNagari />} />
// //         <Route path="/projects/dayal-sarovar" element={<DayalSarovar />} />
        
// //         {/* Kengnalkar Residency Routes */}
// //         <Route path="/projects/kengnalkar-nirmal-residency-phase-1" element={<KengnalkarResidency />} />
// //         <Route path="/projects/kengnalkar-nirmal-residency-phase-2" element={<KengnalkarResidency />} />
        
// //         {/* Nirmal City Routes */}
// //         <Route path="/projects/nirmal-city-phase-1" element={<NirmalCityProjects />} />
// //         <Route path="/projects/nirmal-city-phase-2" element={<NirmalCityProjects />} />

// //         {/* Padmavati Green City Route */}
// //         <Route path="/projects/padmavati-green-city" element={<PadmavatiGreenCity />} />
        
// //         {/* Purushottam Villa Routes */}
// //         <Route path="/projects/purushottam-villa-phase-1" element={<PurushottamVilla />} />
// //         <Route path="/projects/purushottam-villa-phase-2" element={<PurushottamVilla />} />
// //         </Routes>
// //     );
// //     }




// // import { Routes, Route } from 'react-router-dom';
// // import ProjectsSection from './ProjectsSection';
// // import DayalNagari from './DayalNagari';
// // import DayalSarovar from './DayalSarovar';
// // import KengnalkarResidency from './KengnalkarResidency';
// // import NirmalCityProjects from './NirmalCityProjects';
// // import PadmavatiGreenCity from './PadmavatiGreenCity';
// // import PurushottamVilla from './PurushottamVilla';

// // export default function ProjectRouting() {
// //   return (
// //     <Routes>
// //       {/* 1. When on the homepage, render the main Carousel / Grid gallery right here */}
// //       <Route path="/" element={<ProjectsSection />} />

// //       {/* 2. Absolute paths ensure that clicking a project swaps out the page view */}
// //       <Route path="/projects/dayal-nagri" element={<DayalNagari />} />
// //       <Route path="/projects/dayal-sarovar" element={<DayalSarovar />} />
      
// //       <Route path="/projects/kengnalkar-nirmal-residency-phase-1" element={<KengnalkarResidency />} />
// //       <Route path="/projects/kengnalkar-nirmal-residency-phase-2" element={<KengnalkarResidency />} />
      
// //       <Route path="/projects/nirmal-city-phase-1" element={<NirmalCityProjects />} />
// //       <Route path="/projects/nirmal-city-phase-2" element={<NirmalCityProjects />} />

// //       <Route path="/projects/padmavati-green-city" element={<PadmavatiGreenCity />} />
      
// //       <Route path="/projects/purushottam-villa-phase-1" element={<PurushottamVilla />} />
// //       <Route path="/projects/purushottam-villa-phase-2" element={<PurushottamVilla />} />
// //     </Routes>
// //   );
// // }


// import { Routes, Route } from 'react-router-dom';
// import ProjectsSection from './ProjectsSection';
// import DayalNagari from './DayalNagari';
// import DayalSarovar from './DayalSarovar';
// import KengnalkarResidency from './KengnalkarResidency';
// import NirmalCityProjects from './NirmalCityProjects';
// import PadmavatiGreenCity from './PadmavatiGreenCity';
// import PurushottamVilla from './PurushottamVilla';

// export default function ProjectRouting({ isHomepage }) {
//   // If we are displaying this inside the Homepage stack, bypass the routing logic 
//   // and simply return the display section directly.
//   if (isHomepage) {
//     return <ProjectsSection />;
//   }

//   return (
//     <Routes>
//       {/* If someone lands exactly on /projects, fallback to the main section */}
//       <Route path="/" element={<ProjectsSection />} />

//       {/* Standalone pages that will render on a clean, dedicated screen */}
//       <Route path="dayal-nagri" element={<DayalNagari />} />
//       <Route path="dayal-sarovar" element={<DayalSarovar />} />
      
//       <Route path="kengnalkar-nirmal-residency-phase-1" element={<KengnalkarResidency />} />
//       <Route path="kengnalkar-nirmal-residency-phase-2" element={<KengnalkarResidency />} />
      
//       <Route path="nirmal-city-phase-1" element={<NirmalCityProjects />} />
//       <Route path="nirmal-city-phase-2" element={<NirmalCityProjects />} />

//       <Route path="padmavati-green-city" element={<PadmavatiGreenCity />} />
      
//       <Route path="purushottam-villa-phase-1" element={<PurushottamVilla />} />
//       <Route path="purushottam-villa-phase-2" element={<PurushottamVilla />} />
//     </Routes>
//   );
// }









import { Routes, Route } from 'react-router-dom';

import Navbar from '../nav/Navbar';
import Footer from '../footer/Footer';

// Section Imports
import HeroSection from '../home/HeroSection'; 
import About from '../about/About'; 
import ProjecRouting from '../projects/ProjectRouting'; 
import Services from '../services/ServicesSection';
import Testimonial from '../testimonial/TestimonialSection';
import Contact from '../contact/Contact';

// Individual Project Page Imports
import DayalNagari from '../projects/DayalNagari';
import DayalSarovar from '../projects/DayalSarovar';
import KengnalkarResidency from '../projects/KengnalkarResidency';
import NirmalCityProjects from '../projects/NirmalCityProjects';
import PadmavatiGreenCity from '../projects/PadmavatiGreenCity';
import PurushottamVilla from '../projects/PurushottamVilla';

// Page Import
import AboutDetails from '../about/AboutDetails'; 

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfbf7]">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* Main Home Route displaying all sections sequentially */}
          <Route path="/" element={
            <>
              <div id="home"><HeroSection /></div>
              <div id="about"><About /></div>
              {/* Pass isHomepage={true} so it safely returns just the display grid without nested routing loops */}
              <div id="projects"><ProjecRouting isHomepage={true} /></div>
              <div id="services"><Services /></div>
              <div id="testimonial"><Testimonial /></div>
              <div id="contact"><Contact /></div>
            </>
          } />

          {/* Standalone inner route */}
          <Route path="/about-details" element={<AboutDetails />} />

          {/* GLOBAL PROJECT DETAILS ENDPOINTS */}
          <Route path="/projects/dayal-nagri" element={<DayalNagari />} />
          <Route path="/projects/dayal-sarovar" element={<DayalSarovar />} />
          
          <Route path="/projects/kengnalkar-nirmal-residency-phase-1" element={<KengnalkarResidency />} />
          <Route path="/projects/kengnalkar-nirmal-residency-phase-2" element={<KengnalkarResidency />} />
          
          <Route path="/projects/nirmal-city-phase-1" element={<NirmalCityProjects />} />
          <Route path="/projects/nirmal-city-phase-2" element={<NirmalCityProjects />} />

          <Route path="/projects/padmavati-green-city" element={<PadmavatiGreenCity />} />
          
          <Route path="/projects/purushottam-villa-phase-1" element={<PurushottamVilla />} />
          <Route path="/projects/purushottam-villa-phase-2" element={<PurushottamVilla />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;