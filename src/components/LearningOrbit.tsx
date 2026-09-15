import React, { useState } from 'react';
import { Sparkles, Play, Pause } from 'lucide-react';

interface OrbitItem {
  id: string;
  label: string;
  category: string;
  detail: string;
  ring: 'inner' | 'outer';
  angleOffset: number; // in degrees
}

export const LearningOrbit: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<OrbitItem | null>(null);

  // 10 technologies requested in prompt:
  // AI • Cloud • Java • Python • React • MySQL • Robotics • Web • Generative AI • Computer Vision
  const orbitItems: OrbitItem[] = [
    // Outer Ring (radius: ~140px on mobile, ~175px on desktop)
    { id: 'ai', label: 'AI', category: 'Core Interest', detail: 'Exploring intelligent reasoning, ML models, and predictive pipelines.', ring: 'outer', angleOffset: 0 },
    { id: 'cloud', label: 'Cloud', category: 'Computing', detail: 'Studying scalable cloud platforms, APIs, and distributed systems.', ring: 'outer', angleOffset: 72 },
    { id: 'robotics', label: 'Robotics', category: 'Physical AI', detail: 'e-Yantra merit background in sensors, actuators, and hardware control.', ring: 'outer', angleOffset: 144 },
    { id: 'genai', label: 'Generative AI', category: 'Modern Tech', detail: 'Investigating LLM architectures, prompting, and RAG concepts.', ring: 'outer', angleOffset: 216 },
    { id: 'cv', label: 'Computer Vision', category: 'Research Focus', detail: 'ViT patch embedding for medical image cancer classification.', ring: 'outer', angleOffset: 288 },

    // Inner Ring (radius: ~90px on mobile, ~110px on desktop)
    { id: 'python', label: 'Python', category: 'Programming', detail: 'Primary language for AI modeling, FastAPI backend, and data analysis.', ring: 'inner', angleOffset: 36 },
    { id: 'java', label: 'Java', category: 'Foundations', detail: 'Studied OOP principles, data structures, and enterprise logic.', ring: 'inner', angleOffset: 108 },
    { id: 'react', label: 'React', category: 'Web UI', detail: 'Exploring modern modular component architectures and hooks.', ring: 'inner', angleOffset: 180 },
    { id: 'mysql', label: 'MySQL', category: 'Databases', detail: 'Relational schema design, SQL optimization, and query indexing.', ring: 'inner', angleOffset: 252 },
    { id: 'web', label: 'Web', category: 'Full Stack', detail: 'HTML, CSS, JavaScript, and REST APIs connecting client and server.', ring: 'inner', angleOffset: 324 },
  ];

  return (
    <div
      id="learning-orbit-container"
      className="relative flex flex-col items-center justify-center p-4 sm:p-6 select-none"
    >
      {/* Decorative label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase text-[#682536] bg-[#F7ECEE] border border-[#E8D4D6]">
          <Sparkles className="w-3 h-3 text-[#8A374A]" />
          The Learning Orbit
        </span>
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="p-1 rounded-full text-[#8C7A7D] hover:text-[#682536] hover:bg-[#F3E6E7] transition-colors"
          title={isPaused ? 'Resume Orbit' : 'Pause Orbit'}
          aria-label={isPaused ? 'Resume Orbit' : 'Pause Orbit'}
        >
          {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
        </button>
      </div>

      <p className="text-xs text-[#736366] max-w-xs text-center mb-6">
        A dynamic constellation of technical domains Sasikala actively learns, explores, and connects.
      </p>

      {/* The Orbital Stage */}
      <div
        className="relative w-[320px] h-[320px] sm:w-[390px] sm:h-[390px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft background ambient gradient */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#FCEBED]/60 via-[#FDF5F6]/40 to-[#F5E6E8]/50 blur-xl pointer-events-none" />

        {/* Orbit Rings (SVG for crisp editorial geometry) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 400 400"
          fill="none"
        >
          {/* Outer ring */}
          <circle
            cx="200"
            cy="200"
            r="165"
            stroke="#DFC5C7"
            strokeWidth="1"
            strokeDasharray="4 6"
            className="opacity-70"
          />
          {/* Inner ring */}
          <circle
            cx="200"
            cy="200"
            r="105"
            stroke="#E8D5D6"
            strokeWidth="1"
            strokeDasharray="3 5"
            className="opacity-80"
          />
          {/* Subtle diagonal alignment crosshairs */}
          <line x1="200" y1="20" x2="200" y2="40" stroke="#DFC5C7" strokeWidth="1" />
          <line x1="200" y1="360" x2="200" y2="380" stroke="#DFC5C7" strokeWidth="1" />
          <line x1="20" y1="200" x2="40" y2="200" stroke="#DFC5C7" strokeWidth="1" />
          <line x1="360" y1="200" x2="380" y2="200" stroke="#DFC5C7" strokeWidth="1" />
        </svg>

        {/* Center Pivot: Sasikala */}
        <div
          id="orbit-center-node"
          className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border-2 border-[#DFC5C7] shadow-[0_8px_24px_rgba(104,37,54,0.08)] flex flex-col items-center justify-center p-2 text-center transition-transform hover:scale-105"
        >
          <div className="w-2 h-2 rounded-full bg-[#682536] mb-1 animate-pulse" />
          <span className="font-editorial text-base sm:text-lg font-bold text-[#242122] tracking-tight leading-tight">
            Sasikala
          </span>
          <span className="text-[9px] font-sans uppercase tracking-widest text-[#736366] font-medium mt-0.5">
            MCA Student
          </span>
        </div>

        {/* Rotating Outer Layer */}
        <div
          className={`absolute inset-0 pointer-events-none ${
            isPaused ? '' : 'animate-[spin_48s_linear_infinite]'
          }`}
          style={{ willChange: 'transform' }}
        >
          {orbitItems
            .filter((item) => item.ring === 'outer')
            .map((item) => {
              const rad = (item.angleOffset * Math.PI) / 180;
              // Radius is roughly 165px in 400px box -> ~41.25%
              const xPercent = 50 + 41.25 * Math.cos(rad);
              const yPercent = 50 + 41.25 * Math.sin(rad);

              return (
                <div
                  key={item.id}
                  className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Counter-rotation to keep the badge text readable right-side-up */}
                  <div
                    className={`${
                      isPaused ? '' : 'animate-[spin_48s_linear_infinite_reverse]'
                    }`}
                  >
                    <div
                      id={`orbit-outer-item-${item.id}`}
                      className="cursor-pointer px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium tracking-wide bg-white/95 text-[#3A3335] hover:text-[#682536] border border-[#DFC5C7] shadow-xs hover:shadow-md hover:border-[#682536] hover:scale-110 transition-all duration-200 backdrop-blur-xs whitespace-nowrap"
                    >
                      {item.label}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Rotating Inner Layer */}
        <div
          className={`absolute inset-0 pointer-events-none ${
            isPaused ? '' : 'animate-[spin_36s_linear_infinite_reverse]'
          }`}
          style={{ willChange: 'transform' }}
        >
          {orbitItems
            .filter((item) => item.ring === 'inner')
            .map((item) => {
              const rad = (item.angleOffset * Math.PI) / 180;
              // Radius is roughly 105px in 400px box -> ~26.25%
              const xPercent = 50 + 26.25 * Math.cos(rad);
              const yPercent = 50 + 26.25 * Math.sin(rad);

              return (
                <div
                  key={item.id}
                  className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Counter-rotation */}
                  <div
                    className={`${
                      isPaused ? '' : 'animate-[spin_36s_linear_infinite]'
                    }`}
                  >
                    <div
                      id={`orbit-inner-item-${item.id}`}
                      className="cursor-pointer px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-medium tracking-wide bg-[#FDF7F7] text-[#4A4043] hover:text-[#682536] border border-[#E5D2D4] shadow-2xs hover:shadow-sm hover:border-[#682536] hover:scale-110 transition-all duration-200 whitespace-nowrap"
                    >
                      {item.label}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Context tooltip card when hovered */}
      <div className="h-16 mt-4 flex items-center justify-center text-center max-w-sm px-4">
        {hoveredItem && (
          <div
            id="orbit-active-tooltip"
            className="animate-in fade-in zoom-in-95 duration-150 p-2.5 bg-white rounded-xl border border-[#DFC5C7] shadow-sm text-left w-full"
          >
            <div className="flex items-center justify-between gap-2 mb-0.5">
              <span className="font-editorial text-sm font-semibold text-[#682536]">
                {hoveredItem.label}
              </span>
              <span className="text-[10px] uppercase font-sans tracking-wider text-[#8A7578] font-medium px-2 py-0.5 rounded-full bg-[#FAF0F1]">
                {hoveredItem.category}
              </span>
            </div>
            <p className="text-[11px] text-[#4A4043] leading-snug">
              {hoveredItem.detail}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
