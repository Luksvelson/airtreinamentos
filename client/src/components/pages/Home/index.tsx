import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/common/Hero";
import { TrainingOverview } from "@/components/common/TrainingOverview";
import { Features } from "@/components/common/Features";
import { TargetAudience } from "@/components/common/TargetAudience";
import { Instructors } from "@/components/common/Instructors";
import { CTASection } from "@/components/common/CTASection";
import { GroupCompanies } from "@/components/common/GroupCompanies";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <Hero />
        <GroupCompanies />
        <TrainingOverview />
        <Features />
        <TargetAudience />
        <Instructors />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
