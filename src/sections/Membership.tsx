import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';
import { membershipConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Membership() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      // Cards slide up
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.membership-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
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

  const handleCtaClick = () => {
    document.querySelector('#apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="membership"
      className="relative py-[clamp(80px,12vh,160px)] px-6 lg:px-12"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="section-header text-center mb-16" style={{ opacity: 0 }}>
          <p className="text-xs tracking-[0.25em] uppercase text-[#C8A97E] mb-6 font-medium">
            {membershipConfig.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(1.5rem,4vw,3rem)] text-[#F5F0EB] mb-4">
            {membershipConfig.headline}
          </h2>
          <p className="text-base text-[#9A9590] font-light max-w-xl mx-auto">
            {membershipConfig.subhead}
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {membershipConfig.plans.map((plan, i) => (
            <div
              key={i}
              className={`membership-card relative bg-[#141414] border p-8 transition-all duration-500 hover:-translate-y-2 ${
                plan.featured
                  ? 'border-[#C8A97E]/50 shadow-[0_0_40px_rgba(200,169,126,0.1)]'
                  : 'border-[#2A2A2A] hover:border-[#C8A97E]/20'
              }`}
              style={{ opacity: 0 }}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C8A97E] text-[#0A0A0A] text-[10px] font-semibold tracking-[0.1em] uppercase px-4 py-1">
                  Most Popular
                </div>
              )}

              {/* Gold top border for higher tiers */}
              <div
                className={`absolute top-0 left-0 right-0 h-px ${
                  plan.featured ? 'bg-[#C8A97E]' : 'bg-[#2A2A2A]'
                }`}
              />

              {/* Plan name */}
              <h3 className="font-display text-lg text-[#F5F0EB] mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display text-3xl text-[#C8A97E]">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-[#9A9590]">{plan.period}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs text-[#5C5854] mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C8A97E] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#9A9590] font-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={handleCtaClick}
                className={`w-full py-3 text-sm font-semibold tracking-[0.08em] uppercase transition-all duration-500 ${
                  plan.featured
                    ? 'bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4B88E]'
                    : 'border border-[#C8A97E]/30 text-[#C8A97E] hover:bg-[#C8A97E] hover:text-[#0A0A0A]'
                }`}
                data-hover="true"
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
