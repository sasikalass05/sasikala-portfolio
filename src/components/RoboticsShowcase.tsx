import React, { useState } from 'react';
import { Bot, Cpu, Navigation, ArrowRight, Play, CheckCircle, ShieldCheck } from 'lucide-react';
import { ROBOTICS_PROJECT } from '../data/portfolioData';

export const RoboticsShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="robotics" className="py-20 bg-white border-y border-[#EFE2E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#682536] bg-[#F7EBEC] border border-[#DFC5C7] mb-3">
            <Bot className="w-3.5 h-3.5" />
            Hardware & Physical Automation
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242122] tracking-tight">
            Robotics & Intelligent Systems
          </h2>
          <p className="mt-3 text-base text-[#66585B] font-light">
            Bridging embedded microcontrollers, sensor perceptions, and real-time state machines for pragmatic material handling.
          </p>
        </div>

        {/* Robotics Project Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF5F5] border border-[#EADBDC] shadow-[0_4px_24px_rgba(92,29,46,0.04)]">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E8DADC]">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#682536] text-white">
                {ROBOTICS_PROJECT.badge}
              </span>
              <span className="ml-2 text-xs text-[#736366] font-medium">
                {ROBOTICS_PROJECT.category}
              </span>
            </div>
            <span className="text-xs text-[#682536] font-semibold bg-white px-3 py-1 rounded-full border border-[#DFC5C7]">
              e-Yantra Merit Connection
            </span>
          </div>

          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#242122] mb-3">
            {ROBOTICS_PROJECT.title}
          </h3>

          <p className="text-sm text-[#524447] leading-relaxed mb-8 max-w-3xl">
            {ROBOTICS_PROJECT.shortDescription}
          </p>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-5 rounded-2xl bg-white border border-[#EADBDC]">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#8A374A] block mb-1.5">
                The Problem
              </span>
              <p className="text-xs text-[#4A4043] leading-relaxed">
                {ROBOTICS_PROJECT.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#EADBDC]">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#682536] block mb-1.5">
                The Proposed Solution
              </span>
              <p className="text-xs text-[#4A4043] leading-relaxed">
                {ROBOTICS_PROJECT.solution}
              </p>
            </div>
          </div>

          {/* VISUAL FLOW: Detect -> Decide -> Move -> Deliver */}
          <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-white border border-[#DFC5C7] shadow-xs">
            <div className="flex items-center justify-between gap-2 mb-6">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#682536] flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5" />
                Operational State Loop: Detect → Decide → Move → Deliver
              </span>
              <span className="text-[11px] text-[#736366] font-medium hidden sm:inline">
                Click any step to inspect control logic
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ROBOTICS_PROJECT.flowSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.step}
                    id={`robotics-step-btn-${idx}`}
                    onClick={() => setActiveStep(idx)}
                    className={`p-4 rounded-xl text-left border transition-all focus:outline-none relative ${
                      isActive
                        ? 'bg-[#682536] text-white border-[#682536] shadow-sm'
                        : 'bg-[#FAF5F5] hover:bg-[#F6ECEE] text-[#332B2D] border-[#EADBDC]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-mono font-bold ${
                          isActive ? 'text-[#F3D5DA]' : 'text-[#8C3D4D]'
                        }`}
                      >
                        Step {step.step}
                      </span>
                      {isActive && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <div className="font-editorial text-lg font-bold mb-1">
                      {step.name}
                    </div>
                    <p
                      className={`text-xs leading-relaxed ${
                        isActive ? 'text-white/90' : 'text-[#66595C]'
                      }`}
                    >
                      {step.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Key Concepts and Learning Outcomes */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#736366] block mb-2">
                Applied Engineering Concepts:
              </span>
              <div className="flex flex-wrap gap-2">
                {ROBOTICS_PROJECT.concepts.map((concept, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white text-[#4A4043] border border-[#DFC5C7]"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 p-4 rounded-xl bg-white border border-[#E8DADC]">
              <span className="text-[11px] font-bold text-[#682536] uppercase tracking-wider block mb-1">
                Practical Takeaway:
              </span>
              <p className="text-xs text-[#524447] leading-relaxed">
                {ROBOTICS_PROJECT.keyLearning}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
