import { useState, useEffect } from 'react';
import { Trophy, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import avt1 from '@/assets/avt1.png';
import avt2 from '@/assets/avt2.png';
import ddt1 from '@/assets/ddt1.png';
import ddt2 from '@/assets/ddt2.png';
import ddt3 from '@/assets/ddt3.png';
import anz1 from '@/assets/anz1.png';
import anz2 from '@/assets/anz2.png';
import anz3 from '@/assets/anz3.png';
import { Section, SectionHeading, Chip } from '../primitives';
import { Reveal, Stagger } from '../lib/Reveal';

const WINS = [
  {
    id: 2,
    title: 'DDT Hackathon 2024',
    rank: '🥇 1st Prize · ₹60,000',
    project: 'Energy Institute Bengaluru × NASSCOM CoE',
    desc: 'A platform that simplifies everyday business tasks with AI automation.',
    stack: ['AI Automation', 'Process Mining', 'Cloud'],
    year: '2024',
    people: '300+',
    photos: [ddt1, ddt2, ddt3],
  },
  {
    id: 1,
    title: 'Aventus 2.0',
    rank: '🏅 AIML Track Winner',
    project: 'PetCare AI Platform',
    desc: 'A full AI tool for pet-health tracking with real-time monitoring and early warnings.',
    stack: ['Python', 'ML', 'React', 'FastAPI'],
    year: '2024',
    people: '500+',
    photos: [avt1, avt2],
  },
  {
    id: 3,
    title: 'ANZ Hackathon',
    rank: '🥈 Runner-up',
    project: 'HealthGenieAI',
    desc: 'A health assistant for doctors that gives advice from a patient’s history.',
    stack: ['Generative AI', 'NLP', 'React'],
    year: '2023',
    people: '400+',
    photos: [anz1, anz2, anz3],
  },
];

const STATS = [
  { v: '3+', l: 'Hackathons Won' },
  { v: '1200+', l: 'People Competed Against' },
  { v: '12+', l: 'Hackathons Entered' },
];

export default function Hackathons() {
  const [idx, setIdx] = useState<Record<number, number>>({});

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((prev) => {
        const next = { ...prev };
        WINS.forEach((w) => {
          if (w.photos.length > 1) next[w.id] = ((prev[w.id] || 0) + 1) % w.photos.length;
        });
        return next;
      });
    }, 3200);
    return () => clearInterval(t);
  }, []);

  const move = (id: number, dir: number, len: number) =>
    setIdx((p) => ({ ...p, [id]: (((p[id] || 0) + dir) % len + len) % len }));

  return (
    <Section id="hackathons">
      <SectionHeading
        index="05"
        label="Hackathons"
        title="Wins under"
        accent="pressure"
        story="Built fast, under pressure."
      />

      <Stagger className="grid grid-cols-1 gap-5 lg:grid-cols-3" stagger={0.1}>
        {WINS.map((w) => {
          const cur = idx[w.id] || 0;
          return (
            <article key={w.id} className="glass group flex flex-col overflow-hidden p-0">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={w.photos[cur]}
                  alt={w.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-brand/40 bg-background/70 px-3 py-1 font-display text-sm font-semibold text-brand backdrop-blur">
                  <Trophy size={13} /> {w.rank}
                </div>
                {w.photos.length > 1 && (
                  <>
                    <button onClick={() => move(w.id, -1, w.photos.length)} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/60 p-1.5 text-foreground/80 hover:text-brand" aria-label="Previous">
                      <ChevronLeft size={16} />
                    </button>
                    <button onClick={() => move(w.id, 1, w.photos.length)} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/60 p-1.5 text-foreground/80 hover:text-brand" aria-label="Next">
                      <ChevronRight size={16} />
                    </button>
                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                      {w.photos.map((_, d) => (
                        <span key={d} className={`h-1.5 w-1.5 rounded-full ${d === cur ? 'bg-brand' : 'bg-foreground/40'}`} />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold">{w.title}</h3>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                    <Users size={12} /> {w.people} · {w.year}
                  </span>
                </div>
                <div className="mt-1 text-sm font-medium text-brand-cyan">{w.project}</div>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {w.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </Stagger>

      <Stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3" stagger={0.1}>
        {STATS.map((s) => (
          <div key={s.l} className="glass p-6 text-center">
            <div className="text-gradient font-display text-4xl font-bold">{s.v}</div>
            <div className="mt-1 font-mono text-xs uppercase tracking-wide text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </Stagger>
    </Section>
  );
}
