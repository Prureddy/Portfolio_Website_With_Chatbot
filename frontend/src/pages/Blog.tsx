import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import BlogHeader from '@/site/blog/BlogHeader';
import { POSTS, CATEGORIES, formatDate } from '@/site/blog/posts';
import { useSeo } from '@/site/lib/useSeo';

export default function Blog() {
  const [active, setActive] = useState('All');

  useSeo({
    title: 'Writing — Pruthvi S',
    description: "Thoughts on tech, life, and everything I'm figuring out along the way — by Pruthvi S.",
    path: '/blog',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filters = ['All', ...CATEGORIES];
  const posts = active === 'All' ? POSTS : POSTS.filter((p) => p.category === active);

  return (
    <div className="min-h-screen">
      <BlogHeader />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <div className="eyebrow mb-4">
          <span className="h-px w-6 bg-border" /> Writing
        </div>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Thoughts, in <span className="text-brand">the open</span>
        </h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Tech, life, and everything I'm figuring out along the way — some technical, some personal.
        </p>

        {filters.length > 2 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  active === f
                    ? 'border-brand/50 bg-brand/10 text-brand'
                    : 'border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        )}

        <div className="mt-8 divide-y divide-border">
          {posts.length === 0 && (
            <p className="py-10 text-muted-foreground">Nothing here yet — check back soon.</p>
          )}
          {posts.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="group block py-7">
              <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                <span className="text-brand">{p.category}</span>
                <span>·</span>
                <time>{formatDate(p.date)}</time>
                <span>·</span>
                <span>{p.readingMinutes} min read</span>
              </div>
              <h2 className="mt-2 flex items-start gap-1.5 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-brand">
                {p.title}
                <ArrowUpRight size={18} className="mt-0.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
              </h2>
              <p className="mt-2 text-muted-foreground">{p.excerpt}</p>
              {p.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
