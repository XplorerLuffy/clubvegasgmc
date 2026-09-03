"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** Stagger delay in ms, applied via transition-delay. */
  delay?: number;
  className?: string;
  /** Element tag to render — defaults to div. */
  as?: "div" | "li";
};

/**
 * Fades/slides content up once it scrolls into view. Reveals once and
 * stops observing — this never re-hides on scroll-away, and costs
 * nothing after the first reveal. No-ops (renders already-visible) if
 * IntersectionObserver isn't available or the user prefers less motion.
 */
export default function Reveal({ children, delay = 0, className, as = "div" }: Props) {
  const ref = useRef<HTMLDivElement | HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className ?? ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
