'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { usePortfolio } from '@/lib/portfolio-context';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const portfolio = usePortfolio();

  // Secret shortcut for owner: Ctrl + Shift + A (or Cmd + Shift + A) to open admin
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        window.location.href = '/admin';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Learning', id: 'learning' },
    { label: 'Education', id: 'education' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/85 backdrop-blur-xl z-50 border-b border-border/80 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-border/80 bg-secondary/50 shadow-xs group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center">
            <Image
              src={portfolio.personal.avatarUrl || '/apple-touch-icon.png'}
              alt={portfolio.personal.name}
              width={36}
              height={36}
              className="w-full h-full object-cover rounded-full"
              priority
            />
          </div>
          <div className="hidden sm:block text-left">
            <span className="block font-bold text-sm tracking-tight text-foreground">
              {portfolio.personal.name}
            </span>
            <span className="block text-[11px] text-muted-foreground font-medium -mt-1">
              {portfolio.personal.title}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-muted-foreground hover:text-foreground text-xs uppercase tracking-wider font-semibold transition-colors py-1 cursor-pointer"
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2 bg-primary text-primary-foreground rounded-full text-xs font-semibold hover:opacity-90 hover:scale-105 transition-all cursor-pointer"
          >
            Contact
          </button>

          {/* Theme Toggle */}
          <div className="pl-2 border-l border-border/70 flex items-center">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-foreground rounded-lg border border-border/60"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 py-5 space-y-3 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground font-medium text-sm tracking-wide uppercase"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full text-center py-2.5 mt-2 bg-primary text-primary-foreground rounded-xl text-sm font-semibold"
          >
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
}
