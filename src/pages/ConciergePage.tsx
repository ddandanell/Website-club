import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MessageCircle, Shield, UtensilsCrossed, Music, Car, Anchor, Star, Clock, MapPin, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const concierges = [
  {
    name: 'Victoria Hartwell',
    title: 'Senior Lifestyle Director',
    image: '/concierge-1.jpg',
    specialties: ['Fine Dining', 'VIP Nightlife', 'Private Events'],
    languages: 'English, French, Italian',
    regions: 'Europe, Middle East',
    bio: 'Former Guest Relations Manager at The Ritz Paris. Victoria handles the most complex requests with grace — from last-minute Michelin tables to after-hours gallery access.',
    availability: '24/7 Direct Line',
  },
  {
    name: 'James Chen',
    title: 'Executive Concierge — Asia Pacific',
    image: '/concierge-2.jpg',
    specialties: ['Yacht Charters', 'Private Aviation', 'Security Detail'],
    languages: 'English, Mandarin, Japanese',
    regions: 'Singapore, Hong Kong, Tokyo, Bali',
    bio: '15 years in luxury hospitality management. James ensures seamless execution across Asia — yacht provisioning, helicopter transfers, and security coordination.',
    availability: '24/7 Direct Line',
  },
  {
    name: 'Amira Hassan',
    title: 'Elite Circle Director',
    image: '/concierge-3.jpg',
    specialties: ['Full Journey Management', 'Multi-Country Trips', 'Bespoke Experiences'],
    languages: 'English, Arabic, Spanish',
    regions: 'Dubai, London, Miami, Maldives',
    bio: 'Previously with Four Seasons Private Retreats. Amira plans the 20-day journeys that define the Elite Circle experience. Nothing is too ambitious.',
    availability: '24/7 Direct Line',
  },
];

const services = [
  { icon: <UtensilsCrossed className="w-5 h-5" />, title: 'Restaurant & Dining', desc: 'Last-minute reservations at fully-booked restaurants, private chefs, bespoke menus' },
  { icon: <Music className="w-5 h-5" />, title: 'Nightlife & Entertainment', desc: 'VIP tables, backstage access, private performances, after-hours venues' },
  { icon: <Shield className="w-5 h-5" />, title: 'Security & Privacy', desc: 'Personal security detail, secure transport, NDAs for all arrangements, private entrances' },
  { icon: <Car className="w-5 h-5" />, title: 'Transportation', desc: 'Chauffeur services, helicopter transfers, private aviation, armored vehicles' },
  { icon: <Anchor className="w-5 h-5" />, title: 'Yacht & Maritime', desc: 'Yacht charters, crewed expeditions, island hopping, marina reservations' },
  { icon: <Star className="w-5 h-5" />, title: 'Bespoke Experiences', desc: 'Anything you can imagine — our job is to make it happen properly and discreetly' },
];

export default function ConciergePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = pageRef.current?.querySelector('.page-header');
      if (header) gsap.fromTo(header, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
      const cards = pageRef.current?.querySelectorAll('.concierge-card');
      cards?.forEach((c, i) => gsap.fromTo(c, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, delay: i * 0.2, ease: 'power3.out' }));
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="page-header text-center mb-16" style={{ opacity: 0 }}>
          <p className="text-xs tracking-[0.25em] uppercase text-[#C8A97E] mb-4 font-medium">Your Personal Team</p>
          <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#F5F0EB] mb-4">Your Dedicated Concierge</h1>
          <p className="text-[#9A9590] font-light max-w-2xl mx-auto">
            Every member is assigned a personal concierge director — your single point of contact for everything. One person who knows you, understands your preferences, and makes the impossible routine.
          </p>
        </div>

        {/* What Your Concierge Does */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((s, i) => (
            <div key={i} className="bg-[#141414] border border-[#2A2A2A] p-6 hover:border-[#C8A97E]/20 transition-all duration-300">
              <div className="text-[#C8A97E] mb-3">{s.icon}</div>
              <h3 className="text-sm text-[#F5F0EB] font-medium mb-2">{s.title}</h3>
              <p className="text-xs text-[#9A9590] font-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Concierge Profiles */}
        <div className="mb-20">
          <h2 className="font-display text-2xl text-[#F5F0EB] mb-2 text-center">Meet Our Concierge Directors</h2>
          <p className="text-sm text-[#9A9590] font-light text-center mb-12 max-w-xl mx-auto">
            Upon approval, you will be matched with the concierge whose expertise aligns with your lifestyle and preferred destinations.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {concierges.map((c, i) => (
              <div key={i} className="concierge-card bg-[#141414] border border-[#2A2A2A] overflow-hidden" style={{ opacity: 0 }}>
                <div className="aspect-square overflow-hidden img-zoom">
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-[#F5F0EB] mb-1">{c.name}</h3>
                  <p className="text-xs text-[#C8A97E] tracking-wider uppercase mb-3">{c.title}</p>
                  <p className="text-xs text-[#9A9590] font-light leading-relaxed mb-4">{c.bio}</p>
                  <div className="space-y-2 mb-4">
                    <p className="text-xs text-[#5C5854] flex items-center gap-2"><MapPin className="w-3 h-3 text-[#C8A97E]" /> {c.regions}</p>
                    <p className="text-xs text-[#5C5854] flex items-center gap-2"><Clock className="w-3 h-3 text-[#C8A97E]" /> {c.availability}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {c.specialties.map((s, si) => (
                      <span key={si} className="text-[10px] text-[#C8A97E] border border-[#C8A97E]/20 px-2 py-0.5">{s}</span>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-4 border-t border-[#2A2A2A]">
                    <a href={`tel:+6561234567`} className="flex-1 bg-[#C8A97E] text-[#0A0A0A] text-xs font-semibold py-2.5 text-center hover:bg-[#D4B88E] transition-colors" data-hover="true">
                      <Phone className="w-3 h-3 inline mr-1" /> Call
                    </a>
                    <a href={`mailto:${c.name.split(' ')[0].toLowerCase()}@pmlc.com`} className="flex-1 border border-[#2A2A2A] text-[#9A9590] text-xs py-2.5 text-center hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors" data-hover="true">
                      <Mail className="w-3 h-3 inline mr-1" /> Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Promise */}
        <div className="bg-[#141414] border border-[#2A2A2A] p-8 lg:p-12 text-center">
          <Shield className="w-10 h-10 text-[#C8A97E] mx-auto mb-6" />
          <h2 className="font-display text-2xl text-[#F5F0EB] mb-4">The Concierge Promise</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { title: 'Single Point of Contact', desc: 'One person handles everything. No call centers, no transfers, no explaining twice.' },
              { title: '24/7 Availability', desc: 'Your concierge is reachable by phone, WhatsApp, or email at any hour, any day, any timezone.' },
              { title: 'Complete Discretion', desc: 'Every interaction is confidential. Your preferences, your plans, your identity — protected.' },
            ].map((p, i) => (
              <div key={i} className="text-center">
                <CheckCircle className="w-5 h-5 text-[#C8A97E] mx-auto mb-3" />
                <h3 className="text-sm text-[#F5F0EB] font-medium mb-2">{p.title}</h3>
                <p className="text-xs text-[#9A9590] font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-[#9A9590] font-light mb-4">Already a member? Your concierge is waiting.</p>
          <a href="https://wa.me/6561234567" target="_blank" rel="noopener noreferrer" className="btn-gold" data-hover="true">
            <MessageCircle className="w-4 h-4 mr-2" /> Message Your Concierge
          </a>
        </div>
      </div>
    </div>
  );
}
