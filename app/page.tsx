'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import Learning from '@/components/learning';
import Education from '@/components/education';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Learning />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
