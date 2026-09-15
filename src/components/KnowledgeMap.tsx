import React, { useState } from 'react';
import { Network, Sparkles, BookOpen, Layers, Check, ArrowRight } from 'lucide-react';
import { SUBJECTS_STUDIED } from '../data/portfolioData';

export const KnowledgeMap: React.FC = () => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(SUBJECTS_STUDIED[0].id);

  const selectedSubject = SUBJECTS_STUDIED.find((s) => s.id === selectedSubjectId) || SUBJECTS_STUDIED[0];

  return (
    <section id="knowledge-map" className="py-20 bg-white border-y border-[#EFE2E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#682536] bg-[#F7EBEC] border border-[#DFC5C7] mb-3">
            <Network className="w-3.5 h-3.5" />
            Curriculum Depth & Exploration
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242122] tracking-tight">
            What I’ve Learned
          </h2>
          <p className="mt-3 text-base text-[#66585B] font-light">
            An interactive knowledge map showing the breadth of academic subjects studied across B.Sc IT and MCA at GRD College.
          </p>
        </div>

        {/* Knowledge Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Domain Nodes Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#736366] block mb-2 px-1">
              Select an Academic Domain:
            </span>

            {SUBJECTS_STUDIED.map((subject, idx) => {
              const isSelected = subject.id === selectedSubjectId;
              return (
                <button
                  key={subject.id}
                  id={`knowledge-node-${subject.id}`}
                  onClick={() => setSelectedSubjectId(subject.id)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all duration-200 flex items-center justify-between group focus:outline-none ${
                    isSelected
                      ? 'bg-[#682536] text-white border-[#682536] shadow-sm'
                      : 'bg-[#FAF5F5] hover:bg-[#F6ECEE] text-[#332B2D] border-[#EADBDC]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        isSelected
                          ? 'bg-white text-[#682536]'
                          : 'bg-[#EDE0E2] text-[#682536]'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="font-editorial text-base font-bold leading-tight">
                        {subject.title}
                      </h3>
                      <span
                        className={`text-[11px] block mt-0.5 ${
                          isSelected ? 'text-[#F3D5DA]' : 'text-[#8A7578]'
                        }`}
                      >
                        {subject.category} • {subject.concepts.length} core concepts
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isSelected
                        ? 'text-white translate-x-1'
                        : 'text-[#B8A4A7] group-hover:text-[#682536] group-hover:translate-x-0.5'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Knowledge Inspector Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#FAF5F5] border border-[#DFC5C7] shadow-[0_8px_30px_rgba(92,29,46,0.05)] relative">
              {/* Domain Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-[#EADBDC]">
                <div>
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#8C3D4D] bg-[#F5E6E8] px-2.5 py-0.5 rounded-full">
                    {selectedSubject.category}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#242122] mt-2">
                    {selectedSubject.title}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#736366]">Status:</span>
                  <span className="block text-xs font-semibold text-[#682536]">
                    Academically Mastered & Applied
                  </span>
                </div>
              </div>

              {/* Academic Context Insight */}
              <div className="mb-6 p-4 rounded-2xl bg-white border border-[#E8DCDE]">
                <div className="flex items-center gap-2 mb-1.5 text-xs font-semibold text-[#682536]">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Academic Learning Context</span>
                </div>
                <p className="text-xs sm:text-sm text-[#524447] leading-relaxed">
                  {selectedSubject.academicContext}
                </p>
              </div>

              {/* Core Concepts Cloud */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#736366]">
                    Key Concepts & Syllabus Areas:
                  </span>
                  <span className="text-[11px] text-[#8C3D4D] font-medium">
                    {selectedSubject.concepts.length} items
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedSubject.concepts.map((concept, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-[#EADBDC] flex items-center gap-2.5 text-xs font-medium text-[#332B2D] hover:border-[#682536] transition-colors shadow-2xs"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#FAF0F1] text-[#682536] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{concept}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
