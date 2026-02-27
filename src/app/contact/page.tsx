import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactFAQ } from "@/components/sections/contact/contact-faq";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Anchor Mill Group. Begin your confidential discovery session for integrated resilience, protection, and performance.",
};

export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="pt-20">
        <ContactForm />
        <ContactFAQ />
      </main>
      <Footer />
    </>
  );
}
