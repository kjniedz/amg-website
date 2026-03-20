"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP, initGSAP } from "@/lib/gsap";

export function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;

      initGSAP();

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reducedMotion) return;

      // Subtle parallax on the background image
      if (bgRef.current) {
        gsap.fromTo(
          bgRef.current,
          { y: 0 },
          { y: -40, duration: 2.2, ease: "power2.out" }
        );
      }

      const items = itemRefs.current.filter(Boolean) as HTMLElement[];
      if (items.length === 0) return;

      gsap.fromTo(
        items,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.13,
          ease: "power2.out",
          delay: 0.2,
        }
      );
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-32 pb-0 bg-background"
    >
      {/* Text content */}
      <div className="relative z-10 py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          ref={(el) => {
            itemRefs.current[0] = el;
          }}
          className="font-mono text-xs uppercase tracking-widest text-primary mb-4"
        >
          About AMG
        </p>

        <h1
          ref={(el) => {
            itemRefs.current[1] = el;
          }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-foreground mb-8 max-w-4xl"
        >
          The Strategic Partner Your Family Office Deserves
        </h1>

        <p
          ref={(el) => {
            itemRefs.current[2] = el;
          }}
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mb-6"
        >
          Anchor Mill Group was founded on a simple observation: the families
          and executives who need the most protection are often the most
          underserved — not for lack of advisors, but for lack of integration.
        </p>

        <p
          ref={(el) => {
            itemRefs.current[3] = el;
          }}
          className="text-lg text-muted-foreground max-w-3xl"
        >
          We bring together the world&apos;s leading practitioners across five
          critical domains and unify them under a single strategic layer. The
          result: comprehensive protection, optimized performance, and lasting
          resilience.
        </p>
      </div>

      {/* Full-bleed cinematic image */}
      <div
        ref={(el) => {
          itemRefs.current[4] = el as HTMLElement | null;
        }}
        className="relative w-full aspect-[21/9] overflow-hidden"
        aria-hidden="true"
      >
        <div ref={bgRef} className="absolute inset-0 -top-8 -bottom-8">
          <Image
            src="/images/aerial-forest-lake.jpg"
            alt="Aerial view of forest and lake — the landscape of strategic clarity"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        {/* Gradient overlay — fades from background at top to transparent at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/20 to-transparent pointer-events-none" />
      </div>

      {/* Bottom rule */}
      <div className="border-b border-rule" />
    </section>
  );
}
