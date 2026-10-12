'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePortfolio } from '@/lib/portfolio-context';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const portfolio = usePortfolio();
  const currentYear = new Date().getFullYear();

  const linkedIn = portfolio.contact.links.find((l) => l.label.toLowerCase().includes('linkedin'))?.url || '#';
  const github = portfolio.contact.links.find((l) => l.label.toLowerCase().includes('github'))?.url || '#';

  return (
    <footer className="bg-secondary/40 border-t border-border/70 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-2 group">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border/80 bg-secondary/50 shadow-xs shrink-0 flex items-center justify-center">
                <Image
                  src={portfolio.personal.avatarUrl || '/apple-touch-icon.png'}
                  alt={portfolio.personal.name}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-bold text-foreground group-hover:text-primary transition-colors">
                {portfolio.personal.name}
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {portfolio.personal.title} building scalable systems and modern web applications.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-3 text-xs uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-3 text-xs uppercase tracking-wider">Featured Work</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {portfolio.projects.slice(0, 4).map((p) => (
                <li key={p.id}>
                  <Link href={`/projects/${p.id}`} className="hover:text-primary transition-colors">
                    {p.title.split(' - ')[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-3 text-xs uppercase tracking-wider">Connect</h4>
            <div className="flex gap-2.5">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-card hover:bg-secondary rounded-xl border border-border/70 transition-colors text-muted-foreground hover:text-foreground shadow-2xs"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-card hover:bg-secondary rounded-xl border border-border/70 transition-colors text-muted-foreground hover:text-foreground shadow-2xs"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolio.contact.email}`}
                className="p-2.5 bg-card hover:bg-secondary rounded-xl border border-border/70 transition-colors text-muted-foreground hover:text-foreground shadow-2xs"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>
            <Link href="/admin" className="hover:text-foreground transition-colors cursor-default" title="Portal">
              &copy;
            </Link>{' '}
            {currentYear} {portfolio.personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Crafted with Next.js 16 &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
