
// import { useNavigate } from 'react-router-dom';

// // 1. IMPORT YOUR RESIDENCY IMAGE ASSETS HERE
// import kengnalkarPhase1Img from '../assets/images/KengnalkarNirmalResidencyPhase1.jpg';
// import kengnalkarPhase2Img from '../assets/images/KengnalkarNirmalResidencyPhase2.jpg';

// // Sub-Component: Amenities Grid System
// const AmenitiesGrid = () => {
//   const amenities = [
//     { label: 'Tree Plantation', icon: '🌱' },
//     { label: 'Children Park', icon: '🛝' },
//     { label: 'Garden', icon: '🏡' },
//     { label: 'Electric Pole', icon: '💡' },
//     { label: 'Innerve Street', icon: '🛣️' },
//     { label: 'Home Loan Facility', icon: '🏦' },
//   ];

//   return (
//     <div className="py-12 max-w-5xl mx-auto px-4">
//       <div className="text-center mb-8 space-y-2">
//         <h4 className="font-display text-2xl font-bold text-dark">Premium Amenities</h4>
//         <div className="w-12 h-[2px] bg-gold mx-auto"></div>
//       </div>
      
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
//         {amenities.map((item, index) => (
//           <div 
//             key={index} 
//             className="bg-white border border-border p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-4 group"
//           >
//             <div className="w-16 h-16 rounded-full bg-bg border-2 border-gold flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
//               {item.icon}
//             </div>
//             <span className="font-body text-xs font-semibold text-dark tracking-wide">
//               {item.label}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Sub-Component: Core Hero & Overview Component (Upgraded to full-bleed image display)
// const ProjectHeroSection = ({ title, subTitle, description, logoSrc, buttons, reverse = false }) => {
//   return (
//     <div className={`flex flex-col md:flex-row items-center gap-12 py-16 border-b border-border ${reverse ? 'md:flex-row-reverse' : ''}`}>
//       {/* Visual Container: Now scales and stretches image flawlessly to cover bounds */}
//       <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4">
//         <div className="relative max-w-md w-full h-[320px] md:h-[380px] bg-white rounded-2xl border border-border shadow-sm overflow-hidden group">
//           {/* Elegant top color strip to anchor visual balance */}
//           <div className="absolute top-0 left-0 right-0 h-1.5 bg-teal z-10"></div>
          
//           {logoSrc ? (
//             <img 
//               src={logoSrc} 
//               alt={`${title} Asset`} 
//               className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//             />
//           ) : (
//             <div className="w-full h-full flex flex-col items-center justify-center bg-teal/5">
//               <div className="w-24 h-24 rounded-full bg-teal/10 flex items-center justify-center text-teal text-3xl font-bold mb-4">
//                 KN
//               </div>
//               <h4 className="font-display text-xl font-bold text-dark text-center">{title}</h4>
//               {subTitle && <p className="font-body text-xs text-muted mt-1 tracking-widest uppercase">{subTitle}</p>}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Narrative Content Block */}
//       <div className="w-full md:w-1/2 space-y-6 px-4 md:px-0">
//         <div className="space-y-2">
//           <h3 className="font-display text-3xl md:text-4xl font-bold text-dark tracking-tight">
//             {title}
//           </h3>
//           <div className="w-16 h-[3px] bg-teal rounded-full"></div>
//         </div>

//         <p className="font-body text-base text-text leading-relaxed max-w-xl">
//           {description}
//         </p>

//         {/* Call to Actions */}
//         {buttons && buttons.length > 0 && (
//           <div className="flex flex-wrap gap-4 pt-2">
//             {buttons.map((btn, idx) => (
//               <button
//                 key={idx}
//                 onClick={btn.onClick}
//                 className={`font-body font-medium tracking-wide text-sm px-6 py-3 rounded-md transition-all duration-300 shadow-sm ${
//                   btn.variant === 'primary'
//                     ? 'bg-teal text-white hover:bg-teallt hover:shadow-md'
//                     : 'bg-transparent text-teal border border-teal hover:bg-teal hover:text-white'
//                 }`}
//               >
//                 {btn.label}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Main Export Component Container
// export default function KengnalkarResidency() {
//   const navigate = useNavigate();
//   const projectDescription = "Our Past and Present Projects are selected to give the Best Returns to our esteemed customers who are the secret of our grand success over past one decade that helped us to successfully promote Open Residential Plots Projects all around Solapur, India laid by established promoters with guaranteed developments.";

