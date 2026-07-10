// Blog posts live entirely in this repo as markdown files in ./posts/*.md.
// Nothing is stored in a database or sent anywhere — content is the code.
//
// To add a post: create ./posts/my-slug.md with frontmatter:
//   ---
//   title: My Post Title
//   date: 2026-06-14
//   excerpt: One or two sentences shown in the list.
//   category: Tech        # Tech | Personal | Life | Social | Hobbies | ...
//   tags: AI, Agents
//   ---
//   Markdown body here (code blocks, lists, links, images all supported).

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO, e.g. 2026-06-14
  excerpt: string;
  category: string; // e.g. Tech, Personal, Life, Social, Hobbies
  tags: string[];
  content: string;
  readingMinutes: number;
};

/** Minimal frontmatter parser — no external dependency. */
function parse(raw: string): { data: Record<string, string>; body: string } {
  const match = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, body: raw.trim() };
  const data: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const i = line.indexOf(':');
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    let val = line.slice(i + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    data[key] = val;
  }
  return { data, body: match[2].trim() };
}

const files = import.meta.glob('./posts/*.md', { query: '?raw', import: 'default', eager: true }) as Record<
  string,
  string
>;

export const POSTS: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split('/').pop()!.replace(/\.md$/, '');
    const { data, body } = parse(raw);
    const words = body.split(/\s+/).filter(Boolean).length;
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? '',
      excerpt: data.excerpt ?? '',
      category: data.category ?? 'General',
      tags: (data.tags ?? '')
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      content: body,
      readingMinutes: Math.max(1, Math.round(words / 200)),
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const getPost = (slug: string): Post | undefined => POSTS.find((p) => p.slug === slug);

/** Unique categories that actually have posts, in a friendly order. */
export const CATEGORIES: string[] = (() => {
  const order = ['Tech', 'Personal', 'Life', 'Social', 'Experiences', 'Hobbies'];
  const present = Array.from(new Set(POSTS.map((p) => p.category)));
  return present.sort((a, b) => {
    const ia = order.indexOf(a);
    const ib = order.indexOf(b);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });
})();

export const formatDate = (iso: string): string => {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00');
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};
