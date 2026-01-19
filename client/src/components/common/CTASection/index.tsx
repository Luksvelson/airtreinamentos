import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight, Clock } from "lucide-react";
import { Link } from "wouter";

export function CTASection() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#041F3F]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white" data-testid="cta-title">
              Pronto para Transformar sua Operação?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Entre em contato com nossa equipe e solicite uma proposta personalizada para sua empresa.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <a
              href="tel:+5511999999999"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg transition-colors hover-elevate"
              data-testid="cta-phone"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-white font-medium">(11) 99999-9999</span>
            </a>
            <a
              href="mailto:contato@airtreinamentos.com.br"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg transition-colors hover-elevate"
              data-testid="cta-email"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-white font-medium">contato@airtreinamentos.com.br</span>
            </a>
          </div>

          <div>
            <Link href="/contato">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground font-semibold px-8 py-6 text-base"
                data-testid="button-cta-solicitar-proposta"
              >
                Solicitar Proposta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
            <Clock className="w-4 h-4" />
            <span>Respondemos em até 24 horas úteis</span>
          </div>
        </div>
      </div>
    </section>
  );
}
