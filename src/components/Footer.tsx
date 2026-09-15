import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#FAF5F5] border-t border-[#EADBDC] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="text-center sm:text-left space-y-1">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="font-editorial text-2xl font-bold text-[#242122] tracking-tight">
              {PERSONAL_INFO.preferredName}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#682536]" />
          </div>
          <p className="font-editorial italic text-sm text-[#736366]">
            “Learning. Building. Growing.”
          </p>
          <p className="text-[11px] text-[#8C7A7D]">
            © 2026 Sasikala. All rights reserved. • Tenkasi, Tamil Nadu
          </p>
        </div>

        {/* Social / Link Placeholders */}
        <div className="flex items-center gap-4 text-xs font-medium text-[#524447]">
          <span className="text-[#8C7A7D]">LinkedIn: {PERSONAL_INFO.linkedin}</span>
          <span className="text-[#8C7A7D]">•</span>
          <span className="text-[#8C7A7D]">GitHub: {PERSONAL_INFO.github}</span>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          id="footer-back-to-top-btn"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#682536] bg-white hover:bg-[#F5E6E8] border border-[#DFC5C7] transition-all shadow-2xs hover:shadow-xs active:scale-98"
          title="Return to top of page"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
