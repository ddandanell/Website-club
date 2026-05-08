import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Key, Shield, EyeOff, CheckCircle } from 'lucide-react';
import { pillarsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ReactNode> = {
  Key: <Key className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  EyeOff: <EyeOff className="w-8 h-8" />,
  CheckCircle: <CheckCircle className="w-8 h-8" />,
};

export function CoreValues() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
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

      // Cards stagger in
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.pillar-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
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
      id="values"
      className="relative py-[clamp(80px,12vh,160px)] px-6 lg:px-12"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="section-header text-center mb-16" style={{ opacity: 0 }}>
          <p className="text-xs tracking-[0.25em] uppercase text-[#C8A97E] mb-6 font-medium">
            {pillarsConfig.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(1.5rem,4vw,3rem)] text-[#F5F0EB]">
            {pillarsConfig.headline}
          </h2>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillarsConfig.pillars.map((pillar, i) => (
            <div
              key={i}
              className="pillar-card group bg-[#141414] border border-[#2A2A2A] p-8 transition-all duration-500 hover:border-[#C8A97E]/30 hover:shadow-[0_0_40px_rgba(200,169,126,0.08)] hover:-translate-y-2"
              style={{ opacity: 0 }}
            >
              {/* Icon */}
              <div className="text-[#C8A97E] mb-6 transition-transform duration-500 group-hover:scale-110">
                {iconMap[pillar.icon]}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl text-[#F5F0EB] mb-4">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#9A9590] font-light leading-[1.7]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
