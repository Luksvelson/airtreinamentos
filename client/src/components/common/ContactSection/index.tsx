import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/common/ContactForm";
import { ContactInfo } from "@/components/common/ContactInfo";

export function ContactSection() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Fale Conosco
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#041F3F] mb-4" data-testid="contact-section-title">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Solicite uma proposta personalizada para sua empresa ou tire suas dúvidas sobre nossos treinamentos.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
