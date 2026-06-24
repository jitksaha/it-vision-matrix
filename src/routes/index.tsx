import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustedBy } from "@/components/site/TrustedBy";
import { OnePlatform } from "@/components/site/OnePlatform";
import { AISkills } from "@/components/site/AISkills";
import { CareerTimeline } from "@/components/site/CareerTimeline";
import { ExpertiseBento } from "@/components/site/ExpertiseBento";
import { ImpactDashboard } from "@/components/site/ImpactDashboard";
import { LeadershipQuote } from "@/components/site/LeadershipQuote";
import { ExperienceShowcase } from "@/components/site/ExperienceShowcase";
import { AIExpertise } from "@/components/site/AIExpertise";
import { StrategicFramework } from "@/components/site/StrategicFramework";
import { Industries } from "@/components/site/Industries";
import { Education } from "@/components/site/Education";
import { ThoughtLeadership } from "@/components/site/ThoughtLeadership";
import { ClientReviews } from "@/components/site/ClientReviews";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jit Kumar Saha — Business Consultant, Head of Product, AI Strategist" },
      {
        name: "description",
        content:
          "Building businesses through strategy, products & AI. Jit Kumar Saha is a Business Consultant, Head of Product and AI Strategist helping organizations scale through innovation and digital transformation.",
      },
      { property: "og:title", content: "Jit Kumar Saha — Business Leader, Product Executive, AI Strategist" },
      {
        property: "og:description",
        content:
          "Business consulting, product leadership and AI transformation for modern organizations.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustedBy />
      <OnePlatform />
      <CareerTimeline />
      <AISkills />
      <ExpertiseBento />
      <ImpactDashboard />
      <LeadershipQuote />
      <ExperienceShowcase />
      <AIExpertise />
      <StrategicFramework />
      <Industries />
      <Education />
      <ThoughtLeadership />
      <Contact />
    </main>
  );
}
