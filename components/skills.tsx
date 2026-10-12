'use client';

import { usePortfolio } from '@/lib/portfolio-context';
import { useState } from 'react';
import {
  Code2,
  Database,
  Cloud,
  Layout,
  Server,
  TrendingUp,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export default function Skills() {
  const portfolio = usePortfolio();
  const skillCategories = portfolio.skills;
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getCategoryIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('iam') || t.includes('security') || t.includes('auth')) return <ShieldCheck className="w-5 h-5 text-primary" />;
    if (t.includes('backend') || t.includes('server')) return <Server className="w-5 h-5 text-primary" />;
    if (t.includes('frontend') || t.includes('layout')) return <Layout className="w-5 h-5 text-primary" />;
    if (t.includes('database') || t.includes('sql') || t.includes('data')) return <Database className="w-5 h-5 text-primary" />;
    if (t.includes('system') || t.includes('design') || t.includes('architecture')) return <TrendingUp className="w-5 h-5 text-primary" />;
    if (t.includes('devops') || t.includes('cloud') || t.includes('tool')) return <Cloud className="w-5 h-5 text-primary" />;
    return <Code2 className="w-5 h-5 text-primary" />;
  };

  return (
    <section id="skills" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary border border-border/80 text-muted-foreground mb-4">
            <Code2 className="w-3.5 h-3.5 text-primary" />
            Capabilities &amp; Tools
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Technical Skillset
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-xl">
            Proficiency across modern backend engineering, frontend frameworks, cloud tooling, and database design.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title || idx}
              className="group rounded-2xl border border-border/70 dark:border-white/10 bg-card/60 dark:bg-zinc-900/40 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-primary/50 dark:hover:border-white/30 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-secondary text-primary border border-border/60">
                      {getCategoryIcon(category.title)}
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold text-muted-foreground px-2 py-0.5 rounded-md bg-secondary border border-border/50">
                    {category.skills.length}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill;
                    return (
                      <span
                        key={skill}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-default ${
                          isHovered
                            ? 'bg-primary text-primary-foreground border-primary scale-105'
                            : 'bg-secondary/70 text-foreground/85 border-border/60 hover:border-foreground/30'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}