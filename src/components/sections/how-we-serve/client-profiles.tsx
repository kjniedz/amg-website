"use client";

import { useRef } from "react";
import { gsap, useGSAP, initGSAP } from "@/lib/gsap";

const profiles = [
  {
    number: "01",
    title: "Family Offices",
    stat: "$250M+ AUM \u2022 2+ generations",
    description:
      "Multi-generational family offices facing complex cross-border, cybersecurity, and governance challenges.",
  },
  {
    number: "02",
    title: "Global Executives",
    stat: "C-Suite \u2022 100+ travel days/year",
    description:
      "High-profile executives requiring integrated security, performance optimization, and strategic intelligence.",
  },
  {
    number: "03",
    title: "UHNW Individuals",
    stat: "$100M+ net worth",
    description:
      "Ultra-high-net-worth individuals with significant philanthropic visibility and complex asset structures.",
  },
];

export function ClientProfiles() {
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
          stagger: 0.15,
          ease: "power2.out",
        }
      );
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section ref={sectionRef} className="pt-32 pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
          Who We Serve
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-16">
          Client Profiles
        </h1>

        <div>
          {profiles.map((profile, i) => (
            <div key={profile.number}>
              <div
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className={`py-12 lg:py-16 flex flex-col gap-4 ${
                  i % 2 === 0 ? "items-start text-left" : "items-end text-right"
                }`}
              >
                <span className="font-serif italic text-sm text-primary leading-none">
                  {profile.number}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight max-w-lg">
                  {profile.title}
                </h2>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">
                  {profile.stat}
                </p>
                <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                  {profile.description}
                </p>
              </div>
              {i < profiles.length - 1 && (
                <div className="border-t border-rule" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
