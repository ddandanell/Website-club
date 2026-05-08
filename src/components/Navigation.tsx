import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { label: 'The Club', href: '/#concept' },
  { label: 'Membership', href: '/#membership' },
  { label: 'Partners', href: '/partners' },
  { label: 'Events', href: '/events' },
  { label: 'About', href: '/about' },
  { label: 'Concierge', href: '/concierge' },
  { label: 'Support', href: '/support' },
];

export function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: '100px top',
      end: 'max',
      onUpdate: (self) => {
        setIsScrolled(self.progress > 0);
      },
    });
    return () => trigger.kill();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

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
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0A0A0A]/90 backdrop-blur-md py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); navigate('/'); }}
            className="font-display text-xl font-bold text-[#C8A97E] tracking-[0.1em] hover:text-[#D4B88E] transition-colors duration-300"
            data-hover="true"
          >
            PMLC
          </a>

          <div className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[12px] font-medium text-[#9A9590] hover:text-[#F5F0EB] transition-colors duration-300 relative group tracking-[0.08em] uppercase"
                data-hover="true"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C8A97E] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/support"
              onClick={(e) => { e.preventDefault(); navigate('/support'); }}
              className="text-[12px] font-medium text-[#9A9590] hover:text-[#C8A97E] transition-colors duration-300 tracking-[0.08em] uppercase flex items-center gap-1.5"
              data-hover="true"
            >
              <Phone className="w-3 h-3" /> 24/7
            </a>
            <a
              href="/login"
              onClick={(e) => { e.preventDefault(); navigate('/login'); }}
              className="text-[12px] font-medium text-[#9A9590] hover:text-[#F5F0EB] transition-colors duration-300 tracking-[0.08em] uppercase"
              data-hover="true"
            >
              Login
            </a>
            <a
              href="/apply"
              onClick={(e) => { e.preventDefault(); navigate('/apply'); }}
              className="text-[11px] font-semibold tracking-[0.08em] uppercase bg-[#C8A97E] text-[#0A0A0A] px-4 py-2 hover:bg-[#D4B88E] transition-all duration-300"
              data-hover="true"
            >
              Apply
            </a>
          </div>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#F5F0EB]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            data-hover="true"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#0A0A0A] transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xl font-display text-[#F5F0EB] hover:text-[#C8A97E] transition-colors duration-300"
              style={{
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isMobileMenuOpen ? 1 : 0,
                transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s`,
              }}
              data-hover="true"
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col items-center gap-4 mt-4 pt-4 border-t border-[#2A2A2A]">
            <a
              href="/login"
              onClick={(e) => { e.preventDefault(); navigate('/login'); setIsMobileMenuOpen(false); }}
              className="text-lg font-display text-[#9A9590] hover:text-[#C8A97E] transition-colors duration-300"
              data-hover="true"
            >
              Member Login
            </a>
            <a
              href="/apply"
              onClick={(e) => { e.preventDefault(); navigate('/apply'); setIsMobileMenuOpen(false); }}
              className="btn-gold"
              data-hover="true"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
