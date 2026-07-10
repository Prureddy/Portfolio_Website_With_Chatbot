import { Link } from 'react-router-dom';
import { Section, SectionHeading, Chip } from '../primitives';
import { Reveal } from '../lib/Reveal';

const FOCUS = ['Agentic AI', 'LLMs & Fine-tuning', 'RAG', 'Multi-Agent Systems', 'Voice AI', 'OCR'];

const FACTS = [
  { k: 'Now', v: 'AI Engineer @ DScribe' },
  { k: 'Founder', v: 'DischargeX (acquired)' },
  { k: 'Degree', v: 'B.Tech CSE · DSU' },
  { k: 'Based in', v: 'Bangalore, India' },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" label="About" title="Who I" accent="am" story="A quick introduction." />

      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <Reveal>
            <p className="text-2xl font-medium leading-snug md:text-3xl">
              I'm a <span className="text-brand">founder and AI Engineer</span> who builds the
              intelligence behind real products — not demos.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              I founded <span className="text-foreground">DischargeX</span> — India's first
              voice-enabled discharge summary generator — and grew it until it was{' '}
              <span className="text-foreground">acquired by DScribe</span>, where I now build the AI
              behind it: agentic pipelines that turn handwritten doctor case sheets into structured
              discharge summaries, cutting documentation time ~80% at 90%+ accuracy.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Away from the keyboard, I teach AI in Kannada through <span className="text-foreground">Pru.ai</span>,
              enjoy turning fresh research papers into things people can actually use, and{' '}
              <Link to="/blog" className="text-brand hover:underline">write about it here</Link> — the
              technical and the personal both.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-7 flex flex-wrap gap-2">
              {FOCUS.map((f) => (
                <Chip key={f}>{f}</Chip>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="md:col-span-2" delay={0.1}>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
            {FACTS.map((f) => (
              <div key={f.k} className="bg-card p-4">
                <div className="font-mono text-[11px] uppercase tracking-wider text-brand-cyan">{f.k}</div>
                <div className="mt-1 text-sm font-medium">{f.v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
