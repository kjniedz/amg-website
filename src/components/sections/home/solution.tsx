import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function Solution() {
  return (
    <section id="solution" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            THE AMG APPROACH
          </p>
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
            ONE OPERATING SYSTEM. FIVE DOMAINS.
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            AMG replaces fragmented advisory with a single, integrated command
            structure. Five specialized domains — unified under one strategic
            layer — so nothing falls between the cracks.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don&apos;t just advise. We architect, coordinate, and deliver —
            functioning as your family&apos;s dedicated resilience partner.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
