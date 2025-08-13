import { useState } from 'react';
import { Send, Mail, Phone, Github, Linkedin, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - in a real app, you'd send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create mailto link
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoUrl = `mailto:pruthvisreddy8861@gmail.com?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoUrl;
      
      toast({
        title: "Message prepared!",
        description: "Your email client should open with the pre-filled message.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pruthvisreddy8861@gmail.com",
      href: "mailto:pruthvisreddy8861@gmail.com",
      color: "electric-blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8861412936",
      href: "tel:+918861412936",
      color: "electric-cyan"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: "#",
      color: "electric-purple"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pruthvi-s",
      color: "electric-blue"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Prureddy",
      color: "electric-cyan"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-electric mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to build the next generation of AI solutions? Let's discuss your project and bring innovative ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Start a <span className="gradient-text">Conversation</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on innovative AI projects, 
                or simply chat about the latest developments in artificial intelligence and machine learning.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="glass rounded-xl p-6 electric-glow group hover:scale-105 transition-all duration-300 block"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-gradient-glow group-hover:animate-glow-pulse">
                        <IconComponent size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.label}
                        </h4>
                        <p className="text-muted-foreground">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Connect on Social
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      asChild
                      variant="outline"
                      size="icon"
                      className="electric-glow border-card-border hover:border-primary w-12 h-12"
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <IconComponent size={20} />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass rounded-xl p-6 electric-glow">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold text-foreground">Available for New Projects</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently accepting new opportunities in AI/ML development and consulting
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 electric-glow">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="text-primary" size={24} />
              <h3 className="text-xl font-bold text-foreground">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-card border-card-border focus:border-primary transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-card border-card-border focus:border-primary transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-card border-card-border focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project or how I can help you..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full electric-glow bg-primary hover:bg-primary/90 text-primary-foreground py-3"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send size={16} />
                    Send Message
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-card-border">
              <p className="text-xs text-muted-foreground text-center">
                Your message will open in your default email client for sending
              </p>
            </div>
          </div>
        </div>

        {/* Response Time Promise */}
        <div className="mt-16 text-center">
          <div className="glass rounded-xl p-6 electric-glow max-w-md mx-auto">
            <div className="text-2xl font-bold text-primary mb-2">⚡ 24hr</div>
            <div className="text-foreground font-semibold mb-1">Response Time</div>
            <div className="text-sm text-muted-foreground">
              I typically respond to all inquiries within 24 hours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;