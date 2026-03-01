"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, initGSAP } from "@/lib/gsap";

/* ------------------------------------------------------------------ */
/*  Engagement data                                                    */
/* ------------------------------------------------------------------ */

const coreStructure = [
  {
    symbol: "\u2295",
    title: "Single Trusted Relationship",
    description:
      "One dedicated partner serves as your single point of contact across every domain \u2014 eliminating coordination gaps and information silos.",
  },
  {
    symbol: "\u25CE",
    title: "Collaboration-First Model",
    description:
      "We integrate with your existing advisors rather than replacing them, amplifying their effectiveness through unified intelligence and coordination.",
  },
];

const keyDifferentiators = [
  {
    symbol: "\u2B22",
    title: "Intelligence-Led Architecture",
    description:
      "Every recommendation is driven by real-time threat intelligence and cross-domain analysis \u2014 not assumptions or industry templates.",
  },
  {
    symbol: "\u25C8",
    title: "Strict Confidentiality",
    description:
      "Compartmentalized operations, need-to-know protocols, and government-grade information security protect your most sensitive matters.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function EngagementModel() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;

      initGSAP();

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReducedMotion) return;

      const leftItems = leftRefs.current.filter(Boolean) as HTMLDivElement[];
      const rightItems = rightRefs.current.filter(Boolean) as HTMLDivElement[];

      // Stagger left items from x:-30
      if (leftItems.length > 0) {
        gsap.fromTo(
          leftItems,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              once: true,
            },
          },
        );
      }

      // Stagger right items from x:30
      if (rightItems.length > 0) {
        gsap.fromTo(
          rightItems,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              once: true,
            },
          },
        );
      }

      return () => {
        ScrollTrigger.getAll().forEach((st) => {
          if (sectionRef.current?.contains(st.trigger as Element)) st.kill();
        });
      };
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section ref={sectionRef} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
          The AMG Approach
        </p>

        {/* Title */}
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-2">
          Our Engagement Model
        </h2>

        {/* Subtitle */}
        <p className="text-muted-foreground mb-16">
          Special Operations Discipline. Advisory Excellence.
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column: Core Structure */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-foreground mb-8 border-b border-border pb-4">
              Core Structure
            </h3>
            <div className="space-y-10">
              {coreStructure.map((item, i) => (
                <div
                  key={item.title}
                  ref={(el) => {
                    leftRefs.current[i] = el;
                  }}
                >
                  <span className="text-2xl text-primary leading-none">
                    {item.symbol}
                  </span>
                  <h4 className="font-mono text-sm uppercase tracking-widest text-foreground mt-3 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Key Differentiators */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-foreground mb-8 border-b border-border pb-4">
              Key Differentiators
            </h3>
            <div className="space-y-10">
              {keyDifferentiators.map((item, i) => (
                <div
                  key={item.title}
                  ref={(el) => {
                    rightRefs.current[i] = el;
                  }}
                >
                  <span className="text-2xl text-primary leading-none">
                    {item.symbol}
                  </span>
                  <h4 className="font-mono text-sm uppercase tracking-widest text-foreground mt-3 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
