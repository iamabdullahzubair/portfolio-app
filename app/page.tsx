import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Learning from '@/components/learning';
import Education from '@/components/education';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import { getPortfolioData } from '@/lib/portfolio-service';
import { PortfolioProvider } from '@/lib/portfolio-context';

export const revalidate = 0; // Ensures fresh data from Cloud DB or fallback

export default async function Home() {
  const portfolioData = await getPortfolioData();

  return (
    <PortfolioProvider data={portfolioData}>
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
    </PortfolioProvider>
  );
}
