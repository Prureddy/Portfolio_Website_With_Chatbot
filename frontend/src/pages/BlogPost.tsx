import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import BlogHeader from '@/site/blog/BlogHeader';
import { getPost, formatDate } from '@/site/blog/posts';
import { useSeo } from '@/site/lib/useSeo';

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  useSeo({
    title: post ? `${post.title} — Pruthvi S` : 'Writing — Pruthvi S',
    description: post?.excerpt,
    path: post ? `/blog/${post.slug}` : '/blog',
    type: 'article',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen">
        <BlogHeader />
        <main className="mx-auto max-w-3xl px-6 pb-24 pt-40 text-center">
          <h1 className="font-display text-2xl font-semibold">Post not found</h1>
          <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-brand hover:underline">
            <ArrowLeft size={16} /> Back to writing
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <BlogHeader />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft size={16} /> All writing
        </Link>

        <div className="mt-8 flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <span className="text-brand">{post.category}</span>
          <span>·</span>
          <time>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readingMinutes} min read</span>
        </div>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {post.title}
        </h1>
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        )}

        <article
          className="prose prose-neutral mt-10 max-w-none dark:prose-invert
            prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight
            prose-a:text-brand prose-a:no-underline hover:prose-a:underline
            prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
            prose-pre:border prose-pre:border-border prose-pre:bg-card
            prose-img:rounded-xl prose-hr:border-border"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </article>
      </main>
    </div>
  );
}
