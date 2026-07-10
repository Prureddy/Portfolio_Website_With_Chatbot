import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Section, SectionHeading, Chip } from '../primitives';
import { Reveal } from '../lib/Reveal';

const JOBS = [
  {
    role: 'AI Engineer',
    company: 'DScribe',
    period: 'Jun 2025 – Present',
    location: 'Bangalore, India',
    type: 'Full-time',
    points: [
      'Built agentic AI that turns handwritten doctor case sheets into structured discharge summaries — cutting documentation time ~80% at 90%+ accuracy',
      'Built multi-agent orchestration routing across RAG retrieval, NER extraction, scheduling and recommendation agents',
      'Fine-tuned Mistral 7B, Phi-3 and LLaMA 3.2 with LoRA/QLoRA (Unsloth, DeepSpeed)',
      'Built voice AI agents and n8n automation pipelines shipped to production',
    ],
    stack: ['Agentic AI', 'RAG', 'LangGraph', 'LLM Fine-tuning', 'OCR', 'Voice AI', 'FastAPI'],
  },
  {
    role: 'AI Engineer',
    company: 'DealBerg',
    period: 'Jan 2026 – Apr 2026',
    location: 'Bengaluru, India',
    type: 'Full-time',
    points: [
      'Built and shipped an end-to-end AI content-automation platform (Hitayu Botanics) — topic research → blog strategy → SEO articles → AI images → voice narration → auto-publishing',
      'Added a human-in-the-loop approval flow and n8n workflows to auto-generate and schedule social posts across platforms, plus lead tracking from user interactions',
      'Architected a multi-agent AI admissions platform letting parents interact with schools via voice, chat and phone assistants',
      'Built a ChromaDB RAG pipeline (OpenAI embeddings) with a two-layer exact + semantic cache to cut LLM cost and latency, and LLM-based NER to turn conversations into scored CRM leads',
      'Integrated Bolna AI voice agents, Google Calendar scheduling and real-time FastAPI streaming; cut API latency ~70% by resolving N+1 queries',
    ],
    stack: ['Multi-Agent AI', 'RAG', 'ChromaDB', 'FastAPI', 'n8n', 'Voice AI', 'AWS'],
  },
  {
    role: 'Student Intern',
    company: 'Unisys',
    period: 'Oct 2024 – May 2025',
    location: 'Bangalore, India',
    type: 'Internship',
    points: [
      'Improved a multi-language AI chatbot, raising accuracy by 35%',
      'Built an AI math solver that reads handwriting (OCR) and explains answers',
      'Fine-tuned open-source AI models for different use cases',
    ],
    stack: ['Python', 'OCR', 'Multilingual AI', 'RAG', 'ML'],
  },
  {
    role: 'AIML Intern',
    company: 'AIML Spectrum',
    period: 'Jun 2024 – Jul 2024',
    location: 'Bangalore, India',
    type: 'Internship',
    points: [
      'Built a news chatbot reading 1,000+ articles a day at 95% accuracy',
      'Cut patient wait times by 50% with a healthcare chatbot handling 1,000+ daily questions',
      'Automated reading of medical PDFs at 85% accuracy, HIPAA-compliant',
    ],
    stack: ['Python', 'OCR', 'LangChain', 'Qdrant'],
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="04"
        label="Experience"
        title="My"
        accent="journey"
        story="The roles that shaped me."
      />

      <div className="relative ml-2 border-l border-border pl-8 md:ml-4 md:pl-12">
        {JOBS.map((j, i) => (
          <Reveal key={j.company} x={20} className="relative pb-12 last:pb-0">
            {/* node */}
            <span className="absolute -left-[41px] top-1.5 flex h-5 w-5 items-center justify-center md:-left-[57px]">
              <span className="absolute h-full w-full rounded-full bg-brand/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_12px_hsl(var(--brand)/0.8)]" />
            </span>

            <div className="glass p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 text-brand">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">{j.role}</h3>
                    <div className="text-sm font-medium text-brand">{j.company}</div>
                  </div>
                </div>
                <span className="chip">{j.type}</span>
              </div>

              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Calendar size={12} /> {j.period}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin size={12} /> {j.location}</span>
              </div>

              <ul className="mt-4 space-y-2">
                {j.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {j.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
