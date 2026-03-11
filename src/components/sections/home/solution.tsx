"use client";

import { useRef, useSyncExternalStore } from "react";
import { gsap, useGSAP, initGSAP } from "@/lib/gsap";

const traditionalItems = [
  "Wealth Advisor (siloed)",
  "Estate Attorney (siloed)",
  "Security Consultant (siloed)",
  "Insurance Broker (siloed)",
  "IT / Cyber Team (siloed)",
];

const amgItems = [
  "Unified Threat Picture",
  "Cross-Domain Coordination",
  "Single Point of Command",
  "Real-Time Intelligence",
  "Proactive Risk Mitigation",
];

function subscribeToMotionPref(callback: () => void) {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getMotionPref() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getMotionPrefServer() {
  return false;
}

export function Solution() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const rightItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPref,
    getMotionPref,
    getMotionPrefServer
  );

  useGSAP(
    () => {
      if (reducedMotion || !sectionRef.current) return;

      initGSAP();

      const section = sectionRef.current;
      const leftEls = leftItemsRef.current.filter(Boolean) as HTMLLIElement[];
      const rightEls = rightItemsRef.current.filter(Boolean) as HTMLLIElement[];

      gsap.set(leftEls, { x: -30, autoAlpha: 0 });
      gsap.set(rightEls, { x: 30, autoAlpha: 0 });

      // Left column: slide in from left, staggered
      gsap.to(leftEls, {
        x: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      // Right column: slide in from right, staggered
      gsap.to(rightEls, {
        x: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.08,
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
    <section ref={sectionRef} id="solution" className="py-24 lg:py-32">
      {/* Charcoal callout bar */}
      <div className="bg-[#2c2926] text-[#e8e4dc] py-12 mb-16 lg:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-xl md:text-2xl lg:text-3xl tracking-tight italic">
            Turn risk into foresight. Turn foresight into action.
          </p>
        </div>
      </div>

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            THE SOLUTION
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
            Your Fragmented Reality
          </h2>
        </div>

        {/* Two-column comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Traditional (left) */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-destructive font-semibold">
                TRADITIONAL
              </h3>
            </div>
            <ul>
              {traditionalItems.map((item, i) => (
                <li
                  key={item}
                  ref={(el) => {
                    leftItemsRef.current[i] = el;
                  }}
                  className="flex items-center gap-3 py-4 border-b border-[rgba(26,23,20,0.15)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-destructive/60 shrink-0" />
                  <span className="font-mono text-sm text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* AMG Integrated (right) */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
                AMG INTEGRATED
              </h3>
            </div>
            <ul>
              {amgItems.map((item, i) => (
                <li
                  key={item}
                  ref={(el) => {
                    rightItemsRef.current[i] = el;
                  }}
                  className="flex items-center gap-3 py-4 border-b border-[rgba(26,23,20,0.15)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="font-mono text-sm text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
