"use client";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Brain,
  ShieldCheck,
  Target,
  HeartPulse,
  Globe,
  CheckCircle,
} from "lucide-react";

const domains = [
  {
    value: "neurobiology",
    icon: Brain,
    label: "Neurobiology",
    title: "NEUROBIOLOGY & PERFORMANCE",
    description:
      "Optimizing cognitive performance, stress resilience, and decision-making under pressure for principals and key family members.",
    capabilities: [
      "Peak performance protocols",
      "Stress inoculation training",
      "Cognitive optimization",
      "Executive function enhancement",
    ],
  },
  {
    value: "cyber-security",
    icon: ShieldCheck,
    label: "Cyber & Security",
    title: "CYBER & PROTECTIVE SECURITY",
    description:
      "Comprehensive digital and physical security architecture protecting family members, assets, and reputation across all environments.",
    capabilities: [
      "Threat assessment & monitoring",
      "Digital forensics & incident response",
      "Executive protection",
      "Secure communications",
    ],
  },
  {
    value: "leadership",
    icon: Target,
    label: "Leadership",
    title: "LEADERSHIP DEVELOPMENT",
    description:
      "Building next-generation leadership capacity and succession readiness across family enterprise and governance structures.",
    capabilities: [
      "Succession planning",
      "Next-gen development programs",
      "Governance frameworks",
      "Family council facilitation",
    ],
  },
  {
    value: "medicine",
    icon: HeartPulse,
    label: "Medicine",
    title: "INTEGRATIVE MEDICINE",
    description:
      "Personalized health optimization combining conventional and integrative approaches for sustained peak performance and longevity.",
    capabilities: [
      "Metabolic optimization",
      "Longevity protocols",
      "Personalized health plans",
      "Performance medicine",
    ],
  },
  {
    value: "intelligence",
    icon: Globe,
    label: "Intelligence",
    title: "BUSINESS INTELLIGENCE & GEOPOLITICAL RISK",
    description:
      "Strategic intelligence gathering and analysis to identify threats, opportunities, and risks across global operations.",
    capabilities: [
      "Geopolitical risk assessment",
      "Due diligence investigations",
      "Competitive intelligence",
      "Crisis forecasting",
    ],
  },
];

export function Domains() {
  return (
    <section id="domains" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            OUR DOMAINS
          </p>
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">
            FIVE DOMAINS. ONE ECOSYSTEM.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Each domain is led by world-class practitioners. Together, they form
            an integrated defense and performance system.
          </p>
        </AnimateOnScroll>

        <Tabs defaultValue="neurobiology" className="mt-12">
          <TabsList className="flex overflow-x-auto gap-1 sm:gap-2 bg-transparent h-auto p-0 w-full no-scrollbar">
            {domains.map((domain) => {
              const Icon = domain.icon;
              return (
                <TabsTrigger
                  key={domain.value}
                  value={domain.value}
                  className="font-mono text-xs uppercase tracking-wider whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-2 rounded-md data-[state=active]:bg-primary/10 data-[state=active]:text-primary flex-shrink-0"
                >
                  <Icon className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>{domain.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <TabsContent key={domain.value} value={domain.value}>
                <Card className="bg-card border-border p-8">
                  <CardContent>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-mono text-xl font-semibold uppercase tracking-tight mb-4">
                      {domain.title}
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6">
                      {domain.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {domain.capabilities.map((capability) => (
                        <div
                          key={capability}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
