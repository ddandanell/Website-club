import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { heroConfig } from '../config';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Eyebrow fades in
    tl.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    // Headline words stagger in
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('.word');
      tl.fromTo(
        words,
        { opacity: 0, y: 80, rotateX: -45 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.08,
          ease: 'power3.out',
        },
        '-=0.4'
      );
    }

    // Subheadline
    tl.fromTo(
      subheadRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.6'
    );

    // CTAs
    tl.fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );

    // Scroll indicator
    tl.fromTo(
      scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      '-=0.2'
    );

    // Scroll indicator bounce
    gsap.to(scrollRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    return () => {
      tl.kill();
    };
  }, []);

  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#concept')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApplyClick = () => {
    document.querySelector('#apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  const headlineWords = heroConfig.headline.split(' ');

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-[#141414] via-[#0A0A0A] to-[#0A0A0A]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          ref={eyebrowRef}
          className="text-xs tracking-[0.25em] uppercase text-[#C8A97E] mb-8 font-medium"
          style={{ opacity: 0 }}
        >
          {heroConfig.eyebrow}
        </p>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-display text-[clamp(3rem,8vw,7rem)] leading-[1.05] tracking-[-0.02em] text-[#F5F0EB] mb-8"
          style={{ perspective: '800px' }}
        >
          {headlineWords.map((word, i) => (
            <span
              key={i}
              className="word inline-block mr-[0.25em]"
              style={{ opacity: 0 }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p
          ref={subheadRef}
          className="text-lg text-[#9A9590] max-w-xl mx-auto mb-12 font-light leading-relaxed"
          style={{ opacity: 0 }}
        >
          {heroConfig.subheadline}
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-6" style={{ opacity: 0 }}>
          <button
            onClick={handleApplyClick}
            className="btn-gold"
            data-hover="true"
          >
            {heroConfig.ctaPrimary}
          </button>
          <a
            href="#concept"
            onClick={handleExploreClick}
            className="inline-flex items-center gap-2 text-[#9A9590] hover:text-[#C8A97E] transition-colors duration-300 text-sm tracking-[0.05em]"
            data-hover="true"
          >
            {heroConfig.ctaSecondary}
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ opacity: 0 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#C8A97E]/50 to-[#C8A97E]" />
      </div>
    </section>
  );
}
