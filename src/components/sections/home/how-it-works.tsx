import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Search, Map, Users, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "INTEGRATED DISCOVERY",
    description:
      "A comprehensive cross-domain assessment that maps vulnerabilities across all five domains simultaneously — revealing the blind spots that siloed advisors miss.",
  },
  {
    number: "02",
    icon: Map,
    title: "CUSTOM BLUEPRINT",
    description:
      "A unified strategic plan that coordinates legal, financial, security, health, and intelligence resources into a single coherent action plan.",
  },
  {
    number: "03",
    icon: Users,
    title: "COORDINATED DELIVERY",
    description:
      "Single point of accountability across all domains. Your AMG partner orchestrates every specialist, every timeline, every deliverable.",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "ONGOING SUPPORT",
    description:
      "Continuous monitoring, quarterly reviews, and adaptive refinement as threats evolve and family circumstances change.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            THE PROCESS
          </p>
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">
            HOW AMG WORKS
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A disciplined four-phase methodology that transforms fragmented
            protection into integrated resilience.
          </p>
        </AnimateOnScroll>

        <div className="mt-16 relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-border" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <AnimateOnScroll key={step.number} delay={index * 0.1}>
                <div className="flex items-start gap-6 mb-12">
                  <div className="md:flex hidden w-16 h-16 rounded-full bg-primary/10 border border-primary/30 items-center justify-center flex-shrink-0">
                    <span className="font-mono text-primary font-bold">
                      {step.number}
                    </span>
                  </div>
                  <div className="md:hidden flex w-12 h-12 rounded-full bg-primary/10 border border-primary/30 items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-semibold uppercase tracking-tight mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
