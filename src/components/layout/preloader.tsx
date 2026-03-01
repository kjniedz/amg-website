"use client";

import { useRef, useSyncExternalStore } from "react";
import { gsap, useGSAP, initGSAP } from "@/lib/gsap";

interface PreloaderProps {
  onComplete: () => void;
}

function subscribeToPreloader(cb: () => void) {
  // Once set, never changes during session
  return () => {
    void cb;
  };
}

function getPreloaderSnapshot() {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const visited = sessionStorage.getItem("amg-visited");
  return !reducedMotion && !visited;
}

function getPreloaderServerSnapshot() {
  return false;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  const shouldShow = useSyncExternalStore(
    subscribeToPreloader,
    getPreloaderSnapshot,
    getPreloaderServerSnapshot
  );

  useGSAP(
    () => {
      if (!shouldShow) {
        onComplete();
        return;
      }

      if (!containerRef.current || !counterRef.current) return;

      initGSAP();
      sessionStorage.setItem("amg-visited", "1");
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          onComplete();
        },
      });

      // Counter 000 → 100
      const counter = { value: 0 };
      tl.to(counter, {
        value: 100,
        duration: 1.8,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = String(
              Math.round(counter.value)
            ).padStart(3, "0");
          }
        },
      });

      // Wordmark fades in
      tl.fromTo(
        ".preloader-wordmark",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        0.2
      );

      // Rule draws across
      tl.fromTo(
        ".preloader-rule",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: "power2.inOut" },
        0.6
      );

      // Counter fades out
      tl.to(".preloader-counter", {
        opacity: 0,
        duration: 0.3,
      });

      // Split curtain reveal
      tl.to(".preloader-panel-top", {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut",
      });
      tl.to(
        ".preloader-panel-bottom",
        {
          yPercent: 100,
          duration: 0.8,
          ease: "power3.inOut",
        },
        "<"
      );
    },
    { scope: containerRef, dependencies: [shouldShow, onComplete] }
  );

  if (!shouldShow) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
    >
      {/* Top panel */}
      <div className="preloader-panel-top absolute inset-0 bottom-1/2 bg-background" />
      {/* Bottom panel */}
      <div className="preloader-panel-bottom absolute inset-0 top-1/2 bg-background" />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="preloader-wordmark font-serif text-3xl md:text-5xl tracking-tight text-foreground opacity-0">
          ANCHOR MILL GROUP
        </h1>
        <div className="preloader-rule mt-4 h-px w-48 bg-foreground/30 origin-left" />
      </div>

      {/* Counter */}
      <div className="preloader-counter absolute bottom-8 left-8">
        <span
          ref={counterRef}
          className="font-mono text-sm text-muted-foreground tabular-nums"
        >
          000
        </span>
      </div>
    </div>
  );
}
