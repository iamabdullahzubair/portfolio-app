'use client';

import { portfolioConfig } from '@/lib/portfolio-config';
import { useState } from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  Trophy,
  TrendingUp,
  Award,
  ChevronRight,
  Star,
  Clock
} from 'lucide-react';

export default function Experience() {
  const experiences = portfolioConfig.experience;
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-secondary/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
          Professional Journey
        </h2>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Experience Card */}
              <div
                className="group relative bg-gradient-to-br from-background via-background to-secondary/20 rounded-2xl border border-border/60 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden h-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-accent/0 to-primary/0 group-hover:from-primary/5 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-700"></div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Top border accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div className="relative p-8">
                  {/* Header section */}
                  <div className="flex flex-col gap-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <div className="h-6 w-px bg-border/60"></div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-accent" />
                          <span className="text-sm font-medium text-primary/80">{exp.period}</span>
                        </div>
                      </div>

                      {/* Duration badge */}
                      <div className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-3 py-1.5 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-semibold text-foreground/80">{exp.period}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-accent font-semibold mb-1">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-1 text-sm text-foreground/50">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description with expand/collapse */}
                  <div className="mb-6">
                    <p className={`text-foreground/70 leading-relaxed transition-all duration-300 ${expandedIndex === index ? '' : 'line-clamp-3'
                      }`}>
                      {exp.description}
                    </p>
                    {exp.description && exp.description.length > 200 && (
                      <button
                        className="mt-2 text-sm text-primary hover:text-accent transition-colors flex items-center gap-1"
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      >
                        {expandedIndex === index ? 'Show less' : 'Read more'}
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${expandedIndex === index ? 'rotate-90' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Key achievements section */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-accent" />
                        <p className="text-sm font-semibold text-foreground/80">Key Achievements</p>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="group/highlight px-3 py-1.5 bg-gradient-to-r from-primary/5 to-accent/5 text-foreground/80 rounded-lg text-xs font-medium border border-border/40 hover:border-primary/40 hover:from-primary/10 hover:to-accent/10 transition-all duration-300 flex items-center gap-1"
                          >
                            <Star className="w-3 h-3 text-accent/60 group-hover/highlight:text-accent transition-colors" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies used */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border/40">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-3.5 h-3.5 text-primary" />
                        <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                          Technologies Used
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-secondary/50 text-foreground/70 rounded-md text-xs font-mono border border-border/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Motivational footer */}
        <div className="mt-16 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 overflow-hidden">
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Career Philosophy</span>
              </div>

              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                "Every role has been a stepping stone to greater challenges.
                I bring <span className="text-primary font-semibold">dedication</span>,
                <span className="text-accent font-semibold ml-1">innovation</span>, and a
                <span className="text-primary font-semibold ml-1">problem-solving mindset</span> to everything I do."
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