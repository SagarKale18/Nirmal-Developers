// import { useNavigate } from 'react-router-dom';

// // 1. IMPORT YOUR LOCAL IMAGES HERE
// import nirmalPhase1Img from '../assets/images/NirmalCityPhaseI.png';
// import nirmalPhase2Img from '../assets/images/NirmalCityPhaseII.png';

// // Reusable Section Component for the Project Phases
// const ProjectPhaseSection = ({ phaseTitle, description, logoSrc, buttons, reverse = false }) => {
//   return (
//     <div className={`flex flex-col md:flex-row items-center gap-12 py-16 border-b border-border ${reverse ? 'md:flex-row-reverse' : ''}`}>
//       {/* Left: Logo/Visual Container */}
//       <div className="w-full md:w-1/2 flex justify-center p-4">
//         <div className="relative max-w-md w-full aspect-[4/3] flex items-center justify-center bg-white rounded-lg shadow-sm border border-border p-8 overflow-hidden group">
//           <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#2D6B70_1px,transparent_1px)] [background-size:16px_16px]"></div>
//           {logoSrc ? (
//             <img 
//               src={logoSrc} 
//               alt={`${phaseTitle} Branding`} 
//               className="w-full h-full object-cover rounded-md transform group-hover:scale-105 transition-transform duration-500"
//             />
//           ) : (
//             <div className="text-center">
//               <span className="font-display text-4xl text-gold italic">Nirmal City</span>
//               <p className="font-body text-xs tracking-widest text-muted uppercase mt-2">Luxury Infrastructure</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Right: Content Block */}
//       <div className="w-full md:w-1/2 space-y-6 px-4 md:px-0">
//         <div className="space-y-2">
//           <h3 className="font-display text-3xl md:text-4xl font-bold text-dark tracking-tight">
//             {phaseTitle}
//           </h3>
//           <div className="w-16 h-[3px] bg-teal rounded-full"></div>
//         </div>

//         <p className="font-body text-base text-text leading-relaxed max-w-xl">
//           {description}
//         </p>

//         {/* Dynamic Buttons Container */}
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

// export default function NirmalCityProjects() {
//   const navigate = useNavigate();

//   const sharedDescription = "Our Past and Present Projects are selected to give the Best Returns to our esteemed customers who are the secret of our grand success over past one decade that helped us to successfully promote Open Residential Plots Projects all around Solapur, India laid by established promoters with guaranteed developments.";

//   // Setup button configurations
//   const phaseIButtons = [
//     { label: 'Enquire Now', variant: 'primary', onClick: () => console.log('Phase I Enquire clicked') }
//   ];

//   // REMOVED: "View Virtual Layout" button config from here
//   const phaseIIButtons = [
//     { label: 'Contact Us', variant: 'primary', onClick: () => console.log('Contact Us clicked') }
//   ];

//   return (
//     <section className="w-full min-h-screen bg-bg text-text selection:bg-teal selection:text-white pb-16">
//       <div className="max-w-6xl mx-auto px-4 md:px-8 pt-16">
        
//         {/* Navigation header */}
//         <div className="flex justify-between items-center mb-12">
//           <button 
//             onClick={() => navigate('/')} 
//             className="text-xs font-bold tracking-wider text-teal border border-teal/20 px-4 py-2 rounded hover:bg-teal hover:text-white transition-all"
//           >
//             ← BACK TO HOME
//           </button>
//         </div>

//         <div className="text-center space-y-3 mb-12">
//           <span className="font-body text-xs font-semibold tracking-widest text-teal uppercase block">
//             Our Developments
//           </span>
//           <h2 className="font-display text-4xl md:text-5xl font-bold text-dark">
//             Nirmal City Project
//           </h2>
//           <div className="w-24 h-[3px] bg-gold mx-auto rounded-full"></div>
//         </div>

//         {/* Render Phase I Section */}
//         <ProjectPhaseSection 
//           phaseTitle="Nirmal City Phase I"
//           description={sharedDescription}
//           logoSrc={nirmalPhase1Img}
//           buttons={phaseIButtons}
//         />

