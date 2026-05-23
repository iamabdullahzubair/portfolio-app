'use client';

import { ChevronDown } from 'lucide-react';
import { portfolioConfig } from '@/lib/portfolio-config';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { name, title, company, bio, cta } = portfolioConfig.personal;

  return (
    <section className="min-h-screen pt-20 px-6 flex items-center justify-center bg-gradient-to-b from-background via-background to-secondary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center py-20 relative z-10">
        <div className="mb-6 inline-block animate-fade-in-down">
          <div className="px-4 py-2 bg-secondary rounded-full text-sm font-semibold text-secondary-foreground border border-primary/30 backdrop-blur-sm">
            {title}
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance animate-fade-in-up">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-lg">
            {name}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto text-balance animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {bio}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 transform relative group overflow-hidden"
          >
            <span className="relative z-10">{cta.primary}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105 transform inline-block"
          >
            Download Resume
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-8 animate-float">
          <button
            onClick={() => scrollToSection('experience')}
            className="inline-flex flex-col items-center gap-2 text-foreground/50 hover:text-foreground/70 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest font-semibold">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
