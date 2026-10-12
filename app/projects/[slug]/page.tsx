import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { getPortfolioData } from '@/lib/portfolio-service';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = await getPortfolioData();
  const project = portfolio.projects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Mohd Abdullah',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.title} | Mohd Abdullah`,
    description: project.description || project.fullDescription,
  };
}

export async function generateStaticParams() {
  const portfolio = await getPortfolioData();
  return portfolio.projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectDetail({ params }: ProjectPageProps) {
  const { slug } = await params;
  const portfolio = await getPortfolioData();
  const project = portfolio.projects.find((p) => p.id === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center px-6 pt-20">
          <div className="text-center max-w-md p-8 rounded-2xl bg-card border border-border shadow-xl">
            <h1 className="text-3xl font-bold text-foreground mb-3">Project Not Found</h1>
            <p className="text-muted-foreground text-sm mb-6">
              The project &quot;{slug}&quot; doesn&apos;t exist or might have been updated.
            </p>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:shadow-lg transition-all"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const narrativeText = project.detailedDescription || project.fullDescription || project.description;
  const paragraphs = narrativeText
    .split('\n\n')
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Projects
          </Link>

          {/* Header Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-card via-card to-secondary/30 border border-border/80 shadow-xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                <Sparkles size={12} />
                {project.status || 'Featured Project'}
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-2xl">
                {project.fullDescription || project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                {project.links?.demo && project.links.demo !== '#' && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-bold shadow-md hover:opacity-90 hover:scale-105 transition-all"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {project.links?.github && project.links.github !== '#' && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border/80 bg-secondary/80 hover:bg-secondary text-foreground rounded-full text-sm font-bold hover:scale-105 transition-all"
                  >
                    <Github size={16} />
                    View Repository
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Detailed Narrative */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              Architectural Overview
            </h2>
            <div className="space-y-5 text-foreground/80 leading-relaxed text-base sm:text-lg">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="bg-card/40 p-5 rounded-2xl border border-border/40">
                  {p}
                </p>
              ))}
            </div>
          </section>

          {/* Technology Stack Grid */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Technology Stack
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {project.techStack.map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-3 bg-card rounded-xl border border-border/70 hover:border-primary/50 text-foreground font-semibold text-center text-sm shadow-2xs hover:shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Cpu className="w-3.5 h-3.5 text-primary" />
                  {tech}
                </div>
              ))}
            </div>
          </section>

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Key Capabilities &amp; Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/60 hover:border-primary/40 transition-all shadow-2xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground/85 leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Engineering Highlights */}
          {project.engineeringHighlights && project.engineeringHighlights.length > 0 && (
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                Engineering Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.engineeringHighlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 text-sm font-semibold text-foreground flex items-center gap-3"
                  >
                    <Layers className="w-4 h-4 text-primary shrink-0" />
                    {hl}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
