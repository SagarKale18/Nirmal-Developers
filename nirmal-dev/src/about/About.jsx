
import { useNavigate } from 'react-router-dom';

// 1. IMPORT FOUNDER IMAGE ASSET
import founderImg from '../assets/projects/rushikesh-mulik.jpg.jpeg'; 

export default function About() {
  const navigate = useNavigate();

  // Metric grid data configuration
  const profileMetrics = [
    { label: 'QUALIFICATION', value: 'Licensed Civil Engineer', icon: '🏗️' },
    { label: 'PROJECTS DELIVERED', value: '500+ Homes & Buildings', icon: '🏡' },
    { label: 'BASE LOCATION', value: 'Phaltan, Maharashtra', icon: '📍' },
    { label: 'CLIENT SATISFACTION', value: '99% Positive Feedback', icon: '🤝' },
  ];

  return (
    <section id="about" className="w-full bg-[#fcfbf7] py-12 px-4 md:px-8 lg:px-12 border-b border-gray-200/60">
      {/* ── Outer Card Wrapper Container ── */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Column: Full-bleed Professional Headshot (FIX: Height restriction lowered for a tighter aspect ratio) */}
        <div className="lg:col-span-5 relative min-h-[320px] lg:h-full bg-gray-100">
          {/* Subtle Accent Tag */}
          <div className="absolute top-4 left-4 z-10 bg-[#c5a86b] text-white text-[10px] tracking-[0.2em] font-bold uppercase py-1 px-3 rounded-sm shadow-sm">
            ✦ Founder
          </div>
          <img 
            src={founderImg} 
            alt="Er. Rushikesh Mulik - Founder & Managing Director" 
            className="w-full h-full object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-500 absolute inset-0"
          />
        </div>

        {/* Right Column: Profile Narrative & Metrics Panel (FIX: Reduced padding and inner element spacing) */}
        <div className="lg:col-span-7 p-6 md:p-8 lg:p-10 flex flex-col justify-between space-y-6">
          
          {/* Typography Header Block */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#c5a86b]"></span>
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#c5a86b] uppercase">
                Nirmal Developers
              </span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#1a2b32] tracking-tight">
              Er. Rushikesh Mulik
            </h2>
            <p className="text-xs font-bold tracking-[0.15em] text-[#2d6b70] uppercase">
              Founder & Managing Director
            </p>

            <p className="text-gray-600 font-body text-sm md:text-base leading-relaxed pt-2">
              A licensed Civil Engineer and the visionary force behind Nirmal Developers, 
              Er. Rushikesh Mulik has dedicated his career to raising the standard of construction 
              and interior work across the region. With a sharp eye for design, an unwavering 
              commitment to quality, and a hands-on approach to every project, he ensures that 
              each structure built under the Nirmal banner reflects precision, integrity, and lasting excellence.
            </p>
          </div>

          {/* Interactive Metric Information Dashboard Grid (FIX: Reduced inner paddings) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {profileMetrics.map((metric, idx) => (
              <div 
                key={idx} 
                className="bg-[#fcfbf7]/70 border border-gray-100 rounded-xl p-3.5 flex items-center gap-3 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-[#2d6b70]/20"
              >
                <div className="h-10 w-10 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center text-lg shrink-0">
                  {metric.icon}
                </div>
                <div className="space-y-0.5">
                  <p className="text-[9px] font-bold tracking-[0.15em] text-gray-400 uppercase">
                    {metric.label}
                  </p>
                  <p className="text-xs font-bold text-[#1a2b32]">
                    {metric.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Action / Redirection Footer Section */}
          <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs text-gray-400 font-medium">
              Want to see our premium residential plot developments?
            </p>
            <button
              onClick={() => {
                navigate('/about-details');
              }}
              className="group inline-flex items-center justify-center bg-[#2d6b70] hover:bg-[#235357] text-white text-xs font-semibold tracking-wide py-2.5 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl active:scale-98 cursor-pointer"
            >
              Explore Us
              <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200 ml-2">
                →
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}