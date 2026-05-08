import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { conceptConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Concept() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text slides in from left
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Image fades in from right
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 60, scale: 1.05 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Stats stagger in
      if (statsRef.current) {
        const stats = statsRef.current.querySelectorAll('.stat-item');
        gsap.fromTo(
          stats,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCtaClick = () => {
    document.querySelector('#membership')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="concept"
      className="relative py-[clamp(80px,12vh,160px)] px-6 lg:px-12"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center">
          {/* Text Column */}
          <div ref={textRef} style={{ opacity: 0 }}>
            <p className="text-xs tracking-[0.25em] uppercase text-[#C8A97E] mb-6 font-medium">
              {conceptConfig.eyebrow}
            </p>

            <h2 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2] text-[#F5F0EB] mb-6">
              {conceptConfig.headline}
            </h2>

            <p className="text-base text-[#9A9590] font-light leading-[1.7] mb-10 max-w-lg">
              {conceptConfig.body}
            </p>

            {/* Stats */}
            <div ref={statsRef} className="flex gap-10 mb-10">
              {conceptConfig.stats.map((stat, i) => (
                <div key={i} className="stat-item" style={{ opacity: 0 }}>
                  <p className="font-display text-3xl lg:text-4xl text-[#C8A97E] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#9A9590] tracking-[0.05em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={handleCtaClick}
              className="btn-gold"
              data-hover="true"
            >
              {conceptConfig.cta}
            </button>
          </div>

          {/* Image Column */}
          <div ref={imageRef} className="relative img-zoom" style={{ opacity: 0 }}>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={conceptConfig.image}
                alt={conceptConfig.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Subtle gold border accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C8A97E]/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
