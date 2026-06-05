
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// // 1. IMPORT YOUR PHASE IMAGES
// // Make sure these match the names and paths in your project structure
// import villaPhase1Img from '../assets/images/PurushottamVillaPhase1.jpg';
// import villaPhase2Img from '../assets/images/PurushottamVillaPhase2.jpg';

// export default function PurushottamVilla() {
//   const navigate = useNavigate();
  
//   // State to manage active phase selection
//   const [activePhase, setActivePhase] = useState('phase1');

//   // Extracted project amenities from the previous development steps
//   const amenities = [
//     { title: 'Tree Plantation', icon: '🌱' },
//     { title: 'Children Park', icon: '🛝' },
//     { title: 'Garden', icon: '🏡' },
//     { title: 'Electric Pole', icon: '💡' },
//     { title: 'Innerve Street', icon: '🛣️' },
//     { title: 'Home Loan Facility', icon: '👮‍♂️' },
//   ];

//   return (
//     <div className="min-h-screen bg-bg font-body text-text">
      
//       {/* Hero Header Section */}
//       <header className="border-b border-border bg-white py-6 px-4 md:px-8 shadow-sm">
//         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
//           {/* Brand Identity Area */}
//           <div className="flex items-center gap-3">
//             <div className="h-12 w-12 rounded-full bg-teal flex items-center justify-center text-white font-display text-xl font-bold">
//               PV
//             </div>
//             <div>
//               <h1 className="font-display text-2xl font-bold tracking-wide text-dark">Purushottam Villa</h1>
//               <p className="text-xs text-muted tracking-widest uppercase">Premium Residential Plots</p>
//             </div>
//           </div>
          
//           {/* Fixed Button Link Route back to Carousel */}
//           <button 
//             onClick={() => navigate('/')}
//             className="bg-teal hover:bg-teallt text-white font-medium py-2.5 px-6 rounded-md transition duration-300 text-sm shadow-md active:scale-95"
//           >
//             Back to Projects
//           </button>
//         </div>
//       </header>

//       {/* Main Content Body */}
//       <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        
//         {/* Phase Toggle Dynamic Tabs Navigation */}
//         <div className="flex justify-center mb-12">
//           <div className="inline-flex bg-white p-1.5 rounded-xl border border-border shadow-sm">
//             <button
//               onClick={() => setActivePhase('phase1')}
//               className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
//                 activePhase === 'phase1'
//                   ? 'bg-teal text-white shadow-sm'
//                   : 'text-muted hover:text-dark'
//               }`}
//             >
//               Phase 1
//             </button>
//             <button
//               onClick={() => setActivePhase('phase2')}
//               className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
//                 activePhase === 'phase2'
//                   ? 'bg-teal text-white shadow-sm'
//                   : 'text-muted hover:text-dark'
//               }`}
//             >
//               Phase 2
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
//           {/* Left Column: Replaced Typography layout block with dynamic full-bleed image container */}
//           <div className="lg:col-span-6 w-full rounded-2xl border border-border shadow-sm min-h-[400px] h-[450px] md:h-[500px] relative overflow-hidden group bg-white">
//             {/* Elegant left accent bar */}
//             <div className="absolute top-0 left-0 w-2 h-full bg-gold z-10"></div>
            
//             {/* Dynamic Image evaluation based on active tab state */}
//             <img 
//               src={activePhase === 'phase1' ? villaPhase1Img : villaPhase2Img} 
//               alt={activePhase === 'phase1' ? "Purushottam Villa Phase 1 Layout" : "Purushottam Villa Phase 2 Layout"} 
//               className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//             />
//           </div>

//           {/* Right Column: Project Copy Information dynamically linked to the Active Phase Tab */}
//           <div className="lg:col-span-6 space-y-8">
//             <div className="space-y-3">
//               <span className="text-gold font-semibold uppercase tracking-widest text-xs inline-block bg-gold/10 px-3 py-1 rounded-full">
//                 Featured Open Plots
//               </span>
//               <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-dark">
//                 {activePhase === 'phase1' ? 'Purushottam Villa Phase 1' : 'Purushottam Villa Phase 2'}
//               </h2>
//               <div className="w-16 h-1 bg-gold rounded-full"></div>
//             </div>

//             {/* Content paragraph blocks updated based on active phase view selection */}
//             {activePhase === 'phase1' ? (
//               <p className="text-muted leading-relaxed text-base md:text-lg">
//                 Our Past and Present Projects are selected to give the Best Returns to our 
//                 esteemed customers who are the secret of our grand success over past one decade 
//                 that helped us to successfully promote Open Residential Plots Projects all around 
//                 Solapur, India laid by established promoters with guaranteed developments.
//               </p>
//             ) : (
//               <p className="text-muted leading-relaxed text-base md:text-lg">
//                 Our Past and Present Projects are selected to give the Best Returns to our 
//                 esteemed customers who are the secret of our grand success over past one decade 
//                 that helped us to successfully promote Open Residential Plots Projects all around 
//                 Solapur, India laid by established promoters with guaranteed developments.
//               </p>
//             )}

//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <a 
//                 href="#contact"
//                 className="inline-flex justify-center items-center bg-teal hover:bg-teallt text-white font-medium py-3.5 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg text-center"
//               >
//                 Contact Us
//               </a>
//             </div>
//           </div>

//         </div>
//       </main>

//       {/* Project Amenities Section Grid */}
//       <section className="bg-white border-t border-border py-16 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h3 className="font-display text-3xl font-bold text-dark tracking-wide">Project Amenities</h3>
//             <p className="text-sm text-muted mt-2">Guaranteed high-quality standard developments across all phases</p>
//           </div>

