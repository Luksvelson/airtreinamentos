import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/common/ContactForm";
import { ContactInfo } from "@/components/common/ContactInfo";

export function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#041F3F] to-[#0a3566]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="contact-title">
              Entre em Contato
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Estamos prontos para ajudar sua empresa a alcançar a excelência em sistemas de ar comprimido.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
