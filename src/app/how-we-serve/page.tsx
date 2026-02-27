import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ClientProfiles } from "@/components/sections/how-we-serve/client-profiles";
import { JourneyDetail } from "@/components/sections/how-we-serve/journey-detail";
import { CaseStudies } from "@/components/sections/how-we-serve/case-studies";

export const metadata: Metadata = {
  title: "How We Serve",
  description:
    "Discover how AMG serves UHNW families, family offices, and global executives with integrated resilience, protection, and performance solutions.",
};

export default function HowWeServePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <ClientProfiles />
        <JourneyDetail />
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
}
