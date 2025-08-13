import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-dark/80 via-space-medium/60 to-transparent z-10" />
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Title */}
          <div className="fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">Pruthvi S</span>
            </h1>
            <div className="text-2xl md:text-3xl font-medium text-primary mb-6">
              AI Engineer
            </div>
          </div>

          {/* Professional Summary */}
          <div className="fade-in fade-in-delay-1">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building production-ready Generative AI systems using RAG, prompt engineering, 
              and LLM fine-tuning in healthcare and finance.
            </p>
          </div>

          {/* Contact Info */}
          <div className="fade-in fade-in-delay-2">
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <a 
                href="tel:+918861412936" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone size={16} />
                +91 8861412936
              </a>
              <a 
                href="mailto:pruthvisreddy8861@gmail.com" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                pruthvisreddy8861@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="fade-in fade-in-delay-3">
            <div className="flex justify-center gap-4">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="electric-glow border-card-border hover:border-primary"
              >
                <a 
                  href="https://www.linkedin.com/in/pruthvi-s" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="electric-glow border-card-border hover:border-primary"
              >
                <a 
                  href="https://github.com/Prureddy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in fade-in-delay-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('projects')}
                className="electric-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-card-border hover:border-primary px-8 py-3"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary/30 rounded-full animate-float" />
      <div className="absolute top-1/3 right-10 w-3 h-3 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-electric-purple/50 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;