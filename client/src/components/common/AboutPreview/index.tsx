import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Building2, Users, Award } from "lucide-react";
import { Link } from "wouter";

const highlights = [
  { icon: Building2, value: "+20 anos", label: "de experiência no mercado" },
  { icon: Users, value: "+500", label: "profissionais capacitados" },
  { icon: Award, value: "Referência", label: "em treinamentos técnicos" },
];

export function AboutPreview() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#041F3F]" data-testid="about-preview-title">
              Parte do <span className="text-primary">Grupo AirPress</span>
            </h2>
            <div className="mb-3 space-y-4 text-muted-foreground">
              <p>
                A <strong className="text-[#041F3F]">AirTreinamentos</strong> é a vertical educacional do Grupo AirPress, dedicada à capacitação técnica em sistemas de ar comprimido. Nossos treinamentos são voltados para profissionais e empresas que buscam maior eficiência, confiabilidade operacional e gestão inteligente da vida útil de compressores.
              </p>
              <p>
                Com base na experiência prática do grupo no mercado industrial e na área da saúde, oferecemos formação aplicada, atualizada e orientada para resultados reais.
              </p>
            </div>
            <Link href="/sobre">
              <Button
                className="bg-primary text-primary-foreground font-semibold"
                data-testid="button-saiba-mais-sobre"
              >
                Saiba Mais Sobre Nós
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 bg-muted/50 rounded-lg"
                data-testid={`about-highlight-${index}`}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#041F3F]">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
