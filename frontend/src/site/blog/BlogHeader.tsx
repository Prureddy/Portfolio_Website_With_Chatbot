import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';

export default function BlogHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-lg font-bold tracking-tight text-foreground">
          Pruthvi<span className="text-brand">.</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/blog" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Writing
          </Link>
          <Link to="/#home" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Portfolio
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
