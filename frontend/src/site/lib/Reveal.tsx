import { useLayoutEffect, useRef, ElementType, ReactNode } from 'react';
import { gsap, reducedMotion } from './motion';

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  y?: number;
  x?: number;
  delay?: number;
  duration?: number;
  start?: string;
  id?: string;
};

/** Fade + slide content into view on scroll. Static under reduced motion. */
export function Reveal({
  children,
  className,
  as: Tag = 'div',
  y = 36,
  x = 0,
  delay = 0,
  duration = 0.9,
  start = 'top 85%',
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y,
        x,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start },
      });
    }, ref);
    return () => ctx.revert();
  }, [y, x, delay, duration, start]);
  return (
    <Tag ref={ref as never} className={className} id={id}>
      {children}
    </Tag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  stagger?: number;
  y?: number;
  start?: string;
};

/** Stagger the entrance of DIRECT children. */
export function Stagger({
  children,
  className,
  as: Tag = 'div',
  stagger = 0.1,
  y = 30,
  start = 'top 82%',
}: StaggerProps) {
  const ref = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion() || !el.children.length) return;
    const ctx = gsap.context(() => {
      gsap.from(Array.from(el.children), {
        opacity: 0,
        y,
        duration: 0.7,
        ease: 'power3.out',
        stagger,
        scrollTrigger: { trigger: el, start },
      });
    }, ref);
    return () => ctx.revert();
  }, [stagger, y, start]);
  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
