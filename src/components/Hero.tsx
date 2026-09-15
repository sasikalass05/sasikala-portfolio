import React from 'react';
import { ArrowDown, FileText, Send, MapPin, GraduationCap, Sparkles, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LearningOrbit } from './LearningOrbit';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const handleScrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center"
    >
      {/* Delicate background decorative elements - warm blush & ivory */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#F8E8EA]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FAF0F2]/80 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Editorial Text Column (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Metadata Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span
                id="hero-badge-identity"
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold text-[#682536] bg-[#F7EBEC] border border-[#E8D4D6]"
              >
                <GraduationCap className="w-3.5 h-3.5 text-[#682536]" />
                MCA Candidate • GRD College
              </span>

              <span
                id="hero-badge-location"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-[#615456] bg-white/80 border border-[#E8DCDE]"
              >
                <MapPin className="w-3.5 h-3.5 text-[#8C4656]" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-3">
              <h1
                id="hero-main-title"
                className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#242122] leading-[1.12]"
              >
                Hello, I’m{' '}
                <span className="relative inline-block text-[#682536] italic font-serif">
                  Sasikala.
                  <svg
                    className="absolute -bottom-1.5 left-0 w-full h-2 text-[#DFC5C7] -z-10"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 6 Q 50 1 100 6"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p
                id="hero-supporting-statement"
                className="font-editorial text-xl sm:text-2xl text-[#4A4043] leading-relaxed font-normal italic"
              >
                “{PERSONAL_INFO.heroStatement}”
              </p>
            </div>

            {/* Personal Introduction Narrative */}
            <p
              id="hero-personal-intro"
              className="font-sans text-base sm:text-lg text-[#52494B] leading-relaxed max-w-2xl"
            >
              {PERSONAL_INFO.introBio}
            </p>

            {/* Credibility & Core Values Bar */}
            <div className="pt-2 pb-1 border-y border-[#EFE4E4] grid grid-cols-3 gap-2 sm:gap-4 max-w-xl">
              <div>
                <span className="block font-editorial text-lg sm:text-xl font-bold text-[#682536]">
                  85.5%
                </span>
                <span className="block text-[11px] text-[#736366] font-medium leading-tight">
                  B.Sc IT Aggregate
                </span>
              </div>
              <div>
                <span className="block font-editorial text-lg sm:text-xl font-bold text-[#682536]">
                  90% / 89%
                </span>
                <span className="block text-[11px] text-[#736366] font-medium leading-tight">
                  MCA Sem 1 & 2
                </span>
              </div>
              <div>
                <span className="block font-editorial text-lg sm:text-xl font-bold text-[#682536]">
                  e-Yantra Merit
                </span>
                <span className="block text-[11px] text-[#736366] font-medium leading-tight">
                  Robotics & Embedded
                </span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-explore-cta"
                onClick={() => handleScrollTo('#projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide text-white bg-[#682536] hover:bg-[#541C29] shadow-[0_4px_16px_rgba(104,37,54,0.18)] hover:shadow-[0_6px_20px_rgba(104,37,54,0.25)] transition-all duration-200 active:scale-98"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                id="hero-resume-cta"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold tracking-wide text-[#682536] bg-white hover:bg-[#F9ECEE] border border-[#DFC5C7] shadow-2xs hover:shadow-xs transition-all duration-200 active:scale-98"
              >
                <FileText className="w-4 h-4 text-[#682536]" />
                <span>View Resume</span>
              </button>

              <button
                id="hero-connect-cta"
                onClick={() => handleScrollTo('#contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium tracking-wide text-[#4D4547] hover:text-[#682536] hover:bg-[#F5E6E8]/70 border border-transparent hover:border-[#E8D4D6] transition-all duration-200"
              >
                <span>Let’s Connect</span>
                <Send className="w-3.5 h-3.5 text-[#682536]" />
              </button>
            </div>
          </div>

          {/* Signature Learning Orbit Column (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="w-full max-w-md bg-gradient-to-b from-white/90 to-[#FDF8F8]/90 rounded-3xl p-4 sm:p-6 border border-[#EFE2E3] shadow-[0_12px_36px_rgba(104,37,54,0.06)] relative">
              {/* Corner decorative tag */}
              <div className="absolute -top-3 right-6 bg-[#682536] text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                Interactive Model
              </div>
              <LearningOrbit />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
