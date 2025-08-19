import React from 'react';
import { Sparkles, Brain, Code, Globe, MessageSquare } from 'lucide-react';

// The user-uploaded image is accessible via this ID
const profilePictureUrl = "src/assets/profile.jpeg";

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

          <div className="glass rounded-2xl p-8 md:p-12 electric-glow hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
            <div className="space-y-8 md:grid md:grid-cols-3 md:gap-8">
              {/* Profile picture column */}
              <div className="md:col-span-1 flex items-center justify-center">
                <div className="p-2 border-4 border-electric rounded-full transition-transform duration-300 hover:scale-105">
                  <img
                    src={profilePictureUrl}
                    alt="Pruthvi S profile"
                    className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      (e.target as HTMLImageElement).onerror = null;
                      (e.target as HTMLImageElement).src = "https://placehold.co/256x256/1f2937/d1d5db?text=Profile";
                    }}
                  />
                </div>
              </div>

              {/* Text content column */}
              <div className="md:col-span-2 space-y-6 flex flex-col justify-center">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  <span className="text-primary font-semibold">B.Tech in Computer Science and Technology</span> from
                   <span className="text-primary font-semibold"> Dayananda Sagar University.</span>
                </p>
                 
                <p className="text-lg md:text-xl text-foreground leading-relaxed text-justify">
                  Hi, I’m Pruthvi S, an AI Engineer at Unriddle Technologies, where I build production-grade AI pipelines for our product Dscribe. My work involves orchestrating LLMs, RAG architectures, NER models, custom AI agents, and prompt engineering to automate and accelerate medical workflows for real-world healthcare systems.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700 space-y-4">
              <h3 className="text-2xl font-bold text-center text-primary">
                I specialize in:
              </h3>
              <ul className="space-y-3 text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <li className="flex items-center gap-3">
                  <Sparkles className="text-electric" size={20} />
                  <span>LLMs & Fine-tuning (LoRA, PEFT, Deepspeed, Unsloth)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Brain className="text-electric" size={20} />
                  <span>Retrieval-Augmented Generation (RAG)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Code className="text-electric" size={20} />
                  <span>NER & Medical Text Summarization</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="text-electric" size={20} />
                  <span>AI Automation & Low-code/No-code Tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageSquare className="text-electric" size={20} />
                  <span>LLM APIs (OpenAI, Gemini, Groq, etc.)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="text-electric" size={20} />
                  <span>MCP Servers & LangChain Pipelines</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Outside of work, I run <span className="text-primary font-bold">Pru.ai</span>, a fast-growing Kannada-first AI content channel that helps thousands of learners explore AI, tools, Internships, Hackathons and coding in their native language.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
