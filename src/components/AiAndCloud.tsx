import React, { useState } from 'react';
import { Sparkles, Cloud, Brain, Terminal, Server, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { AI_EXPLORATION_AREAS, CLOUD_CONCEPTS } from '../data/portfolioData';

export const AiAndCloud: React.FC = () => {
  const [activePromptType, setActivePromptType] = useState<string>('zero-shot');

  const promptExamples = {
    'zero-shot': {
      title: 'Zero-Shot Prompting',
      desc: 'Prompting the model to classify or reason without providing explicit input-output demonstrations.',
      example: '“Classify the following medical camp description into a primary medical department: Cardiology, Dermatology, or General Medicine.”',
    },
    'one-shot': {
      title: 'One-Shot Prompting',
      desc: 'Supplying exactly one canonical demonstration example to guide the model’s formatting and response style.',
      example: '“Example: ‘Free cataract screening and eye drops distribution’ -> Ophthalmology.\nTask: ‘Free dental checkup and tooth extraction’ -> ?”',
    },
    'few-shot': {
      title: 'Few-Shot Prompting',
      desc: 'Providing 2–5 structured examples to calibrate the model for complex edge cases and precise JSON schema output.',
      example: '“Input: [Camp details] -> JSON: { “camp_type”: “Pediatric”, “registration_required”: true }”',
    },
    'role-prompting': {
      title: 'Role Prompting',
      desc: 'Assigning a clear persona and perspective (e.g. clinical software tester, research assistant) to condition context.',
      example: '“You are a software testing assistant. Review the following FastAPI endpoint route and generate unit test edge cases for null image payloads.”',
    },
  };

  return (
    <section id="ai-cloud" className="py-20 bg-white border-y border-[#EFE2E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* SECTION 1: Exploring Artificial Intelligence */}
        <div>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#682536] bg-[#F7EBEC] border border-[#DFC5C7] mb-3">
              <Brain className="w-3.5 h-3.5" />
              Active Academic Horizons
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242122] tracking-tight">
              Exploring Artificial Intelligence
            </h2>
            <p className="mt-3 text-base text-[#66585B] font-light leading-relaxed">
              Sasikala is genuinely fascinated by how modern machine learning models learn patterns, make classifications, and assist humans. Below is her academic exploration across foundational and generative AI.
            </p>
          </div>

          {/* AI Focus Areas Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {AI_EXPLORATION_AREAS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF5F5] border border-[#EADBDC] hover:border-[#DFC5C7] hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#8C3D4D] bg-white px-2.5 py-0.5 rounded-full border border-[#E8D6D8]">
                    {item.status}
                  </span>
                  <h3 className="font-editorial text-lg font-bold text-[#242122] mt-3 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#524447] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Prompt Engineering Interactive Lab */}
          <div className="p-8 rounded-3xl bg-[#FAF0F2] border border-[#E8D4D6]">
            <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#682536]" />
                <h3 className="font-editorial text-xl font-bold text-[#242122]">
                  Interactive Study: Prompt Engineering Paradigms
                </h3>
              </div>
              <span className="text-xs text-[#736366]">
                Exploring structured prompt techniques for language models
              </span>
            </div>

            {/* Selector Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {(Object.keys(promptExamples) as (keyof typeof promptExamples)[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActivePromptType(key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activePromptType === key
                      ? 'bg-[#682536] text-white shadow-xs'
                      : 'bg-white text-[#4A4043] border border-[#DFC5C7] hover:bg-[#F8EAEB]'
                  }`}
                >
                  {promptExamples[key].title}
                </button>
              ))}
            </div>

            {/* Active Prompt Example Card */}
            <div className="p-5 rounded-2xl bg-white border border-[#DFC5C7] space-y-3">
              <div>
                <span className="text-xs font-bold text-[#682536] uppercase tracking-wider block mb-1">
                  Concept Overview:
                </span>
                <p className="text-xs text-[#524447]">
                  {promptExamples[activePromptType as keyof typeof promptExamples].desc}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FAF5F5] border border-[#EAE0E2] font-mono text-xs text-[#332B2D] leading-relaxed whitespace-pre-wrap">
                {promptExamples[activePromptType as keyof typeof promptExamples].example}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Cloud Computing */}
        <div id="cloud" className="pt-8 border-t border-[#EFE2E3]">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#682536] bg-[#F7EBEC] border border-[#DFC5C7] mb-3">
              <Cloud className="w-3.5 h-3.5" />
              Scalable Infrastructure
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242122] tracking-tight">
              Cloud Computing
            </h2>
            <p className="mt-3 text-base text-[#66585B] font-light leading-relaxed">
              Sasikala has an interest in Cloud Computing and is exploring how cloud platforms enable scalable applications, data storage, APIs, distributed systems, and modern software deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Animated Cloud & Distributed Mesh SVG Graphic (5 cols) */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-[#FAF5F5] border border-[#EADBDC] flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Subtle pulsing background glow */}
                <div className="absolute inset-0 bg-[#F7DFE2]/60 rounded-full blur-2xl animate-pulse" />

                {/* Animated SVG Cloud & Nodes */}
                <svg
                  className="w-40 h-40 relative z-10 text-[#682536]"
                  viewBox="0 0 200 200"
                  fill="none"
                >
                  {/* Central Cloud Body */}
                  <path
                    d="M60 120 C45 120, 35 110, 35 95 C35 80, 48 70, 60 70 C65 52, 85 40, 105 40 C125 40, 142 55, 145 72 C155 72, 165 80, 165 95 C165 110, 152 120, 140 120 Z"
                    fill="#FFFFFF"
                    stroke="#DFC5C7"
                    strokeWidth="2"
                    className="filter drop-shadow-sm"
                  />

                  {/* Radiating Distributed Nodes */}
                  <g className="animate-[pulse_3s_ease-in-out_infinite]">
                    <circle cx="100" cy="155" r="7" fill="#FAF5F5" stroke="#682536" strokeWidth="2" />
                    <line x1="100" y1="120" x2="100" y2="148" stroke="#DFC5C7" strokeWidth="1.5" strokeDasharray="3 3" />
                  </g>

                  <g className="animate-[pulse_4s_ease-in-out_infinite]">
                    <circle cx="45" cy="150" r="6" fill="#FAF5F5" stroke="#682536" strokeWidth="2" />
                    <line x1="70" y1="120" x2="48" y2="145" stroke="#DFC5C7" strokeWidth="1.5" strokeDasharray="3 3" />
                  </g>

                  <g className="animate-[pulse_3.5s_ease-in-out_infinite]">
                    <circle cx="155" cy="150" r="6" fill="#FAF5F5" stroke="#682536" strokeWidth="2" />
                    <line x1="130" y1="120" x2="152" y2="145" stroke="#DFC5C7" strokeWidth="1.5" strokeDasharray="3 3" />
                  </g>
                </svg>
              </div>

              <span className="font-editorial text-lg font-bold text-[#242122] mt-2">
                Distributed Cloud Architecture
              </span>
              <p className="text-xs text-[#736366] mt-1 max-w-xs">
                Connecting frontends, decoupled microservice APIs, persistent cloud databases, and asynchronous task queues.
              </p>
            </div>

            {/* Cloud Concepts Cards (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CLOUD_CONCEPTS.map((concept, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#EADBDC] hover:border-[#DFC5C7] shadow-2xs transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-[#682536] mb-2" />
                  <h4 className="font-editorial text-base font-bold text-[#242122]">
                    {concept.title}
                  </h4>
                  <p className="text-xs text-[#66585B] leading-relaxed mt-1">
                    {concept.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
