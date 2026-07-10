import { Code2, Sparkles, Bot, Cpu, Database, Cloud } from 'lucide-react';
import { Section, SectionHeading, Chip } from '../primitives';
import { Stagger } from '../lib/Reveal';

const CATEGORIES = [
  {
    icon: Code2,
    title: 'Languages & Frameworks',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'FastAPI', 'Flask', 'Django', 'React', 'Node.js', 'TypeScript'],
  },
  {
    icon: Sparkles,
    title: 'Generative & Agentic AI',
    skills: ['RAG', 'LLM Finetuning (LoRA/QLoRA)', 'Multi-Agent Systems', 'Prompt Engineering', 'NER', 'OCR', 'Voice AI', 'MCP'],
  },
  {
    icon: Bot,
    title: 'Agent Frameworks',
    skills: ['LangChain', 'LangGraph', 'CrewAI', 'Google ADK', 'OpenAI Agents SDK', 'n8n'],
  },
  {
    icon: Cpu,
    title: 'LLM Models',
    skills: ['OpenAI GPT', 'Gemini', 'Mistral', 'LLaMA', 'Phi', 'Hugging Face'],
  },
  {
    icon: Database,
    title: 'Vector DBs & Data',
    skills: ['ChromaDB', 'FAISS', 'Pinecone', 'Milvus', 'Qdrant', 'Elasticsearch', 'ETL'],
  },
  {
    icon: Cloud,
    title: 'Cloud, DevOps & Observability',
    skills: ['AWS', 'Azure', 'Docker', 'Redis', 'Firebase', 'Git', 'Linux', 'LangSmith', 'Langfuse', 'MLOps'],
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="02"
        label="Skills"
        title="Tools I build"
        accent="with"
        story="The tech I work with day to day."
      />

      <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {CATEGORIES.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.title} className="glass group p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 text-brand transition-colors group-hover:bg-brand/20">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          );
        })}
      </Stagger>
    </Section>
  );
}