//         {/* Render Phase II Section */}
//         <ProjectPhaseSection 
//           phaseTitle="Nirmal City Phase II"
//           description={sharedDescription}
//           logoSrc={nirmalPhase2Img}
//           buttons={phaseIIButtons}
//           reverse={true}
//         />
//       </div>
//     </section>
//   );
// }





import { useNavigate } from 'react-router-dom';

// 1. IMPORT YOUR LOCAL IMAGES HERE
import nirmalPhase1Img from '../assets/images/NirmalCityPhaseI.png';
import nirmalPhase2Img from '../assets/images/NirmalCityPhaseII.png';

// Reusable Section Component for the Project Phases
const ProjectPhaseSection = ({ phaseTitle, description, logoSrc, buttons, reverse = false }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-12 py-16 border-b border-border ${reverse ? 'md:flex-row-reverse' : ''}`}>
      {/* Left: Logo/Visual Container */}
      <div className="w-full md:w-1/2 flex justify-center p-4">
        <div className="relative max-w-md w-full aspect-[4/3] flex items-center justify-center bg-white rounded-lg shadow-sm border border-border p-8 overflow-hidden group">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#2D6B70_1px,transparent_1px)] [background-size:16px_16px]"></div>
          {logoSrc ? (
            <img 
              src={logoSrc} 
              alt={`${phaseTitle} Branding`} 
              className="w-full h-full object-cover rounded-md transform group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="text-center">
              <span className="font-display text-4xl text-gold italic">Nirmal City</span>
              <p className="font-body text-xs tracking-widest text-muted uppercase mt-2">Luxury Infrastructure</p>
            </div>
          )}
        </div>
      </div>

      {/* Right: Content Block */}
      <div className="w-full md:w-1/2 space-y-6 px-4 md:px-0">
        <div className="space-y-2">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-dark tracking-tight">
            {phaseTitle}
          </h3>
          <div className="w-16 h-[3px] bg-teal rounded-full"></div>
        </div>

        <p className="font-body text-base text-text leading-relaxed max-w-xl">
          {description}
        </p>

        {/* Dynamic Buttons Container */}
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

export default function NirmalCityProjects() {
  const navigate = useNavigate();

  const sharedDescription = "Our Past and Present Projects are selected to give the Best Returns to our esteemed customers who are the secret of our grand success over past one decade that helped us to successfully promote Open Residential Plots Projects all around Solapur, India laid by established promoters with guaranteed developments.";

  // Updated Phase I button to navigate to the contact path
  const phaseIButtons = [
    { label: 'Enquire Now', variant: 'primary', onClick: () => navigate('/contact') }
  ];

  // Updated Phase II button to navigate to the contact path
  const phaseIIButtons = [
    { label: 'Contact Us', variant: 'primary', onClick: () => navigate('/contact') }
  ];

  return (
    <section className="w-full min-h-screen bg-bg text-text selection:bg-teal selection:text-white pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-16">
        
        {/* Navigation header */}
        <div className="flex justify-between items-center mb-12">
          <button 
            onClick={() => navigate('/')} 
            className="text-xs font-bold tracking-wider text-teal border border-teal/20 px-4 py-2 rounded hover:bg-teal hover:text-white transition-all active:scale-95 cursor-pointer"
          >
            ← BACK TO HOME
          </button>
        </div>

        <div className="text-center space-y-3 mb-12">
          <span className="font-body text-xs font-semibold tracking-widest text-teal uppercase block">
            Our Developments
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark">
            Nirmal City Project
          </h2>
          <div className="w-24 h-[3px] bg-gold mx-auto rounded-full"></div>
        </div>

        {/* Render Phase I Section */}
        <ProjectPhaseSection 
          phaseTitle="Nirmal City Phase I"
          description={sharedDescription}
          logoSrc={nirmalPhase1Img}
          buttons={phaseIButtons}
        />

        {/* Render Phase II Section */}
        <ProjectPhaseSection 
          phaseTitle="Nirmal City Phase II"
          description={sharedDescription}
          logoSrc={nirmalPhase2Img}
          buttons={phaseIIButtons}
          reverse={true}
        />
      </div>
    </section>
  );
}