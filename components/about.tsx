'use client';

import { portfolioConfig } from '@/lib/portfolio-config';

export default function About() {
  const stats = portfolioConfig.about.stats;
  
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              I&apos;m a passionate full-stack developer with a strong foundation in both frontend and backend technologies.
              Currently working at <span className="font-semibold text-primary">Baar Technologies</span> in Kolkata, where I develop
              scalable web applications using modern JavaScript frameworks and backend technologies.
            </p>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              With expertise in React, Node.js, Express, and databases like MongoDB and MSSQL, I build robust applications
              that solve real-world problems. I&apos;m also proficient in containerization with Docker and Nginx for deployment.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Beyond coding, I&apos;m constantly learning new technologies and best practices. I believe in writing clean, maintainable
              code and creating intuitive user experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="p-6 bg-card rounded-xl border border-border/60 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                <div className="text-sm text-foreground/70 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
