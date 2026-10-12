'use client';

import Link from 'next/link';
import { ExternalLink, Github, Star, Clock, CheckCircle2, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { usePortfolio } from '@/lib/portfolio-context';

export default function Projects() {
  const portfolio = usePortfolio();
  const projects = portfolio.projects;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Featured':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Star className="w-3 h-3" /> Featured
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <Clock className="w-3 h-3" /> In Progress
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary text-foreground/80 border border-border/80">
            <CheckCircle2 className="w-3 h-3" /> Completed
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary border border-border/80 text-muted-foreground mb-4">
            <Layers className="w-3.5 h-3.5 text-primary" />
            Selected Work
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-xl">
            A showcase of production-ready web apps, scalable backend systems, and microservices architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id || idx}
              className="group rounded-2xl border border-border/70 dark:border-white/10 bg-card/60 dark:bg-zinc-900/40 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-primary/50 dark:hover:border-white/30 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  {getStatusBadge(project.status)}
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground border border-border/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features Preview */}
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div className="mb-6 space-y-2 bg-secondary/30 dark:bg-zinc-950/40 p-4 rounded-xl border border-border/40 dark:border-white/5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-primary" /> Key Capabilities
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-foreground/80">
                      {project.keyFeatures.slice(0, 4).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-1.5 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-border/60 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground hover:text-primary transition-colors group/link cursor-pointer"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.links?.github && project.links.github !== '#' && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl border border-border/70 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all"
                      title="View GitHub repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.links?.demo && project.links.demo !== '#' && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl border border-border/70 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
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