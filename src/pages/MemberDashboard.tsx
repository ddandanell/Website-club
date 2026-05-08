import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Phone, Mail, MessageCircle, Shield, Clock, Star, Calendar, Globe, Bell, FileText, Settings } from 'lucide-react';

const quickActions = [
  { icon: <Phone className="w-5 h-5" />, label: 'Call Concierge', desc: '24/7 direct line' },
  { icon: <MessageCircle className="w-5 h-5" />, label: 'WhatsApp', desc: 'Under 2 min reply' },
  { icon: <Mail className="w-5 h-5" />, label: 'Email Request', desc: 'Detailed inquiries' },
  { icon: <Calendar className="w-5 h-5" />, label: 'Plan a Trip', desc: 'Full journey mgmt' },
  { icon: <FileText className="w-5 h-5" />, label: 'My Documents', desc: 'Travel docs, visas' },
  { icon: <Settings className="w-5 h-5" />, label: 'Account', desc: 'Profile & settings' },
];

const upcomingTrips = [
  { destination: 'Bali, Indonesia', dates: 'June 15-22, 2026', status: 'Confirmed', type: 'Leisure' },
  { destination: 'Singapore', dates: 'July 22, 2026', status: 'Planning', type: 'Members Dinner' },
];

const recentRequests = [
  { request: 'Dinner reservation at NOMA', status: 'Confirmed', date: '2 hours ago' },
  { request: 'Yacht charter — Benetti 40m', status: 'In Progress', date: '1 day ago' },
  { request: 'Airport pickup Dubai', status: 'Completed', date: '3 days ago' },
];

