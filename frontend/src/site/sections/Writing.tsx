import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Section, SectionHeading } from '../primitives';
import { Reveal, Stagger } from '../lib/Reveal';
import { POSTS, formatDate } from '../blog/posts';

export default function Writing() {
  const latest = POSTS.slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <Section id="writing">
      <SectionHeading
        index="08"
        label="Writing"
        title="From the"
        accent="blog"
        story="Notes on tech, life, and everything in between."
      />

      <Stagger className="border-y border-border divide-y divide-border" stagger={0.08}>
        {latest.map((p) => (
          <Link key={p.slug} to={`/blog/${p.slug}`} className="group block py-5">
            <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
              <span className="text-brand">{p.category}</span>
              <span>·</span>
              <time>{formatDate(p.date)}</time>
              <span>·</span>
              <span>{p.readingMinutes} min read</span>
            </div>
            <h3 className="mt-1.5 flex items-start gap-1.5 font-display text-lg font-semibold transition-colors group-hover:text-brand">
              {p.title}
              <ArrowUpRight
                size={16}
                className="mt-1 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
              />
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
          </Link>
        ))}
      </Stagger>

      <Reveal className="mt-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
        >
          Read all posts <ArrowRight size={15} />
        </Link>
      </Reveal>
    </Section>
  );
}
