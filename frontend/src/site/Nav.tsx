import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollTo } from './lib/motion';
import ThemeToggle from './ThemeToggle';

export const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'hackathons', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    scrollTo(`#${id}`);
    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? 'border-b border-border bg-background/70 backdrop-blur-xl' : 'border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button onClick={() => scrollTo('#home')} className="font-display text-lg font-bold tracking-tight text-foreground">
            Pruthvi<span className="text-brand">.</span>
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button onClick={() => scrollTo('#contact')} className="hidden btn-glow !px-5 !py-2.5 text-sm md:inline-flex">
              Let's talk
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
              aria-label="Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* progress bar */}
        <div className="h-px w-full bg-transparent">
          <div
            className="h-full origin-left bg-foreground/40"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-background/95 backdrop-blur-xl md:hidden">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => go(l.id)} className="font-display text-2xl font-semibold text-foreground">
              {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
