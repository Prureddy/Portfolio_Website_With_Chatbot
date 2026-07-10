import { Languages, Sparkles, Users, Youtube } from 'lucide-react';
import { Section, SectionHeading } from '../primitives';
import { Reveal, Stagger } from '../lib/Reveal';
import { scrollTo } from '../lib/motion';

// TODO: set the real Pru.ai channel URL; then this CTA becomes a live external link.
const PRU_AI_URL = '';

const GIFTS = [
  { icon: Languages, title: 'In your own language', detail: 'AI taught Kannada-first, so no learner is left behind.' },
  { icon: Sparkles, title: 'Tools & opportunities', detail: 'AI tools, internships, hackathons and coding, made simple.' },
  { icon: Users, title: 'A growing community', detail: 'Thousands of learners exploring AI in their own language.' },
];

export default function PruAi() {
  return (
    <Section id="pruai">
      <SectionHeading
        index="07"
        label="Giving Back"
        title="Sharing what I"
        accent="know"
        story="The more I learn, the more I want to pass it on."
      />

      <Reveal>
        <div className="glass relative overflow-hidden p-8 text-center md:p-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--brand)/0.18),transparent_60%)]" />
          <div className="relative">
            <div className="text-gradient font-display text-4xl font-bold md:text-5xl">Pru.ai</div>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Outside of work I run <span className="text-foreground">Pru.ai</span> — a fast-growing,
              Kannada-first AI channel that helps thousands of people learn AI, tools, internships,
              hackathons and coding in their own language.
            </p>
            {PRU_AI_URL ? (
              <a href={PRU_AI_URL} target="_blank" rel="noopener noreferrer" className="btn-glow mt-8">
                <Youtube size={18} /> Visit the channel
              </a>
            ) : (
              <button onClick={() => scrollTo('#contact')} className="btn-glow mt-8">
                <Youtube size={18} /> Reach out to learn more
              </button>
            )}
          </div>
        </div>
      </Reveal>

      <Stagger className="mt-5 grid gap-5 md:grid-cols-3" stagger={0.1}>
        {GIFTS.map((g) => {
          const Icon = g.icon;
          return (
            <div key={g.title} className="glass p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 text-brand">
                <Icon size={20} />
              </div>
              <h4 className="mt-4 font-display text-base font-semibold">{g.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{g.detail}</p>
            </div>
          );
        })}
      </Stagger>
    </Section>
  );
}
