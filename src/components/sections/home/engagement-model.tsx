"use client";

import { useRef, useCallback, useSyncExternalStore } from "react";
import { gsap, useGSAP, initGSAP } from "@/lib/gsap";

/* ------------------------------------------------------------------ */
/*  Engagement data                                                    */
/* ------------------------------------------------------------------ */

const pillars = [
  {
    symbol: "\u2295", // ⊕
    title: "Single Trusted Relationship",
    description:
      "One dedicated partner serves as your single point of contact across every domain \u2014 eliminating coordination gaps and information silos.",
  },
  {
    symbol: "\u25CE", // ◎
    title: "Collaboration-First Model",
    description:
      "We integrate with your existing advisors rather than replacing them, amplifying their effectiveness through unified intelligence and coordination.",
  },
  {
    symbol: "\u2B22", // ⬡
    title: "Intelligence-Led Architecture",
    description:
      "Every recommendation is driven by real-time threat intelligence and cross-domain analysis \u2014 not assumptions or industry templates.",
  },
  {
    symbol: "\u25C8", // ◈
    title: "Strict Confidentiality",
    description:
      "Compartmentalized operations, need-to-know protocols, and government-grade information security protect your most sensitive matters.",
  },
];

/* ------------------------------------------------------------------ */
/*  Scroll-pin media queries (same pattern as problem.tsx)             */
/* ------------------------------------------------------------------ */

function subscribeToDesktop(cb: () => void) {
  const mql = window.matchMedia("(min-width: 768px)");
  const mqlMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", cb);
  mqlMotion.addEventListener("change", cb);
  return () => {
    mql.removeEventListener("change", cb);
    mqlMotion.removeEventListener("change", cb);
  };
}

function getCanPinSnapshot() {
  return (
    window.matchMedia("(min-width: 768px)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function getCanPinServerSnapshot() {
  return false;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function EngagementModel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const spineRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const connectorRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const canPin = useSyncExternalStore(
    subscribeToDesktop,
    getCanPinSnapshot,
    getCanPinServerSnapshot
  );

  const setNodeRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      nodeRefs.current[i] = el;
    },
    []
  );

  const setConnectorRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      connectorRefs.current[i] = el;
    },
    []
  );

  const setCardRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      cardRefs.current[i] = el;
    },
    []
  );

  useGSAP(
    () => {
      if (!canPin) return;

      initGSAP();

      const section = sectionRef.current;
      const pin = pinRef.current;
      const hub = hubRef.current;
      const spine = spineRef.current;

      if (!section || !pin || !hub || !spine) return;

      const nodes = nodeRefs.current.filter(Boolean) as HTMLDivElement[];
      const connectors = connectorRefs.current.filter(
        Boolean
      ) as HTMLDivElement[];
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

      if (nodes.length === 0) return;

      // Set initial hidden states
      gsap.set(hub, { opacity: 0, scale: 0, transformOrigin: "center center" });
      gsap.set(spine, { scaleY: 0, transformOrigin: "top" });
      gsap.set(nodes, { opacity: 0, scale: 0, transformOrigin: "center" });
      gsap.set(connectors, { scaleX: 0, transformOrigin: "left" });
      gsap.set(cards, { autoAlpha: 0, y: 20 });

      // Build scroll-pinned timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          pin: pin,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      // Phase 1: Hub appears (0 - 0.5)
      tl.to(
        hub,
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
        0
      );

      // Phase 2: Spine draws (0.3 - 2)
      tl.to(spine, { scaleY: 1, duration: 1.7, ease: "none" }, 0.3);

      // Phase 3: Cards appear sequentially (1.5 - 5.5)
      const cardDuration = 1;
      pillars.forEach((_, i) => {
        const start = 1.5 + i * cardDuration;

        // Node dot pops in
        tl.to(
          nodes[i],
          { opacity: 1, scale: 1, duration: 0.2, ease: "back.out(2)" },
          start
        );

        // Connector draws
        tl.to(
          connectors[i],
          { scaleX: 1, duration: 0.3, ease: "power2.out" },
          start + 0.1
        );

        // Card fades in
        tl.to(
          cards[i],
          { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" },
          start + 0.2
        );
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: sectionRef, dependencies: [canPin] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: canPin ? "400vh" : "auto" }}
    >
      <div
        ref={pinRef}
        className={
          canPin
            ? "flex flex-col justify-center min-h-screen py-24 lg:py-32 blueprint-grid"
            : "py-24 lg:py-32"
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Header */}
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            The AMG Approach
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-2">
            Our Engagement Model
          </h2>
          <p className="text-muted-foreground mb-16">
            Special Operations Discipline. Advisory Excellence.
          </p>

          {/* Schematic area */}
          <div className="relative max-w-2xl">
            {/* Hub marker */}
            <div ref={hubRef} className="flex items-center gap-3 mb-10">
              <div className="w-2.5 h-2.5 bg-primary rotate-45 shrink-0" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/70">
                Operational Architecture
              </span>
            </div>

            {/* Cards with spine */}
            <div className="relative pl-12">
              {/* Spine */}
              <div
                ref={spineRef}
                className="absolute left-[7px] top-0 bottom-0 w-px bg-primary/20"
              />

              {/* Card list */}
              <div className="space-y-10">
                {pillars.map((pillar, i) => (
                  <div key={pillar.title} className="flex items-start">
                    {/* Left side: node dot + connector */}
                    <div className="flex items-center shrink-0 mt-1.5 -ml-12">
                      {/* Node dot */}
                      <div
                        ref={setNodeRef(i)}
                        className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                      />
                      {/* Connector */}
                      <div
                        ref={setConnectorRef(i)}
                        className="w-10 h-px bg-primary/20 ml-px"
                      />
                    </div>

                    {/* Card content */}
                    <div ref={setCardRef(i)} className="ml-1">
                      <span className="text-xl text-primary leading-none">
                        {pillar.symbol}
                      </span>
                      <h4 className="font-mono text-sm uppercase tracking-widest font-semibold mt-2 mb-2 text-foreground">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
