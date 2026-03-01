"use client";

import { useState } from "react";
import Link from "next/link";
import { OverlayNav } from "./overlay-nav";

export function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Wordmark */}
            <Link
              href="/"
              className="font-serif italic text-base text-foreground hover:text-primary transition-colors"
            >
              Anchor Mill Group
            </Link>

            {/* Menu trigger */}
            <button
              onClick={() => setNavOpen(true)}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors py-2"
              aria-label="Open navigation menu"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <OverlayNav open={navOpen} onClose={() => setNavOpen(false)} />
    </>
  );
}
