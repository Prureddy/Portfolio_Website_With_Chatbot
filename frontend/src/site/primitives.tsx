import { ReactNode } from 'react';
import { Reveal } from './lib/Reveal';

export function Section({
  id,
  children,
  className = '',
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-6 py-14 md:py-16 ${className}`}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  index,
  label,
  title,
  accent,
  story,
  center = false,
}: {
  index: string;
  label: string;
  title: string;
  accent?: string;
  story?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-8 ${center ? 'text-center' : ''}`}>
      <Reveal y={14} duration={0.5}>
        <div className={`eyebrow mb-3 ${center ? 'justify-center' : ''}`}>
          <span className="font-mono">{index}</span>
          <span className="h-px w-6 bg-border" />
          {label}
        </div>
      </Reveal>
      <Reveal y={18}>
        <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
          {title} {accent && <span className="text-brand">{accent}</span>}
        </h2>
      </Reveal>
      {story && (
        <Reveal y={14} delay={0.06}>
          <p className={`mt-3 max-w-xl text-sm text-muted-foreground ${center ? 'mx-auto' : ''}`}>
            {story}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return <span className="chip">{children}</span>;
}
