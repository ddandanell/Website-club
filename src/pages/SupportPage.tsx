import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Phone, Mail, Clock, MessageCircle, Shield, CheckCircle, AlertCircle, Globe } from 'lucide-react';

const supportNumbers = [
  { region: 'Global HQ', country: 'Singapore', number: '+65 6123 4567', hours: '24/7', status: 'online', languages: 'EN, ZH, MS' },
  { region: 'Europe', country: 'United Kingdom', number: '+44 20 7946 0958', hours: '24/7', status: 'online', languages: 'EN, FR, DE, IT' },
  { region: 'Middle East', country: 'UAE', number: '+971 4 555 8900', hours: '24/7', status: 'online', languages: 'EN, AR' },
  { region: 'North America', country: 'United States', number: '+1 305 555 0147', hours: '24/7', status: 'online', languages: 'EN, ES' },
  { region: 'Asia Pacific', country: 'Hong Kong', number: '+852 2121 3888', hours: '24/7', status: 'online', languages: 'EN, ZH, JA' },
  { region: 'Africa', country: 'South Africa', number: '+27 21 555 0199', hours: '24/7', status: 'online', languages: 'EN, FR' },
];

const memberEmails = [
  { label: 'General Member Services', email: 'members@pmlc.com', desc: 'Any request, any time' },
  { label: 'Concierge Team', email: 'concierge@pmlc.com', desc: 'Travel, dining, experiences' },
  { label: 'Emergency Support', email: 'emergency@pmlc.com', desc: '24/7 emergency assistance' },
  { label: 'Billing & Membership', email: 'billing@pmlc.com', desc: 'Payments, upgrades, renewals' },
  { label: 'Privacy & Discretion', email: 'privacy@pmlc.com', desc: 'Confidential inquiries only' },
  { label: 'Partnerships', email: 'partnerships@pmlc.com', desc: 'Become a verified partner' },
];

const stats = [
  { label: 'Average Response Time', value: '12 seconds', icon: <Clock className="w-4 h-4" /> },
  { label: 'Member Satisfaction', value: '99.7%', icon: <CheckCircle className="w-4 h-4" /> },
  { label: 'Issues Resolved First Contact', value: '94%', icon: <Shield className="w-4 h-4" /> },
  { label: 'Uptime Guarantee', value: '99.99%', icon: <Globe className="w-4 h-4" /> },
];

export default function SupportPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [copiedNumber, setCopiedNumber] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = pageRef.current?.querySelector('.page-header');
      if (header) gsap.fromTo(header, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
      const cards = pageRef.current?.querySelectorAll('.support-card');
      cards?.forEach((c, i) => gsap.fromTo(c, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out' }));
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const copyNumber = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(''), 2000);
  };

  return (
    <div ref={pageRef} className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="page-header text-center mb-16" style={{ opacity: 0 }}>
          <p className="text-xs tracking-[0.25em] uppercase text-[#C8A97E] mb-4 font-medium">Member Support</p>
          <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#F5F0EB] mb-4">24/7 Global Support Network</h1>
          <p className="text-[#9A9590] font-light max-w-2xl mx-auto">
            Wherever you are in the world, a dedicated support team is always one call away. Discreet, immediate, and fully confidential.
          </p>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <div key={i} className="bg-[#141414] border border-[#2A2A2A] p-6 text-center">
              <div className="text-[#C8A97E] mb-2 flex justify-center">{s.icon}</div>
              <p className="font-display text-2xl text-[#F5F0EB] mb-1">{s.value}</p>
              <p className="text-xs text-[#5C5854]">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Emergency Banner */}
        <div className="bg-[#C8A97E]/10 border border-[#C8A97E]/30 p-6 flex items-center gap-4 mb-16">
          <AlertCircle className="w-6 h-6 text-[#C8A97E] flex-shrink-0" />
          <div>
            <p className="text-sm text-[#F5F0EB] font-medium">Emergency Line — Always Open</p>
            <p className="text-xs text-[#9A9590]">For urgent matters: security incidents, medical emergencies, last-minute changes. Call any number below and say "Emergency" — you will be prioritized immediately.</p>
          </div>
        </div>

        {/* Support Numbers */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Phone className="w-5 h-5 text-[#C8A97E]" />
            <h2 className="font-display text-xl text-[#F5F0EB]">Global Support Numbers</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportNumbers.map((s, i) => (
              <div key={i} className="support-card bg-[#141414] border border-[#2A2A2A] p-6 hover:border-[#C8A97E]/20 transition-all duration-300" style={{ opacity: 0 }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-[#C8A97E] tracking-wider uppercase">{s.region}</span>
                  <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
                  </span>
                </div>
                <p className="text-xs text-[#5C5854] mb-1">{s.country}</p>
                <button
                  onClick={() => copyNumber(s.number)}
                  className="font-mono text-lg text-[#F5F0EB] hover:text-[#C8A97E] transition-colors cursor-pointer"
                  data-hover="true"
                >
                  {copiedNumber === s.number ? 'Copied!' : s.number}
                </button>
                <div className="flex items-center gap-3 mt-3 text-xs text-[#5C5854]">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {s.hours}</span>
                  <span>{s.languages}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Member Emails */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Mail className="w-5 h-5 text-[#C8A97E]" />
            <h2 className="font-display text-xl text-[#F5F0EB]">Member Email Channels</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {memberEmails.map((e, i) => (
              <div key={i} className="bg-[#141414] border border-[#2A2A2A] p-6 hover:border-[#C8A97E]/20 transition-all duration-300">
                <p className="text-sm text-[#F5F0EB] font-medium mb-1">{e.label}</p>
                <a href={`mailto:${e.email}`} className="text-sm text-[#C8A97E] hover:underline font-mono" data-hover="true">{e.email}</a>
                <p className="text-xs text-[#5C5854] mt-2">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Quick Access */}
        <div className="bg-[#141414] border border-[#2A2A2A] p-8 text-center">
          <MessageCircle className="w-8 h-8 text-[#C8A97E] mx-auto mb-4" />
          <h3 className="font-display text-xl text-[#F5F0EB] mb-2">Prefer WhatsApp?</h3>
          <p className="text-sm text-[#9A9590] font-light mb-6 max-w-md mx-auto">
            Most members use WhatsApp for day-to-day requests. Save our number and message us anytime — no templates, no bots, just your concierge team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="font-mono text-lg text-[#F5F0EB]">+65 6123 4567</span>
            <a href="https://wa.me/6561234567" target="_blank" rel="noopener noreferrer" className="btn-gold" data-hover="true">
              <MessageCircle className="w-4 h-4 mr-2" /> Open WhatsApp
            </a>
          </div>
          <p className="text-xs text-[#5C5854] mt-4">Average reply time: under 2 minutes</p>
        </div>
      </div>
    </div>
  );
}
