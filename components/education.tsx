'use client';

import { usePortfolio } from '@/lib/portfolio-context';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  const portfolio = usePortfolio();
  const education = portfolio.education;

  return (
    <section id="education" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary border border-border/80 text-muted-foreground mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-primary" />
            Academic Background
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Education
          </h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border/70 dark:border-white/10 bg-card/60 dark:bg-zinc-900/40 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:border-primary/50 dark:hover:border-white/30 hover:shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-xl bg-secondary text-primary">
                      <GraduationCap className="w-4 h-4" />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base font-semibold text-foreground/80 pl-11">
                    {edu.field}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground pl-11">
                    {edu.institution} {edu.details ? `— ${edu.details}` : ''}
                  </p>
                  {edu.affiliation && (
                    <p className="text-xs text-muted-foreground/75 pl-11">
                      Affiliation: {edu.affiliation}
                    </p>
                  )}
                </div>

                <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 pl-11 sm:pl-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-secondary border border-border/60 text-xs font-semibold text-foreground">
                    <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                    {edu.year}
                  </div>
                  {(edu.cgpa || edu.percentage) && (
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      Score: {edu.cgpa ? `${edu.cgpa} CGPA` : edu.percentage}
                    </div>
                  )}
                </div>
              </div>

              {edu.highlights && edu.highlights.length > 0 && (
                <div className="mt-4 pt-4 border-t border-border/50 dark:border-white/5 pl-11 flex flex-wrap gap-1.5">
                  {edu.highlights.map((h, hIdx) => (
                    <span
                      key={hIdx}
                      className="px-2.5 py-0.5 rounded-md text-xs bg-secondary/70 text-muted-foreground border border-border/50"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}