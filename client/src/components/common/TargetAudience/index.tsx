import { Card } from "@/components/ui/card";
import { Building2, Cog, HardHat, ShoppingCart } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Gestores Industriais",
    description: "Diretores e gerentes responsáveis por operações, manutenção e facilities que buscam reduzir custos operacionais.",
  },
  {
    icon: Cog,
    title: "Engenheiros",
    description: "Profissionais de engenharia mecânica, elétrica e de produção envolvidos em projetos e especificações técnicas.",
  },
  {
    icon: HardHat,
    title: "Técnicos de Manutenção",
    description: "Líderes e técnicos de manutenção industrial que desejam aprimorar conhecimentos em ar comprimido.",
  },
  {
    icon: ShoppingCart,
    title: "Compradores Técnicos",
    description: "Profissionais de compras e suprimentos que precisam especificar e negociar equipamentos de ar comprimido.",
  },
];

export function TargetAudience() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#041F3F] mb-4" data-testid="audience-title">
            Quem Deve Participar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossos treinamentos são desenvolvidos para profissionais que tomam decisões estratégicas sobre sistemas de ar comprimido.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              className="p-6 text-center border border-card-border hover-elevate transition-all duration-200"
              data-testid={`audience-card-${index}`}
            >
              <div className="w-16 h-16 rounded-full bg-[#041F3F] flex items-center justify-center mx-auto mb-4">
                <audience.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-[#041F3F] mb-2">{audience.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{audience.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
