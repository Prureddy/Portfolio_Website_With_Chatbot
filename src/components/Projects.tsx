import { ExternalLink, Github, Zap, Heart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Pet Health Companion",
      description: "Intelligent healthcare system for pets using advanced AI diagnostics and real-time monitoring.",
      icon: Heart,
      techStack: ["Python", "FastAPI", "RAG", "OpenAI API", "React.js", "Docker"],
      features: ["AI Health Diagnostics", "Real-time Monitoring", "Predictive Analytics"],
      github: "https://github.com/Prureddy",
      demo: "#",
      gradient: "from-electric-blue to-electric-cyan"
    },
    {
      id: 2,
      title: "LLaMA 2 Fine-Tuning with Insurance Data",
      description: "Custom fine-tuned LLaMA 2 model optimized for insurance document processing and analysis.",
      icon: Zap,
      techStack: ["Python", "LLaMA 2", "PEFT", "LoRA", "Transformers", "PyTorch"],
      features: ["Model Fine-tuning", "Document Processing", "Insurance Analytics"],
      github: "https://github.com/Prureddy",
      demo: "#",
      gradient: "from-electric-purple to-electric-pink"
    },
    {
      id: 3,
      title: "Financial AI Agent for Stock Analysis",
      description: "Intelligent financial agent providing real-time stock analysis and investment recommendations.",
      icon: TrendingUp,
      techStack: ["Python", "LangChain", "Groq", "FastAPI", "React.js", "AWS"],
      features: ["Real-time Analysis", "Investment Insights", "Risk Assessment"],
      github: "https://github.com/Prureddy",
      demo: "#",
      gradient: "from-electric-cyan to-electric-blue"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-electric mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative AI solutions that demonstrate my expertise in building production-ready systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={project.id}
                className="glass rounded-2xl overflow-hidden electric-glow group hover:scale-105 transition-all duration-300"
              >
                {/* Project Header */}
                <div className={`p-6 bg-gradient-to-r ${project.gradient} bg-opacity-10`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-background/30 backdrop-blur-sm">
                      <IconComponent size={24} className="text-space-dark" />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="hover:bg-background/20 text-space-dark hover:text-space-dark/80"
                      >
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="View GitHub repository"
                        >
                          <Github size={18} />
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="hover:bg-background/20 text-space-dark hover:text-space-dark/80"
                      >
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="View live demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-space-dark mb-2">
                    {project.title}
                  </h3>
                  <p className="text-space-dark/70 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Body */}
                <div className="p-6">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium bg-card-border/30 text-muted-foreground rounded-md hover:bg-primary/10 hover:text-foreground transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Footer */}
                <div className="px-6 pb-6">
                  <div className="flex gap-3">
                    <Button
                      asChild
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-card-border hover:border-primary"
                    >
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            asChild
            variant="outline"
            className="border-card-border hover:border-primary px-8 py-3"
          >
            <a 
              href="https://github.com/Prureddy" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github size={16} className="mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;