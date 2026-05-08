import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navigation } from './Navigation';
import { CustomCursor } from './CustomCursor';
import { ParticleField } from './ParticleField';
import { WhatsAppButton } from './WhatsAppButton';

gsap.registerPlugin(ScrollTrigger);

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // Scroll to top on route change
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#F5F0EB] overflow-x-hidden">
      <div className="noise-overlay" />
      <CustomCursor />
      <ParticleField />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <WhatsAppButton />
    </div>
  );
}
