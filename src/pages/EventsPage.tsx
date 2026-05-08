import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Clock, Lock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const upcomingEvents = [
  {
    title: 'Full Moon Villa Experience',
    date: 'June 14, 2026',
    location: 'Koh Samui, Thailand',
    type: 'Signature Event',
    description: 'An exclusive evening at a private beachfront villa. Fine dining by a Michelin-starred chef, live jazz, and fireworks over the Gulf of Thailand.',
    capacity: '30 members',
    duration: 'One evening',
  },
  {
    title: 'Asia Pacific Members Dinner',
    date: 'July 22, 2026',
    location: 'Marina Bay, Singapore',
    type: 'Networking',
    description: 'Annual gathering of our Asia Pacific members. Private dining with skyline views, curated wine pairing, and introductions to new members.',
    capacity: '50 members',
    duration: 'Evening',
  },
  {
    title: 'Yacht Week — Phuket to Phi Phi',
    date: 'August 5-12, 2026',
    location: 'Phuket, Thailand',
    type: 'Adventure',
    description: '7-day private yacht journey exploring hidden coves, private beach barbecues, and sunset cocktails on deck. Crewed luxury yachts provided.',
    capacity: '24 members',
    duration: '7 days',
  },
  {
    title: 'Art & Culture Weekend',
    date: 'September 18-20, 2026',
    location: 'Bali, Indonesia',
    type: 'Cultural',
    description: 'Private gallery openings, meetings with local artists, temple ceremonies at sunrise, and a closing dinner in the rice terraces.',
    capacity: '20 members',
    duration: '3 days',
  },
  {
    title: 'Dubai Grand Prix Experience',
    date: 'November 28-30, 2026',
    location: 'Dubai, UAE',
    type: 'Premier Event',
    description: 'Paddock club access, private suite overlooking the circuit, helicopter transfers, and the annual PMLC black-tie gala evening.',
    capacity: '40 members',
    duration: '3 days',
  },
  {
    title: 'New Year Private Island',
    date: 'December 30, 2026 - January 2, 2027',
    location: 'Maldives',
    type: 'Signature Event',
    description: 'Ring in the new year on a private island. Three nights of celebration, world-class DJs, candlelit beach dinners, and a midnight fireworks display.',
    capacity: '60 members',
    duration: '4 days',
  },
];

const pastEvents = [
  { title: 'Ubud Wellness Retreat', date: 'March 2026', location: 'Bali' },
  { title: 'Bangkok Culinary Tour', date: 'February 2026', location: 'Bangkok' },
  { title: 'Ski Weekend Niseko', date: 'January 2026', location: 'Japan' },
  { title: 'New Year Gala Bali', date: 'December 2025', location: 'Bali' },
];

export default function EventsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = pageRef.current?.querySelector('.page-header');
      if (header) {
        gsap.fromTo(header, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
      }
      const cards = pageRef.current?.querySelectorAll('.event-card');
      cards?.forEach((card) => {
        gsap.fromTo(card, { opacity: 0, y: 40 }, {
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
          <p className="text-xs tracking-[0.25em] uppercase text-[#C8A97E] mb-4 font-medium">Member Exclusive</p>
          <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#F5F0EB] mb-4">Upcoming Events</h1>
          <p className="text-[#9A9590] font-light max-w-2xl mx-auto">
            Curated experiences reserved exclusively for members. Each event is designed around access, privacy, and unforgettable moments.
          </p>
        </div>

        {/* Member Badge */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <Lock className="w-4 h-4 text-[#C8A97E]" />
          <span className="text-xs text-[#C8A97E] tracking-[0.15em] uppercase">Members Only — Login Required to RSVP</span>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {upcomingEvents.map((event, i) => (
            <div key={i} className="event-card bg-[#141414] border border-[#2A2A2A] p-8 hover:border-[#C8A97E]/20 transition-all duration-500" style={{ opacity: 0 }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] tracking-[0.15em] uppercase text-[#C8A97E] bg-[#C8A97E]/10 px-3 py-1">{event.type}</span>
                <span className="text-xs text-[#5C5854]">{event.capacity}</span>
              </div>
              <h3 className="font-display text-xl text-[#F5F0EB] mb-3">{event.title}</h3>
              <p className="text-sm text-[#9A9590] font-light leading-relaxed mb-6">{event.description}</p>
              <div className="flex flex-wrap gap-4 text-xs text-[#5C5854]">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#C8A97E]" /> {event.date}</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#C8A97E]" /> {event.location}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#C8A97E]" /> {event.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Past Events */}
        <div className="border-t border-[#2A2A2A] pt-16">
          <h2 className="font-display text-xl text-[#F5F0EB] mb-8">Recent Events</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {pastEvents.map((event, i) => (
              <div key={i} className="bg-[#141414] border border-[#2A2A2A] p-5">
                <p className="text-[10px] text-[#C8A97E] tracking-wider uppercase mb-2">{event.date}</p>
                <h4 className="text-sm text-[#F5F0EB] mb-1">{event.title}</h4>
                <p className="text-xs text-[#5C5854]">{event.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Events CTA */}
        <div className="text-center mt-16 pt-10 border-t border-[#2A2A2A]">
          <p className="text-[#9A9590] font-light mb-6">Have a private event in mind? Our team can organize bespoke experiences for you and your guests.</p>
          <a href="mailto:events@pmlc.com" className="btn-gold" data-hover="true">Plan a Private Event</a>
        </div>
      </div>
    </div>
  );
}
