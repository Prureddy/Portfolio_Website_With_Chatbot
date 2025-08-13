import { Building, Calendar, MapPin, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer",
      company: "Unriddle Technologies",
      period: "Jun 2025 – Present",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "Led RAG-based medical discharge summary pipeline for hospital-wide scalability",
        "Developed feedback-driven prompt optimization system improving model accuracy",
        "Implemented production-ready AI systems serving healthcare professionals",
        "Optimized LLM performance through advanced prompt engineering techniques"
      ],
      technologies: ["RAG", "LLM Fine-tuning", "Python", "FastAPI", "AWS", "LangChain"],
      gradient: "from-electric-blue to-electric-cyan"
    },
    {
      title: "Student Intern",
      company: "Unisys",
      period: "Oct 2024 – May 2025",
      location: "Bangalore, India",
      type: "Internship",
      achievements: [
        "Enhanced multilingual RAG chatbot accuracy by 35%",
        "Built AI-powered math equation solver integrating OCR and generative AI",
        "Developed scalable data processing pipelines for enterprise applications",
        "Collaborated with senior engineers on production AI deployment strategies"
      ],
      technologies: ["Python", "OCR", "Multilingual AI", "RAG", "Data Processing", "Machine Learning"],
      gradient: "from-electric-purple to-electric-pink"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-electric mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building AI solutions that make a real impact in healthcare and enterprise environments
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-electric hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Node */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow hidden md:block" 
                     style={{ top: '2rem' }} />
                
                {/* Experience Card */}
                <div className="md:ml-16 glass rounded-2xl overflow-hidden electric-glow group hover:scale-[1.02] transition-all duration-300">
                  {/* Header */}
                  <div className={`p-6 bg-gradient-to-r ${exp.gradient} bg-opacity-10`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-background/20 backdrop-blur-sm">
                          <Building size={24} className="text-foreground" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <div className="text-lg font-semibold text-foreground mb-2">
                            {exp.company}
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-foreground/80">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              {exp.location}
                            </div>
                            <div className="px-2 py-1 bg-background/30 text-foreground rounded-md font-medium">
                              {exp.type}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Zap size={18} className="text-primary" />
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 text-sm font-medium bg-card-border/30 text-muted-foreground rounded-lg hover:bg-primary/10 hover:text-foreground transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlight */}
        <div className="mt-16 text-center">
          <div className="glass rounded-xl p-8 electric-glow max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-glow mb-4">
              <Zap size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              <span className="gradient-text">Specialized in Production AI</span>
            </h3>
            <p className="text-muted-foreground">
              From healthcare systems to enterprise solutions, I build AI that scales and delivers real value
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;