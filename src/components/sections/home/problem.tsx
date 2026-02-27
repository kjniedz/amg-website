import { Globe, Eye, Database, Radio } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Card, CardContent } from "@/components/ui/card";

const cards = [
  {
    icon: Globe,
    title: "Cross-Border Vulnerabilities",
    description:
      "Global operations spanning multiple jurisdictions create overlapping exposures that no single advisor can see.",
  },
  {
    icon: Eye,
    title: "Coordinated Threats",
    description:
      "Public visibility and digital footprints attract sophisticated, multi-vector attacks targeting family and enterprise.",
  },
  {
    icon: Database,
    title: "Fragmented Intelligence",
    description:
      "Critical data siloed across legal, financial, and security teams leaves dangerous gaps in your defense posture.",
  },
  {
    icon: Radio,
    title: "Outpaced Response",
    description:
      "Threat velocity now exceeds the speed at which traditional advisory teams communicate and coordinate.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            The Challenge
          </p>
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">
            Navigating Complex Realities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            The threats facing ultra-high-net-worth families are no longer
            isolated. They are converging, accelerating, and increasingly
            sophisticated.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {cards.map((card, i) => (
            <AnimateOnScroll key={card.title} delay={i * 0.1}>
              <Card className="bg-card border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <card.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-mono text-lg font-semibold uppercase tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
