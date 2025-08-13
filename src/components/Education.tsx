import { GraduationCap, Award, BookOpen, Star } from 'lucide-react';

const Education = () => {
  const education = {
    degree: "B.Tech in Computer Science and Technology",
    university: "Dayananda Sagar University",
    cgpa: "7.78",
    period: "2021 - 2025",
    location: "Bangalore, India"
  };

  const certifications = [
    {
      title: "Generative AI for Everyone",
      provider: "Coursera - DeepLearning.AI",
      date: "2024",
      skills: ["Generative AI", "Prompt Engineering", "AI Applications"]
    },
    {
      title: "Machine Learning Specialization",
      provider: "Coursera - Stanford",
      date: "2023",
      skills: ["Machine Learning", "Neural Networks", "Python"]
    },
    {
      title: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      date: "2023",
      skills: ["Cloud Computing", "AWS Services", "DevOps"]
    }
  ];

  const achievements = [
    "Consistent academic performance with strong foundation in Computer Science",
    "Active participation in technical workshops and AI conferences",
    "Contributed to open-source projects during academic tenure"
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-electric mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation complemented by industry-recognized certifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education */}
          <div className="glass rounded-2xl overflow-hidden electric-glow">
            <div className="p-6 bg-gradient-to-r from-electric-blue to-electric-cyan bg-opacity-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-background/20 backdrop-blur-sm">
                  <GraduationCap size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-space-dark">
                    {education.degree}
                  </h3>
                  <div className="text-lg font-semibold text-space-dark/80">
                    {education.university}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <Star className="text-space-dark" size={16} />
                  <span className="text-space-dark/70">CGPA: </span>
                  <span className="font-semibold text-space-dark">{education.cgpa}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="text-space-dark" size={16} />
                  <span className="text-space-dark/70">{education.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-primary" size={16} />
                  <span className="text-muted-foreground">{education.location}</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Academic Achievements</h4>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Professional <span className="gradient-text">Certifications</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="glass rounded-xl p-6 electric-glow group hover:scale-105 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-glow mb-4 group-hover:animate-glow-pulse">
                      <Award size={20} className="text-primary" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {cert.title}
                    </h4>
                    
                    <p className="text-primary font-medium mb-1">
                      {cert.provider}
                    </p>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {cert.date}
                    </p>
                    
                    <div className="space-y-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="inline-block px-2 py-1 text-xs font-medium bg-card-border/30 text-muted-foreground rounded-md mr-2 hover:bg-primary/10 hover:text-foreground transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Philosophy
        <div className="mt-16 text-center">
          <div className="glass rounded-xl p-8 electric-glow max-w-2xl mx-auto">
            <BookOpen className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Continuous <span className="gradient-text">Learning</span>
            </h3>
            <p className="text-muted-foreground">
              Staying updated with the latest AI advancements through continuous learning and hands-on practice
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Education;