import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Separator } from "@/components/ui/separator";

export function AboutHero() {
  return (
    <section className="py-24 lg:py-32 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            ABOUT AMG
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-foreground mb-8">
            THE STRATEGIC PARTNER YOUR FAMILY OFFICE DESERVES
          </h1>
        </AnimateOnScroll>

        <Separator className="mb-8" />

        <AnimateOnScroll delay={0.2}>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mb-6">
            Anchor Mill Group was founded on a simple observation: the families
            and executives who need the most protection are often the most
            underserved — not for lack of advisors, but for lack of integration.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <p className="text-lg text-muted-foreground max-w-3xl">
            We bring together the world&apos;s leading practitioners across five
            critical domains and unify them under a single strategic layer. The
            result: comprehensive protection, optimized performance, and lasting
            resilience.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
