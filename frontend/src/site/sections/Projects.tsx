import { Github, ExternalLink, Heart, Zap, TrendingUp, Brain, ArrowRight } from 'lucide-react';
import { Chip, SectionHeading } from '../primitives';
import { Reveal, Stagger } from '../lib/Reveal';

const PROJECTS = [
  {
    n: '01',
    title: 'AI Pet Health Companion',
    tag: 'Healthcare · Assistant',
    desc: 'A smart health assistant for pets — AI checkups, real-time monitoring and early warnings.',
    icon: Heart,
    stack: ['Python', 'FastAPI', 'RAG', 'OpenAI', 'React', 'Docker'],
    github: 'https://github.com/Prureddy/petoai',
    demo: '#',
  },
  {
    n: '02',
    title: 'LLaMA 2 Fine-Tuning',
    tag: 'Custom Model · Insurance',
    desc: 'A LLaMA 2 model trained to read and reason over dense insurance documents.',
    icon: Zap,
    stack: ['Python', 'LLaMA 2', 'PEFT', 'LoRA', 'PyTorch'],
    github: 'https://github.com/Prureddy/Finetuning_LLAMA_2_7B_model',
    demo: null,
  },
  {
    n: '03',
    title: 'Financial AI Agent',
    tag: 'Finance · Agent',
    desc: 'An AI agent that reads markets in real time and suggests investment ideas.',
    icon: TrendingUp,
    stack: ['Python', 'LangChain', 'Groq', 'FastAPI', 'AWS'],
    github: 'https://github.com/Prureddy/Finance_Agent',
    demo: '#',
  },
  {
    n: '04',
    title: 'MindMate',
    tag: 'Mental Health · AI',
    desc: 'A caring AI companion that reads emotion and supports mental wellbeing.',
    icon: Brain,
    stack: ['Python', 'RAG', 'LangChain', 'Gemini', 'TypeScript'],
    github: 'https://github.com/Prureddy/MindMate',
    demo: null,
  },
];

function Card({ p }: { p: (typeof PROJECTS)[number] }) {
  const Icon = p.icon;
  const hasDemo = p.demo && p.demo !== '#';
  return (
    <article className="glass flex flex-col p-7">
      <div className="flex items-start justify-between">
        <div className="font-display text-5xl font-bold text-muted-foreground/25">{p.n}</div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
          <Icon size={22} />
        </div>
      </div>
      <div className="mt-4 font-mono text-xs uppercase tracking-wider text-brand-cyan">{p.tag}</div>
      <h3 className="mt-1 font-display text-2xl font-bold">{p.title}</h3>
      <p className="mt-3 text-muted-foreground">{p.desc}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <Chip key={s}>{s}</Chip>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-4 pt-7">
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-brand"
        >
          <Github size={16} /> Code
        </a>
        {hasDemo && (
          <a
            href={p.demo as string}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-brand"
          >
            <ExternalLink size={16} /> Live
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          index="03"
          label="Projects"
          title="Things I've"
          accent="built"
          story="A few AI systems I've designed and shipped."
        />

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.08}>
          {PROJECTS.map((p) => (
            <Card key={p.n} p={p} />
          ))}
        </Stagger>

        <Reveal className="mt-8 text-center">
          <a
            href="https://github.com/Prureddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-muted-foreground transition-colors hover:text-brand"
          >
            See everything on GitHub <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
