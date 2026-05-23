'use client';

import Link from 'next/link';
import { ExternalLink, Github, Star, Clock, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { portfolioConfig } from '@/lib/portfolio-config';

export default function Projects() {
  const projects = portfolioConfig.projects;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Featured':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'In Progress':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'Completed':
        return 'bg-green-500/20 text-green-600 border-green-500/30';
      default:
        return 'bg-foreground/10 text-foreground border-foreground/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Featured':
        return <Star size={12} className="inline mr-1" />;
      case 'In Progress':
        return <Clock size={12} className="inline mr-1" />;
      case 'Completed':
        return <CheckCircle size={12} className="inline mr-1" />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
          <span className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
          Projects
        </h2>
        <p className="text-lg text-foreground/60 mb-12">
          Some of my work and real-world applications I&apos;ve built
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl border border-border/60 hover:border-primary/60 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Top Accent Bar */}
              <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary opacity-60 group-hover:opacity-100 transition-opacity"></div>

              {/* Card Content */}
              <div className="p-6">
                {/* Header Section */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors flex-1">
                    {project.title}
                  </h3>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full border whitespace-nowrap flex-shrink-0 ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {getStatusIcon(project.status)}
                    {project.status}
                  </span>
                </div>
                
                <p className="text-foreground/65 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gradient-to-br from-primary/15 to-accent/15 text-primary text-xs font-medium rounded-lg border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features - Compact */}
                {project.keyFeatures && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles size={14} className="text-primary" />
                      <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">Key Features</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                      {project.keyFeatures.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-primary/60"></div>
                          <span className="text-xs text-foreground/60">{feature}</span>
                        </div>
                      ))}
                      {project.keyFeatures.length > 4 && (
                        <div className="text-xs text-primary/70 font-medium">
                          +{project.keyFeatures.length - 4} more features
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Engineering Highlights - Compact */}
                {project.engineeringHighlights && (
                  <div className="mb-5 p-3 bg-primary/5 rounded-xl border border-primary/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1 h-4 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                      <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">Technical Highlights</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.engineeringHighlights.slice(0, 3).map((highlight, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-md">
                          {highlight}
                        </span>
                      ))}
                      {project.engineeringHighlights.length > 3 && (
                        <span className="text-xs px-2 py-0.5 bg-foreground/10 text-foreground/60 rounded-md">
                          +{project.engineeringHighlights.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.links.demo && project.links.demo !== '#' && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-accent/15 text-accent border border-accent/40 rounded-xl hover:bg-accent/25 hover:border-accent/60 hover:scale-105 transition-all text-sm font-semibold"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  
                  {project.links.github && project.links.github !== '#' && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary/15 text-primary border border-primary/40 rounded-xl hover:bg-primary/25 hover:border-primary/60 hover:scale-105 transition-all text-sm font-semibold ${!project.links.demo || project.links.demo === '#' ? 'w-full' : ''}`}
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}

                  {(!project.links.demo || project.links.demo === '#') && 
                   (!project.links.github || project.links.github === '#') && (
                    <div className="flex-1 text-center px-4 py-2.5 bg-foreground/5 text-foreground/40 rounded-xl text-sm font-medium">
                      Private Repository
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}