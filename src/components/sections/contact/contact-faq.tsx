"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const faqs = [
  {
    question: "Who is AMG designed for?",
    answer:
      "AMG serves UHNW families ($100M+ net worth), family offices ($250M+ AUM), and global executives who face complex, multi-domain threats and need integrated protection.",
  },
  {
    question: "How does the discovery process work?",
    answer:
      "We begin with a confidential conversation to understand your situation. From there, we conduct a comprehensive cross-domain assessment and deliver a unified strategic blueprint.",
  },
  {
    question: "What makes AMG different from traditional security firms?",
    answer:
      "Traditional firms address one domain in isolation. AMG integrates five domains \u2014 neurobiology, cybersecurity, leadership, medicine, and intelligence \u2014 under one strategic layer.",
  },
  {
    question: "How long does an engagement typically take?",
    answer:
      "Initial discovery and blueprint development takes 4-6 weeks. Ongoing support is continuous and adapts to your evolving needs.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Absolute discretion is foundational to everything we do. All communications and client information are protected under strict confidentiality protocols.",
  },
  {
    question: "Can we start with just one domain?",
    answer:
      "Yes. While our integrated approach is most powerful, clients can begin with two or more domains and expand as needs evolve.",
  },
];

export function ContactFAQ() {
  return (
    <section className="py-24 lg:py-32 bg-card/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12">
            COMMON QUESTIONS
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-base font-medium text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
