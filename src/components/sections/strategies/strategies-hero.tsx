import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function StrategiesHero() {
  return (
    <section className="pt-32 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            OUR APPROACH
          </p>
          <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
            SOVEREIGN GLOBAL ECOSYSTEM
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl">
            Five specialized domains — unified under one strategic command layer
            — delivering comprehensive protection, optimized performance, and
            lasting resilience for UHNW families and global executives.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
