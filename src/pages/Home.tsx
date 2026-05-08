import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from '../sections/Hero';
import { Concept } from '../sections/Concept';
import { CoreValues } from '../sections/CoreValues';
import { Services } from '../sections/Services';
import { Experience } from '../sections/Experience';
import { Membership } from '../sections/Membership';
import { Destinations } from '../sections/Destinations';
import { Testimonials } from '../sections/Testimonials';
import { CTA } from '../sections/CTA';
import { Footer } from '../sections/Footer';
import { siteConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    document.title = siteConfig.title;
    // Refresh ScrollTrigger after mount
    const timer = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero />
      <Concept />
      <CoreValues />
      <Services />
      <Experience />
      <Membership />
      <Destinations />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
