import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Section, SectionHeading } from '../primitives';
import { Reveal } from '../lib/Reveal';

const INFO = [
  { icon: Mail, label: 'Email', value: 'pruthvisreddy@dscribe.in', href: 'mailto:pruthvisreddy@dscribe.in' },
  { icon: Phone, label: 'Phone', value: '+91 8861412936', href: 'tel:+918861412936' },
  { icon: MapPin, label: 'Location', value: 'Bangalore, India', href: '#' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await new Promise((r) => setTimeout(r, 700));
      const subject = encodeURIComponent(`Message from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
      window.location.href = `mailto:pruthvisreddy@dscribe.in?subject=${subject}&body=${body}`;
      toast({ title: 'Message ready', description: 'Your email app should open to send it.' });
      setForm({ name: '', email: '', message: '' });
    } catch {
      toast({ title: 'Something went wrong', description: 'Please try again.', variant: 'destructive' });
    } finally {
      setSending(false);
    }
  };

  const field = 'w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand';

  return (
    <Section id="contact">
      <SectionHeading
        index="08"
        label="Contact"
        title="Let's"
        accent="connect"
        story="Have an idea? Let's build it together."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal x={-20} className="space-y-6">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Have an idea, a role, or just want to talk AI? I'm always up for a good conversation —
            drop me a message and I'll get back within a day.
          </p>

          <div className="space-y-3">
            {INFO.map((c) => {
              const Icon = c.icon;
              return (
                <a key={c.label} href={c.href} className="glass flex items-center gap-4 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 text-brand">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-brand-cyan">{c.label}</div>
                    <div className="text-sm font-medium">{c.value}</div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="flex gap-3">
            <a href="https://www.linkedin.com/in/pruthvi-s-296416232/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/Prureddy" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand">
              <Github size={18} />
            </a>
            <a href="https://instagram.com/_pruthvi_reddy_116" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand">
              <Instagram size={18} />
            </a>
            <a href="https://twitter.com/pruthvisreddy11" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand">
              <Twitter size={18} />
            </a>
          </div>

          <div className="glass flex items-center gap-3 p-4">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan/70" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-cyan" />
            </span>
            <div>
              <div className="text-sm font-semibold">Open to new work</div>
              <div className="font-mono text-[11px] text-muted-foreground">AI/ML projects &amp; collaborations</div>
            </div>
          </div>
        </Reveal>

        <Reveal x={20}>
          <form onSubmit={onSubmit} className="glass space-y-4 p-7">
            <div>
              <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-brand-cyan">Your name</label>
              <input name="name" value={form.name} onChange={onChange} required placeholder="Your name" className={field} />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-brand-cyan">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="you@email.com" className={field} />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-brand-cyan">Message</label>
              <textarea name="message" value={form.message} onChange={onChange} required rows={5} placeholder="Tell me about your idea or project..." className={`${field} resize-none`} />
            </div>
            <button type="submit" disabled={sending} className="btn-glow w-full justify-center disabled:opacity-60">
              {sending ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" /> Sending…
                </>
              ) : (
                <>
                  <Send size={16} /> Send message
                </>
              )}
            </button>
            <p className="text-center font-mono text-[10px] text-muted-foreground">
              This opens your email app so you can send the message.
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
