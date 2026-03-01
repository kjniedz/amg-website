"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, initGSAP } from "@/lib/gsap";

/* ------------------------------------------------------------------ */
/*  Metric data                                                        */
/* ------------------------------------------------------------------ */

const metrics = [
  { value: 87, suffix: "%", prefix: "", label: "Avg Vulnerability Reduction" },
  { value: 3.2, suffix: "M", prefix: "$", label: "Avg Loss Avoidance" },
  { value: 94, suffix: "%", prefix: "", label: "Response Time Improvement" },
  { value: 31, suffix: "%", prefix: "", label: "Security Spend Reduction" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function Metrics() {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;

      initGSAP();

      // Respect prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const section = sectionRef.current;
      if (!section) return;

      const numberEls = numberRefs.current.filter(
        Boolean,
      ) as HTMLSpanElement[];
      if (numberEls.length === 0) return;

      if (prefersReducedMotion) {
        // Show final values immediately
        metrics.forEach((metric, i) => {
          const el = numberEls[i];
          if (!el) return;
          const formatted = Number.isInteger(metric.value)
            ? metric.value.toString()
            : metric.value.toFixed(1);
          el.textContent = `${metric.prefix}${formatted}${metric.suffix}`;
        });
        return;
      }

      // Counter animation via proxy objects
      metrics.forEach((metric, i) => {
        const el = numberEls[i];
        if (!el) return;

        const proxy = { val: 0 };

        gsap.to(proxy, {
          val: metric.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate() {
            const formatted = Number.isInteger(metric.value)
              ? Math.round(proxy.val).toString()
              : proxy.val.toFixed(1);
            el.textContent = `${metric.prefix}${formatted}${metric.suffix}`;
          },
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => {
          if (section.contains(st.trigger as Element)) st.kill();
        });
      };
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section ref={sectionRef} id="metrics" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
          By the Numbers
        </p>

        {/* Title */}
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-16">
          Measured Impact
        </h2>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`text-center py-8 lg:py-0 ${
                i < metrics.length - 1
                  ? "lg:border-r lg:border-border"
                  : ""
              } ${i < 2 ? "border-b lg:border-b-0 border-border" : ""}`}
            >
              <span
                ref={(el) => {
                  numberRefs.current[i] = el;
                }}
                className="block font-serif text-5xl md:text-6xl tabular-nums text-foreground"
              >
                {metric.prefix}0{metric.suffix}
              </span>
              <span className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mt-3">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
