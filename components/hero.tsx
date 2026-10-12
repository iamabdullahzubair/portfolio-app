'use client';

import { ArrowRight, Download, ChevronDown, Sparkles, MapPin } from 'lucide-react';
import { usePortfolio } from '@/lib/portfolio-context';
import { calculateExperience } from '@/lib/utils';

export default function Hero() {
  const portfolio = usePortfolio();
  const { name, title, company, location, bio, cta, resumeUrl } = portfolio.personal;
  const stats = portfolio.about.stats;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const topTechnologies = [
    'SCIM 2.0',
    'Enterprise IAM',
    'WebSockets',
    'SAML 2.0 SSO',
    'AD Auth & MFA',
    'Node.js',
    'TypeScript',
    'React',
    'MSSQL',
    'PostgreSQL',
    'Docker',
  ];

  return (
    <section className="min-h-screen pt-28 pb-16 px-6 flex items-center justify-center relative overflow-hidden bg-background">
      {/* Subtle modern background grid */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      {/* Ambient radial lighting vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-background/60 to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-foreground/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Availability Pill */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/80 border border-border/80 text-xs font-medium text-foreground backdrop-blur-md shadow-2xs hover:border-foreground/30 transition-all">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to Product &amp; Backend Engineering Roles</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {location || 'Kolkata, India'}
          </span>
        </div>

        {/* Main Name Headline */}
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 text-balance">
          <span className="bg-gradient-to-b from-foreground via-foreground/95 to-foreground/70 bg-clip-text text-transparent">
            {name}
          </span>
        </h1>

        {/* Subtitle Role & Company */}
        <div className="text-lg sm:text-2xl font-semibold text-foreground/90 mb-6 flex flex-wrap items-center justify-center gap-2">
          <span>{title}</span>
          <span className="text-muted-foreground font-normal">at</span>
          <span className="px-3 py-1 rounded-lg bg-secondary text-foreground border border-border/70 font-bold text-base sm:text-xl">
            {company}
          </span>
        </div>

        {/* Bio */}
        <p className="text-base sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
          {bio}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-md shadow-primary/15 flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <span>{cta.primary || 'View Projects'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={resumeUrl || '/resume.pdf'}
            download
            className="w-full sm:w-auto px-7 py-3.5 bg-secondary/80 hover:bg-secondary text-foreground font-semibold rounded-full border border-border/80 hover:border-foreground/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <Download className="w-4 h-4 text-muted-foreground" />
            <span>{cta.secondary || 'Download Resume'}</span>
          </a>
        </div>

        {/* Tech Stack Chips Strip */}
        <div className="pt-4 border-t border-border/50">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Core Technologies &amp; Domain Expertise
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            {topTechnologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-medium bg-secondary/60 text-foreground/80 border border-border/60 hover:border-foreground/40 hover:text-foreground transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Stats Highlights */}
        {stats && stats.length > 0 && (
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 max-w-md mx-auto gap-4">
            {stats.map((s, idx) => {
              const val = s.label.toLowerCase().includes('experience')
                ? calculateExperience(portfolio.personal.careerStartDate || '2025-01-02')
                : s.value;
              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-card/60 border border-border/70 backdrop-blur-xs text-center"
                >
                  <div className="text-2xl font-black text-foreground">{val}</div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-0.5">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Scroll Indicator */}
        <div className="pt-12">
          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex flex-col items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group"
          >
            <span className="text-[11px] uppercase tracking-widest font-semibold group-hover:underline">
              Scroll down
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