//   const phaseIButtons = [
//     { label: 'Enquire Project Details', variant: 'primary', onClick: () => console.log('Phase I Enquire') }
//   ];

//   // REMOVED: "View Virtual Layout of Phase II" from button config arrays
//   const phaseIIButtons = [
//     { label: 'Contact Us', variant: 'primary', onClick: () => console.log('Phase II Contact') }
//   ];

//   return (
//     <section className="w-full min-h-screen bg-bg text-text selection:bg-teal selection:text-white pb-16">
//       <div className="max-w-6xl mx-auto px-4 md:px-8 pt-16">
        
//         {/* Navigation back button context */}
//         <div className="flex justify-between items-center mb-12">
//           <button 
//             onClick={() => navigate('/')} 
//             className="text-xs font-bold tracking-wider text-teal border border-teal/20 px-4 py-2 rounded hover:bg-teal hover:text-white transition-all active:scale-95"
//           >
//             ← BACK TO HOME
//           </button>
//         </div>

//         {/* Global Section Heading */}
//         <div className="text-center space-y-3 mb-12">
//           <span className="font-body text-xs font-semibold tracking-widest text-teal uppercase block">
//             Premium Residential Sites
//           </span>
//           <h2 className="font-display text-4xl md:text-5xl font-bold text-dark">
//             Kengnalkar Nirmal Residency
//           </h2>
//           <div className="w-24 h-[3px] bg-gold mx-auto rounded-full"></div>
//         </div>

//         {/* Phase I Component Rendering */}
//         <ProjectHeroSection 
//           title="Kengnalkar Nirmal Residency Phase I"
//           subTitle="Phase - 1"
//           description={projectDescription}
//           logoSrc={kengnalkarPhase1Img} // Hooks up Phase I local image variable
//           buttons={phaseIButtons}
//         />

//         {/* Phase II Component Rendering (Alternated via reverse flags) */}
//         <ProjectHeroSection 
//           title="Kengnalkar Nirmal Residency Phase II"
//           subTitle="Phase - 2"
//           description={projectDescription}
//           logoSrc={kengnalkarPhase2Img} // Hooks up Phase II local image variable
//           buttons={phaseIIButtons}
//           reverse={true}
//         />

//         {/* Embedded Amenities Section Block */}
//         <AmenitiesGrid />

//       </div>
//     </section>
//   );
// }




import { useNavigate } from 'react-router-dom';

// 1. IMPORT YOUR RESIDENCY IMAGE ASSETS HERE
import kengnalkarPhase1Img from '../assets/images/KengnalkarNirmalResidencyPhase1.jpg';
import kengnalkarPhase2Img from '../assets/images/KengnalkarNirmalResidencyPhase2.jpg';

