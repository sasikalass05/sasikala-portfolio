import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { TimelineJourney } from './components/TimelineJourney';
import { EducationCertifications } from './components/EducationCertifications';
import { SkillsSection } from './components/SkillsSection';
import { KnowledgeMap } from './components/KnowledgeMap';
import { ProjectShowcase } from './components/ProjectShowcase';
import { RoboticsShowcase } from './components/RoboticsShowcase';
import { CaseStudies } from './components/CaseStudies';
import { AiAndCloud } from './components/AiAndCloud';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#FAF5F5] text-[#242122] flex flex-col selection:bg-[#F2D7DA] selection:text-[#521C28]">
      {/* Top sticky navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Learning Orbit */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. Personal Introduction ("A little about me") & Principles */}
        <AboutMe />

        {/* 3. My Journey (Vertical Timeline) */}
        <TimelineJourney />

        {/* 4. Education & Robotics / Certifications */}
        <EducationCertifications />

        {/* 5. Technical Skills with Interactive Explanations */}
        <SkillsSection />

        {/* 6. Subjects & Areas Studied ("What I’ve Learned" Knowledge Map) */}
        <KnowledgeMap />

        {/* 7. Featured Projects (ViT Lung Cancer Flagship & Health Camp Search) */}
        <ProjectShowcase />

        {/* 8. Robotics & Intelligent Systems (Automated Material Handling Robot) */}
        <RoboticsShowcase />

        {/* 9. Case Studies & Problem Solving */}
        <CaseStudies />

        {/* 10. AI & Generative AI & Cloud Computing */}
        <AiAndCloud />

        {/* 11. Currently Exploring & Career Trajectory */}
        <CurrentlyExploring />

        {/* 12. Let’s Connect & Contact Form */}
        <ContactSection />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />

      {/* Verified Academic Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
