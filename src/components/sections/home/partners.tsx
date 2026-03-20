"use client";

import { useRef } from "react";
import { gsap, useGSAP, initGSAP } from "@/lib/gsap";

const partners = [
  {
    title: "Intelligence & Assessment",
    credential: "Former Senior Intelligence Officer",
  },
  {
    title: "Neurobiology & Performance",
    credential: "Yale School of Medicine \u2022 Former CIA",
  },
  {
    title: "Integrative Medicine",
    credential: "Clinical Pharmacist \u2022 Metabolic Medicine",
  },
  {
    title: "Leadership Development",
    credential: "Fortune 100 Executive Coach",
  },
  {
    title: "Cyber & Digital Security",
    credential: "NSA/Government-Level Threat Operations",
  },
  {
    title: "Protective Operations",
    credential: "USMC Veteran \u2022 Executive Protection",
  },
];

export function Partners() {
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
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.07,
          ease: "power2.out",
        }
      );
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section ref={sectionRef} id="partners" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
          Our Network
        </p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-16">
          The Partner Ecosystem
        </h2>

        {/* Editorial masthead list */}
        <div className="divide-y divide-rule">
          {partners.map((partner, i) => (
            <div
              key={partner.title}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="flex items-baseline justify-between gap-8 py-6 group"
            >
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-foreground leading-tight">
                {partner.title}
              </h3>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground shrink-0 hidden sm:block">
                {partner.credential}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
