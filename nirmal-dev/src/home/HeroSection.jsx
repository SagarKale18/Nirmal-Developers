
import { useState, useEffect } from 'react';
import { ChevronDown, Shield, Award, Users } from 'lucide-react';

// 1. IMPORT YOUR NAVBAR AND FOOTER COMPONENTS
// Adjust these relative file paths based on where they live in your project
// import Navbar from "../nav/Navbar"
// import Footer from "../footer/Footer"

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
      title: "Building Tomorrow's",
      highlight: "Landmarks",
      subtitle: "Premium construction and interior design solutions that transform spaces into extraordinary experiences."
    },
    {
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80",
      title: "Crafting Elegant",
      highlight: "Interiors",
      subtitle: "Where luxury meets functionality — bespoke interior designs tailored to your vision."
    },
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80",
      title: "Engineering",
      highlight: "Excellence",
      subtitle: "Structural integrity meets aesthetic brilliance in every project we undertake."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToSection = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* MAIN HERO VIEWPORT CONTAINER */}
      <section className="relative w-full h-screen overflow-hidden bg-gray-900">
        
        {/* Floating Navbar Container */}
        {/* <div className="absolute top-0 left-0 w-full z-30">
          <Navbar />
        </div> */}

        {/* Background Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[8000ms]"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-amber-500 w-8' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full mb-8 transition-all duration-700 opacity-100 translate-y-0"
              >
                <Shield className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-medium tracking-wide uppercase">
                  Trusted Since 2015
                </span>
              </div>

              {/* Title */}
              <h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 transition-all duration-700 delay-200 opacity-100 translate-y-0"
              >
                {slides[currentSlide].title}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  {slides[currentSlide].highlight}
                </span>
              </h1>

              {/* Subtitle */}
              <p 
                className="text-lg md:text-xl text-gray-300 max-w-xl mb-12 leading-relaxed transition-all duration-700 delay-300 opacity-100 translate-y-0"
              >
                {slides[currentSlide].subtitle}
              </p>

              {/* Stats */}
              <div 
                className="flex flex-wrap gap-8 md:gap-12 transition-all duration-700 delay-500 opacity-100 translate-y-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-sm text-gray-400">Projects Done</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <Users className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">120+</div>
                    <div className="text-sm text-gray-400">Happy Clients</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <Shield className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">25+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToSection}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group cursor-pointer"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10" />
      </section>
      
      {/* <Footer/> */}
    </>
  );
};

export default HeroSection;
