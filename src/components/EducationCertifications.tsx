import React from 'react';
import { GraduationCap, Cpu, Award, BookCheck, ShieldAlert, Check, Layers, ExternalLink } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS, ROBOTICS_EDUCATION } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white border-y border-[#EFE2E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#682536] bg-[#F7EBEC] border border-[#DFC5C7] mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Credentials
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242122] tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-3 text-base text-[#66585B] font-light">
            Academic qualifications from Dr. G. R. Damodaran College of Science and certified industry skill foundations.
          </p>
        </div>

        {/* Degrees Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {EDUCATION_DATA.slice(0, 2).map((edu, idx) => (
            <div
              key={idx}
              id={`edu-degree-card-${idx}`}
              className="p-8 rounded-3xl bg-[#FAF5F5] border border-[#EADBDC] hover:border-[#DFC5C7] hover:shadow-[0_8px_28px_rgba(92,29,46,0.05)] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#682536] px-3 py-1 rounded-full bg-white border border-[#DFC5C7]">
                    {edu.duration}
                  </span>
                  <span className="text-xs font-semibold text-[#8C3D4D] bg-[#F4E3E5] px-2.5 py-0.5 rounded-full">
                    {edu.performance}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-bold text-[#242122] tracking-tight mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-[#736366] mb-4">
                  {edu.institution} • {edu.location}
                </p>

                <p className="text-sm text-[#4A4043] leading-relaxed mb-6">
                  {edu.description}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#736366] block mb-2">
                  Key Curriculum Focus:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {edu.keySubjects.map((subj, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white text-[#4D4547] border border-[#E2D5D6]"
                    >
                      {subj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Robotics Education Section */}
        <div id="robotics-education" className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#FDF9F9] to-[#F8EFF0] border border-[#DFC5C7] shadow-sm mb-16 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#F5DEE1]/50 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#682536] bg-white border border-[#DFC5C7] mb-3">
              <Cpu className="w-3.5 h-3.5 text-[#682536]" />
              Dedicated Specialized Study
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#242122]">
              {ROBOTICS_EDUCATION.title}
            </h3>
            <p className="text-sm text-[#736366] italic mt-1 mb-4 font-editorial">
              {ROBOTICS_EDUCATION.subtitle}
            </p>
            <p className="text-sm text-[#4D4547] leading-relaxed">
              {ROBOTICS_EDUCATION.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {ROBOTICS_EDUCATION.keyCompetencies.map((comp, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/90 border border-[#EADBDC] hover:border-[#682536] transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#682536]" />
                  <h4 className="font-editorial text-base font-bold text-[#242122]">
                    {comp.title}
                  </h4>
                </div>
                <p className="text-xs text-[#5C5053] leading-relaxed">
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Certifications & Merit List */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-[#682536]" />
            <h3 className="font-editorial text-2xl font-bold text-[#242122]">
              Certifications & Academic Honors
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                id={`cert-item-${idx}`}
                className="p-5 rounded-2xl bg-[#FAF5F5] border border-[#EADBDC] flex items-start gap-4 hover:border-[#DFC5C7] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F4E3E5] border border-[#DFC5C7] flex items-center justify-center text-[#682536] shrink-0 mt-0.5">
                  <BookCheck className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#8A4656] bg-white px-2 py-0.5 rounded-full border border-[#E8D4D6]">
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] text-[#736366] font-medium">
                      {cert.type}
                    </span>
                  </div>
                  <h4 className="font-editorial text-base font-bold text-[#242122]">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[#524447] mt-1 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
