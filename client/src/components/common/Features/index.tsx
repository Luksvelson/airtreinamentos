import { Card } from "@/components/ui/card";
import { Lightbulb, Wrench, Award, TrendingUp, Shield, BookOpen } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Expertise Técnica",
    description: "Instrutores com mais de 20 anos de experiência prática em sistemas industriais de ar comprimido.",
  },
  {
    icon: Wrench,
    title: "Prática Intensiva",
    description: "Exercícios hands-on com equipamentos reais e estudos de caso baseados em situações reais da indústria.",
  },
  {
    icon: Award,
    title: "Certificação",
    description: "Certificado reconhecido pelo mercado que comprova sua qualificação técnica profissional.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Mensuráveis",
    description: "Metodologia focada em ROI, com métricas claras de economia e eficiência energética.",
  },
  {
    icon: Shield,
    title: "Segurança Industrial",
    description: "Boas práticas de segurança e conformidade com normas regulamentadoras do setor.",
  },
  {
    icon: BookOpen,
    title: "Material Exclusivo",
    description: "Apostila técnica completa e acesso a conteúdos complementares pós-treinamento.",
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#041F3F] mb-4" data-testid="features-title">
            Por que escolher a AirTreinamentos?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combinamos conhecimento técnico profundo com metodologia prática para entregar resultados reais ao seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 border border-card-border bg-white hover-elevate transition-all duration-200"
              data-testid={`feature-card-${index}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-[#041F3F] mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
