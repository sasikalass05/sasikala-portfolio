import React from 'react';
import { Compass, Target, Sparkles, Heart, BookOpen, Film, Globe2, UserCheck, ShieldCheck } from 'lucide-react';
import { LEARNING_PHILOSOPHY, STRENGTHS } from '../data/portfolioData';

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white/60 border-y border-[#EFE2E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#682536] bg-[#F7EBEC] border border-[#DFC5C7] mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            Personal Introduction
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242122] tracking-tight">
            A little about me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#66585B] font-light">
            A genuine glimpse into my academic beginnings, intellectual curiosity, and how I approach learning computer science.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#40373A] text-base leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-editorial first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-[#682536] first-letter:leading-none">
              I am currently pursuing my Master of Computer Applications (MCA) at Dr. G. R. Damodaran College of Science in Coimbatore, after having built my core technical foundation with a Bachelor of Science in Information Technology (graduating with 85.5%).
            </p>

            <p>
              My fascination with technology didn’t start with buzzwords or grand promises. It began in the computer lab — writing small C and Java programs, seeing SQL queries bring order to chaotic tables, and discovering that a machine only does what you patiently instruct it to do. Through academic coursework, hands-on lab experiments, and continuous self-learning, that curiosity grew into a genuine passion.
            </p>

            <p>
              Rather than boxing myself into a single narrow technology, I enjoy exploring different areas across the computing spectrum. My interests range from <strong>Artificial Intelligence, Machine Learning, and Generative AI</strong> to <strong>Cloud Computing, Software Development, Web Architectures, Databases, Robotics</strong>, and <strong>Data-oriented applications</strong>. Experiencing both hardware-level embedded sensors (through the e-Yantra robotics program) and high-level Vision Transformer architectures has taught me to see software as a living, interconnected system.
            </p>

            <p>
              I consider myself a quick learner. In an industry where frameworks and paradigms evolve continuously, I believe that <em>curiosity</em>, <em>consistency</em>, and the <em>humility to keep learning</em> matter far more than claiming to know everything. Every error message is simply a hint toward deeper understanding, and believing in “Never Give Up” keeps me persistent until things work cleanly.
            </p>

            {/* Authentic personal context badge */}
            <div className="p-4 rounded-2xl bg-[#FBF4F5] border border-[#EBD6D8] mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[#524447]">
              <div>
                <span className="font-semibold text-[#682536] block">Hometown:</span>
                Tenkasi, Tamil Nadu, India
              </div>
              <div>
                <span className="font-semibold text-[#682536] block">Languages:</span>
                Tamil & English
              </div>
              <div>
                <span className="font-semibold text-[#682536] block">Personal Interests:</span>
                Reading Books & Video Editing
              </div>
            </div>
          </div>

          {/* Side Editorial Card: Learning Philosophy & Principles (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EADBDC] shadow-[0_8px_30px_rgba(92,29,46,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FCEBED] rounded-full blur-2xl -z-10" />

              <span className="text-xs uppercase font-sans tracking-widest text-[#8A7578] font-semibold">
                Guiding Principle
              </span>

              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#682536] mt-2 mb-3">
                “{LEARNING_PHILOSOPHY.quote}”
              </h3>

              <p className="text-sm text-[#5C5053] leading-relaxed italic mb-6">
                {LEARNING_PHILOSOPHY.body}
              </p>

              {/* 3 Core Pillars */}
              <div className="space-y-4 pt-4 border-t border-[#F0E4E4]">
                {LEARNING_PHILOSOPHY.principles.map((p, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-[#FAF0F1] border border-[#E8D4D6] flex items-center justify-center text-[#682536] shrink-0 mt-0.5">
                      {idx === 0 && <Compass className="w-4 h-4" />}
                      {idx === 1 && <Target className="w-4 h-4" />}
                      {idx === 2 && <Sparkles className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="font-editorial text-base font-bold text-[#242122]">
                        {p.title}
                      </h4>
                      <p className="text-xs text-[#66595C] leading-snug mt-0.5">
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Strengths & Attributes ("What Defines Me") */}
        <div id="philosophy" className="mt-20 pt-16 border-t border-[#EFE4E4]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#682536] bg-[#F7EBEC] px-3 py-1 rounded-full border border-[#EADBDC]">
              Core Personal Attributes
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#242122] mt-3">
              What Defines Me
            </h3>
            <p className="text-sm text-[#66595C] mt-2">
              The foundational work ethics, habits, and mindset I bring to academic teams and future technology roles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {STRENGTHS.map((st, i) => (
              <div
                key={i}
                id={`strength-card-${i}`}
                className="group p-5 rounded-2xl bg-white border border-[#EFE2E3] hover:border-[#DFC5C7] hover:shadow-[0_8px_24px_rgba(104,37,54,0.06)] transition-all duration-200"
              >
                <div className="w-7 h-7 rounded-lg bg-[#FAF0F1] group-hover:bg-[#682536] group-hover:text-white text-[#682536] flex items-center justify-center text-xs font-bold transition-colors mb-3">
                  0{i + 1}
                </div>
                <h4 className="font-editorial text-lg font-bold text-[#242122] group-hover:text-[#682536] transition-colors">
                  {st.name}
                </h4>
                <p className="text-xs text-[#66595C] mt-1.5 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
