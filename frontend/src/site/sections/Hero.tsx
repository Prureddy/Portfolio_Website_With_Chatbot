import { Github, Linkedin } from 'lucide-react';
import profileImg from '@/assets/profile.png';
import { scrollTo } from '../lib/motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-12 pt-32">
      {/* one subtle accent glow */}
      <div className="pointer-events-none absolute -left-32 top-16 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,hsl(var(--brand)/0.14),transparent_65%)] blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* left: copy */}
        <div>
          <div className="eyebrow mb-4">
            <span className="h-px w-6 bg-border" /> AI Engineer · Healthcare AI
          </div>

          <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Pruthvi <span className="text-brand">S</span>
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/90 md:text-lg">
            I build AI systems that help doctors, understand language, and turn messy data into answers.
          </p>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Currently an AI Engineer at DScribe, building agentic AI for healthcare — LLMs, RAG,
            multi-agent systems, voice AI and OCR.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button onClick={() => scrollTo('#projects')} className="btn-glow">
              View my work
            </button>
            <button onClick={() => scrollTo('#contact')} className="btn-ghost">
              Get in touch
            </button>
            <div className="ml-1 flex gap-2">
              <a
                href="https://github.com/Prureddy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/pruthvi-s-296416232/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* right: portrait */}
        <div className="relative mx-auto hidden w-full max-w-xs lg:block">
          <div className="absolute -inset-4 -z-10 rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_25%,hsl(var(--brand)/0.28),transparent_70%)] blur-2xl" />
          <div className="glass overflow-hidden rounded-2xl p-2">
            <img
              src={profileImg}
              alt="Pruthvi S"
              className="aspect-[4/5] w-full rounded-xl object-cover"
              style={{ objectPosition: '50% 14%' }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://placehold.co/600x750/12101c/a855f7?text=Pruthvi+S';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
