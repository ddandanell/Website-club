import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ctaConfig, whatsappConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline character animation
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        gsap.fromTo(
          words,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Content fade
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handlePrimaryCta = () => {
    // Open WhatsApp with application message
    const url = `https://wa.me/${whatsappConfig.number.replace(/\+/g, '')}?text=${encodeURIComponent('I would like to apply for Private Members Lifestyle Club membership.')}`;
    window.open(url, '_blank');
  };

  const handleSecondaryCta = () => {
    const url = `https://wa.me/${whatsappConfig.number.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappConfig.message)}`;
    window.open(url, '_blank');
  };

  const headlineWords = ctaConfig.headline.split(' ');

  return (
    <section
      ref={sectionRef}
      id="apply"
      className="relative py-[clamp(100px,16vh,200px)] px-6 lg:px-12 overflow-hidden"
    >
      {/* Subtle particle-like glow in background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C8A97E]/[0.03] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Headline */}
        <h2
          ref={headlineRef}
          className="font-display text-[clamp(2rem,5vw,4rem)] text-[#F5F0EB] mb-8 leading-[1.1]"
        >
          {headlineWords.map((word, i) => (
            <span key={i} className="word inline-block mr-[0.25em]" style={{ opacity: 0 }}>
              {word}
            </span>
          ))}
        </h2>

        {/* Content */}
        <div ref={contentRef} style={{ opacity: 0 }}>
          <p className="text-base text-[#9A9590] font-light mb-10 max-w-lg mx-auto leading-[1.7]">
            {ctaConfig.body}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={handlePrimaryCta}
              className="btn-gold-solid"
              data-hover="true"
            >
              {ctaConfig.ctaPrimary}
            </button>
            <button
              onClick={handleSecondaryCta}
              className="text-[#9A9590] hover:text-[#C8A97E] transition-colors duration-300 text-sm tracking-[0.05em]"
              data-hover="true"
            >
              {ctaConfig.ctaSecondary}
            </button>
          </div>

          {/* Trust note */}
          <p className="text-xs text-[#5C5854] tracking-[0.05em]">
            {ctaConfig.trustNote}
          </p>
        </div>
      </div>
    </section>
  );
}
