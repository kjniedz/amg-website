import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Hero } from "@/components/sections/home/hero";

const Problem = dynamic(
  () => import("@/components/sections/home/problem").then((m) => m.Problem),
  { ssr: true },
);
const BlindSpots = dynamic(
  () =>
    import("@/components/sections/home/blind-spots").then((m) => m.BlindSpots),
  { ssr: true },
);
const Solution = dynamic(
  () =>
    import("@/components/sections/home/solution").then((m) => m.Solution),
  { ssr: true },
);
const HowItWorks = dynamic(
  () =>
    import("@/components/sections/home/how-it-works").then(
      (m) => m.HowItWorks,
    ),
  { ssr: true },
);
const Domains = dynamic(
  () => import("@/components/sections/home/domains").then((m) => m.Domains),
  { ssr: true },
);
const Metrics = dynamic(
  () => import("@/components/sections/home/metrics").then((m) => m.Metrics),
  { ssr: true },
);
const CaseStudy = dynamic(
  () =>
    import("@/components/sections/home/case-study").then((m) => m.CaseStudy),
  { ssr: true },
);
const Partners = dynamic(
  () =>
    import("@/components/sections/home/partners").then((m) => m.Partners),
  { ssr: true },
);
const CTA = dynamic(
  () => import("@/components/sections/home/cta").then((m) => m.CTA),
  { ssr: true },
);

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <BlindSpots />
        <Solution />
        <HowItWorks />
        <Domains />
        <Metrics />
        <CaseStudy />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
