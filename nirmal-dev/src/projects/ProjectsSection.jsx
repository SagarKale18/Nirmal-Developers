

//             <button
//               key={cat}
//               onClick={() => handleFilterChange(cat)}
//               className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
//                 filter === cat 
//                 ? 'bg-[#C8A96B] text-white border-transparent shadow-md' 
//                 : 'bg-white text-[#7A7A7A] border-[#E0DDD6] hover:border-[#C8A96B] hover:text-[#1A1A1A]'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Immersive 3D Carousel Container */}
//         <div className="relative h-[550px] w-full flex items-center justify-center lg:px-12 [perspective:1500px]">
          
//           {/* Navigation Controls */}
//           <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-2 md:px-10 z-50 pointer-events-none">
//             <button 
//               onClick={prevProject}
//               className="group w-14 h-14 flex items-center justify-center rounded-2xl bg-[#C8A96B] text-white hover:bg-[#D4BC8A] transition-all duration-300 pointer-events-auto shadow-md active:scale-95"
//               aria-label="Previous project"
//             >
//               <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
//             </button>
//             <button 
//               onClick={nextProject}
//               className="group w-14 h-14 flex items-center justify-center rounded-2xl bg-[#C8A96B] text-white hover:bg-[#D4BC8A] transition-all duration-300 pointer-events-auto shadow-md active:scale-95"
//               aria-label="Next project"
//             >
//               <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
//             </button>
//           </div>

//           {/* Cards Stack with 3D preserve mode enabled */}
//           <div className="relative w-[340px] md:w-[400px] h-[500px] [transform-style:preserve-3d]">
//             {filteredProjects.map((project, index) => {
//               const isCenter = index === currentIndex;
//               const isNext = index === (currentIndex + 1) % filteredProjects.length;
//               const isPrev = index === (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;

//               let style = { display: 'none', opacity: 0, zIndex: 0 };

//               if (isCenter) {
//                 style = { 
//                   display: 'flex', 
//                   opacity: 1, 
//                   zIndex: 30, 
//                   transform: 'translate3d(0, 0, 0) scale(1)' 
//                 };
//               } else if (isNext && filteredProjects.length > 1) {
//                 style = { 
//                   display: 'flex', 
//                   opacity: 0.6, 
//                   zIndex: 20, 
//                   transform: 'translate3d(60%, 0, -250px) rotateY(-15deg) scale(0.9)',
//                 };
//               } else if (isPrev && filteredProjects.length > 2) {
//                 style = { 
//                   display: 'flex', 
//                   opacity: 0.6, 
//                   zIndex: 20, 
//                   transform: 'translate3d(-60%, 0, -250px) rotateY(15deg) scale(0.9)',
//                 };
//               }

//               return (
//                 <div
//                   key={project.id}
//                   className="absolute inset-0 rounded-[32px] overflow-hidden border border-white/10 transition-all duration-700 ease-out cursor-pointer shadow-2xl"
//                   style={style}
//                   onClick={() => !isCenter && setCurrentIndex(index)}
//                 >
//                   <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                  
//                   {/* Category Tag */}
//                   <div className="absolute top-6 right-6 px-4 py-1.5 bg-white border border-[#E0DDD6] rounded-full text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest z-20 shadow-sm">
//                     {project.category}
//                   </div>

//                   {/* Info Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent flex flex-col justify-end p-8 z-20">
//                     <h3 
//                       className="text-2xl font-bold text-white mb-1 tracking-wide"
//                       style={{ fontFamily: "'Cormorant Garamond', serif" }}
//                     >
//                       {project.title}
//                     </h3>
//                     <p className="text-[#F9F7F2]/80 text-sm mb-6 flex items-center gap-2">
//                       <span className="w-1 h-4 bg-[#C8A96B] rounded-full" />
//                       {project.location}
//                     </p>
                    
