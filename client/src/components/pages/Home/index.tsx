import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/common/Hero";
import { TrainingOverview } from "@/components/common/TrainingOverview";
import { Features } from "@/components/common/Features";
import { GroupCompanies } from "@/components/common/GroupCompanies";
import { ContactSection } from "@/components/common/ContactSection";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <Hero />
        <GroupCompanies />
        <Features />
        <TrainingOverview />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