export default function MemberDashboard() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = pageRef.current?.querySelectorAll('.dash-card');
      cards?.forEach((c, i) => gsap.fromTo(c, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out' }));
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Welcome */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 gap-4">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[#C8A97E] mb-2 font-medium">Welcome Back</p>
            <h1 className="font-display text-3xl text-[#F5F0EB]">Elite Circle Member</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 text-xs text-[#C8A97E] border border-[#C8A97E]/20 px-3 py-1.5">
              <Shield className="w-3 h-3" /> Verified Member
            </span>
            <span className="flex items-center gap-2 text-xs text-emerald-400 border border-emerald-400/20 px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Active
            </span>
          </div>
        </div>

        {/* Member Card */}
        <div className="dash-card bg-gradient-to-br from-[#C8A97E]/20 via-[#141414] to-[#141414] border border-[#C8A97E]/30 p-8 mb-8 relative overflow-hidden" style={{ opacity: 0 }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8A97E]/5 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#C8A97E]">
                <img src="/concierge-2.jpg" alt="Your concierge" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="font-display text-xl text-[#F5F0EB]">Member ID: PMLC-EL-2847</h2>
                <p className="text-xs text-[#C8A97E] tracking-wider uppercase mt-1">Elite Circle — Since 2024</p>
                <p className="text-xs text-[#5C5854] mt-1">Membership valid through December 2026</p>
              </div>
            </div>
            <div className="text-left md:text-right">
              <p className="text-xs text-[#5C5854] mb-1">Your Concierge</p>
              <p className="text-sm text-[#F5F0EB] font-medium">James Chen</p>
              <p className="text-xs text-[#C8A97E]">+65 6123 4567</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-lg text-[#F5F0EB] mb-4">Quick Actions</h3>
            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {quickActions.map((a, i) => (
                <button key={i} className="dash-card bg-[#141414] border border-[#2A2A2A] p-5 text-left hover:border-[#C8A97E]/20 transition-all duration-300 group" style={{ opacity: 0 }}>
                  <div className="text-[#C8A97E] mb-3 group-hover:scale-110 transition-transform">{a.icon}</div>
                  <p className="text-sm text-[#F5F0EB] font-medium">{a.label}</p>
                  <p className="text-xs text-[#5C5854] mt-0.5">{a.desc}</p>
                </button>
              ))}
            </div>

            {/* Upcoming Trips */}
            <h3 className="font-display text-lg text-[#F5F0EB] mb-4">Upcoming Plans</h3>
            <div className="space-y-3 mb-8">
              {upcomingTrips.map((t, i) => (
                <div key={i} className="dash-card bg-[#141414] border border-[#2A2A2A] p-5 flex items-center justify-between" style={{ opacity: 0 }}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E]">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-[#F5F0EB] font-medium">{t.destination}</p>
                      <p className="text-xs text-[#5C5854]">{t.dates} · {t.type}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] tracking-wider uppercase px-3 py-1 ${t.status === 'Confirmed' ? 'text-emerald-400 border border-emerald-400/20' : 'text-[#C8A97E] border border-[#C8A97E]/20'}`}>
                    {t.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Recent Requests */}
            <h3 className="font-display text-lg text-[#F5F0EB] mb-4">Recent Requests</h3>
            <div className="space-y-2">
              {recentRequests.map((r, i) => (
                <div key={i} className="dash-card bg-[#141414] border border-[#2A2A2A] p-4 flex items-center justify-between" style={{ opacity: 0 }}>
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${r.status === 'Confirmed' ? 'bg-emerald-400' : r.status === 'In Progress' ? 'bg-[#C8A97E]' : 'bg-[#5C5854]'}`} />
                    <p className="text-sm text-[#F5F0EB]">{r.request}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-[#5C5854]">{r.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Concierge Card */}
            <div className="dash-card bg-[#141414] border border-[#2A2A2A] p-6" style={{ opacity: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src="/concierge-2.jpg" alt="James" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm text-[#F5F0EB] font-medium">James Chen</p>
                  <p className="text-xs text-[#C8A97E]">Your Concierge</p>
                </div>
              </div>
              <div className="space-y-2">
                <a href="tel:+6561234567" className="flex items-center gap-2 text-xs text-[#9A9590] hover:text-[#C8A97E] transition-colors" data-hover="true">
                  <Phone className="w-3.5 h-3.5" /> +65 6123 4567
                </a>
                <a href="mailto:james@pmlc.com" className="flex items-center gap-2 text-xs text-[#9A9590] hover:text-[#C8A97E] transition-colors" data-hover="true">
                  <Mail className="w-3.5 h-3.5" /> james@pmlc.com
                </a>
                <a href="https://wa.me/6561234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-[#9A9590] hover:text-[#C8A97E] transition-colors" data-hover="true">
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Direct
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-[#2A2A2A]">
                <p className="text-[10px] text-[#5C5854] flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> Average response: 2 minutes
                </p>
              </div>
            </div>

            {/* Member Benefits */}
            <div className="dash-card bg-[#141414] border border-[#2A2A2A] p-6" style={{ opacity: 0 }}>
              <h4 className="text-sm text-[#F5F0EB] font-medium mb-4">Your Benefits</h4>
              <ul className="space-y-3">
                {[
                  'Dedicated private team',
                  'Multi-country planning',
                  '24/7 priority handling',
                  'Helicopter pickup options',
                  'Members-only experiences',
                  'Private security coordination',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#9A9590]">
                    <Star className="w-3 h-3 text-[#C8A97E] mt-0.5 flex-shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Notifications */}
            <div className="dash-card bg-[#141414] border border-[#2A2A2A] p-6" style={{ opacity: 0 }}>
              <div className="flex items-center gap-2 mb-4">
                <Bell className="w-4 h-4 text-[#C8A97E]" />
                <h4 className="text-sm text-[#F5F0EB] font-medium">Notifications</h4>
              </div>
              <div className="space-y-3">
                <p className="text-xs text-[#9A9590]">Your Bali villa booking is confirmed for June 15.</p>
                <p className="text-xs text-[#9A9590]">New event: Dubai Grand Prix Experience — Nov 28.</p>
                <p className="text-xs text-[#5C5854]">Membership renews Dec 2026.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
