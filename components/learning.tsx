'use client';

import { portfolioConfig } from '@/lib/portfolio-config';
import { BookOpen, Sparkles, Rocket, Target, Clock, Zap, TrendingUp, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Learning() {
  const learningTopics = portfolioConfig.learning;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Icon mapping for different topics
  const getTopicIcon = (title: any) => {
    const iconMap = {
      'DSA': <Target className="w-6 h-6" />,
      'System Design': <Rocket className="w-6 h-6" />,
      'Web Development': <Zap className="w-6 h-6" />,
      'Cloud Computing': <TrendingUp className="w-6 h-6" />,
    };
    return iconMap[title] || <BookOpen className="w-6 h-6" />;
  };

  return (
    <section id="learning" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary/30 via-transparent to-secondary/20"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
          Continous Learning
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {learningTopics.map((topic, idx) => (
            <div
              key={idx}
              className="group relative bg-linear-to-br from-background via-background to-secondary/20 rounded-2xl border border-border/60 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${idx * 0.15}s` }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-accent/0 to-primary/0 group-hover:from-primary/5 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-700"></div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-primary/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Progress bar animation on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>

              <div className="relative p-8">
                {/* Header section */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {/* Animated icon container */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                      <div className="relative p-3 rounded-xl bg-linear-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                        {topic.icon ? (
                          <span className="text-3xl">{topic.icon}</span>
                        ) : (
                          <div className="text-primary">
                            {getTopicIcon(topic.title)}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {topic.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-3 h-3 text-accent" />
                        <p className="text-xs text-foreground/50">Active Learning</p>
                      </div>
                    </div>
                  </div>

                  {/* Animated arrow on hover */}
                  <ChevronRight className={`w-5 h-5 text-primary transition-all duration-300 ${hoveredIndex === idx ? 'translate-x-1 opacity-100' : 'opacity-0'}`} />
                </div>

                {/* Description with elegant styling */}
                <p className="text-foreground/70 mb-6 leading-relaxed border-l-2 border-primary/30 pl-4 italic">
                  {topic.description}
                </p>

                {/* Topics section with enhanced badges */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-linear-to-r from-primary/30 to-transparent"></div>
                    <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                      Focus Areas
                    </p>
                    <div className="h-px flex-1 bg-linear-to-l from-accent/30 to-transparent"></div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {topic.topics.map((t, i) => (
                      <span
                        key={t}
                        className="relative group/tag px-4 py-2 bg-linear-to-br from-primary/5 to-accent/5 text-foreground/80 rounded-full text-sm font-medium border border-border/40 hover:border-primary/50 transition-all duration-300 overflow-hidden"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        <span className="relative z-10 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover/tag:scale-150 transition-transform"></span>
                          {t}
                        </span>
                        <span className="absolute inset-0 bg-linear-to-r from-primary/10 to-accent/10 transform scale-x-0 group-hover/tag:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced motivational quote section */}
        <div className="mt-16 relative group">
          <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-8 md:p-10 bg-linear-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 animate-fade-in-up overflow-hidden" style={{ animationDelay: '0.3s' }}>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 rounded-full blur-2xl"></div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Growth Mindset</span>
              </div>

              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                "I believe continuous learning is the key to staying relevant in tech.
                By mastering <span className="text-primary font-semibold">DSA</span> and
                <span className="text-accent font-semibold"> System Design</span>, I aim to build more efficient,
                scalable solutions and excel in technical interviews."
              </p>

              <div className="flex items-center justify-center gap-2 mt-6">
                <div className="w-12 h-px bg-linear-to-r from-transparent to-primary"></div>
                <BookOpen className="w-4 h-4 text-primary/60" />
                <div className="w-12 h-px bg-linear-to-l from-transparent to-accent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}