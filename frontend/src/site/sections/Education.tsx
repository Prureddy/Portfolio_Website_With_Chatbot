import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { Section, SectionHeading, Chip } from '../primitives';
import { Reveal, Stagger } from '../lib/Reveal';

const CERTS = [
  { title: 'Generative AI for Everyone', org: 'DeepLearning.AI', year: '2024', tags: ['Generative AI', 'Prompting'] },
  { title: 'Machine Learning Specialization', org: 'Stanford · Coursera', year: '2023', tags: ['ML', 'Neural Nets'] },
  { title: 'AWS Cloud Practitioner', org: 'Amazon Web Services', year: '2023', tags: ['Cloud', 'DevOps'] },
];

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading
        index="06"
        label="Education"
        title="Where it"
        accent="started"
        story="Where the fundamentals came from."
      />

      <div className="grid gap-5 lg:grid-cols-5">
        <Reveal className="lg:col-span-2" x={-20}>
          <div className="glass h-full p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold leading-tight">B.Tech, Computer Science &amp; Technology</h3>
                <div className="text-sm text-brand">Dayananda Sagar University</div>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><BookOpen size={13} className="text-brand-cyan" /> 2021 – 2025</span>
              <span>Bangalore, India</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              A strong base in computer science, plus time spent in tech workshops, AI events and
              open-source projects along the way.
            </p>
          </div>
        </Reveal>

        <Stagger className="grid gap-5 sm:grid-cols-3 lg:col-span-3" stagger={0.1}>
          {CERTS.map((c) => (
            <div key={c.title} className="glass flex flex-col p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 text-brand">
                <Award size={20} />
              </div>
              <h4 className="mt-4 font-display text-base font-semibold leading-snug">{c.title}</h4>
              <div className="mt-1 text-sm text-brand">{c.org}</div>
              <div className="font-mono text-xs text-muted-foreground">{c.year}</div>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                {c.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
