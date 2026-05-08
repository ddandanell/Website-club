import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experienceConfig } from '../config';
import { Send, MapPin, CheckSquare, Settings, Plane, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stepIcons = [
  <Send className="w-5 h-5" />,
  <MapPin className="w-5 h-5" />,
  <CheckSquare className="w-5 h-5" />,
  <Settings className="w-5 h-5" />,
  <Plane className="w-5 h-5" />,
  <Star className="w-5 h-5" />,
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Quote fades in
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Steps stagger in
      if (stepsRef.current) {
        const steps = stepsRef.current.querySelectorAll('.step-item');
        gsap.fromTo(
          steps,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 85%',
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
      id="experience"
      className="relative py-[clamp(80px,12vh,160px)] overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={experienceConfig.backgroundImage}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
      </div>

      <div className="relative z-10 px-6 lg:px-12 max-w-[1280px] mx-auto">
        {/* Quote */}
        <div ref={quoteRef} className="text-center mb-16" style={{ opacity: 0 }}>
          <blockquote className="font-display italic text-[clamp(1.25rem,3vw,2rem)] text-[#F5F0EB] leading-[1.4] max-w-3xl mx-auto mb-6">
            &ldquo;{experienceConfig.quote}&rdquo;
          </blockquote>
          <p className="text-sm text-[#9A9590] tracking-[0.05em]">
            {experienceConfig.subtext}
          </p>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {experienceConfig.steps.map((step, i) => (
            <div
              key={i}
              className="step-item flex flex-col items-center text-center"
              style={{ opacity: 0 }}
            >
              <div className="w-12 h-12 rounded-full border border-[#C8A97E]/30 flex items-center justify-center text-[#C8A97E] mb-4">
                {stepIcons[i]}
              </div>
              <p className="text-[10px] text-[#C8A97E] tracking-[0.1em] uppercase mb-1">
                Step {step.number}
              </p>
              <p className="text-sm text-[#F5F0EB] font-medium">
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
