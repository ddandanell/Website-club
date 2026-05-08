import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, Car, UtensilsCrossed, Anchor, Calendar, Globe } from 'lucide-react';
import { servicesConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-6 h-6" />,
  Car: <Car className="w-6 h-6" />,
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6" />,
  Anchor: <Anchor className="w-6 h-6" />,
  Calendar: <Calendar className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
};

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      const header = sectionRef.current?.querySelector('.section-header');
      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Grid items
      if (gridRef.current) {
        const items = gridRef.current.querySelectorAll('.service-card');
        gsap.fromTo(
          items,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-[clamp(80px,12vh,160px)] px-6 lg:px-12"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="section-header text-center mb-16" style={{ opacity: 0 }}>
          <p className="text-xs tracking-[0.25em] uppercase text-[#C8A97E] mb-6 font-medium">
            {servicesConfig.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(1.5rem,4vw,3rem)] text-[#F5F0EB]">
            {servicesConfig.headline}
          </h2>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesConfig.services.map((service, i) => (
            <div
              key={i}
              className="service-card group bg-[#141414] border border-[#2A2A2A] p-8 transition-all duration-500 hover:border-[#C8A97E]/30 hover:-translate-y-1"
              style={{ opacity: 0 }}
            >
              {/* Icon */}
              <div className="text-[#C8A97E] mb-5 transition-transform duration-500 group-hover:scale-110">
                {iconMap[service.icon]}
              </div>

              {/* Title */}
              <h3 className="font-display text-lg text-[#F5F0EB] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#9A9590] font-light leading-[1.7]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
