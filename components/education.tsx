'use client';

import { portfolioConfig } from '@/lib/portfolio-config';
import { GraduationCap, Calendar, Award, Star, TrendingUp } from 'lucide-react';

export default function Education() {
  const education = portfolioConfig.education;

  return (
    <section id="education" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-linear-to-r from-primary to-accent rounded-full"></span>
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-background via-background to-secondary/20 rounded-2xl border border-border/60 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-700"></div>

              {/* Decorative line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative p-8">
                {/* Header section with institution and year */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div className="h-6 w-px bg-border/60"></div>
                      <span className="text-sm font-medium text-primary/80 uppercase tracking-wider">
                        {edu.year}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>

                    <p className="text-lg text-accent font-semibold mb-1">
                      {edu.field}
                    </p>

                    <p className="text-foreground/70 text-base">
                      {edu.institution}
                    </p>

                    {edu.affiliation && (
                      <p className="text-sm text-foreground/50 mt-1">
                        {edu.affiliation}
                      </p>
                    )}
                  </div>

                  {/* CGPA/Percentage Badge */}
                  {(edu.cgpa || edu.percentage) && (
                    <div className="relative">
                      <div className="flex items-center gap-3 bg-linear-to-r from-primary/10 to-accent/10 rounded-2xl px-6 py-3 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                          <Award className="w-5 h-5 text-primary relative z-10" />
                        </div>
                        <div>
                          <p className="text-xs text-foreground/60 font-medium">ACADEMIC SCORE</p>
                          <p className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                            {edu.cgpa ? `${edu.cgpa} CGPA` : edu.percentage}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Details section */}
                {edu.details && (
                  <div className="mb-4 p-4 bg-secondary/40 rounded-xl border border-border/40">
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                )}

                {/* Highlights section */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <p className="text-sm font-semibold text-foreground/80">Key Achievements</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="group/highlight px-3 py-1.5 bg-linear-to-r from-primary/5 to-accent/5 text-foreground/80 rounded-lg text-xs font-medium border border-border/40 hover:border-primary/40 hover:from-primary/10 hover:to-accent/10 transition-all duration-300 flex items-center gap-1"
                        >
                          <Star className="w-3 h-3 text-accent/60 group-hover/highlight:text-accent transition-colors" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}