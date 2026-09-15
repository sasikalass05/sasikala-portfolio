import React, { useState } from 'react';
import { Lightbulb, ArrowRight, CheckCircle2, ChevronRight, Layers, HelpCircle, Sparkles } from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';

export const CaseStudies: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES[0].id);

  const selectedCase = CASE_STUDIES.find((c) => c.id === selectedCaseId) || CASE_STUDIES[0];

  return (
    <section id="case-studies" className="py-20 bg-[#FAF5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#682536] bg-[#F7EBEC] border border-[#DFC5C7] mb-3">
            <Lightbulb className="w-3.5 h-3.5" />
            Applied Analytical Thinking
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242122] tracking-tight">
            Case Studies & Problem Solving
          </h2>
          <p className="mt-3 text-base text-[#66585B] font-light">
            Reflecting on real-world engineering questions across healthcare AI, public data accessibility, robotics automation, and the machine learning lifecycle.
          </p>
        </div>

        {/* Case Studies Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            {CASE_STUDIES.map((item) => {
              const isSelected = item.id === selectedCaseId;
              return (
                <button
                  key={item.id}
                  id={`case-study-tab-${item.id}`}
                  onClick={() => setSelectedCaseId(item.id)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all duration-200 flex items-start justify-between group focus:outline-none ${
                    isSelected
                      ? 'bg-[#682536] text-white border-[#682536] shadow-sm'
                      : 'bg-white hover:bg-[#F9ECEE] text-[#332B2D] border-[#EADBDC]'
                  }`}
                >
                  <div className="space-y-1">
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-white/20 text-[#FCEBED]'
                          : 'bg-[#FAF0F1] text-[#8C3D4D]'
                      }`}
                    >
                      Case {item.number}
                    </span>
                    <h3 className="font-editorial text-base font-bold leading-snug">
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs line-clamp-1 ${
                        isSelected ? 'text-white/80' : 'text-[#736366]'
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 mt-2 transition-transform ${
                      isSelected
                        ? 'text-white translate-x-1'
                        : 'text-[#B8A4A7] group-hover:text-[#682536]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Deep Exploration Card (8 cols) */}
          <div className="lg:col-span-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#DFC5C7] shadow-[0_6px_28px_rgba(92,29,46,0.04)]">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-[#F0E4E4]">
                <div>
                  <span className="text-xs font-mono font-bold text-[#8C3D4D] uppercase tracking-wider">
                    Case Study {selectedCase.number}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#242122] mt-1">
                    {selectedCase.title}
                  </h3>
                  <p className="text-sm text-[#736366] italic font-editorial">
                    {selectedCase.subtitle}
                  </p>
                </div>
              </div>

              {/* Core Question / Problem */}
              <div className="mb-6 p-4 rounded-2xl bg-[#FBF4F5] border border-[#EBD6D8] flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#682536] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#682536] block mb-0.5">
                    Core Question Investigated:
                  </span>
                  <p className="text-sm font-medium text-[#332B2D] italic">
                    “{selectedCase.questionOrProblem}”
                  </p>
                </div>
              </div>

              {/* Exploration Points */}
              <div className="space-y-3 mb-8">
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#736366] block">
                  Analysis & Findings:
                </span>
                {selectedCase.exploration.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#FAF5F5] border border-[#EFE4E4] text-xs text-[#4A4043] leading-relaxed flex items-start gap-2.5"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#682536] shrink-0 mt-1.5" />
                    <span>{exp}</span>
                  </div>
                ))}
              </div>

              {/* Special visual flow for Case 04 (AI Application Lifecycle) */}
              {selectedCase.id === 'case-04' && (
                <div className="mb-8 p-5 rounded-2xl bg-[#2D282A] text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#F2B6C1] block mb-3">
                    Machine Learning Lifecycle Pipeline
                  </span>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 bg-white/10 rounded border border-white/20">Dataset</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F2B6C1]" />
                    <span className="px-2.5 py-1 bg-white/10 rounded border border-white/20">Training</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F2B6C1]" />
                    <span className="px-2.5 py-1 bg-white/10 rounded border border-white/20">Testing</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F2B6C1]" />
                    <span className="px-2.5 py-1 bg-white/10 rounded border border-white/20">Model</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F2B6C1]" />
                    <span className="px-2.5 py-1 bg-[#682536] text-white font-bold rounded border border-[#F2B6C1]">FastAPI</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F2B6C1]" />
                    <span className="px-2.5 py-1 bg-white/10 rounded border border-white/20">Application</span>
                  </div>
                </div>
              )}

              {/* Key Insight & Project Connection */}
              <div className="p-5 rounded-2xl bg-[#FDF8F9] border border-[#DFC5C7] space-y-3">
                <div>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#682536] block mb-1">
                    Key Analytical Takeaway:
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-[#242122] leading-relaxed">
                    {selectedCase.keyInsight}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F0E4E4] flex items-center justify-between gap-2 flex-wrap text-xs text-[#736366]">
                  <span>
                    <strong className="text-[#682536]">Practical Project Link:</strong>{' '}
                    {selectedCase.connectionToProject}
                  </span>
                  <div className="flex gap-1.5 flex-wrap">
                    {selectedCase.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-full text-[10px] bg-white text-[#524447] border border-[#E2D4D6]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
