import React from 'react';
import { Target, Compass, Sparkles, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { CURRENTLY_EXPLORING, FUTURE_AMBITIONS } from '../data/portfolioData';

export const CurrentlyExploring: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF5F5] border-b border-[#EFE2E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Where I’m Heading (Career Goal) (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#682536] bg-[#F7EBEC] border border-[#DFC5C7]">
              <Target className="w-3.5 h-3.5" />
              Career Trajectory
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#242122] tracking-tight">
              Where I’m Heading
            </h2>

            <div className="p-7 rounded-3xl bg-white border border-[#DFC5C7] shadow-[0_6px_24px_rgba(92,29,46,0.04)] space-y-4">
              <p className="text-base text-[#4A4043] leading-relaxed italic font-editorial">
                “My goal is to build a strong career in the IT industry where I can continuously learn, contribute to meaningful projects, strengthen my technical skills, and grow into a responsible technology professional.”
              </p>

              <div className="p-4 rounded-2xl bg-[#FBF4F5] border border-[#EBD6D8] text-xs text-[#524447] space-y-2">
                <span className="font-bold text-[#682536] block uppercase tracking-wider text-[11px]">
                  Professional Aspirations:
                </span>
                <p>
                  Aspires to build a career with leading technology organizations, focusing on software development, artificial intelligence, cloud solutions, and intelligent automated systems.
                </p>
              </div>

              <div className="pt-2">
                <span className="text-xs font-semibold text-[#736366] uppercase tracking-wider block mb-2">
                  Immediate Future Ambitions:
                </span>
                <div className="space-y-2">
                  {FUTURE_AMBITIONS.slice(0, 4).map((amb, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#4A4043]">
                      <ArrowRight className="w-3.5 h-3.5 text-[#682536] shrink-0 mt-0.5" />
                      <span>{amb}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Currently Exploring & Learning (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#682536] bg-[#F7EBEC] border border-[#DFC5C7]">
              <Compass className="w-3.5 h-3.5" />
              Continuous Growth
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#242122] tracking-tight">
              Currently Exploring
            </h2>

            <p className="text-sm text-[#66585B] leading-relaxed">
              These are active areas of technical study, experimentation, and self-guided exploration that Sasikala is focusing on during her MCA studies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {CURRENTLY_EXPLORING.map((topic, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-[#EADBDC] flex items-center gap-3 hover:border-[#682536] transition-colors shadow-2xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#FAF0F1] text-[#682536] flex items-center justify-center shrink-0 text-xs font-bold font-mono">
                    0{idx + 1}
                  </div>
                  <span className="text-xs font-medium text-[#2E2829]">
                    {topic}
                  </span>
                </div>
              ))}
            </div>

            {/* Additional Ambitions List */}
            <div className="p-6 rounded-2xl bg-white border border-[#EADBDC] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#682536] block">
                Additional Development Goals:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#524447]">
                {FUTURE_AMBITIONS.slice(4).map((amb, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C3D4D] shrink-0 mt-0.5" />
                    <span>{amb}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
