
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', targetId: 'home' },
    { name: 'ABOUT', targetId: 'about' },
    { name: 'PROJECTS', targetId: 'projects' },
    { name: 'SERVICES', targetId: 'services' },
    { name: 'TESTIMONIAL', targetId: 'testimonial' },
    { name: 'CONTACT', targetId: 'contact' },
  ];

  const handleNavClick = (targetId) => {
    setIsMobileMenuOpen(false);

    if (targetId === 'home' && location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  return (
    <nav className="w-full bg-black/95 backdrop-blur-sm border-b border-yellow-600/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* ==================== STRUCTURALLY SEPARATED LOGO CONTAINER ==================== */}
          <div 
            className="flex-shrink-0 flex items-center gap-3.5 cursor-pointer group/logo" 
            onClick={() => handleNavClick('home')}
          >
            {/* PART 1: Isolated Golden Building Badge Icon */}
            <div className="w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden bg-[#1b160d] border border-yellow-500/40 relative shadow-[0_0_15px_rgba(234,179,8,0.15)] group-hover/logo:border-yellow-400/70 group-hover/logo:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all duration-300">
              {/* Dynamic Glow Overlay Layer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600/10 via-transparent to-yellow-400/20 opacity-100" />
              
              {/* Building Graphics Element */}
              <svg className="w-7 h-7 relative z-10 text-yellow-500 group-hover/logo:scale-105 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h3.375c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M2.25 21h19.5M4.5 21V6.242M4.5 6.242L12 3.75M12 3.75l7.5 2.492M12 3.75V21m-4.5-12h.008v.008H7.5V9zm3.75 0h.008v.008h-.008V9zm3.75 0h.008v.008h-.008V9zm-7.5 3h.008v.008H7.5V12zm3.75 0h.008v.008h-.008V12zm3.75 0h.008v.008h-.008V12zm-7.5 3h.008v.008H7.5V15zm3.75 0h.008v.008h-.008V15z" />
              </svg>
            </div>

            {/* PART 2: Isolated Brand Typography Design */}
            <div className="flex flex-col select-none">
              <span className="text-xl font-black text-white tracking-wider leading-none font-sans group-hover/logo:text-yellow-500 transition-colors duration-300">
                NIRMAL
              </span>
              <span className="text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400 tracking-[0.24em] uppercase mt-1 leading-none">
                DEVELOPERS
              </span>
            </div>
          </div> 
          {/* ============================================================================== */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.targetId)}
                className="relative group px-4 py-3 text-sm font-semibold text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-300 group-hover:w-3/4 transition-all duration-300 ease-out" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#admin" className="px-6 py-2.5 bg-gradient-to-r from-yellow-700 to-yellow-900 text-yellow-100 text-sm font-semibold rounded border border-yellow-500/50 hover:border-yellow-300 hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] hover:from-yellow-600 hover:to-yellow-800 transition-all duration-300 tracking-wide">
              Admin
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-yellow-400 p-2 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-black/95 border-t border-yellow-600/20">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.targetId)}
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-yellow-900/20 rounded transition-colors duration-200 text-sm font-medium cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4">
            <a href="#admin" className="block w-full text-center px-6 py-3 bg-gradient-to-r from-yellow-700 to-yellow-900 text-yellow-100 text-sm font-semibold rounded border border-yellow-500/50">
              Admin
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;