// Sub-Component: Amenities Grid System
const AmenitiesGrid = () => {
  const amenities = [
    { label: 'Tree Plantation', icon: '🌱' },
    { label: 'Children Park', icon: '🛝' },
    { label: 'Garden', icon: '🏡' },
    { label: 'Electric Pole', icon: '💡' },
    { label: 'Innerve Street', icon: '🛣️' },
    { label: 'Home Loan Facility', icon: '🏦' },
  ];

  return (
    <div className="py-12 max-w-5xl mx-auto px-4">
      <div className="text-center mb-8 space-y-2">
        <h4 className="font-display text-2xl font-bold text-dark">Premium Amenities</h4>
        <div className="w-12 h-[2px] bg-gold mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {amenities.map((item, index) => (
          <div 
            key={index} 
            className="bg-white border border-border p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-4 group"
          >
            <div className="w-16 h-16 rounded-full bg-bg border-2 border-gold flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <span className="font-body text-xs font-semibold text-dark tracking-wide">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sub-Component: Core Hero & Overview Component
const ProjectHeroSection = ({ title, subTitle, description, logoSrc, buttons, reverse = false }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-12 py-16 border-b border-border ${reverse ? 'md:flex-row-reverse' : ''}`}>
      {/* Visual Container */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4">
        <div className="relative max-w-md w-full h-[320px] md:h-[380px] bg-white rounded-2xl border border-border shadow-sm overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-teal z-10"></div>
          
          {logoSrc ? (
            <img 
              src={logoSrc} 
              alt={`${title} Asset`} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-teal/5">
              <div className="w-24 h-24 rounded-full bg-teal/10 flex items-center justify-center text-teal text-3xl font-bold mb-4">
                KN
              </div>
              <h4 className="font-display text-xl font-bold text-dark text-center">{title}</h4>
              {subTitle && <p className="font-body text-xs text-muted mt-1 tracking-widest uppercase">{subTitle}</p>}
            </div>
          )}
        </div>
      </div>

      {/* Narrative Content Block */}
      <div className="w-full md:w-1/2 space-y-6 px-4 md:px-0">
        <div className="space-y-2">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-dark tracking-tight">
            {title}
          </h3>
          <div className="w-16 h-[3px] bg-teal rounded-full"></div>
        </div>

        <p className="font-body text-base text-text leading-relaxed max-w-xl">
          {description}
        </p>

        {/* Call to Actions */}
        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap gap-4 pt-2">
            {buttons.map((btn, idx) => (
              <button
                key={idx}
                onClick={btn.onClick}
                className={`font-body font-medium tracking-wide text-sm px-6 py-3 rounded-md transition-all duration-300 shadow-sm cursor-pointer active:scale-95 ${
                  btn.variant === 'primary'
                    ? 'bg-teal text-white hover:bg-teallt hover:shadow-md'
                    : 'bg-transparent text-teal border border-teal hover:bg-teal hover:text-white'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Main Export Component Container
export default function KengnalkarResidency() {
  const navigate = useNavigate();
  const projectDescription = "Our Past and Present Projects are selected to give the Best Returns to our esteemed customers who are the secret of our grand success over past one decade that helped us to successfully promote Open Residential Plots Projects all around Solapur, India laid by established promoters with guaranteed developments.";

  // Updated Phase 1 button callback to use global contact route
  const phaseIButtons = [
    { label: 'Enquire Project Details', variant: 'primary', onClick: () => navigate('/contact') }
  ];

  // Updated Phase 2 button callback to use global contact route
  const phaseIIButtons = [
    { label: 'Contact Us', variant: 'primary', onClick: () => navigate('/contact') }
  ];

  return (
    <section className="w-full min-h-screen bg-bg text-text selection:bg-teal selection:text-white pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-16">
        
        {/* Navigation back button context */}
        <div className="flex justify-between items-center mb-12">
          <button 
            onClick={() => navigate('/')} 
            className="text-xs font-bold tracking-wider text-teal border border-teal/20 px-4 py-2 rounded hover:bg-teal hover:text-white transition-all active:scale-95 cursor-pointer"
          >
            ← BACK TO HOME
          </button>
        </div>

        {/* Global Section Heading */}
        <div className="text-center space-y-3 mb-12">
          <span className="font-body text-xs font-semibold tracking-widest text-teal uppercase block">
            Premium Residential Sites
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark">
            Kengnalkar Nirmal Residency
          </h2>
          <div className="w-24 h-[3px] bg-gold mx-auto rounded-full"></div>
        </div>

        {/* Phase I Component Rendering */}
        <ProjectHeroSection 
          title="Kengnalkar Nirmal Residency Phase I"
          subTitle="Phase - 1"
          description={projectDescription}
          logoSrc={kengnalkarPhase1Img}
          buttons={phaseIButtons}
        />

        {/* Phase II Component Rendering */}
        <ProjectHeroSection 
          title="Kengnalkar Nirmal Residency Phase II"
          subTitle="Phase - 2"
          description={projectDescription}
          logoSrc={kengnalkarPhase2Img}
          buttons={phaseIIButtons}
          reverse={true}
        />

        {/* Embedded Amenities Section Block */}
        <AmenitiesGrid />

      </div>
    </section>
  );
}