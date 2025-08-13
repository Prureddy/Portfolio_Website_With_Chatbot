import { 
  Code, 
  Brain, 
  Database, 
  Cloud, 
  Wrench,
  Zap 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages & Frameworks",
      skills: ["Python", "SQL", "React.js", "FastAPI", "Flask", "Django", "JavaScript", "HTML", "CSS"],
      color: "electric-blue"
    },
    {
      icon: Brain,
      title: "Generative AI",
      skills: ["LLaMA 2", "Groq", "Prompt Engineering", "RAG", "PEFT", "LoRA", "Model Deployment"],
      color: "electric-purple"
    },
    {
      icon: Database,
      title: "Data Engineering",
      skills: ["ETL", "Data Cleaning", "Qdrant", "FAISS", "Pinecone", "ChromaDB"],
      color: "electric-cyan"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS (Bedrock, EC2, S3, Kendra)", "Docker", "Git", "CI/CD", "MLOps"],
      color: "electric-pink"
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: ["LangChain", "OpenAI API", "Gemini", "Jupyter Notebook", "Jira"],
      color: "electric-blue"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-electric mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies and frameworks that power my AI engineering expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="glass rounded-xl p-6 electric-glow group hover:scale-105 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-glow mb-4 group-hover:animate-glow-pulse">
                    <IconComponent size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className="flex items-center justify-center px-3 py-2 rounded-lg bg-card-border/20 hover:bg-primary/10 transition-colors duration-200"
                    >
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Section */}
        <div className="mt-16 text-center">
          <div className="glass rounded-xl p-8 electric-glow inline-block">
            <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Specialized in <span className="gradient-text">Production AI Systems</span>
            </h3>
            <p className="text-muted-foreground">
              From research to deployment, I build AI solutions that scale
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;