import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/common/Hero";
import { AboutPreview } from "@/components/common/AboutPreview";
import { TrainingSummary } from "@/components/common/TrainingSummary";
import { Infrastructure } from "@/components/common/Infrastructure";
import { Instructors } from "@/components/common/Instructors";
import { CTASection } from "@/components/common/CTASection";
import { ContactSection } from "@/components/common/ContactSection";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <Hero />
        <AboutPreview />
        <TrainingSummary />
        <Infrastructure />
        <Instructors />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
