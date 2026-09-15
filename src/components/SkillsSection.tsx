import React, { useState, useMemo } from 'react';
import {
  Code,
  Globe,
  Database,
  Brain,
  Cloud,
  CheckCircle,
  Cpu,
  Wrench,
  Search,
  Sparkles,
  Info,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SkillItem } from '../types';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  // Flatten all skills for searching
  const allSkills = useMemo(() => {
    return SKILL_CATEGORIES.flatMap((c) => c.skills);
  }, []);

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((cat) => {
      if (selectedCategory !== 'All' && cat.title !== selectedCategory) {
        return { ...cat, skills: [] };
      }
      const filtered = cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...cat, skills: filtered };
    }).filter((cat) => cat.skills.length > 0);
  }, [selectedCategory, searchQuery]);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-4 h-4" />;
      case 'Globe':
        return <Globe className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      case 'Brain':
        return <Brain className="w-4 h-4" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4" />;
      case 'CheckCircle':
        return <CheckCircle className="w-4 h-4" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4" />;
      case 'Wrench':
      default:
        return <Wrench className="w-4 h-4" />;
    }
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Hands-on':
        return 'bg-[#F2E4E6] text-[#521C28] border-[#DEC4C6]';
      case 'Practical Exposure':
        return 'bg-[#EDE7F6] text-[#4A148C] border-[#D1C4E9]';
      case 'Academic':
        return 'bg-[#E8F0FE] text-[#1967D2] border-[#C2D7FA]';
      case 'Exploring':
      default:
        return 'bg-[#FDF3E7] text-[#B06000] border-[#FBE0BD]';
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#FAF5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#682536] bg-[#F7EBEC] border border-[#DFC5C7] mb-3">
            <Brain className="w-3.5 h-3.5" />
            Competencies & Toolset
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242122] tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-base text-[#66585B] font-light">
            Categorized naturally by academic foundation and hands-on project exposure. Hover or tap any skill tag to view what Sasikala has learned and applied it for.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#EADBDC]">
          {/* Categories Pill Nav */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                selectedCategory === 'All'
                  ? 'bg-[#682536] text-white shadow-xs'
                  : 'bg-white text-[#4D4547] hover:bg-[#F5E6E8] border border-[#E0D0D2]'
              }`}
            >
              All Domains
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  selectedCategory === cat.title
                    ? 'bg-[#682536] text-white shadow-xs'
                    : 'bg-white text-[#4D4547] hover:bg-[#F5E6E8] border border-[#E0D0D2]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#8C7A7D] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search a skill or concept..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-white rounded-full border border-[#DFC5C7] text-[#242122] placeholder:text-[#A19194] focus:outline-none focus:ring-2 focus:ring-[#682536]/20 focus:border-[#682536]"
            />
          </div>
        </div>

        {/* Dynamic Interactive Inspector Banner */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-white border border-[#DFC5C7] shadow-[0_4px_16px_rgba(92,29,46,0.04)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FAF0F1] border border-[#E8D4D6] flex items-center justify-center text-[#682536] shrink-0 mt-0.5 sm:mt-0">
              <Info className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-editorial text-base font-bold text-[#242122]">
                  {activeSkill ? activeSkill.name : 'Interactive Skill Inspector'}
                </span>
                {activeSkill && (
                  <span
                    className={`text-[10px] font-sans font-semibold px-2 py-0.5 rounded-full border ${getLevelBadgeColor(
                      activeSkill.level
                    )}`}
                  >
                    {activeSkill.level}
                  </span>
                )}
              </div>
              <p className="text-xs text-[#5C5053] mt-0.5 max-w-3xl">
                {activeSkill
                  ? activeSkill.description
                  : 'Hover over or click any skill badge below to examine how Sasikala learned or used it in coursework and projects.'}
              </p>
            </div>
          </div>

          <div className="text-[11px] text-[#736366] font-medium shrink-0 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#8C3D4D]" />
            <span>Real academic & project context</span>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-[#EADBDC] shadow-[0_2px_12px_rgba(92,29,46,0.02)]"
            >
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#F0E4E4]">
                <div className="w-7 h-7 rounded-lg bg-[#FAF0F1] text-[#682536] flex items-center justify-center">
                  {getCategoryIcon(category.iconName)}
                </div>
                <h3 className="font-editorial text-xl font-bold text-[#242122]">
                  {category.title}
                </h3>
                <span className="text-[11px] text-[#8A7578] font-sans font-medium ml-auto">
                  {category.skills.length} competencies
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => {
                  const isSelected = activeSkill?.name === skill.name;
                  return (
                    <button
                      key={skill.name}
                      id={`skill-tag-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                      onMouseEnter={() => setActiveSkill(skill)}
                      onClick={() => setActiveSkill(skill)}
                      className={`group px-3.5 py-2 rounded-xl text-left border transition-all duration-200 focus:outline-none ${
                        isSelected
                          ? 'bg-[#682536] text-white border-[#682536] shadow-sm scale-102'
                          : 'bg-[#FAF5F5] hover:bg-[#F6ECEE] text-[#332B2D] border-[#EADBDC] hover:border-[#DEC5C7]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold tracking-tight">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[9px] uppercase tracking-wider px-1.5 py-0.2 rounded-sm border ${
                            isSelected
                              ? 'bg-white/20 text-white border-white/30'
                              : getLevelBadgeColor(skill.level)
                          }`}
                        >
                          {skill.level === 'Practical Exposure' ? 'Applied' : skill.level}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
