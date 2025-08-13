import { useEffect, useState, lazy, Suspense } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

// Lazy-load below-the-fold sections for performance
const About = lazy(() => import('@/components/About'));
const Skills = lazy(() => import('@/components/Skills'));
const Projects = lazy(() => import('@/components/Projects'));
const Experience = lazy(() => import('@/components/Experience'));
const Education = lazy(() => import('@/components/Education'));
const Hackathons = lazy(() => import('@/components/Hackathons'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const Contact = lazy(() => import('@/components/Contact'));

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);



  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="container mx-auto my-8 h-24 rounded-xl bg-muted/20 animate-pulse" aria-hidden />}> <About /> </Suspense>
        <Suspense fallback={<div className="container mx-auto my-8 h-24 rounded-xl bg-muted/20 animate-pulse" aria-hidden />}> <Skills /> </Suspense>
        <Suspense fallback={<div className="container mx-auto my-8 h-24 rounded-xl bg-muted/20 animate-pulse" aria-hidden />}> <Projects /> </Suspense>
        <Suspense fallback={<div className="container mx-auto my-8 h-24 rounded-xl bg-muted/20 animate-pulse" aria-hidden />}> <Experience /> </Suspense>
        <Suspense fallback={<div className="container mx-auto my-8 h-24 rounded-xl bg-muted/20 animate-pulse" aria-hidden />}> <Education /> </Suspense>
        <Suspense fallback={<div className="container mx-auto my-8 h-24 rounded-xl bg-muted/20 animate-pulse" aria-hidden />}> <Hackathons /> </Suspense>
        <Suspense fallback={<div className="container mx-auto my-8 h-24 rounded-xl bg-muted/20 animate-pulse" aria-hidden />}> <Testimonials /> </Suspense>
        <Suspense fallback={<div className="container mx-auto my-8 h-24 rounded-xl bg-muted/20 animate-pulse" aria-hidden />}> <Contact /> </Suspense>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
