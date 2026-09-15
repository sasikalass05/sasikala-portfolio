export interface Project {
  id: string;
  title: string;
  category: string;
  badge: string;
  shortDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  backend?: string;
  testing?: {
    type: string;
    description: string;
  }[];
  keyContribution: string;
  learningOutcome: string;
  futureScope?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  isFlagship?: boolean;
}

export interface SkillItem {
  name: string;
  description: string;
  level: 'Exploring' | 'Academic' | 'Practical Exposure' | 'Hands-on';
  category: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: SkillItem[];
}

export interface SubjectArea {
  id: string;
  title: string;
  category: string;
  concepts: string[];
  academicContext: string;
}

export interface TimelineMilestone {
  period: string;
  title: string;
  institutionOrContext: string;
  scoreOrHighlight?: string;
  description: string;
  highlights: string[];
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  questionOrProblem: string;
  exploration: string[];
  keyInsight: string;
  connectionToProject: string;
  tags: string[];
}
