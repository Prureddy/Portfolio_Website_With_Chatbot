const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-electric mx-auto rounded-full" />
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 electric-glow">
            <div className="text-center space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">B.Tech in Computer Science and Technology</span> from 
                Dayananda Sagar University with a <span className="text-primary font-semibold">CGPA of 7.78</span>.
              </p>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Passionate AI Engineer with hands-on experience across healthcare and finance domains. 
                I specialize in building production-ready Generative AI systems that solve real-world problems 
                through innovative technology solutions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans from developing RAG-based medical systems to creating multilingual AI chatbots, 
                always focusing on delivering scalable and impactful solutions that bridge the gap between 
                cutting-edge AI research and practical business applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;