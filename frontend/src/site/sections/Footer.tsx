import { Github, Linkedin, Mail, Instagram, Twitter, ArrowUp, Heart } from 'lucide-react';
import { scrollTo } from '../lib/motion';
import { LINKS } from '../Nav';

export default function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-xl font-bold">
            Pruthvi<span className="text-brand">.</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            AI Engineer building intelligent systems that help people — in healthcare and beyond.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/pruthvi-s-296416232/', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/Prureddy', label: 'GitHub' },
              { icon: Instagram, href: 'https://instagram.com/_pruthvi_reddy_116', label: 'Instagram' },
              { icon: Twitter, href: 'https://twitter.com/pruthvisreddy11', label: 'Twitter' },
              { icon: Mail, href: 'mailto:pruthvisreddy@dscribe.in', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-mono text-xs uppercase tracking-wider text-brand-cyan">Navigate</h4>
          <ul className="grid grid-cols-2 gap-y-2">
            {LINKS.map((l) => (
              <li key={l.id}>
                <button onClick={() => scrollTo(`#${l.id}`)} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-mono text-xs uppercase tracking-wider text-brand-cyan">Get in touch</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <a href="mailto:pruthvisreddy@dscribe.in" className="block transition-colors hover:text-foreground">pruthvisreddy@dscribe.in</a>
            <a href="tel:+918861412936" className="block transition-colors hover:text-foreground">+91 8861412936</a>
            <div>Bangalore, India</div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl items-center justify-between border-t border-border pt-6">
        <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          Built with <Heart size={12} className="text-brand" /> by Pruthvi S · © {new Date().getFullYear()}
        </span>
        <button
          onClick={() => scrollTo('#home', 0)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
