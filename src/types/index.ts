/**
 * Shared Type Definitions for Hari Prasanth V's Portfolio
 */

export interface Project {
  id: string;
  name: string;
  type: string;
  client: string;
  timeline: string;
  problem: string;
  approach: string[];
  impact: { label: string; value: string }[];
  techStack: string[];
  imagePath: string;
  projectUrl?: string;
  deepDive: {
    architectureReasoning: string;
    tradeoffs: { considered: string; whyRejected: string; whyChosen: string }[];
    wouldDoDifferently: string;
    codeSnippet: string;
  };
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  notes: string;
}

export interface Certification {
  title: string;
  issuer: string;
  period: string;
  topics: string[];
}

export interface Language {
  name: string;
  level: string;
  proficiency: number; // 0–100
  flag: string;
}

export type Locale = 'en' | 'de' | 'ta' | 'hi';
