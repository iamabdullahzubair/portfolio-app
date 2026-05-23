'use client';

import { portfolioConfig } from '@/lib/portfolio-config';
import { useState } from 'react';
import {
  Code2,
  Database,
  Cloud,
  Layout,
  Server,
  ToolCase,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  BarChart3,
  Star
} from 'lucide-react';

export default function Skills() {
  const skillCategories = portfolioConfig.skills;
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Icon mapping for different categories
  const getCategoryIcon = (title) => {
    const iconMap = {
      'Frontend': <Layout className="w-5 h-5" />,
      'Backend': <Server className="w-5 h-5" />,
      'Database': <Database className="w-5 h-5" />,
      'Cloud & DevOps': <Cloud className="w-5 h-5" />,
      'Programming Languages': <Code2 className="w-5 h-5" />,
      'Tools & Technologies': <ToolCase className="w-5 h-5" />,
    };
    return iconMap[title] || <Code2 className="w-5 h-5" />;
  };

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
          Skills & Technologies
        </h2>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="group relative bg-gradient-to-br from-background via-background to-secondary/20 rounded-2xl border border-border/60 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onMouseEnter={() => setHoveredCategory(idx)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-accent/0 to-primary/0 group-hover:from-primary/5 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-700"></div>

              {/* Decorative top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>

              {/* Category header with icon */}
              <div className="relative p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                      <div className="relative p-2.5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                        {getCategoryIcon(category.title)}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill count badge */}
                  <div className="px-2.5 py-1 bg-primary/10 rounded-full border border-primary/20">
                    <span className="text-xs font-semibold text-primary">
                      {category.skills.length} skills
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills tags with enhanced styling */}
              <div className="relative p-6 pt-0">
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skill}
                      className="relative group/skill px-4 py-2 bg-gradient-to-br from-primary/5 to-accent/5 text-foreground rounded-full text-sm font-medium border border-border/40 hover:border-primary/50 transition-all duration-300 overflow-hidden cursor-pointer"
                      style={{ animationDelay: `${skillIdx * 0.03}s` }}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <span className="relative z-10 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full group-hover/skill:scale-150 transition-transform"></span>
                        {skill}
                        {hoveredSkill === skill && (
                          <CheckCircle2 className="w-3 h-3 text-accent animate-bounce" />
                        )}
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/15 to-accent/15 transform scale-x-0 group-hover/skill:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating particles effect on hover */}
              {hoveredCategory === idx && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-ping"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-ping delay-300"></div>
                  <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-primary rounded-full animate-ping delay-700"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced motivational message */}
        <div className="mt-16 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-8 md:p-10 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 overflow-hidden">
            {/* Animated border gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Continuous Growth</span>
              </div>

              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                I&apos;m always eager to learn new technologies and improve my skills. Currently exploring
                <span className="text-primary font-semibold mx-1">advanced patterns in React</span> and
                <span className="text-accent font-semibold ml-1">backend optimization techniques</span>.
              </p>

              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary"></div>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
                  ))}
                </div>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}