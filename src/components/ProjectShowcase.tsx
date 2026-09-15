import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  CheckCircle2,
  Server,
  Layers,
  Sparkles,
  ArrowRight,
  Activity,
  Cpu,
  ShieldCheck,
  Eye,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

export const ProjectShowcase: React.FC = () => {
  // State for the interactive Vision Transformer Pipeline Visualizer
  const [activeViTStep, setActiveViTStep] = useState<number>(0);

  const vitSteps = [
    {
      step: '01',
      title: 'Input Medical Scan',
      subtitle: 'Chest CT / Histopathology',
      detail:
        'A 2D medical chest scan (e.g. 224×224 pixels) is preprocessed and normalized to ensure uniform dynamic intensity ranges for deep learning evaluation.',
      visualLabel: 'Image 224×224',
    },
    {
      step: '02',
      title: 'Patch Embedding',
      subtitle: '16×16 Grid Division',
      detail:
        'The 2D image is partitioned into a grid of 196 non-overlapping 16×16 pixel patches. Each patch is flattened into a 1D vector and mapped via linear projection, augmented with 1D learnable positional embeddings.',
      visualLabel: '196 Patches + Position',
    },
    {
      step: '03',
      title: 'Transformer Encoder',
      subtitle: 'Multi-Head Self-Attention',
      detail:
        'Sequence of patch tokens passes through stacked Transformer encoder blocks. Multi-Head Self-Attention (MHSA) computes pairwise contextual attention weights across all patches simultaneously.',
      visualLabel: 'Multi-Head Attention',
    },
    {
      step: '04',
      title: 'MLP Classification Head',
      subtitle: 'Diagnostic Probability',
      detail:
        'The output state of the prepended class token [CLS] is routed into a Multi-Layer Perceptron (MLP) head with Softmax activation to generate diagnostic confidence probabilities.',
      visualLabel: 'Diagnostic Prediction',
    },
  ];

  const flagshipProject = PROJECTS_DATA.find((p) => p.isFlagship) || PROJECTS_DATA[0];
  const otherProjects = PROJECTS_DATA.filter((p) => !p.isFlagship);

  return (
    <section id="projects" className="py-24 bg-[#FAF5F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#682536] bg-[#F7EBEC] border border-[#DFC5C7] mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Project Storytelling
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242122] tracking-tight">
            Featured Academic Projects
          </h2>
          <p className="mt-3 text-base text-[#66585B] font-light">
            Every project tells a story: from the real-world problem to architectural idea, testing, and practical engineering lessons.
          </p>
        </div>

        {/* FLAGSHIP PROJECT: Vision Transformer Lung Cancer Classification */}
        <div
          id="flagship-project-vit"
          className="mb-20 p-8 sm:p-12 rounded-3xl bg-white border border-[#DFC5C7] shadow-[0_12px_40px_rgba(92,29,46,0.06)] relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAF0F2] rounded-full blur-3xl -z-10" />

          {/* Top meta strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-[#F0E4E4]">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#682536] text-white shadow-2xs">
                {flagshipProject.badge}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#F7EBEC] text-[#682536] border border-[#DFC5C7]">
                {flagshipProject.category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#736366] font-medium">Repository:</span>
              <span className="text-xs font-mono text-[#8C3D4D] bg-[#FAF0F1] px-2.5 py-1 rounded border border-[#E8D4D6]">
                {flagshipProject.githubUrl}
              </span>
            </div>
          </div>

          {/* Title & Core Narrative */}
          <div className="max-w-4xl mb-8">
            <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#242122] tracking-tight mb-4">
              {flagshipProject.title}
            </h3>
            <p className="text-base text-[#524447] leading-relaxed">
              {flagshipProject.shortDescription}
            </p>
          </div>

          {/* Problem vs. Proposed Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-[#FAF5F5] border border-[#EADBDC]">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#8A374A] block mb-2">
                The Problem
              </span>
              <p className="text-xs sm:text-sm text-[#4A4043] leading-relaxed">
                {flagshipProject.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF0F2] border border-[#E8D4D6]">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#682536] block mb-2">
                Proposed ViT Approach
              </span>
              <p className="text-xs sm:text-sm text-[#4A4043] leading-relaxed">
                {flagshipProject.solution}
              </p>
            </div>
          </div>

          {/* INTERACTIVE ViT PIPELINE VISUALIZATION */}
          <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#2D282A] to-[#1F1C1D] text-white shadow-inner">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#F2B6C1]" />
                <span className="font-editorial text-lg font-bold tracking-wide text-white">
                  Vision Transformer (ViT) Architectural Pipeline
                </span>
              </div>
              <span className="text-[11px] text-[#D8B4BC] uppercase tracking-wider font-sans">
                Interactive Concept Flow
              </span>
            </div>

            {/* Pipeline Step Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-6">
              {vitSteps.map((s, idx) => {
                const isActive = activeViTStep === idx;
                return (
                  <button
                    key={s.step}
                    id={`vit-step-btn-${idx}`}
                    onClick={() => setActiveViTStep(idx)}
                    className={`p-3.5 rounded-xl text-left transition-all border focus:outline-none ${
                      isActive
                        ? 'bg-[#682536] border-[#F2B6C1] shadow-md scale-102'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 text-white/70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-[#F2B6C1] font-bold">
                        {s.step}
                      </span>
                      {isActive && <Eye className="w-3.5 h-3.5 text-[#F2B6C1]" />}
                    </div>
                    <div className="font-editorial text-sm font-semibold text-white leading-tight">
                      {s.title}
                    </div>
                    <div className="text-[10px] text-white/60 mt-0.5 truncate">
                      {s.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Step Deep Dive Box */}
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#F2B6C1]">
                    Stage {vitSteps[activeViTStep].step}:
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {vitSteps[activeViTStep].title} ({vitSteps[activeViTStep].subtitle})
                  </span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed max-w-2xl">
                  {vitSteps[activeViTStep].detail}
                </p>
              </div>

              <div className="shrink-0 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-center">
                <span className="text-[10px] uppercase font-sans text-white/60 block">Representation</span>
                <span className="text-xs font-mono font-bold text-[#F2B6C1]">
                  {vitSteps[activeViTStep].visualLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Backend & Testing Deep Dive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* FastAPI Backend */}
            <div className="p-6 rounded-2xl bg-[#FAF5F5] border border-[#EADBDC]">
              <div className="flex items-center gap-2 mb-3">
                <Server className="w-4 h-4 text-[#682536]" />
                <h4 className="font-editorial text-lg font-bold text-[#242122]">
                  Backend API Architecture: FastAPI
                </h4>
              </div>
              <p className="text-xs text-[#524447] leading-relaxed">
                {flagshipProject.backend}
              </p>
            </div>

            {/* Software Testing Strategy */}
            <div className="p-6 rounded-2xl bg-[#FAF5F5] border border-[#EADBDC]">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#682536]" />
                <h4 className="font-editorial text-lg font-bold text-[#242122]">
                  Testing & Quality Assurance
                </h4>
              </div>
              <div className="space-y-2.5">
                {flagshipProject.testing?.map((t, idx) => (
                  <div key={idx} className="text-xs text-[#524447]">
                    <span className="font-semibold text-[#682536] mr-1.5">
                      • {t.type}:
                    </span>
                    <span>{t.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Learnings & Technologies */}
          <div className="p-6 rounded-2xl bg-[#FBF4F5] border border-[#EBD6D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#682536]">
                Key Learning & Competency Gained
              </span>
              <p className="text-xs text-[#524447] leading-relaxed max-w-2xl">
                {flagshipProject.learningOutcome}
              </p>
            </div>

            <div className="shrink-0 flex flex-wrap gap-1.5 max-w-sm">
              {flagshipProject.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white text-[#4D4547] border border-[#DFC5C7]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* PROJECT 2: Health Camp Search Engine */}
        {otherProjects.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EADBDC] shadow-[0_4px_24px_rgba(92,29,46,0.04)]"
          >
            {/* Top meta strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-[#F0E4E4]">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#FAF0F1] text-[#682536] border border-[#E8D4D6]">
                  {project.badge}
                </span>
                <span className="text-xs text-[#736366] font-medium">
                  {project.category}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-[#736366] font-medium">Links:</span>
                <span className="text-xs font-mono text-[#8C3D4D] bg-[#FAF0F1] px-2 py-0.5 rounded border border-[#E8D4D6]">
                  GitHub: {project.githubUrl}
                </span>
                <span className="text-xs font-mono text-[#8C3D4D] bg-[#FAF0F1] px-2 py-0.5 rounded border border-[#E8D4D6]">
                  Demo: {project.liveDemoUrl}
                </span>
              </div>
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#242122] tracking-tight mb-3">
              {project.title}
            </h3>

            <p className="text-sm text-[#524447] leading-relaxed mb-8 max-w-3xl">
              {project.shortDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-2xl bg-[#FAF5F5] border border-[#EADBDC]">
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#8A374A] block mb-1.5">
                  The Problem
                </span>
                <p className="text-xs text-[#4A4043] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF0F2] border border-[#E8D4D6]">
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#682536] block mb-1.5">
                  The Solution
                </span>
                <p className="text-xs text-[#4A4043] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF5F5] border border-[#EADBDC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#682536] block mb-1">
                  Key Contribution & Outcome
                </span>
                <p className="text-xs text-[#524447] leading-relaxed">
                  {project.keyContribution} — {project.learningOutcome}
                </p>
              </div>

              <div className="shrink-0 flex flex-wrap gap-1.5">
                {project.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white text-[#4D4547] border border-[#DFC5C7]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
