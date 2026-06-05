
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
"Finding an affordable 2 BHK in Pune is a tough task, but this platform made it incredibly easy. The drone views and verified project details saved us a lot of weekend site visits.",
    name: "Rahul Deshmukh",
    resident: "Pune",
  },
  {
    id: 2,
    quote:
"We bought our first home in Satara through this site. The price history feature helped us understand the true market rate, and the legal checklist gave us complete confidence.",
    name: "Sneha Kulkarni",
    resident: "Satara",
  },
  {
    id: 3,
    quote:
"I listed my flat in Phaltan for rent  and got inquiries from genuine, verified corporate professionals within two days. The digital rent agreement service was a huge bonus.",
    name: "Milind Joshi",
    resident: "Phaltan",
  },
  {
    id: 4,
    quote:
"Most websites show outdated properties, but the listings here are completely fresh and verified. The carpet area filters helped me find exactly what I was looking for.",
      name: "Anjali Patil",
    resident: "Satara",
  },
  {
    id: 5,
    quote:
"As a first-time investor in Nagpur's real estate market, I appreciated the detailed neighbourhood insights and upcoming infrastructure updates provided on the portal.",
    name: "Vikram Shinde",
    resident: "Pune",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextSlide = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % testimonials.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-bg py-32 px-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gold/10 blur-[140px]" />

      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2D6B70_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-24">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border bg-white shadow-sm">
          <span className="w-2 h-2 rounded-full bg-gold" />

          <span className="uppercase tracking-[0.25em] text-[11px] font-bold text-muted font-body">
            Client Experiences
          </span>
        </span>

        <h2 className="mt-8 text-[54px] md:text-[84px] leading-[0.95] text-dark font-display">
          Elegant Stories
          <br />
          From Our{" "}
          <span className="italic text-gold">
            Clients
          </span>
        </h2>

        <p className="mt-7 max-w-2xl mx-auto text-muted text-[18px] leading-relaxed font-body">
          Thoughtfully crafted partnerships that blend
          creativity, precision, and timeless design into
          unforgettable experiences.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative z-10 h-[620px] flex items-center justify-center max-w-7xl mx-auto overflow-hidden perspective-[2200px]">
        {testimonials.map((item, index) => {
          let offset = index - currentIndex;

          const total = testimonials.length;

          if (offset < -total / 2) offset += total;
          if (offset > total / 2) offset -= total;

          const absOffset = Math.abs(offset);

          const isActive = offset === 0;

          const translateX = offset * 240;

          const translateY = isActive
            ? -10
            : absOffset === 1
            ? 60
            : 110;

          const scale = isActive
            ? 1
            : absOffset === 1
            ? 0.84
            : 0.7;

          const rotate = offset * -3;

          const opacity =
            absOffset > 2
              ? 0
              : absOffset === 2
              ? 0.35
              : absOffset === 1
              ? 0.75
              : 1;

          return (
            <div
              key={item.id}
              onClick={() =>
                setCurrentIndex(index)
              }
              className="absolute transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer"
              style={{
                transform: `
                  translateX(${translateX}px)
                  translateY(${translateY}px)
                  scale(${scale})
                  rotate(${rotate}deg)
                `,
                opacity,
                zIndex: 100 - absOffset,
              }}
            >
              <div
                className={`relative overflow-hidden rounded-[36px] bg-white border border-border backdrop-blur-xl transition-all duration-700 ${
                  isActive
                    ? "w-[380px] h-[470px] shadow-[0_35px_80px_rgba(0,0,0,0.12)]"
                    : "w-[320px] h-[420px] shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                }`}
              >
                {/* Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-gold via-goldlt to-teal" />

                {/* Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.12),transparent_65%)]" />

                {/* Floating Decorative Circle */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold/5 blur-3xl" />

                {/* Content */}
                <div className="relative h-full flex flex-col p-10">
                  {/* Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                      <Quote
                        size={28}
                        className="text-gold"
                      />
                    </div>

                    <span className="text-[13px] tracking-[0.25em] text-muted font-body">
                      0{item.id}
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mt-8">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className="fill-gold text-gold"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="flex-1 flex items-center">
                    <p className="text-[20px] leading-[1.9] text-text italic font-display">
                      “{item.quote}”
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-7 border-t border-border">
                    <h3 className="text-[32px] leading-none text-dark font-display">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-muted font-body">
                      {item.resident}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="relative z-10 mt-14 flex items-center justify-center gap-5">
        <button
          onClick={prevSlide}
          className="w-14 h-14 rounded-full bg-white border border-border shadow-lg flex items-center justify-center text-dark hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full bg-dark text-white shadow-lg flex items-center justify-center hover:bg-teal hover:-translate-y-1 transition-all duration-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}