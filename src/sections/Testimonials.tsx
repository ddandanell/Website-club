import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      const content = sectionRef.current?.querySelector('.testimonial-content');
      if (content) {
        gsap.fromTo(
          content,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-rotate
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsConfig.testimonials.length);
    }, 6000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsConfig.testimonials.length);
    }, 6000);
  };

  const goPrev = () => {
    goTo((activeIndex - 1 + testimonialsConfig.testimonials.length) % testimonialsConfig.testimonials.length);
  };

  const goNext = () => {
    goTo((activeIndex + 1) % testimonialsConfig.testimonials.length);
  };

  const current = testimonialsConfig.testimonials[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-[clamp(80px,12vh,160px)] px-6 lg:px-12"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="section-header text-center mb-16" style={{ opacity: 0 }}>
          <p className="text-xs tracking-[0.25em] uppercase text-[#C8A97E] mb-6 font-medium">
            {testimonialsConfig.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(1.5rem,4vw,3rem)] text-[#F5F0EB]">
            {testimonialsConfig.headline}
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="testimonial-content max-w-4xl mx-auto" style={{ opacity: 0 }}>
          {/* Quote */}
          <div className="text-center mb-10 min-h-[160px] flex items-center justify-center">
            <blockquote className="font-display italic text-[clamp(1.125rem,2.5vw,1.5rem)] text-[#F5F0EB] leading-[1.6] transition-opacity duration-500">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
          </div>

          {/* Attribution */}
          <div className="text-center mb-10 transition-opacity duration-500">
            <span className="text-xs text-[#9A9590] tracking-[0.1em]">
              Anonymous Member
            </span>
            <span className="mx-3 text-[#2A2A2A]">|</span>
            <span className="text-xs text-[#C8A97E] tracking-[0.05em]">
              {current.tier}
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={goPrev}
              className="w-10 h-10 border border-[#2A2A2A] flex items-center justify-center text-[#9A9590] hover:border-[#C8A97E] hover:text-[#C8A97E] transition-all duration-300"
              aria-label="Previous testimonial"
              data-hover="true"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonialsConfig.testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? 'bg-[#C8A97E] w-6'
                      : 'bg-[#2A2A2A] hover:bg-[#5C5854]'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  data-hover="true"
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-10 h-10 border border-[#2A2A2A] flex items-center justify-center text-[#9A9590] hover:border-[#C8A97E] hover:text-[#C8A97E] transition-all duration-300"
              aria-label="Next testimonial"
              data-hover="true"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
