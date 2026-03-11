"use client";

import { useRef, useCallback } from "react";
import { gsap, useGSAP, initGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/use-can-pin";

const challenges = [
  {
    number: "01",
    title: "Cross-Border Vulnerabilities",
    description:
      "Global operations spanning multiple jurisdictions create overlapping exposures that no single advisor can see.",
  },
  {
    number: "02",
    title: "Coordinated Threats",
    description:
      "Public visibility and digital footprints attract sophisticated, multi-vector attacks targeting family and enterprise.",
  },
  {
    number: "03",
    title: "Fragmented Intelligence",
    description:
      "Critical data siloed across legal, financial, and security teams leaves dangerous gaps in your defense posture.",
  },
  {
    number: "04",
    title: "Outpaced Response",
    description:
      "Threat velocity now exceeds the speed at which traditional advisory teams communicate and coordinate.",
  },
];

const CALLOUT_TEXT =
  "AMG brings order to chaos. One integrated platform across every domain of risk.";

export function Problem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const challengeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const calloutRef = useRef<HTMLDivElement>(null);

  const reducedMotion = useReducedMotion();

  const setChallengeRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      challengeRefs.current[index] = el;
    },
    []
  );

  useGSAP(
    () => {
      if (reducedMotion) return;

      initGSAP();

      const section = sectionRef.current;
      const callout = calloutRef.current;
      if (!section || !callout) return;

      const items = challengeRefs.current.filter(Boolean) as HTMLDivElement[];
      if (items.length === 0) return;

      gsap.set(items, { autoAlpha: 0, y: 40 });
      gsap.set(callout, { autoAlpha: 0, y: 40 });

      gsap.to(items, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      gsap.to(callout, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: items.length * 0.12 + 0.1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  );

  return (
    <section ref={sectionRef} id="problem" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
          The Challenge
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6">
          Navigating Complex Realities
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-16">
          The threats facing ultra-high-net-worth families are no longer
          isolated. They are converging, accelerating, and increasingly
          sophisticated.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {challenges.map((challenge, i) => (
            <div
              key={challenge.number}
              ref={setChallengeRef(i)}
              className="border-t border-[rgba(26,23,20,0.15)] pt-6"
            >
              <span className="font-serif italic text-2xl text-primary leading-none">
                {challenge.number}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl tracking-tight mt-3 mb-2">
                {challenge.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        <div
          ref={calloutRef}
          className="mt-16 rounded-lg bg-charcoal text-[#e8e4dc] px-6 py-8 sm:px-12 sm:py-12"
        >
          <p className="font-serif text-xl sm:text-2xl md:text-3xl leading-snug tracking-tight max-w-3xl italic">
            &ldquo;{CALLOUT_TEXT}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
