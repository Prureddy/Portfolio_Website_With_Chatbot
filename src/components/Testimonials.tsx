import { Quote, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Pruthvi's expertise in AI and machine learning is truly exceptional. His ability to translate complex technical concepts into practical solutions has been invaluable to our healthcare projects. The RAG-based systems he developed have significantly improved our operational efficiency.",
      author: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      company: "Unriddle Technologies",
      rating: 5,
      linkedinUrl: "https://www.linkedin.com/in/pruthvi-s",
      gradient: "from-electric-blue to-electric-cyan"
    },
    {
      text: "Working with Pruthvi on the multilingual AI chatbot project was remarkable. His technical depth in prompt engineering and fine-tuning delivered results that exceeded our expectations. He's a natural problem-solver with great communication skills.",
      author: "Mark Rodriguez",
      role: "Senior AI Architect",
      company: "Unisys",
      rating: 5,
      linkedinUrl: "https://www.linkedin.com/in/pruthvi-s",
      gradient: "from-electric-purple to-electric-pink"
    },
    {
      text: "Pruthvi's innovative approach to AI solutions in our hackathon was outstanding. His ability to rapidly prototype and deliver production-ready code under tight deadlines showcases his exceptional engineering capabilities and dedication to excellence.",
      author: "Alex Kumar",
      role: "Lead Developer",
      company: "Tech Innovation Hub",
      rating: 5,
      linkedinUrl: "https://www.linkedin.com/in/pruthvi-s",
      gradient: "from-electric-cyan to-electric-blue"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating 
            ? 'text-primary fill-primary' 
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-electric mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What colleagues and collaborators say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass rounded-2xl overflow-hidden electric-glow group hover:scale-105 transition-all duration-300"
            >
              {/* Quote Header */}
              <div className={`p-6 bg-gradient-to-r ${testimonial.gradient} bg-opacity-10`}>
                <div className="flex items-center justify-between mb-4">
                  <Quote size={24} className="text-space-dark" />
                  <div className="flex gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="p-6">
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-card-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-primary font-medium">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                    
                    <Button
                      asChild
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/10"
                    >
                      <a
                        href={testimonial.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View LinkedIn recommendation"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass rounded-xl p-8 electric-glow max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">
              <span className="gradient-text">Want to work together?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Join these satisfied collaborators and let's build something amazing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="electric-glow bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="https://www.linkedin.com/in/pruthvi-s" target="_blank" rel="noopener noreferrer">
                  View LinkedIn Recommendations
                </a>
              </Button>
              <Button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="outline"
                className="border-card-border hover:border-primary"
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;