export interface PersonalInfo {
  name: string;
  title: string;
  company: string;
  location: string;
  bio: string;
  resumeUrl: string;
  avatarUrl?: string;
  careerStartDate?: string;
  cta: {
    primary: string;
    secondary: string;
  };
}

export interface ExperienceItem {
  id?: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  details: string;
  affiliation?: string;
  year: string;
  cgpa?: string;
  percentage?: string;
  highlights: string[];
}

export interface LearningTopic {
  title: string;
  icon: string;
  description: string;
  topics: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  status: 'Featured' | 'In Progress' | 'Completed' | string;
  description: string;
  fullDescription: string;
  detailedDescription?: string;
  techStack: string[];
  keyFeatures: string[];
  engineeringHighlights?: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

export interface AboutStat {
  label: string;
  value: string;
}

export interface AboutInfo {
  title: string;
  description: string;
  paragraphs?: string[];
  stats: AboutStat[];
}

export interface ContactLink {
  label: string;
  url: string;
  icon: string;
}

export interface QuickFact {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface ContactInfo {
  title: string;
  description: string;
  email: string;
  links: ContactLink[];
  quickFacts?: QuickFact[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  about: AboutInfo;
  experience: ExperienceItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  education: EducationItem[];
  learning: LearningTopic[];
  contact: ContactInfo;
  updatedAt?: string | Date;
}
