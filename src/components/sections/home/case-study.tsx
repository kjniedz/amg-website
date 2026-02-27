import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function CaseStudy() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <Card className="bg-card border-primary/20 max-w-4xl mx-auto overflow-hidden">
            <div className="h-1 bg-primary w-full" />
            <CardContent className="p-8 sm:p-12">
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
                CASE STUDY
              </p>
              <h2 className="font-mono text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-6">
                THE COMPOUNDING COST OF FRAGMENTATION
              </h2>
              <p className="text-xl text-foreground font-medium mb-4">
                $380M family office. Three generations. In 45 days, their world
                unraveled.
              </p>
              <p className="text-muted-foreground mb-6">
                The wealth manager didn&apos;t talk to the security team. The
                attorneys didn&apos;t know about the cyber exposure. The family
                office had no crisis protocol. No one coordinated. Everyone
                reacted.
              </p>
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
                <p className="font-mono text-destructive font-bold">
                  Cost: $4.2M + 18 months of family stability
                </p>
              </div>
              <Link
                href="/how-we-serve"
                className="font-mono text-sm uppercase tracking-widest text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
              >
                See How We Prevent This
                <ArrowRight className="size-4" />
              </Link>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
