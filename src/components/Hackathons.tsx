import { Trophy, Users, Zap, Target } from 'lucide-react';

const Hackathons = () => {
  const hackathons = [
    {
      title: "Track Prize - Aventus 2.0 Hackathon",
      achievement: "Track Prize Winner",
      project: "AI-Powered Healthcare Analytics Platform",
      description: "Developed a comprehensive AI solution for healthcare data analytics with real-time patient monitoring and predictive insights.",
      technologies: ["Python", "Machine Learning", "React.js", "FastAPI", "Healthcare APIs"],
      date: "2024",
      participants: "500+ participants",
      gradient: "from-electric-blue to-electric-cyan",
      icon: Trophy
    },
    {
      title: "First Prize - DDT Hackathon",
      achievement: "🥇 First Place",
      project: "Digital Transformation Solution",
      description: "Created an innovative digital transformation platform that streamlines business processes using AI automation and intelligent workflows.",
      technologies: ["AI Automation", "Process Mining", "Cloud Computing", "Digital Workflows"],
      date: "2024",
      participants: "300+ participants",
      gradient: "from-electric-purple to-electric-pink",
      icon: Target
    },
    {
      title: "Runner-up - Creatathon 2023",
      achievement: "🥈 Second Place",
      project: "Creative AI Content Generator",
      description: "Built an AI-powered creative content generation platform that helps businesses create engaging multimedia content efficiently.",
      technologies: ["Generative AI", "Content Creation", "NLP", "Creative APIs", "React.js"],
      date: "2023",
      participants: "400+ participants",
      gradient: "from-electric-cyan to-electric-blue",
      icon: Zap
    }
  ];

  return (
    <section id="hackathons" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hackathons & <span className="gradient-text">Awards</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-electric mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Competitive achievements showcasing innovation and problem-solving skills in high-pressure environments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {hackathons.map((hackathon, index) => {
            const IconComponent = hackathon.icon;
            return (
              <div 
                key={index}
                className="glass rounded-2xl overflow-hidden electric-glow group hover:scale-105 transition-all duration-300"
              >
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${hackathon.gradient} bg-opacity-10`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-background/30 backdrop-blur-sm">
                      <IconComponent size={24} className="text-space-dark" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-space-dark">
                        {hackathon.achievement}
                      </div>
                      <div className="text-sm text-space-dark/70">
                        {hackathon.date}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-space-dark mb-2">
                    {hackathon.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-space-dark/70">
                    <Users size={14} />
                    {hackathon.participants}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {hackathon.project}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {hackathon.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {hackathon.technologies.map((tech, techIndex) => (
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

                {/* Achievement Badge */}
                <div className="px-6 pb-6">
                  <div className="w-full p-3 rounded-lg bg-gradient-glow text-center">
                    <div className="text-primary font-semibold text-sm">
                      🏆 Competition Winner
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass rounded-xl p-6 text-center electric-glow">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-muted-foreground">Hackathons Won</div>
          </div>
          <div className="glass rounded-xl p-6 text-center electric-glow">
            <div className="text-3xl font-bold text-primary mb-2">1200+</div>
            <div className="text-muted-foreground">Total Participants Competed Against</div>
          </div>
          <div className="glass rounded-xl p-6 text-center electric-glow">
            <div className="text-3xl font-bold text-primary mb-2">48hrs</div>
            <div className="text-muted-foreground">Average Development Time</div>
          </div>
        </div>

        {/* Competitive Edge */}
        <div className="mt-16 text-center">
          <div className="glass rounded-xl p-8 electric-glow max-w-2xl mx-auto">
            <Trophy className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              <span className="gradient-text">Competitive Innovation</span>
            </h3>
            <p className="text-muted-foreground">
              Proven ability to deliver innovative AI solutions under pressure, competing against top talent
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;