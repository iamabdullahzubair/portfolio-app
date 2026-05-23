'use client';

import { Mail, Linkedin, Github } from 'lucide-react';
import { portfolioConfig } from '@/lib/portfolio-config';

export default function Contact() {
  const { email, links } = portfolioConfig.contact;
  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              I&apos;m always interested in hearing about new projects and exciting opportunities. Whether you want to collaborate or
              just say hello, feel free to reach out!
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border/60 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in-up"
              >
                <div className="p-3 bg-gradient-to-br from-primary/25 to-accent/25 rounded-lg group-hover:from-primary/35 group-hover:to-accent/35 transition-all transform group-hover:scale-110">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 uppercase tracking-wider font-semibold">Email</p>
                  <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{email}</p>
                </div>
              </a>

              <a
                href={links[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border/60 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in-up"
                style={{ animationDelay: '0.1s' }}
              >
                <div className="p-3 bg-gradient-to-br from-blue-500/25 to-cyan-500/25 rounded-lg group-hover:from-blue-500/35 group-hover:to-cyan-500/35 transition-all transform group-hover:scale-110">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 uppercase tracking-wider font-semibold">LinkedIn</p>
                  <p className="text-lg font-bold text-foreground group-hover:text-blue-600 transition-colors">Mohd Abdullah</p>
                </div>
              </a>

              <a
                href={links[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border/60 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="p-3 bg-gradient-to-br from-slate-500/25 to-slate-700/25 rounded-lg group-hover:from-slate-500/35 group-hover:to-slate-700/35 transition-all transform group-hover:scale-110">
                  <Github className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 uppercase tracking-wider font-semibold">GitHub</p>
                  <p className="text-lg font-bold text-foreground group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">Mohd Abdullah</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 p-8 rounded-xl border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in-right">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Quick Facts</h3>

            <div className="space-y-6">
              <div className="pb-5 border-b border-border/30">
                <p className="text-xs text-foreground/60 uppercase tracking-widest font-bold mb-2">Location</p>
                <p className="text-lg font-bold text-foreground">Kolkata, India</p>
              </div>

              <div className="pb-5 border-b border-border/30">
                <p className="text-xs text-foreground/60 uppercase tracking-widest font-bold mb-2">Current Role</p>
                <p className="text-lg font-bold text-primary">Full Stack Developer @ Baar Technologies</p>
              </div>

              <div className="pb-5 border-b border-border/30">
                <p className="text-xs text-foreground/60 uppercase tracking-widest font-bold mb-2">Availability</p>
                <p className="text-lg font-bold text-accent">Open to freelance & collaboration</p>
              </div>

              <div>
                <p className="text-xs text-foreground/60 uppercase tracking-widest font-bold mb-2">Timezone</p>
                <p className="text-lg font-bold text-foreground">IST (Indian Standard Time)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
