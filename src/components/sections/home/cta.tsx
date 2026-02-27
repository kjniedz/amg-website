import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
            BEGIN YOUR CONFIDENTIAL DISCOVERY
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Every engagement begins with a private, no-obligation discovery
            session. Share your concerns in confidence — we&apos;ll show you
            what integrated protection looks like.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
