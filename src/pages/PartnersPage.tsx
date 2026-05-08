import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Plane, Music, Anchor, Shield, CheckCircle, Send, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const hotelPartners = [
  { name: 'Aman Resorts', location: 'Global', tier: 'Ultra-Luxury' },
  { name: 'Four Seasons', location: 'Global', tier: 'Luxury' },
  { name: 'Mandarin Oriental', location: 'Global', tier: 'Luxury' },
  { name: 'COMO Hotels', location: 'Asia / Europe', tier: 'Boutique' },
  { name: 'The Siam', location: 'Bangkok', tier: 'Heritage' },
  { name: 'Bulgari Hotels', location: 'Global', tier: 'Ultra-Luxury' },
  { name: 'Belmond', location: 'Global', tier: 'Heritage' },
  { name: 'One&Only', location: 'Global', tier: 'Ultra-Luxury' },
  { name: 'Ritz-Carlton Reserve', location: 'Global', tier: 'Ultra-Luxury' },
  { name: 'Capella Hotels', location: 'Global', tier: 'Luxury' },
  { name: 'Rosewood', location: 'Global', tier: 'Luxury' },
  { name: 'Alila', location: 'Asia', tier: 'Boutique' },
];

const nightclubPartners = [
  { name: 'Marquee', location: 'Singapore / New York' },
  { name: 'Zouk', location: 'Singapore' },
  { name: 'Omnia', location: 'Bali / Las Vegas' },
  { name: 'CÉ LA VI', location: 'Singapore / Bangkok / Dubai' },
  { name: 'Sugar', location: 'Bangkok' },
  { name: 'Beach Club by Ku De Ta', location: 'Bali' },
  { name: 'Savage', location: 'Bangkok' },
  { name: 'Ling Ling', location: 'Bali / Marrakech' },
  { name: 'Rock Bar Bali', location: 'AYANA Resort' },
  { name: 'Baba Beach Club', location: 'Phuket' },
  { name: 'Skybar', location: 'Lebua Bangkok' },
  { name: 'Argo', location: 'Four Seasons HK' },
];

const aviationPartners = [
  { name: 'VistaJet', type: 'Private Aviation' },
  { name: 'NetJets', type: 'Fractional Ownership' },
  { name: 'ExecuJet', type: 'FBO Services' },
  { name: 'Jet Aviation', type: 'Private Jet Charter' },
  { name: 'AsiaJet', type: 'Regional Charter' },
  { name: 'Royal Jet', type: 'VIP Charter' },
];

const brandPartners = [
  { name: 'Rolls-Royce Motor Cars', category: 'Automotive' },
  { name: 'Benetti Yachts', category: 'Yacht Builder' },
  { name: 'Sunseeker', category: 'Yacht Builder' },
  { name: 'Ferretti Group', category: 'Yacht Builder' },
  { name: 'Dom Perignon', category: 'Champagne' },
  { name: 'Louis XIII', category: 'Cognac' },
  { name: 'Cartier', category: 'Luxury Jewelry' },
  { name: 'Bulgari', category: 'Luxury Goods' },
  { name: 'Chopard', category: 'Watchmaking' },
  { name: 'Bang & Olufsen', category: 'Audio Luxury' },
  { name: 'Steinway & Sons', category: 'Instruments' },
  { name: 'Art Basel', category: 'Art Events' },
];

