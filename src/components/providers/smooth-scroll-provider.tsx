"use client";

import { useEffect, useRef, useCallback } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap, ScrollTrigger, initGSAP } from "@/lib/gsap";

function LenisGSAPBridge() {
  const lenis = useLenis();
  const tickerRef = useRef<((time: number) => void) | null>(null);

  useEffect(() => {
    if (!lenis) {
      console.log("[AMG:lenis-bridge] No lenis instance yet");
      return;
    }

    console.log("[AMG:lenis-bridge] Lenis instance received:", {
      isSmooth: lenis.isSmooth,
      isStopped: lenis.isStopped,
      className: lenis.className,
      options: { lerp: lenis.options?.lerp, duration: lenis.options?.duration, smoothWheel: lenis.options?.smoothWheel, autoRaf: lenis.options?.autoRaf },
    });

    initGSAP();

    // Tell ScrollTrigger to update on every Lenis scroll frame
    let scrollUpdateCount = 0;
    const onScroll = () => {
      ScrollTrigger.update();
      scrollUpdateCount++;
      if (scrollUpdateCount <= 3) {
        console.log(`[AMG:lenis-bridge] ScrollTrigger.update() called (${scrollUpdateCount}), scroll:`, Math.round(lenis.scroll), "progress:", lenis.progress?.toFixed(3));
      }
    };
    lenis.on("scroll", onScroll);

    // Drive Lenis from GSAP ticker (Lenis autoRaf is off)
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);
    tickerRef.current = tickerCallback;
    console.log("[AMG:lenis-bridge] GSAP ticker driving Lenis, lagSmoothing(0)");

    // Refresh after fonts and a short delay for dynamic components
    document.fonts.ready.then(() => {
      console.log("[AMG:lenis-bridge] Fonts ready, refreshing ScrollTrigger. Instances:", ScrollTrigger.getAll().length);
      ScrollTrigger.refresh();
    });

    return () => {
      console.log("[AMG:lenis-bridge] Cleaning up bridge");
      lenis.off("scroll", onScroll);
      if (tickerRef.current) {
        gsap.ticker.remove(tickerRef.current);
      }
    };
  }, [lenis]);

  return null;
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const getOptions = useCallback(() => {
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    return {
      lerp: reducedMotion ? 1 : 0.1,
      duration: reducedMotion ? 0 : 1.2,
      smoothWheel: !reducedMotion,
      autoRaf: false, // GSAP ticker drives Lenis — no double RAF
    };
  }, []);

  return (
    <ReactLenis root options={getOptions()}>
      <LenisGSAPBridge />
      {children}
    </ReactLenis>
  );
}
