"use client";

import { useRef } from "react";
import { gsap, useGSAP, initGSAP } from "@/lib/gsap";

const capabilities = [
  {
    number: "01",
    title: "Assess",
    description:
      "Comprehensive cross-domain vulnerability assessments that reveal what siloed advisors miss.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Unified strategic blueprints that coordinate legal, financial, security, health, and intelligence resources.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Single point of accountability. We orchestrate every specialist, every timeline, every deliverable.",
  },
];

export function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;

      initGSAP();

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reducedMotion) return;

      const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];
      if (items.length === 0) return;

      gsap.fromTo(
        items,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
        }
      );
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section ref={sectionRef} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
          What We Do
        </p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">
          A Disciplined Methodology
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-16">
          Three phases. One integrated outcome.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap, i) => (
            <div
              key={cap.number}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="bg-card relative overflow-hidden p-8 lg:p-10"
            >
              {/* Large ghost number — decorative background anchor */}
              <span
                aria-hidden="true"
                className="absolute bottom-4 right-4 font-serif leading-none text-[8rem] lg:text-[10rem] text-primary/10 select-none pointer-events-none"
              >
                {cap.number}
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl tracking-tight mb-4 relative z-10">
                {cap.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed relative z-10 max-w-xs">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
