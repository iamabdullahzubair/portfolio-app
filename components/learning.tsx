'use client';

import { usePortfolio } from '@/lib/portfolio-context';
import { BookOpen, Rocket, Target, Zap, TrendingUp, Brain, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Learning() {
  const portfolio = usePortfolio();
  const learningTopics = portfolio.learning;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getTopicIcon = (title: any) => {
    const t = String(title || '').toLowerCase();
    if (t.includes('dsa') || t.includes('data structure') || t.includes('algorithm')) return <Target className="w-5 h-5 text-primary" />;
    if (t.includes('system') || t.includes('design') || t.includes('distributed')) return <Rocket className="w-5 h-5 text-primary" />;
    if (t.includes('web') || t.includes('dev')) return <Zap className="w-5 h-5 text-primary" />;
    return <Brain className="w-5 h-5 text-primary" />;
  };

  return (
    <section id="learning" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary border border-border/80 text-muted-foreground mb-4">
            <BookOpen className="w-3.5 h-3.5 text-primary" />
            Knowledge &amp; Problem Solving
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Continuous Learning
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-xl">
            Staying at the edge with deep dives into high-scale system design, data structures, and architecture patterns.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {learningTopics.map((topic, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-border/70 dark:border-white/10 bg-card/60 dark:bg-zinc-900/40 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:border-primary/50 dark:hover:border-white/30 hover:shadow-lg flex flex-col justify-between"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-2.5 rounded-xl bg-secondary text-primary border border-border/60">
                    {getTopicIcon(topic.title)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">Technical Specialization</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {topic.description}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                  Core Topics &amp; Practice
                </p>
                <div className="flex flex-wrap gap-2">
                  {topic.topics.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-secondary text-secondary-foreground border border-border/60 hover:border-primary/40 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}