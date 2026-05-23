'use client';

import { portfolioConfig } from '@/lib/portfolio-config';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <p className="text-2xl font-bold text-primary mb-2">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                MA
              </span>
            </p>
            <p className="text-sm text-foreground/60">Full Stack Developer & Tech Enthusiast</p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-foreground transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-foreground transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-widest">Tech Stack</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>React & Node.js</li>
              <li>TypeScript & Express</li>
              <li>MongoDB & MSSQL</li>
              <li>Docker & Nginx</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-widest">Social</h4>
            <div className="flex gap-3">
              <a
                href={portfolioConfig.contact.links[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors text-foreground/60 hover:text-foreground"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={portfolioConfig.contact.links[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors text-foreground/60 hover:text-foreground"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:iamabdullahzubair@gmail.com"
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors text-foreground/60 hover:text-foreground"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>&copy; {currentYear} Mohd Abdullah. All rights reserved.</p>
          <p>Designed & built with ❤️ using Next.js</p>
        </div>
      </div>
    </footer>
  );
}
