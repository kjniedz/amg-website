"use client";

import { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Preloader } from "@/components/layout/preloader";
import { CustomCursor } from "@/components/effects/custom-cursor";
import { SectionSkeleton } from "@/components/ui/section-skeleton";
import { ScrollTrigger, initGSAP } from "@/lib/gsap";

const loading = () => <SectionSkeleton />;

const Hero = dynamic(
  () => import("./hero").then((m) => m.Hero),
  { ssr: false, loading }
);
const Problem = dynamic(
  () => import("./problem").then((m) => m.Problem),
  { ssr: false, loading }
);
const BlindSpots = dynamic(
  () => import("./blind-spots").then((m) => m.BlindSpots),
  { ssr: false, loading }
);
const Solution = dynamic(
  () => import("./solution").then((m) => m.Solution),
  { ssr: false, loading }
);
const Domains = dynamic(
  () => import("./domains").then((m) => m.Domains),
  { ssr: false, loading }
);
const HowItWorks = dynamic(
  () => import("./how-it-works").then((m) => m.HowItWorks),
  { ssr: false, loading }
);
const Metrics = dynamic(
  () => import("./metrics").then((m) => m.Metrics),
  { ssr: false, loading }
);
const CaseStudy = dynamic(
  () => import("./case-study").then((m) => m.CaseStudy),
  { ssr: false, loading }
);
const Partners = dynamic(
  () => import("./partners").then((m) => m.Partners),
  { ssr: false, loading }
);
const EngagementModel = dynamic(
  () => import("./engagement-model").then((m) => m.EngagementModel),
  { ssr: false, loading }
);
const CTA = dynamic(
  () => import("./cta").then((m) => m.CTA),
  { ssr: false, loading }
);

export function HomeClient() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
  }, []);

  // After all dynamic sections have mounted, refresh ScrollTrigger
  // so it recalculates all positions correctly
  useEffect(() => {
    console.log("[AMG:home] useEffect fired, preloaderDone:", preloaderDone);
    if (!preloaderDone) return;

    initGSAP();

    const logTriggers = (label: string) => {
      const all = ScrollTrigger.getAll();
      console.log(`[AMG:home] ${label} — ${all.length} ScrollTrigger instances:`);
      all.forEach((st, i) => {
        const trigger = st.trigger;
        const triggerId = trigger instanceof HTMLElement ? (trigger.id || trigger.className.slice(0, 40)) : String(trigger);
        console.log(`  [${i}] trigger: #${triggerId}, pin: ${!!st.pin}, start: ${st.start}, end: ${st.end}, isActive: ${st.isActive}`);
      });
    };

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Pass 1: after fonts + 2 frames for layout stability
    document.fonts.ready.then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          console.log("[AMG:home] Pass 1 (fonts+2rAF) — refreshing");
          logTriggers("Before refresh pass 1");
          ScrollTrigger.refresh();
          logTriggers("After refresh pass 1");
        });
      });
    });

    // Pass 2: catch late dynamic imports
    timers.push(setTimeout(() => {
      console.log("[AMG:home] Pass 2 (800ms) — refreshing");
      logTriggers("Before refresh pass 2");
      ScrollTrigger.refresh();
      logTriggers("After refresh pass 2");
    }, 800));

    // Pass 3: final safety net
    timers.push(setTimeout(() => {
      console.log("[AMG:home] Pass 3 (1500ms) — refreshing");
      logTriggers("Before refresh pass 3");
      ScrollTrigger.refresh();
      logTriggers("After refresh pass 3");

      // Final DOM state check
      const html = document.documentElement;
      console.log("[AMG:home] Final DOM state:", {
        htmlClasses: html.className,
        bodyHeight: document.body.scrollHeight,
        windowHeight: window.innerHeight,
        scrollY: window.scrollY,
        lenisOnHtml: html.classList.contains("lenis"),
        lenisSmoothOnHtml: html.classList.contains("lenis-smooth"),
      });
    }, 1500));

    return () => timers.forEach(clearTimeout);
  }, [preloaderDone]);

  return (
    <>
      {!preloaderDone && <Preloader onComplete={handlePreloaderComplete} />}
      <CustomCursor />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <BlindSpots />
        <Solution />
        <Domains />
        <HowItWorks />
        <Metrics />
        <CaseStudy />
        <Partners />
        <EngagementModel />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
