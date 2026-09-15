import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Award, CheckCircle2, GraduationCap, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#DFC5C7] flex flex-col text-left relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Actions Toolbar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#EADBDC] flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#682536]" />
            <span className="font-editorial text-lg font-bold text-[#242122]">
              Academic Resume — Sasikala S
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              id="resume-print-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#4A4043] bg-[#FAF5F5] hover:bg-[#F3E6E7] border border-[#DFC5C7] transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Resume link placeholder: [ADD RESUME LINK]. Please attach the direct hosted PDF file.');
              }}
              id="resume-download-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[#682536] hover:bg-[#521C28] transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </a>

            <button
              onClick={onClose}
              id="resume-close-modal-btn"
              className="p-1.5 rounded-full text-[#736366] hover:text-[#242122] hover:bg-[#F3E6E7] transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-8 sm:p-12 space-y-8 print:p-0">
          {/* Header */}
          <div className="border-b border-[#EADBDC] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#242122] tracking-tight">
                SASIKALA. S
              </h1>
              <p className="text-sm font-medium text-[#682536] mt-1">
                MCA Student • IT Enthusiast • Aspiring Software Professional
              </p>
              <p className="text-xs text-[#736366] mt-1">
                9/73 Thirupathi Venkatasalapathi Street, Chockampatti, Tenkasi District, Tamil Nadu
              </p>
            </div>

            <div className="text-xs text-[#4A4043] space-y-1 sm:text-right font-mono">
              <div className="flex sm:justify-end items-center gap-1.5">
                <Mail className="w-3 h-3 text-[#682536]" />
                <span>sasikala0935@gmail.com</span>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <Mail className="w-3 h-3 text-[#682536]" />
                <span>25mca048@grd.edu.in</span>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <Phone className="w-3 h-3 text-[#682536]" />
                <span>+91 86680 37581</span>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#682536]" />
                <span>Tenkasi, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-4">
            <h2 className="font-editorial text-xl font-bold text-[#242122] flex items-center gap-2 border-b border-[#EFE4E4] pb-2">
              <GraduationCap className="w-4 h-4 text-[#682536]" />
              EDUCATION
            </h2>

            <div className="space-y-4 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-[#242122]">
                    Master of Computer Applications (MCA) — Pursuing
                  </h3>
                  <p className="text-[#682536] font-medium">
                    Dr. G. R. Damodaran College of Science (GRD College), Coimbatore
                  </p>
                  <p className="text-[#736366]">
                    Academic Performance: 1st Semester 90% | 2nd Semester 89%
                  </p>
                </div>
                <div className="text-right text-[#736366] font-mono mt-1 sm:mt-0">
                  2025 – 2027
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-[#242122]">
                    Bachelor of Science in Information Technology (B.Sc IT)
                  </h3>
                  <p className="text-[#682536] font-medium">
                    Dr. G. R. Damodaran College of Science (GRD College), Coimbatore
                  </p>
                  <p className="text-[#736366]">
                    Graduated with Aggregate: 85.5%
                  </p>
                </div>
                <div className="text-right text-[#736366] font-mono mt-1 sm:mt-0">
                  2022 – 2025
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-[#242122]">
                    Higher Secondary Certificate (HSC) — 75%
                  </h3>
                  <p className="text-[#736366]">King Universe Matric Hr. Sec School, Kumanthapuram</p>
                </div>
                <div className="text-right text-[#736366] font-mono mt-1 sm:mt-0">
                  2022
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-[#242122]">
                    Secondary School Leaving Certificate (SSLC) — 77.8%
                  </h3>
                  <p className="text-[#736366]">King Universe Matric Hr. Sec School, Kumanthapuram</p>
                </div>
                <div className="text-right text-[#736366] font-mono mt-1 sm:mt-0">
                  2020
                </div>
              </div>
            </div>
          </div>

          {/* Academic Projects */}
          <div className="space-y-4">
            <h2 className="font-editorial text-xl font-bold text-[#242122] flex items-center gap-2 border-b border-[#EFE4E4] pb-2">
              <Code className="w-4 h-4 text-[#682536]" />
              PROJECTS
            </h2>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-[#FAF5F5] border border-[#EADBDC]">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-sm text-[#242122]">
                    Lung Cancer Classification Using Vision Transformer Algorithm
                  </h3>
                  <span className="text-[10px] font-mono text-[#682536] bg-white px-2 py-0.5 rounded border border-[#DFC5C7]">
                    MCA Flagship
                  </span>
                </div>
                <p className="text-[#524447] leading-relaxed">
                  Developed an intelligent deep learning system using the Vision Transformer (ViT) architecture to classify lung cancer medical scans through 16×16 patch embedding and multi-head self-attention. Exposed the model via a lightweight FastAPI REST backend with unit, integration, and validation testing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF5F5] border border-[#EADBDC]">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-sm text-[#242122]">
                    Location Based Data Extraction for Health Camp Search Engine
                  </h3>
                  <span className="text-[10px] font-mono text-[#682536] bg-white px-2 py-0.5 rounded border border-[#DFC5C7]">
                    B.Sc IT Capstone
                  </span>
                </div>
                <p className="text-[#524447] leading-relaxed">
                  Engineered a location-aware web search engine that extracts and presents regional healthcare camps, blood donation events, and medical service details based on community geographic parameters and locality queries.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF5F5] border border-[#EADBDC]">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-sm text-[#242122]">
                    Automated Material Handling Robot (Concept)
                  </h3>
                  <span className="text-[10px] font-mono text-[#682536] bg-white px-2 py-0.5 rounded border border-[#DFC5C7]">
                    Robotics & Automation
                  </span>
                </div>
                <p className="text-[#524447] leading-relaxed">
                  Formulated an automated closed-loop transport robot utilizing optical route sensors and obstacle avoidance states to move materials autonomously between predefined facility workstations.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements & Awards */}
          <div className="space-y-4">
            <h2 className="font-editorial text-xl font-bold text-[#242122] flex items-center gap-2 border-b border-[#EFE4E4] pb-2">
              <Award className="w-4 h-4 text-[#682536]" />
              ACHIEVEMENTS & AWARDS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#FAF5F5] border border-[#EFE2E3] flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#682536] shrink-0 mt-0.5" />
                <span>e-Yantra Certificate of Merit in eLSI: Basics of Embedded System and Robotics (IIT Bombay)</span>
              </div>
              <div className="p-3 rounded-lg bg-[#FAF5F5] border border-[#EFE2E3] flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#682536] shrink-0 mt-0.5" />
                <span>Completed Career Oriented Course in Computer Hardware Maintenance at Certificate Level</span>
              </div>
              <div className="p-3 rounded-lg bg-[#FAF5F5] border border-[#EFE2E3] flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#682536] shrink-0 mt-0.5" />
                <span>Introduction to Data Science Course in Cisco Networking Academy</span>
              </div>
              <div className="p-3 rounded-lg bg-[#FAF5F5] border border-[#EFE2E3] flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#682536] shrink-0 mt-0.5" />
                <span>Getting Started with Cisco Packet Tracer in Cisco Networking Academy</span>
              </div>
            </div>
          </div>

          {/* Skills, Languages & Personal Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#EADBDC] text-xs">
            <div>
              <h3 className="font-bold text-[#242122] uppercase tracking-wider mb-2">
                TECHNICAL SKILLS
              </h3>
              <p className="text-[#524447] leading-relaxed">
                Python, Java, C, C#, PHP, HTML5, CSS3, JavaScript, React, MySQL, SQL, FastAPI, SPSS, Excel, Android Studio, Apache JMeter, Git.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#242122] uppercase tracking-wider mb-2">
                LANGUAGES & HOBBIES
              </h3>
              <p className="text-[#524447] leading-relaxed">
                Languages: Tamil & English (Fluent).
                <br />
                Hobbies: Video Editing, Reading Books.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#242122] uppercase tracking-wider mb-2">
                SOFT SKILLS
              </h3>
              <p className="text-[#524447] leading-relaxed">
                Communication (Effective collaboration), Teamwork (Active group contributions), Adaptability (Quick to adjust in dynamic environments).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
