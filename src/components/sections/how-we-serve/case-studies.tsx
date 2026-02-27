import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Card, CardContent } from "@/components/ui/card";

const caseStudies = [
  {
    title: "STABILIZING A FAMILY OFFICE",
    client: "$680M AUM family office",
    metrics: [
      "Security score improved from 34 to 87",
      "Incident response: 72 hours \u2192 4 hours",
      "Governance disputes reduced by 73%",
    ],
    narrative:
      "A multi-generational family office was hemorrhaging value through uncoordinated advisors and escalating internal conflicts. AMG deployed an integrated discovery across all five domains, revealing critical interdependencies between their cybersecurity gaps, governance dysfunction, and leadership succession failures. Within 12 months, the family had a unified protection architecture and a clear path forward.",
  },
  {
    title: "CRISIS CONTAINMENT",
    client: "$200M Series C founder",
    metrics: [
      "Coordinated threat neutralized in 72 hours",
      "$60M+ acquisition completed on schedule",
      "Zero public exposure of incident",
    ],
    narrative:
      "A high-profile founder faced a coordinated threat combining cyber intrusion, physical surveillance, and reputational attack — timed to derail a critical acquisition. AMG activated cross-domain response protocols, coordinating cyber forensics, executive protection, legal strategy, and media containment simultaneously. The threat was neutralized, the acquisition closed on schedule, and the incident never became public.",
  },
  {
    title: "FULL SPECTRUM PROTECTION",
    client: "Fortune 100 C-suite executive",
    metrics: [
      "Zero cyber or physical incidents",
      "210+ travel days covered",
      "Cognitive performance improved 40%",
    ],
    narrative:
      "A Fortune 100 executive with extreme travel demands and elevated threat profile needed comprehensive protection that didn\u2019t compromise performance. AMG integrated executive protection, cybersecurity, neurobiology protocols, and real-time intelligence into a seamless support system. The result: zero incidents across 210+ travel days and measurable improvement in cognitive performance and decision-making quality.",
  },
];

export function CaseStudies() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            PROVEN RESULTS
          </p>
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12">
            CASE STUDIES
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <AnimateOnScroll key={study.title} delay={index * 0.1}>
              <Card className="bg-card border-border overflow-hidden h-full">
                <div className="h-1 bg-primary w-full" />
                <CardContent className="pt-6">
                  <h3 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground mb-2">
                    {study.title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">
                    {study.client}
                  </p>
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {study.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="bg-primary/5 border border-primary/10 rounded-lg px-4 py-3"
                      >
                        <p className="font-mono text-sm font-medium text-foreground">
                          {metric}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {study.narrative}
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
