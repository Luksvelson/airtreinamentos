import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/common/ContactForm";
import { ContactInfo } from "@/components/common/ContactInfo";
import compressorBg from "@assets/stock_images/industrial_air_compr_021c8def.jpg";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="py-16 md:py-24 relative"
      style={{
        backgroundImage: `url(${compressorBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#041F3F]/85" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
            Fale Conosco
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="contact-section-title">
            Entre em Contato
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
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
