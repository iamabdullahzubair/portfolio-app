'use client';

import { usePortfolio } from '@/lib/portfolio-context';
import { useState } from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  Trophy,
  ChevronRight,
  Star,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function Experience() {
  const portfolio = usePortfolio();
  const experiences = portfolio.experience;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden bg-background">
      {/* Subtle modern ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/5 dark:bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary border border-border/80 text-muted-foreground mb-4">
            <Briefcase className="w-3.5 h-3.5 text-primary" />
            Career History
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Professional Experience
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-xl">
            Real-world enterprise engineering experience building scalable systems and secure workflows.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const isHovered = hoveredIndex === index;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={exp.id || index}
                className="group relative rounded-2xl border border-border/70 dark:border-white/10 bg-card/60 dark:bg-zinc-900/40 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:border-primary/50 dark:hover:border-white/30 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/60 dark:border-white/10">
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Active
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground font-medium">
                      <span className="text-foreground font-semibold flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-primary" />
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-secondary/80 border border-border/60 text-xs font-semibold text-foreground whitespace-nowrap self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                    {exp.period}
                  </div>
                </div>

                {/* Description */}
                <div className="pt-6 pb-5">
                  <p className={`text-sm sm:text-base text-muted-foreground leading-relaxed transition-all ${
                    isExpanded ? '' : 'line-clamp-3'
                  }`}>
                    {exp.description}
                  </p>

                  {exp.description && exp.description.length > 200 && (
                    <button
                      type="button"
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="mt-2 text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      {isExpanded ? 'Show less' : 'Read full summary'}
                      <ChevronRight className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Key Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mb-6 space-y-2.5 bg-secondary/30 dark:bg-zinc-950/40 p-4 sm:p-5 rounded-xl border border-border/50 dark:border-white/5">
                    <p className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                      <Trophy className="w-3.5 h-3.5 text-primary" />
                      Key Responsibilities &amp; Impact
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-muted-foreground mr-1">
                      Tech Stack:
                    </span>
                    {exp.highlights.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-secondary text-secondary-foreground border border-border/60 hover:border-primary/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}