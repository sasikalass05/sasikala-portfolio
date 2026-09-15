import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Knowledge Map', href: '#knowledge-map' },
    { label: 'Projects', href: '#projects' },
    { label: 'AI & Cloud', href: '#ai-cloud' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Philosophy', href: '#philosophy' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF5F5]/95 backdrop-blur-md py-3 shadow-[0_4px_20px_-4px_rgba(92,29,46,0.06)] border-b border-[#EADBDC]'
          : 'bg-[#FAF5F5]/70 backdrop-blur-sm py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#"
          id="nav-brand-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full bg-[#F3E5E6] border border-[#DFC5C7] flex items-center justify-center text-[#682536] font-editorial text-lg font-semibold transition-transform duration-300 group-hover:scale-105">
            S
          </div>
          <div>
            <span className="block font-editorial text-xl font-bold tracking-tight text-[#242122] group-hover:text-[#682536] transition-colors">
              {PERSONAL_INFO.preferredName}
            </span>
            <span className="block text-[11px] font-sans tracking-wider uppercase text-[#736366]">
              MCA & IT Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-3 py-1.5 rounded-full text-xs font-medium text-[#4D4547] hover:text-[#682536] hover:bg-[#F3E6E7]/60 transition-all tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-resume-button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-[#682536] bg-[#F7EBEC] hover:bg-[#F0DCDD] border border-[#DFC5C7] transition-all duration-200 hover:shadow-xs active:scale-98"
          >
            <FileText className="w-3.5 h-3.5 text-[#682536]" />
            <span>Resume</span>
          </button>

          <a
            id="nav-connect-button"
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-white bg-[#682536] hover:bg-[#521C28] shadow-[0_2px_10px_rgba(104,37,54,0.15)] transition-all duration-200 active:scale-98"
          >
            <span>Let’s Connect</span>
            <Send className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-resume-trigger"
            onClick={onOpenResume}
            className="p-2 rounded-full text-[#682536] bg-[#F7EBEC] border border-[#DFC5C7]"
            title="View Resume"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#4D4547] hover:text-[#242122] hover:bg-[#F3E6E7]/60 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#FAF5F5] border-b border-[#EADBDC] px-6 pt-3 pb-6 shadow-xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="grid grid-cols-2 gap-1 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                id={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 text-xs font-medium text-[#4D4547] hover:text-[#682536] hover:bg-[#F3E6E7]/50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#EADBDC] flex flex-col gap-2">
            <button
              id="mobile-view-resume-drawer-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#682536] bg-[#F7EBEC] border border-[#DFC5C7]"
            >
              <FileText className="w-4 h-4" />
              <span>View Full Resume</span>
            </button>
            <a
              id="mobile-connect-drawer-btn"
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#682536]"
            >
              <span>Get in Touch</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
