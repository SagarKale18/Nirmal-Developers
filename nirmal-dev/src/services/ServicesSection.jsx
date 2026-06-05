import { HardHat, Palette, Building2, Ruler } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Construction",
    subtitle: "Building Excellence",
    description: "From foundation to finish, we deliver robust construction solutions with precision engineering and quality craftsmanship that stands the test of time.",
    icon: HardHat,
    features: ["Structural Engineering", "Project Management", "Quality Assurance"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop",
    color: "from-amber-700 to-amber-900"
  },
  {
    id: 2,
    title: "Interior Design",
    subtitle: "Elegant Spaces",
    description: "Transform your interiors into breathtaking spaces that blend functionality with aesthetic beauty, tailored to reflect your unique style and personality.",
    icon: Palette,
    features: ["Space Planning", "Custom Furniture", "Lighting Design"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop",
    color: "from-amber-600 to-amber-800"
  },
  {
    id: 3,
    title: "Architecture Design",
    subtitle: "Visionary Structures",
    description: "Innovative architectural designs that harmonize form and function, creating iconic structures that inspire and endure through generations.",
    icon: Building2,
    features: ["3D Visualization", "Sustainable Design", "Urban Planning"],
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop",
    color: "from-yellow-600 to-amber-700"
  }
];

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-200 hover:border-amber-400 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-56 sm:h-64 overflow-hidden shrink-0">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-70 transition-opacity duration-500`} />

        {/* Floating Icon */}
        <div className="absolute top-4 right-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-amber-200">
          <Icon className="w-7 h-7 text-amber-700" strokeWidth={1.5} />
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-amber-200 text-sm font-medium tracking-wider uppercase mb-1">{service.subtitle}</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">{service.title}</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 bg-white flex flex-col flex-grow">
        <p className="text-stone-600 leading-relaxed mb-6 text-sm">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-3">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
              <span className="text-stone-700 text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-amber-500/10 rotate-45 group-hover:bg-amber-500/20 transition-colors" />
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
            <Ruler className="w-4 h-4 text-amber-700" />
            <span className="text-amber-800 text-sm font-semibold tracking-wide uppercase">What We Do</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Our <span className="text-amber-600">Services</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6" />

          <p className="max-w-2xl mx-auto text-stone-600 text-lg">
            We bring your vision to life with comprehensive construction and design solutions 
            tailored to exceed your expectations.
          </p>
        </div>

        {/* Cards Grid - Horizontal alignment on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