//                     {/* Updated Link with stopPropagation to isolate click behavior */}
//                     <Link 
//                       to={`/projects/${project.slug}`}
//                       onClick={(e) => e.stopPropagation()}
//                       className="flex items-center justify-center gap-2 w-full py-3 bg-[#C8A96B] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#D4BC8A] transition-colors shadow-sm text-center"
//                     >
//                       VIEW DETAILS <ExternalLink size={14} />
//                     </Link>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// 1. SAFE VITE ASSET IMPORTS
import DayalNagriImg from '../assets/images/DayalNagri.jpg';
import NirmalCityPhaseIImg from '../assets/images/NirmalCityPhaseI.png';
import PurushottamVillaPhase1Img from '../assets/images/PurushottamVillaPhase1.jpg';
import NirmalCityPhaseIIImg from '../assets/images/NirmalCityPhaseII.png';
import PurushottamVillaPhase2Img from '../assets/images/PurushottamVillaPhase2.jpg';
import KengnalkarNirmalResidencyPhase1Img from '../assets/images/KengnalkarNirmalResidencyPhase1.jpg';
import KengnalkarNirmalResidencyPhase2Img from '../assets/images/KengnalkarNirmalResidencyPhase2.jpg';
import PadmavatiGreenCityImg from '../assets/images/PadmavatiGreenCity.jpg';
import DayalSarovarImg from '../assets/images/DayalSarovar.jpg';

