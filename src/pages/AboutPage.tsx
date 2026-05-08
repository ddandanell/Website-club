import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Users, MapPin, Award, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const boardMembers = [
  {
    name: 'Alexander Tan',
    role: 'Chairman & Founder',
    region: 'Singapore (Global HQ)',
    image: '/board-chairman.jpg',
    bio: 'Founded PMLC in 2010 after 20 years in private wealth management. Oversees global strategy and the Founder Circle program.',
  },
  {
    name: 'Isabelle Moreau',
    role: 'Board Director — Europe',
    region: 'London, United Kingdom',
    image: '/board-europe.jpg',
    bio: 'Former Managing Director at Goldman Sachs. Leads European expansion and institutional partnerships across the continent.',
  },
  {
    name: 'Karim Al-Rashid',
    role: 'Board Director — Middle East',
    region: 'Dubai, UAE',
    image: '/board-middle-east.jpg',
    bio: 'Third-generation family business leader. Manages Middle East operations and ultra-high-net-worth family relationships.',
  },
  {
    name: 'Mei-Ling Wong',
    role: 'Board Director — Asia Pacific',
    region: 'Singapore',
    image: '/board-asia-pacific.jpg',
    bio: 'Hospitality industry veteran. Former VP Operations at Mandarin Oriental. Oversees partner network and service excellence.',
  },
  {
    name: 'Samuel Okafor',
    role: 'Board Director — Africa',
    region: 'Lagos / Cape Town',
    image: '/board-africa.jpg',
    bio: 'Entrepreneur and investor. Expanding PMLC presence across Africa with focus on emerging luxury markets.',
  },
  {
    name: 'Camila Rodriguez',
    role: 'Board Director — Americas',
    region: 'Miami, USA',
    image: '/board-americas.jpg',
    bio: 'Former VP at American Express Centurion. Leads Americas growth strategy and celebrity member relations.',
  },
];

const stats = [
  { value: '87', label: 'Team Members', sub: 'Across 12 countries' },
  { value: '6', label: 'Board Directors', sub: 'Regional leadership' },
  { value: '15+', label: 'Years', sub: 'Of excellence' },
  { value: '500+', label: 'Members', sub: 'Select individuals' },
  { value: '40+', label: 'Destinations', sub: 'Global reach' },
  { value: '200+', label: 'Partners', sub: 'Luxury brands' },
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = pageRef.current?.querySelector('.page-header');
      if (header) {
        gsap.fromTo(header, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
      }
      const cards = pageRef.current?.querySelectorAll('.board-card');
      cards?.forEach((card) => {
        gsap.fromTo(card, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' },
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="page-header text-center mb-16" style={{ opacity: 0 }}>
          <p className="text-xs tracking-[0.25em] uppercase text-[#C8A97E] mb-4 font-medium">About PMLC</p>
          <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#F5F0EB] mb-4">The Club Behind the Curtain</h1>
          <p className="text-[#9A9590] font-light max-w-2xl mx-auto">
            Founded in 2010, Private Members Lifestyle Club operates from its headquarters in Singapore with a global team of 87 professionals and regional board directors across six continents.
          </p>
        </div>

        {/* Headquarters */}
        <div className="bg-[#141414] border border-[#2A2A2A] p-8 lg:p-12 mb-16">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-12 h-12 bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E] flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-display text-xl text-[#F5F0EB] mb-2">Global Headquarters — Singapore</h2>
              <p className="text-sm text-[#9A9590] font-light leading-relaxed max-w-2xl">
                Our headquarters is located in the heart of Singapore's Marina Bay district. From here, our team of 87 professionals manages operations across Asia Pacific, the Middle East, Europe, Africa, and the Americas. The Singapore office houses our Member Services Command Center, operating 24/7 to ensure seamless execution for every request.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Singapore', 'London', 'Dubai', 'Bali', 'Bangkok', 'Miami'].map(city => (
              <span key={city} className="text-xs text-[#C8A97E] border border-[#C8A97E]/20 px-3 py-1.5 tracking-wider">{city}</span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-3xl lg:text-4xl text-[#C8A97E] mb-1">{stat.value}</p>
              <p className="text-sm text-[#F5F0EB] mb-0.5">{stat.label}</p>
              <p className="text-xs text-[#5C5854]">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Board Members */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-10">
            <Award className="w-5 h-5 text-[#C8A97E]" />
            <h2 className="font-display text-2xl text-[#F5F0EB]">Board of Directors</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, i) => (
              <div key={i} className="board-card group" style={{ opacity: 0 }}>
                <div className="aspect-square overflow-hidden mb-5 img-zoom">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <h3 className="font-display text-lg text-[#F5F0EB]">{member.name}</h3>
                <p className="text-xs text-[#C8A97E] tracking-wider uppercase mb-1">{member.role}</p>
                <p className="text-xs text-[#5C5854] mb-3 flex items-center gap-1">
                  <Globe className="w-3 h-3" /> {member.region}
                </p>
                <p className="text-sm text-[#9A9590] font-light leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="border-t border-[#2A2A2A] pt-16">
          <h2 className="font-display text-xl text-[#F5F0EB] mb-8 text-center">Our Principles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-6 h-6" />, title: 'Discretion Above All', desc: 'We never disclose member identities. Privacy is not a feature — it is the foundation of everything we do.' },
              { icon: <Users className="w-6 h-6" />, title: 'Quality Over Quantity', desc: 'We limit membership to protect the integrity of our network. Every application is personally reviewed by our board.' },
              { icon: <Award className="w-6 h-6" />, title: 'Excellence in Execution', desc: 'We do not make recommendations. We make things happen. Every detail is handled so members simply arrive and experience.' },
            ].map((v, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-[#C8A97E] mb-4 flex justify-center">{v.icon}</div>
                <h3 className="font-display text-lg text-[#F5F0EB] mb-3">{v.title}</h3>
                <p className="text-sm text-[#9A9590] font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