const sections = [
  { title: 'Luxury Hotels & Resorts', icon: <Building2 className="w-6 h-6" />, items: hotelPartners, cols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' },
  { title: 'Nightlife & Beach Clubs', icon: <Music className="w-6 h-6" />, items: nightclubPartners, cols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' },
  { title: 'Private Aviation', icon: <Plane className="w-6 h-6" />, items: aviationPartners, cols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' },
  { title: 'Yachts & Spirits', icon: <Anchor className="w-6 h-6" />, items: brandPartners, cols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' },
];

export default function PartnersPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [partnerForm, setPartnerForm] = useState({ company: '', contact: '', email: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = pageRef.current?.querySelector('.page-header');
      if (header) gsap.fromTo(header, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
      const grids = pageRef.current?.querySelectorAll('.partner-grid');
      grids?.forEach((grid) => {
        gsap.fromTo(
          grid.querySelectorAll('.partner-card'),
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
            scrollTrigger: { trigger: grid, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={pageRef} className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="page-header text-center mb-16" style={{ opacity: 0 }}>
          <p className="text-xs tracking-[0.25em] uppercase text-[#C8A97E] mb-4 font-medium">Our Network</p>
          <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#F5F0EB] mb-4">Preferred Partners</h1>
          <p className="text-[#9A9590] font-light max-w-2xl mx-auto">
            Members enjoy privileged access and preferred rates at the world's finest establishments through our carefully curated partner network.
          </p>
        </div>

        {/* PMLC Partner Guarantee */}
        <div className="bg-[#141414] border border-[#C8A97E]/20 p-8 lg:p-10 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C8A97E]/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-[#C8A97E]" />
              <h2 className="font-display text-xl text-[#F5F0EB]">The PMLC Partner Guarantee</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { title: 'Full Cost Coverage', desc: 'PMLC covers all costs on behalf of members. Partners invoice us directly — members never handle payments at the point of service.' },
                { title: 'Vetted & Verified', desc: 'Every partner is personally inspected by our board. We stand behind every recommendation. If it is not good enough for us, it is not offered to members.' },
                { title: 'Quality Insurance', desc: 'Partners carry comprehensive liability coverage backed by PMLC. If anything falls short, we cover the full cost and find an immediate replacement — at no charge to the member.' },
                { title: 'Premium Compensation', desc: 'We pay partners at premium rates above market standard. In return, we expect flawless execution, priority access, and treatment that reflects our members status.' },
                { title: 'Zero-Tolerance Policy', desc: 'Partners who fail to meet our standards are removed immediately. We protect our members experience above all commercial relationships.' },
                { title: 'Direct Escalation', desc: 'Every partner has a dedicated PMLC liaison. Any issue is escalated directly to senior management and resolved within the hour.' },
              ].map((g, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#C8A97E] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm text-[#F5F0EB] font-medium mb-1">{g.title}</h3>
                    <p className="text-xs text-[#9A9590] font-light leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs text-[#C8A97E] border border-[#C8A97E]/20 px-4 py-3">
              <Shield className="w-4 h-4" />
              <span className="tracking-wider">PMLC STANDS BEHIND EVERY PARTNER. EVERY TIME. EVERYWHERE.</span>
            </div>
          </div>
        </div>

        {/* Partner Sections */}
        <div className="space-y-20">
          {sections.map((section, si) => (
            <div key={si}>
              <div className="flex items-center gap-3 mb-8">
                <div className="text-[#C8A97E]">{section.icon}</div>
                <h2 className="font-display text-xl text-[#F5F0EB]">{section.title}</h2>
                <div className="flex-1 h-px bg-[#2A2A2A] ml-4" />
              </div>
              <div className={`partner-grid grid ${section.cols} gap-4`}>
                {section.items.map((item: Record<string, string>, i) => (
                  <div key={i} className="partner-card bg-[#141414] border border-[#2A2A2A] p-5 flex items-center justify-between hover:border-[#C8A97E]/20 transition-all duration-300" style={{ opacity: 0 }}>
                    <div>
                      <h3 className="text-sm text-[#F5F0EB] font-medium">{item.name}</h3>
                      <p className="text-xs text-[#5C5854] mt-0.5">{item.location || item.type || item.category || item.tier}</p>
                    </div>
                    {'tier' in item && <span className="text-[10px] text-[#C8A97E] tracking-wider uppercase">{item.tier}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partner Application Form */}
        <div className="mt-20 pt-16 border-t border-[#2A2A2A]">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-5 h-5 text-[#C8A97E]" />
                <h2 className="font-display text-xl text-[#F5F0EB]">Become a Verified Partner</h2>
              </div>
              <p className="text-sm text-[#9A9590] font-light leading-relaxed mb-6">
                PMLC partners are more than vendors — they are trusted extensions of our club. We work exclusively with establishments that share our commitment to excellence, discretion, and service at the highest level.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Premium rates above market standard',
                  'Direct access to high-net-worth clientele',
                  'Global exposure across 40+ destinations',
                  'Dedicated PMLC liaison for seamless coordination',
                  'Exclusive partnership status — limited partners per category',
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8A97E] mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-[#9A9590] font-light">{b}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#C8A97E]/5 border border-[#C8A97E]/20 p-4">
                <p className="text-xs text-[#C8A97E] font-medium mb-1">What we expect</p>
                <p className="text-xs text-[#9A9590] font-light">
                  Flawless execution. Priority treatment for our members. Complete discretion. Zero exceptions. Partners who meet these standards thrive within our network.
                </p>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="bg-[#141414] border border-[#2A2A2A] p-8 text-center">
                  <CheckCircle className="w-10 h-10 text-[#C8A97E] mx-auto mb-4" />
                  <h3 className="font-display text-lg text-[#F5F0EB] mb-2">Application Received</h3>
                  <p className="text-xs text-[#9A9590] font-light">Our partnerships team will review your application and respond within 5 business days.</p>
                </div>
              ) : (
                <form onSubmit={handlePartnerSubmit} className="bg-[#141414] border border-[#2A2A2A] p-8 space-y-5">
                  <h3 className="font-display text-lg text-[#F5F0EB] mb-4">Partner Inquiry</h3>
                  <div>
                    <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Company Name *</label>
                    <input type="text" required value={partnerForm.company} onChange={e => setPartnerForm({ ...partnerForm, company: e.target.value })} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" placeholder="Your company name" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Contact Person *</label>
                      <input type="text" required value={partnerForm.contact} onChange={e => setPartnerForm({ ...partnerForm, contact: e.target.value })} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" placeholder="Full name" />
                    </div>
                    <div>
                      <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Email *</label>
                      <input type="email" required value={partnerForm.email} onChange={e => setPartnerForm({ ...partnerForm, email: e.target.value })} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" placeholder="business@company.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Partnership Category *</label>
                    <select required value={partnerForm.type} onChange={e => setPartnerForm({ ...partnerForm, type: e.target.value })} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors">
                      <option value="">Select category</option>
                      {['Luxury Hotel / Resort', 'Nightlife / Entertainment', 'Restaurant / Dining', 'Private Aviation', 'Yacht / Maritime', 'Transportation', 'Wellness / Spa', 'Event Venue', 'Other'].map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Tell us about your business *</label>
                    <textarea required value={partnerForm.message} onChange={e => setPartnerForm({ ...partnerForm, message: e.target.value })} rows={4} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors resize-none" placeholder="Describe your establishment, locations, and why you would be a good fit for PMLC members..." />
                  </div>
                  <button type="submit" className="w-full btn-gold-solid flex items-center justify-center gap-2" data-hover="true">
                    <Send className="w-4 h-4" /> Submit Partner Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
