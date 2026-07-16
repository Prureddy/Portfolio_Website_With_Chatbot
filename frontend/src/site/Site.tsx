import { useEffect } from 'react';
import { initSmoothScroll, ScrollTrigger } from './lib/motion';
import Nav from './Nav';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Hackathons from './sections/Hackathons';
import Education from './sections/Education';
import PruAi from './sections/PruAi';
import Writing from './sections/Writing';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function Site() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('audit')) {
      document.body.classList.add('audit');
    }
    const teardown = initSmoothScroll();
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const t = setTimeout(refresh, 500);
    return () => {
      window.removeEventListener('load', refresh);
      clearTimeout(t);
      teardown();
    };
  }, []);

  return (
    <>
      {/* fixed ambient backdrop — very subtle grid only */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-overlay opacity-60 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000,transparent)]" />
      </div>

      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Hackathons />
        <Education />
        <PruAi />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
