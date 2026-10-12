'use client';

import { usePortfolio } from '@/lib/portfolio-context';
import { calculateExperience } from '@/lib/utils';
import { User, Award, Terminal, Code2, Sparkles } from 'lucide-react';

export default function About() {
  const portfolio = usePortfolio();
  const { stats, paragraphs, description } = portfolio.about;

  return (
    <section id="about" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary border border-border/80 text-muted-foreground mb-4">
            <User className="w-3.5 h-3.5 text-primary" />
            Background
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Narrative description */}
          <div className="md:col-span-7 space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
            {paragraphs && paragraphs.length > 0 ? (
              paragraphs.map((p, idx) => (
                <p key={idx} className="bg-card/40 dark:bg-zinc-900/30 p-5 rounded-2xl border border-border/60 dark:border-white/10">
                  {p}
                </p>
              ))
            ) : (
              <p className="bg-card/40 dark:bg-zinc-900/30 p-5 rounded-2xl border border-border/60 dark:border-white/10">
                {description}
              </p>
            )}
          </div>

          {/* Quick Stats & Credentials Bento Cards */}
          <div className="md:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => {
                const val = stat.label.toLowerCase().includes('experience')
                  ? calculateExperience(portfolio.personal.careerStartDate || '2025-01-02')
                  : stat.value;
                return (
                  <div
                    key={stat.label || idx}
                    className="p-6 rounded-2xl bg-card dark:bg-zinc-900/50 border border-border/80 dark:border-white/10 shadow-xs text-center group hover:border-primary/40 transition-all"
                  >
                    <div className="text-3xl sm:text-4xl font-extrabold text-foreground mb-1 group-hover:scale-105 transition-transform">
                      {val}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick credentials banner */}
            <div className="p-6 rounded-2xl bg-secondary/50 dark:bg-zinc-900/60 border border-border/80 dark:border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground">
                <Terminal className="w-4 h-4 text-primary" /> Core Principles
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>SCIM 2.0 automated user provisioning &amp; background task queues</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>Enterprise authentication: SAML 2.0 SSO, Active Directory &amp; MFA</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>Real-time event broadcasting &amp; sync via WebSockets</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>Scalable full-stack systems with Node.js, TypeScript, React &amp; MSSQL</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
