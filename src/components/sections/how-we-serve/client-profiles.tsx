import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Card, CardContent } from "@/components/ui/card";

const profiles = [
  {
    title: "FAMILY OFFICES",
    stat: "$250M+ AUM \u2022 2+ generations",
    description:
      "Multi-generational family offices facing complex cross-border, cybersecurity, and governance challenges.",
  },
  {
    title: "GLOBAL EXECUTIVES",
    stat: "C-Suite \u2022 100+ travel days/year",
    description:
      "High-profile executives requiring integrated security, performance optimization, and strategic intelligence.",
  },
  {
    title: "UHNW INDIVIDUALS",
    stat: "$100M+ net worth",
    description:
      "Ultra-high-net-worth individuals with significant philanthropic visibility and complex asset structures.",
  },
];

export function ClientProfiles() {
  return (
    <section className="pt-32 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            WHO WE SERVE
          </p>
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12">
            CLIENT PROFILES
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <AnimateOnScroll key={profile.title} delay={index * 0.1}>
              <Card className="bg-card border-border h-full">
                <CardContent className="pt-2">
                  <h3 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground mb-2">
                    {profile.title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
                    {profile.stat}
                  </p>
                  <p className="text-muted-foreground">
                    {profile.description}
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
