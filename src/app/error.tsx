"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
          Error
        </p>
        <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight font-bold mb-6">
          Something Went Wrong
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          An unexpected error has occurred. Please try again or return to the
          home page.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button onClick={() => reset()}>Try Again</Button>
          <Button variant="outline" asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
