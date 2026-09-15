import React, { useState } from 'react';
import { Milestone, CheckCircle2, ChevronDown, ChevronUp, Sparkles, Award } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data/portfolioData';

export const TimelineJourney: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="journey" className="py-20 bg-[#FAF5F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#682536] bg-[#F7EBEC] border border-[#DFC5C7] mb-3">
            <Milestone className="w-3.5 h-3.5" />
            Academic & Technical Evolution
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242122] tracking-tight">
            My Journey
          </h2>
          <p className="mt-3 text-base text-[#66585B] font-light">
            Tracing the key educational milestones, lab discoveries, and hands-on projects that shaped my path.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central spine line */}
          <div className="absolute top-6 bottom-6 left-4 sm:left-1/2 w-0.5 bg-gradient-to-b from-[#DFC5C7] via-[#C49DA1] to-[#DFC5C7] -translate-x-1/2" />

          <div className="space-y-12 relative">
            {TIMELINE_MILESTONES.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isExpanded = expandedIndex === idx;

              return (
                <div
                  key={idx}
                  id={`timeline-milestone-${idx}`}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card (Half width) */}
                  <div
                    className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                      isEven ? 'sm:text-left' : 'sm:text-right'
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-white border border-[#EADBDC] shadow-[0_4px_20px_rgba(92,29,46,0.04)] hover:border-[#DFC5C7] transition-all duration-200">
                      {/* Top bar with period and tag */}
                      <div
                        className={`flex items-center gap-2 mb-2 flex-wrap ${
                          isEven ? 'justify-start' : 'justify-start sm:justify-end'
                        }`}
                      >
                        <span className="text-[11px] font-sans font-semibold tracking-wider text-[#8A4755] uppercase px-2.5 py-0.5 rounded-full bg-[#FAF0F1] border border-[#F0DFE1]">
                          {item.period}
                        </span>
                        {item.scoreOrHighlight && (
                          <span className="text-[11px] font-semibold text-[#682536] flex items-center gap-1 bg-[#FBF2F3] px-2 py-0.5 rounded-full">
                            <Award className="w-3 h-3" />
                            {item.scoreOrHighlight}
                          </span>
                        )}
                      </div>

                      {/* Title & Context */}
                      <h3 className="font-editorial text-xl font-bold text-[#242122] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#8A7578] font-medium mt-0.5 mb-3">
                        {item.institutionOrContext}
                      </p>

                      <p className="text-xs text-[#524447] leading-relaxed mb-4 text-left">
                        {item.description}
                      </p>

                      {/* Interactive toggle for bullet highlights */}
                      <button
                        onClick={() => toggleExpand(idx)}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold text-[#682536] hover:text-[#521C28] transition-colors focus:outline-none ${
                          isEven ? '' : 'sm:ml-auto'
                        }`}
                      >
                        <span>{isExpanded ? 'Hide Key Learnings' : 'View Key Learnings'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="mt-3 pt-3 border-t border-[#F0E4E4] text-left space-y-2 animate-in fade-in duration-150">
                          {item.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs text-[#4A4043]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#682536] shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center Node on the spine */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FAF5F5] border-2 border-[#682536] flex items-center justify-center shadow-xs z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#682536]" />
                  </div>

                  {/* Empty Spacer Column for the opposite side */}
                  <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
