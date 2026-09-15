import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Globe, CheckCircle2, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Internship / Junior Role Opportunity',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const topics = [
    'Internship / Junior Role Opportunity',
    'Academic Discussion on ViT / Healthcare AI',
    'Robotics & Embedded Systems Project',
    'General Mentorship / Tech Discussion',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#682536] bg-[#F7EBEC] border border-[#DFC5C7] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242122] tracking-tight">
            Let’s Connect
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#66585B] font-light leading-relaxed">
            Have an idea, opportunity, project, or simply want to talk technology? I’d be happy to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#FAF5F5] border border-[#EADBDC] shadow-[0_4px_24px_rgba(92,29,46,0.03)] space-y-6">
              <h3 className="font-editorial text-2xl font-bold text-[#242122]">
                Contact Information
              </h3>
              <p className="text-xs text-[#66595C] leading-relaxed">
                Feel free to reach out via email or connect with me through professional profiles. I look forward to connecting with developers, mentors, and recruiters.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#DFC5C7] flex items-center justify-center text-[#682536] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-wider text-[#736366] font-semibold block">
                      Primary Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs font-medium text-[#242122] hover:text-[#682536] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#DFC5C7] flex items-center justify-center text-[#682536] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-wider text-[#736366] font-semibold block">
                      Academic Email (GRD College)
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.academicEmail}`}
                      className="text-xs font-medium text-[#242122] hover:text-[#682536] transition-colors"
                    >
                      {PERSONAL_INFO.academicEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#DFC5C7] flex items-center justify-center text-[#682536] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-wider text-[#736366] font-semibold block">
                      Phone
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-xs font-medium text-[#242122] hover:text-[#682536] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#DFC5C7] flex items-center justify-center text-[#682536] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-wider text-[#736366] font-semibold block">
                      Location
                    </span>
                    <span className="text-xs text-[#242122]">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-4 border-t border-[#E8D6D8] space-y-2">
                <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#736366] block">
                  Professional Profiles:
                </span>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#E8DCDE]">
                    <span className="flex items-center gap-1.5 text-[#4D4547]">
                      <Linkedin className="w-3.5 h-3.5 text-[#0077B5]" /> LinkedIn:
                    </span>
                    <span className="font-mono text-[#8C3D4D] text-[11px]">{PERSONAL_INFO.linkedin}</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#E8DCDE]">
                    <span className="flex items-center gap-1.5 text-[#4D4547]">
                      <Github className="w-3.5 h-3.5 text-[#24292E]" /> GitHub:
                    </span>
                    <span className="font-mono text-[#8C3D4D] text-[11px]">{PERSONAL_INFO.github}</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#E8DCDE]">
                    <span className="flex items-center gap-1.5 text-[#4D4547]">
                      <Globe className="w-3.5 h-3.5 text-[#682536]" /> Portfolio:
                    </span>
                    <span className="text-[#682536] font-semibold text-[11px]">Current Portfolio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF5F5] border border-[#DFC5C7] shadow-[0_6px_28px_rgba(92,29,46,0.04)]">
              {submitted ? (
                <div
                  id="contact-form-success"
                  className="py-12 text-center space-y-4 animate-in fade-in duration-200"
                >
                  <div className="w-14 h-14 rounded-full bg-[#FAF0F1] border-2 border-[#682536] text-[#682536] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-[#242122]">
                    Thank you for reaching out!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5053] max-w-md mx-auto leading-relaxed">
                    Your message draft has been generated. You can also write directly to{' '}
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#682536] underline font-semibold">
                      {PERSONAL_INFO.email}
                    </a>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', topic: topics[0], message: '' });
                    }}
                    className="px-5 py-2 rounded-full text-xs font-semibold bg-[#682536] text-white"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-editorial text-2xl font-bold text-[#242122] mb-1">
                      Send a Message
                    </h3>
                    <p className="text-xs text-[#736366]">
                      Whether inquiring about job opportunities, discussing academic research, or networking.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#4A4043] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Priyadharshini"
                        className="w-full px-4 py-2.5 text-xs bg-white rounded-xl border border-[#DFC5C7] text-[#242122] placeholder:text-[#A8989B] focus:outline-none focus:ring-2 focus:ring-[#682536]/20 focus:border-[#682536]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#4A4043] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 text-xs bg-white rounded-xl border border-[#DFC5C7] text-[#242122] placeholder:text-[#A8989B] focus:outline-none focus:ring-2 focus:ring-[#682536]/20 focus:border-[#682536]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A4043] mb-1.5">
                      Discussion Topic
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-white rounded-xl border border-[#DFC5C7] text-[#242122] focus:outline-none focus:ring-2 focus:ring-[#682536]/20 focus:border-[#682536]"
                    >
                      {topics.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A4043] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the role, project, or topic you would like to discuss..."
                      className="w-full px-4 py-2.5 text-xs bg-white rounded-xl border border-[#DFC5C7] text-[#242122] placeholder:text-[#A8989B] focus:outline-none focus:ring-2 focus:ring-[#682536]/20 focus:border-[#682536]"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs font-semibold tracking-wide text-white bg-[#682536] hover:bg-[#521C28] shadow-sm hover:shadow-md transition-all active:scale-98"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