const projects = [
  {
    id: 1,
    title: "Dayal Nagri",
    location: "Solapur, Maharashtra",
    category: "completed",
    image: DayalNagriImg,
    slug: "dayal-nagri"
  },
  {
    id: 2,
    title: "Nirmal City Phase I",
    location: "Solapur, Maharashtra",
    category: "ongoing",
    image: NirmalCityPhaseIImg,
    slug: "nirmal-city-phase-1"
  },
  {
    id: 3,
    title: "Skyline Towers",
    location: "Wakad, Pune",
    category: "upcoming",
    image: "https://images.unsplash.com/photo-1612283157924-f0e11f121c3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    slug: "upcoming-enquiry" 
  },
  {
    id: 4,
    title: "Purushottam Villa Phase 1",
    location: "Solapur, Maharashtra",
    category: "completed",
    image: PurushottamVillaPhase1Img,
    slug: "purushottam-villa-phase-1"
  },
  {
    id: 5,
    title: "Nirmal City Phase II",
    location: "Solapur, Maharashtra",
    category: "ongoing",
    image: NirmalCityPhaseIIImg,
    slug: "nirmal-city-phase-2"
  },
  {
    id: 6,
    title: "Purushottam Villa Phase 2",
    location: "Solapur, Maharashtra",
    category: "completed",
    image: PurushottamVillaPhase2Img,
    slug: "purushottam-villa-phase-2"
  },
  {
    id: 7,
    title: "Kengnalkar Nirmal Residency Phase I",
    location: "Solapur, Maharashtra",
    category: "ongoing",
    image: KengnalkarNirmalResidencyPhase1Img,
    slug: "kengnalkar-nirmal-residency-phase-1"
  },
  {
    id: 8,
    title: "Kengnalkar Nirmal Residency Phase II",
    location: "Solapur, Maharashtra",
    category: "ongoing",
    image: KengnalkarNirmalResidencyPhase2Img,
    slug: "kengnalkar-nirmal-residency-phase-2"
  },
  {
    id: 9,
    title: "Padmavati Green City",
    location: "Solapur, Maharashtra",
    category: "completed",
    image: PadmavatiGreenCityImg,
    slug: "padmavati-green-city"
  },
  {
    id: 10,
    title: "Dayal Sarovar",
    location: "Solapur, Maharashtra",
    category: "completed",
    image: DayalSarovarImg,
    slug: "dayal-sarovar"
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const nextProject = () => {
    if (filteredProjects.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    if (filteredProjects.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentIndex(0);
  };

  return (
    <section 
      className="relative py-24 bg-[#F9F7F2] overflow-hidden text-[#333333]"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        backgroundImage: `
          linear-gradient(to right, rgba(224, 221, 214, 0.4) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(224, 221, 214, 0.4) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}
    >
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#2D6B70]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#C8A96B]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white border border-[#E0DDD6] px-4 py-1.5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C8A96B] animate-pulse" />
            <span className="text-xs font-semibold text-[#7A7A7A] uppercase tracking-widest">Our Portfolio</span>
          </div>
          <h2 
            className="text-4xl md:text-6xl font-bold text-[#1A1A1A] tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our <span className="text-[#C8A96B]">Projects</span>
          </h2>
          <p className="text-[#7A7A7A] text-lg max-w-2xl mx-auto font-normal">
            Excellence across every stage of development, from concept to completion.
          </p>
        </div>

        {/* Filter Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {['all', 'completed', 'ongoing', 'upcoming'].map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                filter === cat 
                ? 'bg-[#C8A96B] text-white border-transparent shadow-md' 
                : 'bg-white text-[#7A7A7A] border-[#E0DDD6] hover:border-[#C8A96B] hover:text-[#1A1A1A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Immersive 3D Carousel Container */}
        <div className="relative h-[550px] w-full flex items-center justify-center lg:px-12 [perspective:1500px]">
          
          {/* Navigation Controls */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-2 md:px-10 z-50 pointer-events-none">
            <button 
              onClick={prevProject}
              className="group w-14 h-14 flex items-center justify-center rounded-2xl bg-[#C8A96B] text-white hover:bg-[#D4BC8A] transition-all duration-300 pointer-events-auto shadow-md active:scale-95"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={nextProject}
              className="group w-14 h-14 flex items-center justify-center rounded-2xl bg-[#C8A96B] text-white hover:bg-[#D4BC8A] transition-all duration-300 pointer-events-auto shadow-md active:scale-95"
              aria-label="Next project"
            >
              <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Cards Stack with 3D preserve mode enabled */}
          <div className="relative w-[340px] md:w-[400px] h-[500px] [transform-style:preserve-3d]">
            {filteredProjects.map((project, index) => {
              const isCenter = index === currentIndex;
              const isNext = index === (currentIndex + 1) % filteredProjects.length;
              const isPrev = index === (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;

              let style = { display: 'none', opacity: 0, zIndex: 0 };

              if (isCenter) {
                style = { 
                  display: 'flex', 
                  opacity: 1, 
                  zIndex: 30, 
                  transform: 'translate3d(0, 0, 0) scale(1)' 
                };
              } else if (isNext && filteredProjects.length > 1) {
                style = { 
                  display: 'flex', 
                  opacity: 0.6, 
                  zIndex: 20, 
                  transform: 'translate3d(60%, 0, -250px) rotateY(-15deg) scale(0.9)',
                };
              } else if (isPrev && filteredProjects.length > 2) {
                style = { 
                  display: 'flex', 
                  opacity: 0.6, 
                  zIndex: 20, 
                  transform: 'translate3d(-60%, 0, -250px) rotateY(15deg) scale(0.9)',
                };
              }

              return (
                <div
                  key={project.id}
                  className="absolute inset-0 rounded-[32px] overflow-hidden border border-white/10 transition-all duration-700 ease-out cursor-pointer shadow-2xl"
                  style={style}
                  onClick={() => !isCenter && setCurrentIndex(index)}
                >
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-6 right-6 px-4 py-1.5 bg-white border border-[#E0DDD6] rounded-full text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest z-20 shadow-sm">
                    {project.category}
                  </div>

                  {/* Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent flex flex-col justify-end p-8 z-20">
                    <h3 
                      className="text-2xl font-bold text-white mb-1 tracking-wide"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-[#F9F7F2]/80 text-sm mb-6 flex items-center gap-2">
                      <span className="w-1 h-4 bg-[#C8A96B] rounded-full" />
                      {project.location}
                    </p>
                    
                    {/* 2. DYNAMIC INTERCEPTION & ACTION ROUTING */}
                    {project.slug === 'upcoming-enquiry' ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const contactSec = document.getElementById('contact');
                          if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="flex items-center justify-center gap-2 w-full py-3 bg-[#2D6B70] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#1E494C] transition-colors shadow-sm text-center cursor-pointer border-none"
                      >
                        ENQUIRE NOW <ExternalLink size={14} />
                      </button>
                    ) : (
                      <Link 
                        to={`/projects/${project.slug}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.scrollTo(0, 0); // Reset screen top view for detail components
                        }}
                        className="flex items-center justify-center gap-2 w-full py-3 bg-[#C8A96B] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#D4BC8A] transition-colors shadow-sm text-center"
                      >
                        VIEW DETAILS <ExternalLink size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
