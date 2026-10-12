'use client';

import { Mail, Linkedin, Github, Copy, Check, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { usePortfolio } from '@/lib/portfolio-context';

export default function Contact() {
  const portfolio = usePortfolio();
  const { email, links, quickFacts, description } = portfolio.contact;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const linkedInLink = links.find((l) => l.label.toLowerCase().includes('linkedin'))?.url || '#';
  const githubLink = links.find((l) => l.label.toLowerCase().includes('github'))?.url || '#';

  return (
    <section id="contact" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary border border-border/80 text-muted-foreground mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-primary" />
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Let&apos;s Connect
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              {description ||
                "Open to software engineering opportunities, enterprise collaborations, and meaningful tech discussions."}
            </p>

            <div className="space-y-4">
              {/* Email with copy button */}
              <div className="flex items-center justify-between p-5 bg-card/60 dark:bg-zinc-900/40 rounded-2xl border border-border/80 dark:border-white/10 hover:border-primary/50 transition-all shadow-xs group">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 flex-1 overflow-hidden"
                >
                  <div className="p-3 bg-secondary rounded-xl text-primary border border-border/60">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">Email</p>
                    <p className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors truncate">
                      {email}
                    </p>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-2.5 rounded-xl hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors cursor-pointer ml-2 border border-border/60"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={linkedInLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-card/60 dark:bg-zinc-900/40 rounded-2xl border border-border/80 dark:border-white/10 hover:border-primary/50 transition-all shadow-xs group"
              >
                <div className="p-3 bg-secondary rounded-xl text-primary border border-border/60">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">LinkedIn</p>
                  <p className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {portfolio.personal.name}
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-card/60 dark:bg-zinc-900/40 rounded-2xl border border-border/80 dark:border-white/10 hover:border-primary/50 transition-all shadow-xs group"
              >
                <div className="p-3 bg-secondary rounded-xl text-primary border border-border/60">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">GitHub</p>
                  <p className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {portfolio.personal.name}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="p-7 sm:p-8 rounded-2xl border border-border/80 dark:border-white/10 bg-card/60 dark:bg-zinc-900/40 backdrop-blur-md shadow-xs space-y-6">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              System &amp; Availability Facts
            </h3>

            <div className="space-y-4">
              {(quickFacts && quickFacts.length > 0
                ? quickFacts
                : [
                    { label: 'Location', value: portfolio.personal.location },
                    { label: 'Current Role', value: `${portfolio.personal.title} @ ${portfolio.personal.company}`, highlight: true },
                    { label: 'Availability', value: 'Open to freelance & engineering roles' },
                    { label: 'Timezone', value: 'IST (Indian Standard Time)' },
                  ]
              ).map((fact, idx) => (
                <div key={idx} className="pb-3.5 border-b border-border/50 dark:border-white/5 last:border-0 last:pb-0">
                  <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-bold mb-1">{fact.label}</p>
                  <p className={`text-sm sm:text-base font-bold ${fact.highlight ? 'text-primary' : 'text-foreground'}`}>
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
