import { useNavigate, useLocation } from 'react-router';
import { footerConfig } from '../config';
import { Mail } from 'lucide-react';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-icon.png" alt="" className="w-8 h-8 object-contain opacity-90" />
              <h3 className="font-display text-2xl text-[#C8A97E] tracking-[0.1em]">PMLC</h3>
            </div>
            <p className="text-sm text-[#5C5854] font-light leading-[1.7] mb-6">
              Private Members Lifestyle Club — A private club for selected individuals who want the world handled for them.
            </p>
            <p className="text-xs text-[#5C5854] flex items-center gap-2">
              <Mail className="w-3 h-3 text-[#C8A97E]" /> membership@pmlc.com
            </p>
          </div>

          {/* Membership Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#F5F0EB] mb-6 font-medium">Membership</h4>
            <ul className="space-y-3">
              {footerConfig.membershipLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-sm text-[#9A9590] hover:text-[#C8A97E] transition-colors duration-300 font-light" data-hover="true">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Page Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#F5F0EB] mb-6 font-medium">Club</h4>
            <ul className="space-y-3">
              <li><a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className="text-sm text-[#9A9590] hover:text-[#C8A97E] transition-colors duration-300 font-light" data-hover="true">About PMLC</a></li>
              <li><a href="/partners" onClick={(e) => handleLinkClick(e, '/partners')} className="text-sm text-[#9A9590] hover:text-[#C8A97E] transition-colors duration-300 font-light" data-hover="true">Preferred Partners</a></li>
              <li><a href="/apply" onClick={(e) => handleLinkClick(e, '/apply')} className="text-sm text-[#9A9590] hover:text-[#C8A97E] transition-colors duration-300 font-light" data-hover="true">Apply for Membership</a></li>
              <li><a href="/login" onClick={(e) => handleLinkClick(e, '/login')} className="text-sm text-[#9A9590] hover:text-[#C8A97E] transition-colors duration-300 font-light" data-hover="true">Member Login</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#F5F0EB] mb-6 font-medium">Legal</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-[#9A9590] font-light cursor-pointer hover:text-[#C8A97E] transition-colors">Privacy Policy</span></li>
              <li><span className="text-sm text-[#9A9590] font-light cursor-pointer hover:text-[#C8A97E] transition-colors">Terms of Membership</span></li>
              <li><span className="text-sm text-[#9A9590] font-light cursor-pointer hover:text-[#C8A97E] transition-colors">Cookie Policy</span></li>
              <li><span className="text-sm text-[#9A9590] font-light cursor-pointer hover:text-[#C8A97E] transition-colors">GDPR Compliance</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2A2A2A]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#5C5854]">{footerConfig.copyright}</p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] tracking-[0.15em] uppercase text-[#C8A97E]/60 border border-[#C8A97E]/20 px-3 py-1">Application-only</span>
            <span className="text-[10px] tracking-[0.15em] uppercase text-[#5C5854]">87 Team Members Globally</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
