import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/pruthvi-s',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/Prureddy',
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: 'mailto:pruthvisreddy8861@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="relative py-16 border-t border-card-border">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-space-dark/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="gradient-text text-2xl font-bold mb-4">
                Pruthvi S
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                AI Engineer building the future with intelligent systems and innovative solutions.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      asChild
                      variant="outline"
                      size="icon"
                      className="electric-glow border-card-border hover:border-primary"
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <IconComponent size={16} />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h3>
              <nav className="space-y-3">
                {footerLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Get In Touch
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:pruthvisreddy8861@gmail.com"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  pruthvisreddy8861@gmail.com
                </a>
                <a
                  href="tel:+918861412936"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  +91 8861412936
                </a>
                <div className="text-muted-foreground">
                  Bangalore, India
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-card-border to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-muted-foreground text-sm">
                <div className="flex items-center gap-1">
                  Built with <Heart size={14} className="text-red-500" /> by Pruthvi S © {currentYear}
                </div>
              </div>

              <div className="flex items-center gap-4">
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="icon"
                className="electric-glow border-card-border hover:border-primary"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} />
              </Button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-primary/30 rounded-full animate-float" />
          <div className="absolute top-20 right-20 w-3 h-3 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;