//           {/* 6 Responsive Grid Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {amenities.map((item, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white border border-border rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 group"
//               >
//                 {/* Circular Gold Theme Container */}
//                 <div className="w-20 h-20 rounded-full bg-[#C8A96B] flex items-center justify-center text-3xl mb-5 shadow-inner group-hover:scale-105 transition-transform duration-300">
//                   <span className="drop-shadow-sm">{item.icon}</span>
//                 </div>
//                 <h4 className="font-body text-base font-bold text-dark tracking-wide">
//                   {item.title}
//                 </h4>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }




import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 1. IMPORT YOUR PHASE IMAGES
import villaPhase1Img from '../assets/images/PurushottamVillaPhase1.jpg';
import villaPhase2Img from '../assets/images/PurushottamVillaPhase2.jpg';

export default function PurushottamVilla() {
  const navigate = useNavigate();
  
  // State to manage active phase selection
  const [activePhase, setActivePhase] = useState('phase1');

  // Extracted project amenities from the previous development steps
  const amenities = [
    { title: 'Tree Plantation', icon: '🌱' },
    { title: 'Children Park', icon: '🛝' },
    { title: 'Garden', icon: '🏡' },
    { title: 'Electric Pole', icon: '💡' },
    { title: 'Innerve Street', icon: '🛣️' },
    { title: 'Home Loan Facility', icon: '👮‍♂️' },
  ];

  return (
    <div className="min-h-screen bg-bg font-body text-text">
      
      {/* Hero Header Section */}
      <header className="border-b border-border bg-white py-6 px-4 md:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand Identity Area */}
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-teal flex items-center justify-center text-white font-display text-xl font-bold">
              PV
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold tracking-wide text-dark">Purushottam Villa</h1>
              <p className="text-xs text-muted tracking-widest uppercase">Premium Residential Plots</p>
            </div>
          </div>
          
          {/* Fixed Button Link Route back to Carousel */}
          <button 
            onClick={() => navigate('/')}
            className="bg-teal hover:bg-teallt text-white font-medium py-2.5 px-6 rounded-md transition duration-300 text-sm shadow-md active:scale-95 cursor-pointer"
          >
            Back to Projects
          </button>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        
        {/* Phase Toggle Dynamic Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1.5 rounded-xl border border-border shadow-sm">
            <button
              onClick={() => setActivePhase('phase1')}
              className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 cursor-pointer ${
                activePhase === 'phase1'
                  ? 'bg-teal text-white shadow-sm'
                  : 'text-muted hover:text-dark'
              }`}
            >
              Phase 1
            </button>
            <button
              onClick={() => setActivePhase('phase2')}
              className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 cursor-pointer ${
                activePhase === 'phase2'
                  ? 'bg-teal text-white shadow-sm'
                  : 'text-muted hover:text-dark'
              }`}
            >
              Phase 2
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Full-bleed image container */}
          <div className="lg:col-span-6 w-full rounded-2xl border border-border shadow-sm min-h-[400px] h-[450px] md:h-[500px] relative overflow-hidden group bg-white">
            {/* Elegant left accent bar */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gold z-10"></div>
            
            {/* Dynamic Image evaluation based on active tab state */}
            <img 
              src={activePhase === 'phase1' ? villaPhase1Img : villaPhase2Img} 
              alt={activePhase === 'phase1' ? "Purushottam Villa Phase 1 Layout" : "Purushottam Villa Phase 2 Layout"} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Column: Project Copy Information dynamically linked to the Active Phase Tab */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-gold font-semibold uppercase tracking-widest text-xs inline-block bg-gold/10 px-3 py-1 rounded-full">
                Featured Open Plots
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-dark">
                {activePhase === 'phase1' ? 'Purushottam Villa Phase 1' : 'Purushottam Villa Phase 2'}
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full"></div>
            </div>

            {/* Content paragraph blocks updated based on active phase view selection */}
            {activePhase === 'phase1' ? (
              <p className="text-muted leading-relaxed text-base md:text-lg">
                Our Past and Present Projects are selected to give the Best Returns to our 
                esteemed customers who are the secret of our grand success over past one decade 
                that helped us to successfully promote Open Residential Plots Projects all around 
                Solapur, India laid by established promoters with guaranteed developments.
              </p>
            ) : (
              <p className="text-muted leading-relaxed text-base md:text-lg">
                Our Past and Present Projects are selected to give the Best Returns to our 
                esteemed customers who are the secret of our grand success over past one decade 
                that helped us to successfully promote Open Residential Plots Projects all around 
                Solapur, India laid by established promoters with guaranteed developments.
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* CONNECTED BUTTON: Triggers route redirection */}
              <button 
                onClick={() => navigate('/contact')}
                className="inline-flex justify-center items-center bg-teal hover:bg-teallt text-white font-medium py-3.5 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg text-center cursor-pointer active:scale-95"
              >
                Contact Us
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* Project Amenities Section Grid */}
      <section className="bg-white border-t border-border py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-bold text-dark tracking-wide">Project Amenities</h3>
            <p className="text-sm text-muted mt-2">Guaranteed high-quality standard developments across all phases</p>
          </div>

          {/* 6 Responsive Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {amenities.map((item, index) => (
              <div 
                key={index} 
                className="bg-white border border-border rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                {/* Circular Gold Theme Container */}
                <div className="w-20 h-20 rounded-full bg-[#C8A96B] flex items-center justify-center text-3xl mb-5 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <span className="drop-shadow-sm">{item.icon}</span>
                </div>
                <h4 className="font-body text-base font-bold text-dark tracking-wide">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}