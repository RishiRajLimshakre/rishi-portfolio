import { useEffect, useRef, RefObject } from 'react';

interface Options {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useIntersectionObserver<T extends HTMLElement>(
  options: Options = {}
): RefObject<T | null> {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold, rootMargin }
    );

    // Observe all fade-up children
    const targets = el.querySelectorAll<HTMLElement>('.fade-up');
    if (targets.length > 0) {
      targets.forEach((t) => observer.observe(t));
    } else {
      // If the ref itself is a fade-up element
      if (el.classList.contains('fade-up')) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}

export function useSingleObserver<T extends HTMLElement>(
  options: Options = {}
): RefObject<T | null> {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            if (once) observer.unobserve(el);
          } else if (!once) {
            el.classList.remove('visible');
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}
